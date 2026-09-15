import { readFileSync, writeFileSync, existsSync, renameSync } from "fs";
import { execFileSync } from "child_process";

const DRAFT_PATH = "configs/fragment-draft.json";
const TEMPLATE_PATH = "configs/doh-proxy-fragment.template.json";

const REQUIRED_DOH_ENTRY = {
  tag: "doh-proxy",
  address: "${workerUrl}",
  timeoutMs: 8000
};

const REQUIRED_REMARKS = "🛡️ DoH Proxy Pro + Fragment";
const DEFAULT_VERSION_MIN = "26.6.27";

const REQUIRED_SECTIONS = [
  "remarks",
  "version",
  "log",
  "policy",
  "dns",
  "inbounds",
  "outbounds",
  "routing",
  "stats"
];

const METADATA_KEY_DENYLIST = new Set([
  "credits",
  "credit",
  "__credits__",
  "author",
  "authors",
  "developer",
  "developers",
  "designer",
  "owner",
  "creator",
  "donate",
  "donation",
  "donations",
  "sponsor",
  "sponsors",
  "support",
  "contact",
  "social",
  "socials",
  "telegram",
  "discord",
  "twitter",
  "instagram",
  "website",
  "homepage",
  "channel",
  "bot",
  "referral",
  "ref",
  "signature",
  "by",
  "madeby",
  "made_by",
  "poweredby",
  "powered_by",
  "creditto",
  "credit_to"
]);

const SENSITIVE_VALUE_PATTERNS = [
  /t\.me\/[a-zA-Z0-9_]+/gi,
  /@[a-zA-Z0-9_]{5,32}\b/g,
  /\bdonate\b/gi,
  /\bdonation\b/gi,
  /designed\s+by/gi,
  /created\s+by/gi,
  /engineered\s+by/gi,
  /made\s+by/gi,
  /powered\s+by/gi,
  /\bcredits?\b/gi,
  /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g,
  /\b[13][a-km-zA-HJ-NP-Z1-9]{25,34}\b/g,
  /\bbc1[a-z0-9]{25,60}\b/gi,
  /\b0x[a-fA-F0-9]{40}\b/g,
  /\bT[1-9A-HJ-NP-Za-km-z]{33}\b/g,
  /©/g
];

function fail(message) {
  throw new Error(message);
}

function stripJsonComments(text) {
  let result = "";
  let inString = false;
  let inLineComment = false;
  let inBlockComment = false;
  let escapeNext = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    const next = text[i + 1];

    if (inLineComment) {
      if (ch === "\n") {
        inLineComment = false;
        result += ch;
      }
      continue;
    }

    if (inBlockComment) {
      if (ch === "*" && next === "/") {
        inBlockComment = false;
        i++;
      }
      continue;
    }

    if (inString) {
      result += ch;

      if (escapeNext) {
        escapeNext = false;
      } else if (ch === "\\") {
        escapeNext = true;
      } else if (ch === '"') {
        inString = false;
      }

      continue;
    }

    if (ch === '"') {
      inString = true;
      result += ch;
      continue;
    }

    if (ch === "/" && next === "/") {
      inLineComment = true;
      i++;
      continue;
    }

    if (ch === "/" && next === "*") {
      inBlockComment = true;
      i++;
      continue;
    }

    result += ch;
  }

  return result;
}

function stripTrailingCommas(text) {
  return text.replace(/,(\s*[}\]])/g, "$1");
}

function parseLenient(rawText, label) {
  const cleaned = stripTrailingCommas(
    stripJsonComments(rawText.replace(/^\uFEFF/, ""))
  ).trim();

  try {
    return JSON.parse(cleaned);
  } catch (err) {
    fail(`فایل ${label} JSON معتبر نیست: ${err.message}`);
  }
}

function containsSensitive(str) {
  if (typeof str !== "string") {
    return false;
  }

  for (const pattern of SENSITIVE_VALUE_PATTERNS) {
    pattern.lastIndex = 0;

    if (pattern.test(str)) {
      return true;
    }
  }

  return false;
}

function sanitize(node, path = "$", seen = new WeakSet()) {
  if (node && typeof node === "object") {
    if (seen.has(node)) {
      fail(`ساختار فایل ${path} شامل ارجاع دوری است.`);
    }

    seen.add(node);
  }

  if (Array.isArray(node)) {
    const items = [];

    for (let i = 0; i < node.length; i++) {
      const value = sanitize(node[i], `${path}[${i}]`, seen);

      if (value !== undefined) {
        items.push(value);
      }
    }

    seen.delete(node);

    if (
      items.every(
        (value) =>
          value === null ||
          typeof value === "string" ||
          typeof value === "number" ||
          typeof value === "boolean"
      )
    ) {
      return items.filter(
        (value) =>
          value !== null &&
          !(typeof value === "string" && containsSensitive(value))
      );
    }

    return items;
  }

  if (node && typeof node === "object") {
    const result = {};

    for (const key of Object.keys(node)) {
      const lowerKey = key.toLowerCase();

      if (METADATA_KEY_DENYLIST.has(lowerKey)) {
        continue;
      }

      if (containsSensitive(key)) {
        continue;
      }

      const value = sanitize(node[key], `${path}.${key}`, seen);

      if (value === undefined) {
        continue;
      }

      if (typeof value === "string" && containsSensitive(value)) {
        continue;
      }

      result[key] = value;
    }

    seen.delete(node);

    return result;
  }

  return node;
}

function isPlainObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function isValidSection(name, value) {
  if (value === undefined || value === null) {
    return false;
  }

  switch (name) {
    case "dns":
      return (
        isPlainObject(value) &&
        Array.isArray(value.servers) &&
        value.servers.length > 0
      );

    case "outbounds":
    case "inbounds":
      return Array.isArray(value) && value.length > 0;

    case "routing":
      return (
        isPlainObject(value) &&
        Array.isArray(value.rules) &&
        value.rules.length > 0
      );

    case "policy":
    case "log":
    case "version":
    case "stats":
      return isPlainObject(value);

    default:
      return true;
  }
}

function pickSection(name, candidate, base) {
  if (isValidSection(name, candidate[name])) {
    return candidate[name];
  }

  if (isValidSection(name, base[name])) {
    return base[name];
  }

  return candidate[name] !== undefined ? candidate[name] : base[name];
}

function enforceDohEntry(dns) {
  if (!isPlainObject(dns)) {
    dns = {};
  }

  const servers = Array.isArray(dns.servers) ? dns.servers : [];

  const filtered = servers.filter(
    (server) => !(isPlainObject(server) && server.tag === "doh-proxy")
  );

  dns.servers = [
    { ...REQUIRED_DOH_ENTRY },
    ...filtered
  ];

  return dns;
}

function parseVersion(value) {
  if (
    typeof value !== "string" ||
    !/^[0-9]+\.[0-9]+\.[0-9]+$/.test(value.trim())
  ) {
    return null;
  }

  return value.trim().split(".").map(Number);
}

function compareVersions(a, b) {
  const pa = parseVersion(a);
  const pb = parseVersion(b);

  if (!pa || !pb) {
    return null;
  }

  for (let i = 0; i < 3; i++) {
    if (pa[i] !== pb[i]) {
      return pa[i] - pb[i];
    }
  }

  return 0;
}

function selectVersion(candidate, base) {
  const candidateVersion = parseVersion(candidate);
  const baseVersion = parseVersion(base);

  if (candidateVersion && baseVersion) {
    return compareVersions(candidate, base) <= 0 ? candidate : base;
  }

  if (candidateVersion) {
    return candidate;

  }

  if (baseVersion) {
    return base;
  }

  return DEFAULT_VERSION_MIN;
}

function validateUniqueTags(items, label) {
  const tags = new Set();

  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    if (!isPlainObject(item)) {
      fail(`بخش ${label} شامل عضو نامعتبر در موقعیت ${i} است.`);
    }

    if (item.tag !== undefined) {
      if (typeof item.tag !== "string" || !item.tag.trim()) {
        fail(`عضو ${i} در بخش ${label} دارای tag نامعتبر است.`);
      }

      if (tags.has(item.tag)) {
        fail(`tag تکراری در بخش ${label}: ${item.tag}`);
      }

      tags.add(item.tag);
    }
  }

  return tags;
}

function validateConfig(config) {
  if (!isPlainObject(config)) {
    fail("کانفیگ نهایی باید یک شیء JSON باشد.");
  }

  for (const name of REQUIRED_SECTIONS) {
    if (!isValidSection(name, config[name])) {
      fail(`بخش الزامی ${name} در کانفیگ نهایی معتبر نیست.`);
    }
  }

  if (config.remarks !== REQUIRED_REMARKS) {
    fail("remarks کانفیگ نهایی معتبر نیست.");
  }

  if (!parseVersion(config.version.min)) {
    fail("version.min باید به شکل X.Y.Z باشد.");
  }

  if (
    !isPlainObject(config.dns) ||
    !Array.isArray(config.dns.servers) ||
    config.dns.servers.length === 0
  ) {
    fail("بخش dns.servers معتبر نیست.");
  }

  const dnsTags = validateUniqueTags(
    config.dns.servers,
    "dns.servers"
  );

  if (!dnsTags.has("doh-proxy")) {
    fail("سرور doh-proxy در dns.servers وجود ندارد.");
  }

  const inboundTags = validateUniqueTags(
    config.inbounds,
    "inbounds"
  );

  const outboundTags = validateUniqueTags(
    config.outbounds,
    "outbounds"
  );

  const allTags = new Set([
    ...inboundTags,
    ...outboundTags
  ]);

  for (let i = 0; i < config.routing.rules.length; i++) {
    const rule = config.routing.rules[i];

    if (!isPlainObject(rule)) {
      fail(`routing.rules[${i}] معتبر نیست.`);
    }

    if (rule.outboundTag !== undefined) {
      if (
        typeof rule.outboundTag !== "string" ||
        !allTags.has(rule.outboundTag)
      ) {
        fail(
          `routing.rules[${i}] به outboundTag نامعتبر اشاره می‌کند.`
        );
      }
    }
  }

  const doh = config.dns.servers.find(
    (server) => server.tag === "doh-proxy"
  );

  if (JSON.stringify(doh) !== JSON.stringify(REQUIRED_DOH_ENTRY)) {
    fail("تعریف doh-proxy با مقدار الزامی مطابقت ندارد.");
  }
}

function finalSafetyScan(text) {
  for (const pattern of SENSITIVE_VALUE_PATTERNS) {
    pattern.lastIndex = 0;

    const match = pattern.exec(text);

    if (match) {
      fail(
        `خروجی نهایی همچنان حاوی الگوی مشکوک است: ${match[0]}`
      );
    }
  }

  for (const key of METADATA_KEY_DENYLIST) {
    const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const pattern = new RegExp(
      `"${escapedKey}"\\s*:`,
      "i"
    );

    if (pattern.test(text)) {
      fail(
        `خروجی نهایی همچنان حاوی فیلد فراداده مشکوک ${key} است.`
      );
    }
  }
}

function git(args) {
  return execFileSync("git", args, {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"]
  }).trim();
}

function main() {
  if (!existsSync(DRAFT_PATH)) {
    fail(`فایل ${DRAFT_PATH} پیدا نشد.`);
  }

  if (!existsSync(TEMPLATE_PATH)) {
    fail(`فایل ${TEMPLATE_PATH} پیدا نشد.`);
  }

  const draftRaw = readFileSync(DRAFT_PATH, "utf8");

  if (!draftRaw.trim()) {
    console.log("فایل draft خالی است؛ کاری انجام نمی‌شود.");
    return;
  }

  const candidateParsed = parseLenient(
    draftRaw,
    DRAFT_PATH
  );

  if (!isPlainObject(candidateParsed)) {
    fail("محتوای فایل draft باید یک شیء JSON باشد.");
  }

  const baseParsed = parseLenient(
    readFileSync(TEMPLATE_PATH, "utf8"),
    TEMPLATE_PATH
  );

  if (!isPlainObject(baseParsed)) {
    fail("محتوای فایل template باید یک شیء JSON باشد.");
  }

  const candidateClean = sanitize(candidateParsed);
  const baseClean = sanitize(baseParsed);

  const merged = {};

  for (const name of REQUIRED_SECTIONS) {
    merged[name] = pickSection(
      name,
      candidateClean,
      baseClean
    );
  }

  merged.remarks = REQUIRED_REMARKS;

  merged.dns = enforceDohEntry(merged.dns);

  merged.version = {
    ...(isPlainObject(merged.version) ? merged.version : {}),
    min: selectVersion(
      candidateClean?.version?.min,
      baseClean?.version?.min
    )
  };

  validateConfig(merged);

  const finalText =
    JSON.stringify(merged, null, 2) + "\n";

  finalSafetyScan(finalText);

  JSON.parse(finalText);

  const tempPath = `${TEMPLATE_PATH}.tmp`;

  writeFileSync(
    tempPath,
    finalText,
    "utf8"
  );

  renameSync(
    tempPath,
    TEMPLATE_PATH
  );

  console.log(
    `کانفیگ نهایی با موفقیت پاکسازی، اعتبارسنجی و در ${TEMPLATE_PATH} ذخیره شد.`
  );

  let repoRoot;

  try {
    repoRoot = git([
      "rev-parse",
      "--show-toplevel"
    ]);
  } catch {
    console.log(
      "محیط Git در دسترس نیست؛ بخش اعتبارسنجی انجام شد."
    );
    return;
  }

  git([
    "config",
    "user.name",
    "doh-proxy-config-bot"
  ]);

  git([
    "config",
    "user.email",
    "actions@users.noreply.github.com"
  ]);

  git([
    "add",
    "--",
    TEMPLATE_PATH
  ]);

  const stagedFiles = git([
    "diff",
    "--cached",
    "--name-only",
    "--",
    TEMPLATE_PATH
  ]);

  if (!stagedFiles) {
    console.log(
      "تغییری نسبت به نسخه قبلی وجود نداشت؛ چیزی کامیت نشد."
    );
    return;
  }

  git([
    "commit",
    "-m",
    "chore: auto-sanitize and update Fragment config from draft"
  ]);

  try {
    git(["push"]);
  } catch {
    console.error(
      "Push اولیه ناموفق بود. تلاش برای rebase و push مجدد..."
    );

    try {
      git([
        "pull",
        "--rebase",
        "origin",
        "main"
      ]);

      git(["push"]);
    } catch (retryError) {
      fail(
        `push پس از rebase نیز ناموفق بود: ${retryError.message}`
      );
    }
  }

  console.log(
    "کانفیگ نهایی کامیت و push شد."
  );
}

try {
  main();
} catch (err) {
  console.error(
    "::error::" + err.message
  );

  process.exit(1);
}