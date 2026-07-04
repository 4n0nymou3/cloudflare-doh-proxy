# 🚀 DoH Proxy Pro - Cloudflare

یک DoH (DNS over HTTPS) Proxy قدرتمند با تکنولوژی Parallel Racing، Circuit Breaker، Geo-selection و یادگیری تطبیقی - کاملاً رایگان!

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-orange.svg)](https://workers.cloudflare.com/)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare-Pages-green.svg)](https://pages.cloudflare.com/)

## 📖 درباره پروژه

DoH Proxy Pro یک سرویس DNS over HTTPS پیشرفته است که با استفاده از Cloudflare Workers و Pages ساخته شده و امکان رمزنگاری کامل DNS queries شما را با بالاترین سطح امنیت و سرعت فراهم می‌کند.

### ✨ ویژگی‌های پیشرفته

#### 🎯 Parallel DNS Racing
- همزمان به **10 سرور DNS برتر** درخواست می‌فرستد
- اولین پاسخ سریع را قبول می‌کند
- کاهش چشمگیر Latency
- افزایش قابلیت اطمینان

#### 🔌 Circuit Breaker Pattern
- شناسایی خودکار سرورهای ناسالم
- قطع موقت سرورهای با بیش از 5 شکست متوالی
- بازیابی خودکار بعد از 60 ثانیه
- سه حالت: Closed, Open, Half-Open

#### 🌍 Geo-based Provider Selection
- شناسایی خودکار موقعیت جغرافیایی کاربر
- اولویت‌دهی به سرورهای نزدیک (کاهش Latency)
- پشتیبانی از 6 منطقه: NA, EU, Asia, Oceania, SA, Global
- وزن 15% در امتیازدهی نهایی

#### 🧠 AI Adaptive Learning
- یادگیری تطبیقی از عملکرد سرورها
- انتخاب هوشمند بر اساس تاریخچه
- بهینه‌سازی خودکار در طول زمان
- امتیازدهی پویا: **35% سلامت + 30% سرعت + 20% قابلیت اطمینان + 15% منطقه جغرافیایی**

#### 🌐 پشتیبانی از بیش از 220 سرور DNS معتبر
- Cloudflare, Google, Quad9, OpenDNS
- AdGuard, NextDNS, Mullvad
- AhaDNS (آمریکا، هلند، لهستان، هند، سنگاپور، استرالیا)
- BlahDNS (فنلاند، ژاپن، آلمان، سنگاپور)
- Pi-DNS (اروپا، آمریکا)
- DNScrypt Servers (فرانسه، هلند، آمریکا، سنگاپور، استرالیا، ژاپن)
- و ده‌ها سرور دیگر با پوشش جهانی...

#### 🔒 حریم خصوصی و امنیت پیشرفته
- **DNS Padding (RFC 8467)**: پیاده‌سازی استاندارد و واقعی با OPT Record کامل برای جلوگیری از Traffic Analysis
- **QNAME Minimization**: حداقل‌سازی اطلاعات در Query ها
- **ECS Stripping پیشرفته**: پارس و حذف واقعی EDNS Client Subnet از OPT Record برای جلوگیری از نشت IP
- **Enhanced Header Randomization**: تصادفی‌سازی پیشرفته Headers (X-Request-ID, X-Client-Version, Accept-Language, Sec-CH-UA)
- **Random Header Ordering**: ترتیب تصادفی Headers برای ضد Fingerprinting

#### 🛡️ ضد سانسور و مدیریت خطا
- **Health Check** خودکار هر 90 ثانیه
- **Circuit Breaker** برای مدیریت خرابی
- **Intelligent Fallback** در صورت شکست Racing
- **Domain Fronting** Simulation
- **Random Delay** (5-100ms) برای ضد DPI
- **Enhanced Decoy Requests** با احتمال 25% و 20 دامنه متنوع برای گمراه‌سازی سیستم‌های نظارتی
- **Request Coalescing**: ادغام هوشمند درخواست‌های تکراری همزمان برای کاهش بار و latency

#### ⚡ عملکرد و کارایی بالا
- **Smart LRU Cache** با TTL خودکار و مدیریت هوشمند (8000 entries)
- **Negative Caching** برای NXDOMAIN responses (300s TTL, 2000 entries)
- **Adaptive Timeouts** بر اساس میانگین زمان پاسخ هر سرور
- **Load Balancing** پویا با وزن‌دهی منطقه‌ای
- **Concurrent Request Management** با محدودیت 150 درخواست همزمان
- **Advanced Rate Limiting** (200 درخواست در دقیقه به ازای هر IP)
- **FNV-1a Cache Key**: الگوریتم hash قوی‌تر برای کلید Cache که Transaction ID را نادیده می‌گیرد
- استفاده از شبکه جهانی Cloudflare CDN

#### 🌐 سازگاری پیشرفته
- **CORS Support**: پشتیبانی کامل از درخواست‌های Cross-Origin برای استفاده مستقیم از مرورگر
- **JSON DoH API**: پشتیبانی از فرمت `application/dns-json` و پارامتر `?name=domain&type=A` برای سازگاری با طیف وسیع‌تری از کلاینت‌ها

#### 📊 مانیتورینگ و آمار
- **Real-time Stats Page**
- نمایش Top 15 سرورهای فعال
- آمار زنده: تعداد سرورها، سرورهای سالم، میانگین سلامت، تعداد کل درخواست‌ها
- نمایش درصد موفقیت، زمان پاسخ، و سلامت هر سرور
- Responsive Design برای موبایل
- جدول اسکرول‌پذیر با Sticky Header

## 🎭 دو روش استقرار

### 1️⃣ Cloudflare Workers

**مناسب برای:** استقرار سریع و مستقل

**مزایا:**
- راه‌اندازی سریع‌تر
- مدیریت آسان‌تر
- بدون نیاز به GitHub

**فایل مورد نیاز:** [`worker.js`](https://github.com/4n0nymou3/cloudflare-doh-proxy/blob/main/manual-worker/worker.js)

### 2️⃣ Cloudflare Pages

**مناسب برای:** اتصال به GitHub و آپدیت خودکار

**مزایا:**
- اتصال مستقیم به GitHub
- آپدیت خودکار با هر Push
- قابلیت CI/CD

**فایل مورد نیاز:** [`[[path]].js`](https://github.com/4n0nymou3/cloudflare-doh-proxy/blob/main/functions/%5B%5Bpath%5D%5D.js) در پوشه `functions/`

## 🚀 راهنمای نصب

### روش 1: Cloudflare [Workers](https://github.com/4n0nymou3/cloudflare-doh-proxy/blob/main/manual-worker/worker.js) (توصیه شده برای مبتدیان)

#### مرحله 1: ایجاد Worker

1. به [dash.cloudflare.com](https://dash.cloudflare.com) بروید و وارد شوید
2. از منوی سمت چپ **Workers & Pages** را انتخاب کنید
3. روی **Create Application** کلیک کنید
4. **Create Worker** را انتخاب کنید
5. یک نام برای Worker انتخاب کنید (مثلاً `my-doh-proxy`)
6. روی **Deploy** کلیک کنید

#### مرحله 2: کپی کردن کد

1. روی **Edit Code** کلیک کنید
2. تمام کد پیش‌فرض را پاک کنید
3. محتوای فایل [`worker.js`](https://github.com/4n0nymou3/YOUR-REPO-NAME/blob/main/manual-worker/worker.js) را کپی کرده و جایگذاری کنید
4. روی **Save and Deploy** کلیک کنید

#### مرحله 3: دریافت URL

بعد از Deploy، URL سرویس شما:

```
https://your-worker-name.your-subdomain.workers.dev/dns-query
```

### روش 2: Cloudflare [Pages](https://github.com/4n0nymou3/cloudflare-doh-proxy/blob/main/functions/%5B%5Bpath%5D%5D.js) (توصیه شده برای توسعه‌دهندگان)

#### مرحله 1: آماده‌سازی Repository

1. این ریپازیتوری را Fork کنید یا ریپازیتوری جدیدی بسازید
2. ساختار پوشه‌ها:
```
your-repository/
├── functions/
│   └── [[path]].js
└── README.md
```
3. فایل [`[[path]].js`](https://github.com/4n0nymou3/cloudflare-doh-proxy/blob/main/functions/%5B%5Bpath%5D%5D.js) را در پوشه `functions/` قرار دهید

#### مرحله 2: اتصال به Cloudflare Pages

1. به [dash.cloudflare.com](https://dash.cloudflare.com) بروید و وارد شوید
2. از منوی سمت چپ **Workers & Pages** را انتخاب کنید
3. روی **Create Application** کلیک کنید
4. **Pages** را انتخاب کنید
5. روی **Connect to Git** کلیک کنید
6. ریپازیتوری خود را انتخاب کنید
7. در Build settings:
   - Framework preset: **None**
   - Build command: خالی بگذارید
   - Build output directory: خالی بگذارید
8. روی **Save and Deploy** کلیک کنید

#### مرحله 3: دریافت URL

بعد از Deploy، URL سرویس شما:

```
https://your-page-name.pages.dev/dns-query
```

## 📱 راهنمای استفاده

### 🌐 مرورگرها

#### Firefox

```
Settings → Privacy & Security → DNS over HTTPS
→ Choose provider: Custom
→ URL را وارد کنید
```

**فعال‌سازی ECH برای امنیت بیشتر:**
1. در آدرس‌بار: `about:config`
2. جستجو: `network.dns.echconfig.enabled`
3. مقدار را روی `true` قرار دهید

#### Chrome / Edge / Brave

```
Settings → Privacy and security → Security
→ Use secure DNS → Custom
→ URL را وارد کنید
```

### 📱 موبایل

#### Android (اپلیکیشن Intra)

1. [Intra](https://play.google.com/store/apps/details?id=app.intra) را از Google Play نصب کنید
2. اپلیکیشن را باز کنید
3. روی **Configure custom server URL** بزنید
4. URL خود را وارد کنید: `https://your-domain/dns-query`
5. دکمه **ON** را فعال کنید

#### iOS, iPadOS و macOS

**دانلود خودکار پروفایل:**

1. به آدرس سرویس خود بروید (بدون `/dns-query`)
2. روی دکمه **🍎 دانلود پروفایل iOS/macOS** کلیک کنید
3. فایل `.mobileconfig` دانلود می‌شود

**نصب در iOS/iPadOS:**
```
Safari → دانلود فایل
Settings → General → VPN, DNS & Device Management
→ Downloaded Profile → Install
```

**نصب در macOS:**
```
دانلود فایل
System Settings → Privacy & Security → Profiles
→ نصب پروفایل
```

### 🔧 کلاینت‌های Xray

#### کانفیگ ساده (فقط DoH)

برای استفاده از DoH در v2rayNG و کلاینت‌های مشابه:

1. وارد صفحه اصلی سرویس شوید (بدون `/dns-query`)
2. کانفیگ ساده را کپی کنید
3. در کلاینت خود Import کنید

**قابلیت:** رمزنگاری DNS

#### کانفیگ Fragment (توصیه می‌شود)

برای دور زدن فیلترینگ‌های پیشرفته:

1. وارد صفحه اصلی سرویس شوید
2. کانفیگ Fragment را کپی کنید
3. در کلاینت خود Import کنید

**قابلیت‌ها:**
- رمزنگاری DNS
- Fragment برای دور زدن DPI
- تکه‌تکه کردن TLS Hello
- پورت SOCKS (10808) و HTTP (10809)

### 💻 دسکتاپ

#### Windows 10/11

```
Settings → Network & Internet → Properties
→ DNS server assignment → Edit
→ Preferred DNS encryption: Encrypted only (DNS over HTTPS)
→ URL را وارد کنید
```

#### Linux (systemd-resolved)

1. ویرایش فایل تنظیمات:
```bash
sudo nano /etc/systemd/resolved.conf
```

2. اضافه کردن این خطوط:
```ini
[Resolve]
DNS=https://your-domain/dns-query
DNSOverTLS=yes
```

3. ری‌استارت سرویس:
```bash
sudo systemctl restart systemd-resolved
```

#### macOS

از روش iOS استفاده کنید (دانلود پروفایل)

### 🔧 روتر

اگر روتر شما از DoH پشتیبانی می‌کند:

```
تنظیمات DNS → DoH/DNS over HTTPS
→ URL سرویس خود را وارد کنید
```

**مزیت:** تمام دستگاه‌های متصل به شبکه از DNS امن استفاده می‌کنند

## 📊 مشاهده آمار زنده

برای مشاهده آمار Real-time سرورها:

```
https://your-domain/stats
```

**اطلاعات قابل مشاهده:**
- تعداد کل سرورها (220+)
- تعداد سرورهای سالم
- میانگین سلامت کل سیستم
- تعداد کل درخواست‌ها
- جدول Top 15 سرور با:
  - رتبه و نام سرور
  - منطقه جغرافیایی
  - درصد موفقیت
  - زمان میانگین پاسخ
  - سلامت (با نوار گرافیکی)

## 🧪 تست سرویس

### روش 1: مرورگر

به آدرس اصلی سرویس بروید (بدون `/dns-query`):

```
https://your-domain
```

اگر صفحه با badge سبز "Pro" و وضعیت "فعال و آماده به کار" نمایش داده شد، سرویس به درستی کار می‌کند.

### روش 2: صفحه آمار

```
https://your-domain/stats
```

اطلاعات وضعیت سرورها، Cache و تعداد درخواست‌ها را نمایش می‌دهد.

### روش 3: cURL

```bash
curl -H 'accept: application/dns-json' \
  'https://your-domain/dns-query?name=google.com&type=A'
```

## ⚙️ تنظیمات پیشرفته

### تغییر تعداد سرورهای همزمان Racing

```javascript
const PARALLEL_RACING_COUNT = 10;
```

### تغییر Timeout ها

```javascript
const RACE_TIMEOUT = 4000;
const FALLBACK_TIMEOUT = 3000;
```

### تغییر Circuit Breaker

```javascript
const CIRCUIT_BREAKER_THRESHOLD = 5;
const CIRCUIT_BREAKER_TIMEOUT = 60000;
```

### تغییر Rate Limit

```javascript
const RATE_LIMIT_REQUESTS = 200;
const RATE_LIMIT_WINDOW = 60000;
```

### تغییر Cache TTL

```javascript
const DNS_CACHE_TTL_MIN = 60;
const DNS_CACHE_TTL_MAX = 3600;
const DNS_CACHE_TTL_DEFAULT = 300;
```

### تغییر Negative Cache TTL

```javascript
const NEGATIVE_CACHE_TTL = 300;
```

### تغییر احتمال Decoy Requests

```javascript
const DECOY_REQUEST_PROBABILITY = 0.25;
```

### تغییر Random Delay Range

```javascript
const RANDOM_DELAY_MIN = 5;
const RANDOM_DELAY_MAX = 100;
```

### فعال/غیرفعال کردن قابلیت‌های حریم خصوصی

```javascript
const QNAME_MINIMIZATION_ENABLED = true;
const DNS_PADDING_ENABLED = true;
const ECS_STRIPPING_ENABLED = true;
```

### تغییر اندازه Cache

```javascript
// Main cache size
if (dnsCache.size > 8000) {
    // Evict 2000 oldest entries
}

// Negative cache size
if (negativeDnsCache.size > 2000) {
    // Evict 500 oldest entries
}
```

## 📊 محدودیت‌ها

### Cloudflare Workers Free Plan:

- ✅ **100,000** درخواست در روز
- ✅ **10ms** CPU time در هر درخواست
- ✅ بدون محدودیت Bandwidth

### Cloudflare Pages Free Plan:

- ✅ **نامحدود** درخواست
- ✅ **500** build در ماه
- ✅ بدون محدودیت Bandwidth

**این مقادیر برای استفاده شخصی و حتی سازمانی کوچک کاملاً کافی است!**

## 💡 درک انواع فیلترینگ

### 1. DNS Filtering ✅
- سایت در سطح DNS مسدود می‌شود
- **این DoH Proxy این نوع فیلترینگ را دور می‌زند**

### 2. SNI Filtering ⚠️
- سایت بر اساس Server Name Indication مسدود می‌شود
- نیاز به ECH یا ابزار اضافی

### 3. IP Blocking ❌
- آدرس IP سرور مسدود می‌شود
- نیاز به VPN

### 4. Deep Packet Inspection (DPI) ⚠️
- بررسی عمیق محتوای بسته‌ها
- کانفیگ Fragment می‌تواند کمک کند
- برای دور زدن کامل نیاز به VPN

## ❓ سوالات متداول

### آیا این سرویس VPN است؟
خیر. این سرویس فقط DNS queries را رمزنگاری می‌کند و جایگزین VPN نیست.

### چه سایت‌هایی قابل دسترسی می‌شوند؟
سایت‌هایی که فقط با DNS فیلتر شده‌اند. برای سایر موارد به VPN نیاز دارید.

### تکنولوژی Parallel Racing چگونه کار می‌کند؟
این سیستم همزمان به 10 سرور DNS برتر (با امتیازدهی بر اساس منطقه جغرافیایی، سرعت، سلامت و قابلیت اطمینان) درخواست می‌فرستد و اولین پاسخ سریع را قبول می‌کند. این باعث کاهش latency و افزایش قابلیت اطمینان می‌شود.

### Circuit Breaker چیست؟
مکانیزمی برای شناسایی خودکار سرورهای ناسالم. اگر یک سرور 5 بار متوالی شکست بخورد، برای 60 ثانیه از چرخه خارج می‌شود و بعد دوباره تست می‌شود.

### Geo-based Selection چگونه کار می‌کند؟
سیستم بر اساس کشور کاربر (از طریق Cloudflare)، سرورهای نزدیک‌تر را با وزن بیشتر (15%) در امتیازدهی اولویت می‌دهد. این باعث کاهش latency می‌شود.

### یادگیری تطبیقی چگونه کار می‌کند؟
سیستم عملکرد هر سرور را (سرعت، موفقیت، قابلیت اطمینان) ثبت و تحلیل می‌کند و بر اساس این اطلاعات، سرورهای بهتر را اولویت می‌دهد. امتیازدهی: 35% سلامت + 30% سرعت + 20% قابلیت اطمینان + 15% منطقه جغرافیایی.

### DNS Padding چیست؟
تکنیکی مطابق RFC 8467 که یک OPT Record استاندارد با Padding Option (code 12) به Query اضافه می‌کند تا از Traffic Analysis و شناسایی الگوهای استفاده جلوگیری کند. پیاده‌سازی واقعی و کامل این استاندارد تضمین می‌کند که همه سرورهای upstream آن را می‌پذیرند.

### QNAME Minimization چیست؟
تکنیکی برای حداقل کردن اطلاعات ارسالی در Query ها به منظور افزایش حریم خصوصی.

### ECS Stripping چیست؟
پارس و حذف واقعی EDNS Client Subnet از OPT Record در Query ها که از نشت اطلاعات IP شما به سرورهای DNS جلوگیری می‌کند. این پیاده‌سازی ساختار باینری پیام DNS را تجزیه کرده و option code 8 را به طور دقیق شناسایی و حذف می‌کند.

### Negative Caching چیست؟
Cache کردن پاسخ‌های NXDOMAIN (دامنه وجود ندارد) برای 300 ثانیه تا از Query های تکراری برای دامنه‌های نامعتبر جلوگیری شود.

### Adaptive Timeout چیست؟
سیستم بر اساس میانگین زمان پاسخ هر سرور، Timeout را به صورت پویا تنظیم می‌کند: `min(baseTimeout, max(1000ms, avgResponseTime * 3))`

### Fragment چیست؟
تکنیکی برای تکه‌تکه کردن بسته‌های TLS Hello که از شناسایی توسط DPI جلوگیری می‌کند.

### آیا سرعت اینترنت کاهش می‌یابد؟
خیر، بلکه ممکن است افزایش یابد. با Racing Mode، Adaptive Timeout، Smart Caching و Geo-selection، معمولاً سرعت بهتر می‌شود.

### Request Coalescing چیست؟
وقتی چند کاربر یا برنامه در یک لحظه برای یک دامنه یکسان Query می‌زنند، به جای ارسال چند درخواست جداگانه به upstream، سیستم یک درخواست ارسال می‌کند و پاسخ را بین همه به اشتراک می‌گذارد. این باعث کاهش بار سرور و کاهش latency می‌شود.

### Enhanced Header Randomization چیست؟
تصادفی‌سازی پیشرفته Header های HTTP (User-Agent, Accept, X-Request-ID, X-Client-Version, Accept-Language, Sec-CH-UA) برای جلوگیری از Fingerprinting و شناسایی.

### CORS Support چیست و چه کمکی می‌کند؟
پشتیبانی کامل از Cross-Origin Resource Sharing که اجازه می‌دهد مرورگرها و اپلیکیشن‌های وب مستقیماً بدون محدودیت Same-Origin با این DoH Proxy ارتباط برقرار کنند. این سازگاری را با طیف وسیع‌تری از کلاینت‌ها و ابزارها فراهم می‌کند.

### JSON DoH API چیست؟
پشتیبانی از فرمت `application/dns-json` که امکان Query به صورت `?name=domain&type=A` را فراهم می‌کند. این فرمت برای کلاینت‌هایی که نمی‌توانند پیام باینری DNS بسازند بسیار مفید است و سازگاری سرویس را با ابزارهای بیشتری افزایش می‌دهد.

### آیا این سرویس رایگان است؟
بله، کاملاً رایگان و بدون محدودیت ترافیک.

### چطور می‌توانم آمار سرورها را ببینم؟
به آدرس `/stats` بروید. صفحه Real-time با اطلاعات کامل سرورها نمایش داده می‌شود.

## 🛡️ توصیه‌های امنیتی

### سناریو 1: فقط فیلترینگ DNS
✅ استفاده از این DoH Proxy کافی است

### سناریو 2: فیلترینگ پیشرفته‌تر
✅ استفاده از DoH Proxy  
✅ فعال‌سازی ECH در مرورگر  
✅ استفاده از کانفیگ Fragment  
✅ VPN برای لایه‌های دیگر

### نکات عمومی
- از مرورگرهای به‌روز استفاده کنید
- HTTPS را همیشه فعال نگه دارید
- از نرم‌افزارهای امنیتی معتبر استفاده کنید
- رمزهای عبور قوی داشته باشید

## 🔬 معماری تکنیکی

### الگوریتم امتیازدهی سرورها

```
Score = (Health × 0.35) + (Speed × 0.30) + (Reliability × 0.20) + (Region × 0.15) - Freshness_Penalty

Health Score: 0-100 (با جریمه 12 امتیاز برای هر شکست متوالی)
Speed Score: 100 - (avgResponseTime / 40)
Reliability Score: (successCount / totalRequests) × 100
Region Score: 100 (منطقه مطابق) | 75 (Global) | 50 (سایر مناطق)
Freshness Penalty: max(15, timeSinceLastCheck / 12000)
```

### مدیریت Cache

**Main DNS Cache:**
- سایز: 8000 entries
- TTL: 60-3600 ثانیه (استخراج از پاسخ DNS)
- Eviction: LRU با حذف 2000 قدیمی‌ترین entry در صورت پر شدن
- Cache Key: الگوریتم FNV-1a hash با نادیده گرفتن Transaction ID

**Negative Cache:**
- سایز: 2000 entries
- TTL: 300 ثانیه (ثابت)
- Eviction: حذف 500 قدیمی‌ترین entry در صورت پر شدن

### Circuit Breaker States

```
CLOSED → (5 failures) → OPEN → (60s timeout) → HALF-OPEN → (success) → CLOSED
                                              ↓ (failure)
                                            OPEN
```

### Health Check Cycle

```
Interval: 90 ثانیه
Concurrent Checks: 12 سرور
Test Query: example.com A Record
Timeout: 2500ms
```

## 🔗 لینک‌های مفید

- [مستندات Cloudflare Workers](https://developers.cloudflare.com/workers/)
- [مستندات Cloudflare Pages](https://developers.cloudflare.com/pages/)
- [RFC 8484 - DNS over HTTPS](https://datatracker.ietf.org/doc/html/rfc8484)
- [RFC 8467 - DNS Padding](https://datatracker.ietf.org/doc/html/rfc8467)
- [RFC 7816 - QNAME Minimization](https://datatracker.ietf.org/doc/html/rfc7816)
- [Cloudflare DNS](https://1.1.1.1/)
- [اپلیکیشن Intra](https://getintra.org/)

## 📝 مجوز

این پروژه تحت مجوز MIT منتشر شده است. برای اطلاعات بیشتر فایل [LICENSE](LICENSE) را مشاهده کنید.

## 👨‍💻 سازنده

طراحی و توسعه توسط: [Anonymous](https://t.me/An0nymou3Bot)

---

⭐ اگر این پروژه برای شما مفید بود، یک ستاره به آن بدهید!

🔒 برای اینترنت آزاد و امن
