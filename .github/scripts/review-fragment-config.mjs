import { readFileSync, writeFileSync, existsSync, renameSync } from "fs";
import { execFileSync } from "child_process";

const DRAFT_PATH = "configs/fragment-draft.json";
const TEMPLATE_PATH = "configs/doh-proxy-fragment.template.json";

const WORKER_URL_PLACEHOLDER = "${workerUrl}";
const WORKER_HOST_PLACEHOLDER = "${workerHost}";

const REQUIRED_DOH_ENTRY = {
  tag: "doh-proxy",
  address: WORKER_URL_PLACEHOLDER,
  timeoutMs: 8000
};

const REQUIRED_REMARKS = "🛡️ DoH Proxy Pro + Fragment";
const DEFAULT_VERSION_MIN = "26.6.27";

const PERSONAL_HOST_SOURCE =
  "(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+(?:workers|pages)\\.dev";

const FUNCTIONAL_KEYS = new Set([
  "tag",
  "address",
  "protocol",
  "network",
  "port",
  "outboundTag",
  "inboundTag",
  "balancerTag",
  "fallbackTag",
  "domainStrategy",
  "queryStrategy",
  "type",
  "packets",
  "probeURL",
  "probeUrl",
  "destination"
]);

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

function isPlainObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
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

function sanitize(node, parentKey = "", path = "$", seen = new WeakSet()) {
  if (node && typeof node === "object") {
    if (seen.has(node)) {
      fail(`ساختار فایل ${path} شامل ارجاع دوری است.`);
    }

    seen.add(node);
  }

  if (Array.isArray(node)) {
    const items = [];

    for (let i = 0; i < node.length; i++) {
      const value = sanitize(node[i], parentKey, `${path}[${i}]`, seen);

      if (value === null) {
        continue;
      }

      if (typeof value === "string" && containsSensitive(value)) {
        if (FUNCTIONAL_KEYS.has(parentKey)) {
          fail(
            `مقدار حساس در فیلد اصلی ${path}[${i}] پیدا شد و حذف خودکار آن کانفیگ را خراب می‌کند.`
          );
        }

        continue;
      }

      items.push(value);
    }

    seen.delete(node);

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

      const value = sanitize(node[key], key, `${path}.${key}`, seen);

      if (value === undefined) {
        continue;
      }

      if (typeof value === "string" && containsSensitive(value)) {
        if (FUNCTIONAL_KEYS.has(key)) {
          fail(
            `مقدار حساس در فیلد اصلی ${path}.${key} پیدا شد و حذف خودکار آن کانفیگ را خراب می‌کند.`
          );
        }

        continue;
      }

      result[key] = value;
    }

    seen.delete(node);

    return result;
  }

  return node;
}

function collectPersonalHosts(node, hosts) {
  if (typeof node === "string") {
    for (const match of node.matchAll(
      new RegExp(PERSONAL_HOST_SOURCE, "gi")
    )) {
      hosts.add(match[0].toLowerCase());
    }

    return;
  }

  if (Array.isArray(node)) {
    for (const item of node) {
      collectPersonalHosts(item, hosts);
    }

    return;
  }

  if (isPlainObject(node)) {
    for (const key of Object.keys(node)) {
      collectPersonalHosts(key, hosts);
      collectPersonalHosts(node[key], hosts);
    }
  }
}

function replacePersonalHostsInString(text, hosts) {
  let output = text;

  for (const host of hosts) {
    const escaped = escapeRegExp(host);

    output = output.replace(
      new RegExp(`https?://${escaped}/dns-query`, "gi"),
      () => WORKER_URL_PLACEHOLDER
    );

    output = output.replace(
      new RegExp(escaped, "gi"),
      () => WORKER_HOST_PLACEHOLDER
    );
  }

  return output;
}

function replacePersonalHosts(node, hosts) {
  if (typeof node === "string") {
    return replacePersonalHostsInString(node, hosts);
  }

  if (Array.isArray(node)) {
    return node.map((item) => replacePersonalHosts(item, hosts));
  }

  if (isPlainObject(node)) {
    const result = {};

    for (const key of Object.keys(node)) {
      result[replacePersonalHostsInString(key, hosts)] = replacePersonalHosts(
        node[key],
        hosts
      );
    }

    return result;
  }

  return node;
}

function isWorkerAddress(address) {
  return (
    typeof address === "string" &&
    (address.includes(WORKER_URL_PLACEHOLDER) ||
      address.includes(WORKER_HOST_PLACEHOLDER))
  );
}

function enforceDohEntry(config) {
  const dns = isPlainObject(config.dns) ? config.dns : {};
  const servers = Array.isArray(dns.servers) ? dns.servers : [];
  const renamedTags = new Set();
  const kept = [];

  for (const server of servers) {
    const isWorkerEntry =
      isWorkerAddress(server) ||
      (isPlainObject(server) &&
        (server.tag === "doh-proxy" || isWorkerAddress(server.address)));

    if (isWorkerEntry) {
      if (
        isPlainObject(server) &&
        typeof server.tag === "string" &&
        server.tag !== "doh-proxy"
      ) {
        renamedTags.add(server.tag);
      }

      continue;
    }

    kept.push(server);
  }

  dns.servers = [{ ...REQUIRED_DOH_ENTRY }, ...kept];
  config.dns = dns;

  return renamedTags;
}

function alignDohRouting(config) {
  if (!isPlainObject(config.routing) || !Array.isArray(config.routing.rules)) {
    return;
  }

  const servers = Array.isArray(config.dns.servers) ? config.dns.servers : [];

  const dnsTags = new Set();
  const httpsTags = new Set();

  for (const server of servers) {
    if (!isPlainObject(server) || typeof server.tag !== "string") {
      continue;
    }

    if (server.tag === "doh-proxy") {
      continue;
    }

    dnsTags.add(server.tag);

    if (
      typeof server.address === "string" &&
      /^https(\+local)?:\/\//i.test(server.address)
    ) {
      httpsTags.add(server.tag);
    }
  }

  for (const rule of config.routing.rules) {
    if (!isPlainObject(rule) || !Array.isArray(rule.inboundTag)) {
      continue;
    }

    if (rule.inboundTag.length === 0 || rule.inboundTag.includes("doh-proxy")) {
      continue;
    }

    const allDns = rule.inboundTag.every((tag) => dnsTags.has(tag));
    const hasHttps = rule.inboundTag.some((tag) => httpsTags.has(tag));

    if (allDns && hasHttps) {
      rule.inboundTag = ["doh-proxy", ...rule.inboundTag];
    }
  }
}

function renameRoutingTags(config, renamedTags) {
  if (renamedTags.size === 0) {
    return;
  }

  if (!isPlainObject(config.routing) || !Array.isArray(config.routing.rules)) {
    return;
  }

  for (const rule of config.routing.rules) {
    if (!isPlainObject(rule) || rule.inboundTag === undefined) {
      continue;
    }

    const list = Array.isArray(rule.inboundTag)
      ? rule.inboundTag
      : [rule.inboundTag];

    const mapped = [];

    for (const tag of list) {
      const value = renamedTags.has(tag) ? "doh-proxy" : tag;

      if (!mapped.includes(value)) {
        mapped.push(value);
      }
    }

    rule.inboundTag = Array.isArray(rule.inboundTag) ? mapped : mapped[0];
  }
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

function resolveVersion(candidateVersion, baseVersion) {
  if (isPlainObject(candidateVersion) && parseVersion(candidateVersion.min)) {
    return candidateVersion;
  }

  if (isPlainObject(baseVersion) && parseVersion(baseVersion.min)) {
    return { min: baseVersion.min.trim() };
  }

  return { min: DEFAULT_VERSION_MIN };
}

function validateUniqueTags(items, label, allowNonObjects) {
  const tags = new Set();

  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    if (!isPlainObject(item)) {
      if (allowNonObjects) {
        continue;
      }

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

  if (config.remarks !== REQUIRED_REMARKS) {
    fail("remarks کانفیگ نهایی معتبر نیست.");
  }

  if (!isPlainObject(config.version) || !parseVersion(config.version.min)) {
    fail("version.min باید به شکل X.Y.Z باشد.");
  }

  if (!Array.isArray(config.inbounds) || config.inbounds.length === 0) {
    fail("بخش inbounds در کانفیگ نهایی معتبر نیست.");
  }

  if (!Array.isArray(config.outbounds) || config.outbounds.length === 0) {
    fail("بخش outbounds در کانفیگ نهایی معتبر نیست.");
  }

  if (
    !isPlainObject(config.routing) ||
    !Array.isArray(config.routing.rules) ||
    config.routing.rules.length === 0
  ) {
    fail("بخش routing در کانفیگ نهایی معتبر نیست.");
  }

  if (
    !isPlainObject(config.dns) ||
    !Array.isArray(config.dns.servers) ||
    config.dns.servers.length === 0
  ) {
    fail("بخش dns.servers معتبر نیست.");
  }

  const dnsTags = validateUniqueTags(config.dns.servers, "dns.servers", true);

  if (!dnsTags.has("doh-proxy")) {
    fail("سرور doh-proxy در dns.servers وجود ندارد.");
  }

  const doh = config.dns.servers.find(
    (server) => isPlainObject(server) && server.tag === "doh-proxy"
  );

  if (JSON.stringify(doh) !== JSON.stringify(REQUIRED_DOH_ENTRY)) {
    fail("تعریف doh-proxy با مقدار الزامی مطابقت ندارد.");
  }

  const inboundTags = validateUniqueTags(config.inbounds, "inbounds", false);
  const outboundTags = validateUniqueTags(config.outbounds, "outbounds", false);

  const allTags = new Set([...inboundTags, ...outboundTags]);

  const balancers = Array.isArray(config.routing.balancers)
    ? config.routing.balancers
    : [];

  const balancerTags = new Set();

  for (let i = 0; i < balancers.length; i++) {
    const balancer = balancers[i];

    if (!isPlainObject(balancer) || typeof balancer.tag !== "string") {
      fail(`routing.balancers[${i}] معتبر نیست.`);
    }

    balancerTags.add(balancer.tag);

    if (
      balancer.fallbackTag !== undefined &&
      !outboundTags.has(balancer.fallbackTag)
    ) {
      fail(`fallbackTag بالانسر ${balancer.tag} به outbound نامعتبر اشاره می‌کند.`);
    }

    const selectors = Array.isArray(balancer.selector) ? balancer.selector : [];

    const matched = [...outboundTags].some((tag) =>
      selectors.some((prefix) => typeof prefix === "string" && tag.startsWith(prefix))
    );

    if (!matched) {
      fail(`selector بالانسر ${balancer.tag} با هیچ outbound مطابقت ندارد.`);
    }

    const strategyType =
      isPlainObject(balancer.strategy) && typeof balancer.strategy.type === "string"
        ? balancer.strategy.type
        : "";

    if (
      (strategyType === "leastPing" || strategyType === "leastLoad") &&
      !isPlainObject(config.observatory) &&
      !isPlainObject(config.burstObservatory)
    ) {
      fail(
        `بالانسر ${balancer.tag} به observatory یا burstObservatory نیاز دارد ولی در کانفیگ نیست.`
      );
    }
  }

  for (let i = 0; i < config.routing.rules.length; i++) {
    const rule = config.routing.rules[i];

    if (!isPlainObject(rule)) {
      fail(`routing.rules[${i}] معتبر نیست.`);
    }

    if (rule.outboundTag !== undefined) {
      if (typeof rule.outboundTag !== "string" || !allTags.has(rule.outboundTag)) {
        fail(`routing.rules[${i}] به outboundTag نامعتبر اشاره می‌کند.`);
      }
    }

    if (rule.balancerTag !== undefined) {
      if (typeof rule.balancerTag !== "string" || !balancerTags.has(rule.balancerTag)) {
        fail(`routing.rules[${i}] به balancerTag نامعتبر اشاره می‌کند.`);
      }
    }
  }
}

function finalSafetyScan(text) {
  for (const pattern of SENSITIVE_VALUE_PATTERNS) {
    pattern.lastIndex = 0;

    const match = pattern.exec(text);

    if (match) {
      fail(`خروجی نهایی همچنان حاوی الگوی مشکوک است: ${match[0]}`);
    }
  }

  for (const key of METADATA_KEY_DENYLIST) {
    const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const pattern = new RegExp(`"${escapedKey}"\\s*:`, "i");

    if (pattern.test(text)) {
      fail(`خروجی نهایی همچنان حاوی فیلد فراداده مشکوک ${key} است.`);
    }
  }

  const leftover = new RegExp(PERSONAL_HOST_SOURCE, "i").exec(text);

  if (leftover) {
    fail(`خروجی نهایی همچنان حاوی آدرس شخصی است: ${leftover[0]}`);
  }
}

function git(args) {
  return execFileSync("git", args, {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"]
  }).trim();
}

function buildFinalConfig(candidateParsed, baseParsed) {
  const candidateClean = sanitize(candidateParsed);

  const hosts = new Set();
  collectPersonalHosts(candidateClean, hosts);

  const orderedHosts = [...hosts].sort((a, b) => b.length - a.length);

  const replaced = replacePersonalHosts(candidateClean, orderedHosts);

  const renamedTags = enforceDohEntry(replaced);
  renameRoutingTags(replaced, renamedTags);
  alignDohRouting(replaced);

  const rest = {};

  for (const key of Object.keys(replaced)) {
    if (key !== "remarks" && key !== "version") {
      rest[key] = replaced[key];
    }
  }

  return {
    remarks: REQUIRED_REMARKS,
    version: resolveVersion(replaced.version, baseParsed.version),
    ...rest
  };
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

  const candidateParsed = parseLenient(draftRaw, DRAFT_PATH);

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

  const merged = buildFinalConfig(candidateParsed, baseParsed);

  validateConfig(merged);

  const finalText = JSON.stringify(merged, null, 2) + "\n";

  finalSafetyScan(finalText);

  JSON.parse(finalText);

  const tempPath = `${TEMPLATE_PATH}.tmp`;

  writeFileSync(tempPath, finalText, "utf8");

  renameSync(tempPath, TEMPLATE_PATH);

  console.log(
    `کانفیگ نهایی با موفقیت پاکسازی، اعتبارسنجی و در ${TEMPLATE_PATH} ذخیره شد.`
  );

  try {
    git(["rev-parse", "--show-toplevel"]);
  } catch {
    console.log("محیط Git در دسترس نیست؛ بخش اعتبارسنجی انجام شد.");
    return;
  }

  git(["config", "user.name", "doh-proxy-config-bot"]);
  git(["config", "user.email", "actions@users.noreply.github.com"]);
  git(["add", "--", TEMPLATE_PATH]);

  const stagedFiles = git(["diff", "--cached", "--name-only", "--", TEMPLATE_PATH]);

  if (!stagedFiles) {
    console.log("تغییری نسبت به نسخه قبلی وجود نداشت؛ چیزی کامیت نشد.");
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
    console.error("Push اولیه ناموفق بود. تلاش برای rebase و push مجدد...");

    try {
      git(["pull", "--rebase", "origin", "main"]);
      git(["push"]);
    } catch (retryError) {
      fail(`push پس از rebase نیز ناموفق بود: ${retryError.message}`);
    }
  }

  console.log("کانفیگ نهایی کامیت و push شد.");
}

try {
  main();
} catch (err) {
  console.error("::error::" + err.message);
  process.exit(1);
}