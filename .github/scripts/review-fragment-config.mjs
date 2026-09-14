import { readFileSync, writeFileSync, existsSync } from "fs";
import { execSync } from "child_process";

const DRAFT_PATH = "configs/fragment-draft.json";
const TEMPLATE_PATH = "configs/doh-proxy-fragment.template.json";

const REQUIRED_DOH_ENTRY = { tag: "doh-proxy", address: "${workerUrl}", timeoutMs: 8000 };
const REQUIRED_REMARKS = "🛡️ DoH Proxy Pro + Fragment";
const DEFAULT_VERSION_MIN = "26.6.27";

const METADATA_KEY_DENYLIST = new Set([
  "credits", "credit", "__credits__", "author", "authors", "developer", "developers",
  "designer", "owner", "creator", "donate", "donation", "donations", "sponsor", "sponsors",
  "support", "contact", "social", "socials", "telegram", "discord", "twitter", "instagram",
  "website", "homepage", "channel", "bot", "referral", "ref", "signature", "by",
  "madeby", "made_by", "poweredby", "powered_by", "creditto", "credit_to"
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
  console.error("::error::" + message);
  process.exit(1);
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
  const cleaned = stripTrailingCommas(stripJsonComments(rawText));
  try {
    return JSON.parse(cleaned);
  } catch (err) {
    fail(`فایل ${label} حتی پس از پاکسازی کامنت‌ها و ویرگول‌های اضافی، یک JSON معتبر نیست: ${err.message}`);
  }
}

function containsSensitive(str) {
  if (typeof str !== "string") return false;
  for (const pattern of SENSITIVE_VALUE_PATTERNS) {
    pattern.lastIndex = 0;
    if (pattern.test(str)) return true;
  }
  return false;
}

function isPrimitiveArray(arr) {
  return arr.every((v) => v === null || typeof v === "string" || typeof v === "number" || typeof v === "boolean");
}

function sanitize(node) {
  if (Array.isArray(node)) {
    let items = node.map(sanitize).filter((v) => v !== undefined);
    if (isPrimitiveArray(items)) {
      items = items.filter((v) => v !== null && !(typeof v === "string" && containsSensitive(v)));
    }
    return items;
  }
  if (node && typeof node === "object") {
    const result = {};
    for (const key of Object.keys(node)) {
      const lowerKey = key.toLowerCase();
      if (METADATA_KEY_DENYLIST.has(lowerKey)) continue;
      if (containsSensitive(key)) continue;
      const value = sanitize(node[key]);
      if (value === undefined) continue;
      if (typeof value === "string" && containsSensitive(value)) continue;
      result[key] = value;
    }
    return result;
  }
  return node;
}

function compareVersions(a, b) {
  const pa = String(a).split(".").map((n) => parseInt(n, 10) || 0);
  const pb = String(b).split(".").map((n) => parseInt(n, 10) || 0);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const da = pa[i] || 0;
    const db = pb[i] || 0;
    if (da !== db) return da - db;
  }
  return 0;
}

function isValidSection(name, value) {
  if (value === undefined || value === null) return false;
  switch (name) {
    case "dns":
      return typeof value === "object" && Array.isArray(value.servers) && value.servers.length > 0;
    case "outbounds":
      return Array.isArray(value) && value.length > 0;
    case "inbounds":
      return Array.isArray(value) && value.length > 0;
    case "routing":
      return typeof value === "object" && Array.isArray(value.rules) && value.rules.length > 0;
    case "policy":
    case "log":
    case "version":
    case "stats":
      return typeof value === "object";
    default:
      return true;
  }
}

function pickSection(name, candidate, base) {
  if (isValidSection(name, candidate[name])) return candidate[name];
  if (isValidSection(name, base[name])) return base[name];
  return candidate[name] !== undefined ? candidate[name] : base[name];
}

function enforceDohEntry(dns) {
  if (!dns || typeof dns !== "object") dns = {};
  let servers = Array.isArray(dns.servers) ? dns.servers : [];
  servers = servers.filter((s) => !(s && s.tag === "doh-proxy"));
  servers.unshift({ ...REQUIRED_DOH_ENTRY });
  dns.servers = servers;
  return dns;
}

function buildFinalConfig(candidateClean, baseClean) {
  const sectionNames = ["remarks", "version", "log", "policy", "dns", "inbounds", "outbounds", "routing", "stats"];
  const merged = {};
  for (const name of sectionNames) {
    merged[name] = pickSection(name, candidateClean, baseClean);
  }

  merged.remarks = REQUIRED_REMARKS;

  merged.dns = enforceDohEntry(merged.dns);

  const candidateVersionMin = candidateClean?.version?.min;
  const baseVersionMin = baseClean?.version?.min;
  let finalVersionMin = DEFAULT_VERSION_MIN;
  if (candidateVersionMin && baseVersionMin) {
    finalVersionMin = compareVersions(candidateVersionMin, baseVersionMin) <= 0 ? candidateVersionMin : baseVersionMin;
  } else if (candidateVersionMin || baseVersionMin) {
    finalVersionMin = candidateVersionMin || baseVersionMin;
  }
  merged.version = { ...(merged.version || {}), min: String(finalVersionMin) };

  return merged;
}

function finalSafetyScan(text) {
  for (const pattern of SENSITIVE_VALUE_PATTERNS) {
    pattern.lastIndex = 0;
    const match = pattern.exec(text);
    if (match) {
      fail(`خروجی نهایی همچنان حاوی یک الگوی مشکوک به اطلاعات شخصی است ("${match[0]}"). برای جلوگیری از انتشار اشتباه، کامیت متوقف شد؛ لطفاً کانفیگ ورودی را دستی بررسی کنید.`);
    }
  }
  for (const key of METADATA_KEY_DENYLIST) {
    const pattern = new RegExp('"' + key + '"\\s*:', "i");
    if (pattern.test(text)) {
      fail(`خروجی نهایی همچنان حاوی فیلد فراداده‌ی مشکوک "${key}" است. کامیت متوقف شد.`);
    }
  }
}

function main() {
  if (!existsSync(DRAFT_PATH)) {
    fail(`فایل ${DRAFT_PATH} پیدا نشد.`);
  }
  const draftRaw = readFileSync(DRAFT_PATH, "utf8");
  if (!draftRaw.trim()) {
    console.log("فایل draft خالی است؛ کاری انجام نمی‌شود.");
    return;
  }

  const candidateParsed = parseLenient(draftRaw, DRAFT_PATH);
  if (!candidateParsed || typeof candidateParsed !== "object" || Array.isArray(candidateParsed)) {
    fail("محتوای فایل draft یک شیء JSON معتبر برای کانفیگ Xray نیست.");
  }

  const baseParsed = existsSync(TEMPLATE_PATH)
    ? parseLenient(readFileSync(TEMPLATE_PATH, "utf8"), TEMPLATE_PATH)
    : {};

  const candidateClean = sanitize(candidateParsed);
  const baseClean = sanitize(baseParsed);

  const finalConfig = buildFinalConfig(candidateClean, baseClean);
  const finalText = JSON.stringify(finalConfig, null, 2) + "\n";

  try {
    JSON.parse(finalText);
  } catch (err) {
    fail(`کانفیگ نهایی تولیدشده یک JSON معتبر نیست: ${err.message}`);
  }

  finalSafetyScan(finalText);

  writeFileSync(TEMPLATE_PATH, finalText, "utf8");
  console.log(`کانفیگ نهایی با موفقیت پاکسازی، ادغام و در ${TEMPLATE_PATH} ذخیره شد.`);

  execSync('git config user.name "doh-proxy-config-bot"');
  execSync('git config user.email "actions@users.noreply.github.com"');
  execSync(`git add ${TEMPLATE_PATH}`);

  const status = execSync("git status --porcelain").toString().trim();
  if (!status) {
    console.log("تغییری نسبت به نسخه‌ی قبلی وجود نداشت؛ چیزی کامیت نشد.");
    return;
  }

  execSync('git commit -m "chore: auto-sanitize and update Fragment config from draft"');
  execSync("git push");
  console.log("کانفیگ نهایی کامیت و push شد.");
}

main();