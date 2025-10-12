# 📖 راهنمای کامل نصب و راه‌اندازی DoH Proxy

این راهنما به صورت گام به گام نحوه نصب و راه‌اندازی DoH Proxy با Cloudflare Workers را توضیح می‌دهد.

## 📋 پیش‌نیازها

قبل از شروع، اطمینان حاصل کنید که موارد زیر را دارید:

- ✅ یک حساب کاربری رایگان در [Cloudflare](https://dash.cloudflare.com/sign-up)
- ✅ یک مرورگر وب (Chrome, Firefox, Edge, Safari)
- ✅ دسترسی به اینترنت

## 🚀 مرحله اول: ایجاد حساب کاربری Cloudflare

### اگر حساب ندارید:

1. به آدرس [dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up) بروید
2. ایمیل و رمز عبور خود را وارد کنید
3. ایمیل تأیید را چک کرده و حساب خود را فعال کنید
4. وارد داشبورد Cloudflare شوید

### اگر حساب دارید:

1. به آدرس [dash.cloudflare.com](https://dash.cloudflare.com) بروید
2. با ایمیل و رمز عبور خود وارد شوید

## ⚙️ مرحله دوم: ایجاد Cloudflare Worker

### گام 1: دسترسی به بخش Workers

1. در داشبورد Cloudflare، از منوی سمت چپ گزینه **Workers & Pages** را انتخاب کنید
2. اگر اولین بار است که از Workers استفاده می‌کنید، ممکن است نیاز باشد یک subdomain انتخاب کنید
   - یک نام دلخواه وارد کنید (مثلاً `myname-workers`)
   - این subdomain در URL نهایی شما استفاده خواهد شد

### گام 2: ساخت Worker جدید

1. روی دکمه **Create Application** کلیک کنید
2. گزینه **Create Worker** را انتخاب کنید
3. یک نام برای Worker خود انتخاب کنید:
   - نام باید منحصر به فرد باشد
   - فقط حروف کوچک، اعداد و خط تیره مجاز است
   - مثال‌های خوب: `my-doh-proxy`, `secure-dns`, `privacy-dns`
4. روی دکمه **Deploy** کلیک کنید

### گام 3: ویرایش کد Worker

1. بعد از Deploy شدن، روی دکمه **Edit Code** کلیک کنید
2. یک ویرایشگر کد آنلاین باز می‌شود
3. **تمام کد پیش‌فرض** را با استفاده از `Ctrl+A` (یا `Cmd+A` در مک) انتخاب کنید
4. کلید `Delete` یا `Backspace` را بزنید تا کد حذف شود

### گام 4: کپی کردن کد DoH Proxy

1. فایل [`worker.js`](../manual-worker/worker.js) را از repository باز کنید
2. روی دکمه **Raw** کلیک کنید (در GitHub)
3. تمام محتوا را با `Ctrl+A` انتخاب کنید
4. با `Ctrl+C` کپی کنید
5. به ویرایشگر Cloudflare برگردید
6. با `Ctrl+V` کد را Paste کنید

### گام 5: ذخیره و Deploy

1. روی دکمه **Save and Deploy** کلیک کنید
2. منتظر بمانید تا Worker به روز شود (معمولاً چند ثانیه طول می‌کشد)
3. پیغام موفقیت نمایش داده می‌شود

## ⚙️ گزینه جایگزین: استفاده از Cloudflare Pages

علاوه بر Cloudflare Workers، این پروژه از Cloudflare Pages نیز پشتیبانی می‌کند. می‌توانید ریپازیتوری GitHub را مستقیماً به Cloudflare Pages متصل کنید و DoH Proxy خود را بسازید.

### گام 1: دسترسی به بخش Pages

1. در داشبورد Cloudflare، از منوی سمت چپ گزینه **Workers & Pages** را انتخاب کنید
2. روی دکمه **Create Application** کلیک کنید و گزینه **Pages** را انتخاب کنید

### گام 2: اتصال به GitHub

1. روی **Connect to Git** کلیک کنید
2. ریپازیتوری [cloudflare-doh-proxy](https://github.com/4n0nymou3/cloudflare-doh-proxy) را انتخاب کنید

### گام 3: تنظیمات ساخت

1. در بخش Build settings، Framework را None انتخاب کنید

### گام 4: ذخیره و Deploy

1. روی **Save and Deploy** کلیک کنید
2. منتظر بمانید تا Page به روز شود
3. پیغام موفقیت نمایش داده می‌شود

## 🎉 مرحله سوم: دریافت و تست URL

### دریافت URL

بعد از Deploy موفق، URL Worker شما به این شکل خواهد بود:

```
https://your-worker-name.your-subdomain.workers.dev
```

URL کامل DoH Proxy شما:

```
https://your-worker-name.your-subdomain.workers.dev/dns-query
```

### تست Worker

#### روش 1: تست در مرورگر

1. URL اصلی Worker را کپی کنید (بدون `/dns-query`)
2. آن را در مرورگر باز کنید
3. باید یک صفحه زیبا با عنوان "DoH Proxy" و وضعیت "فعال و آماده به کار" ببینید
4. اگر این صفحه را دیدید، یعنی Worker شما با موفقیت راه‌اندازی شده است! 🎉

#### روش 2: تست با cURL (پیشرفته)

اگر با خط فرمان آشنایی دارید:

```bash
curl -H 'accept: application/dns-json' \
  'https://your-worker.workers.dev/dns-query?name=google.com&type=A'
```

اگر پاسخ JSON دریافت کردید، Worker شما کار می‌کند!

## 📱 مرحله چهارم: تنظیم در دستگاه‌ها

### Firefox

1. منوی Firefox را باز کنید → **Settings**
2. به بخش **Privacy & Security** بروید
3. به پایین اسکرول کنید تا به قسمت **DNS over HTTPS** برسید
4. گزینه **Enable DNS over HTTPS using** را فعال کنید
5. از منوی کشویی **Custom** را انتخاب کنید
6. URL DoH خود را وارد کنید:
   ```
   https://your-worker.workers.dev/dns-query
   ```
7. روی **OK** کلیک کنید

### Chrome / Edge / Brave

1. منوی مرورگر را باز کنید → **Settings**
2. در قسمت جستجو **DNS** را تایپ کنید
3. به بخش **Security** بروید
4. گزینه **Use secure DNS** را فعال کنید
5. **With Custom** را انتخاب کنید
6. URL DoH خود را وارد کنید:
   ```
   https://your-worker.workers.dev/dns-query
   ```
7. روی **Save** کلیک کنید

### Android (اپلیکیشن Intra)

1. از Google Play Store اپلیکیشن [Intra](https://play.google.com/store/apps/details?id=app.intra) را نصب کنید
2. اپلیکیشن را باز کنید
3. روی آیکون تنظیمات (⚙️) در بالای صفحه کلیک کنید
4. گزینه **Select DNS over HTTPS Server** را انتخاب کنید
5. **Custom server URL** را انتخاب کنید
6. URL DoH خود را وارد کنید:
   ```
   https://your-worker.workers.dev/dns-query
   ```
7. روی **OK** کلیک کنید
8. به صفحه اصلی برگردید و دکمه بزرگ **ON** را فعال کنید
9. اولین بار که فعال می‌کنید، Android درخواست مجوز VPN می‌کند - روی **OK** کلیک کنید
10. یک آیکون کلید در نوار وضعیت ظاهر می‌شود که نشان می‌دهد Intra فعال است

### iOS, iPadOS و macOS

برای دستگاه‌های اپل، Worker به صورت خودکار یک پروفایل DoH شخصی برای شما می‌سازد:

#### گام 1: دانلود پروفایل

1. URL اصلی Worker خود را در Safari باز کنید (بدون `/dns-query`)
   ```
   https://your-worker.workers.dev
   ```
2. در صفحه نمایش داده شده، روی دکمه **🍎 دانلود پروفایل iOS/macOS** کلیک کنید
3. یک فایل با پسوند `.mobileconfig` دانلود می‌شود

#### گام 2: نصب در iOS/iPadOS

1. بعد از دانلود، پیغامی نمایش داده می‌شود که پروفایل دانلود شده است
2. به **Settings** بروید
3. در بالای صفحه Settings، گزینه **Profile Downloaded** را خواهید دید - روی آن بزنید
4. روی **Install** کلیک کنید
5. رمز عبور دستگاه خود را وارد کنید
6. دوباره روی **Install** بزنید (در بالای صفحه)
7. روی **Install** در پنجره تأیید نهایی بزنید
8. پروفایل نصب شد! روی **Done** بزنید

**مسیر دیگر برای نصب:**
- Settings → General → VPN, DNS & Device Management → Downloaded Profile → Install

#### گام 3: نصب در macOS

1. فایل `.mobileconfig` دانلود شده را ذخیره کنید
2. به **System Settings** بروید
3. در sidebar، روی **Privacy & Security** کلیک کنید
4. به پایین اسکرول کنید و **Profiles** را پیدا کنید
5. در بخش Downloaded، پروفایل دانلود شده را خواهید دید
6. روی پروفایل دابل کلیک کنید
7. محتویات پروفایل را بررسی کنید و روی **Install** کلیک کنید
8. رمز عبور macOS خود را وارد کنید
9. پروفایل نصب می‌شود

#### بررسی نصب موفق:

**iOS/iPadOS:**
- Settings → General → VPN, DNS & Device Management → DNS
- باید "Anonymous DoH Proxy" را در لیست ببینید

**macOS:**
- System Settings → Privacy & Security → Profiles
- پروفایل "Anonymous DoH Proxy" باید در لیست باشد

#### حذف پروفایل (در صورت نیاز):

**iOS/iPadOS:**
- Settings → General → VPN, DNS & Device Management → DNS
- روی پروفایل بزنید → Remove Profile

**macOS:**
- System Settings → Privacy & Security → Profiles
- پروفایل را انتخاب کنید → روی منفی (-) بزنید

### کلاینت‌های Xray (v2rayNG, v2rayN, Nekoray و مشابه)

برای کاربرانی که می‌خواهند از DoH Proxy در کلاینت‌های مبتنی بر Xray استفاده کنند:

#### گام 1: دانلود کانفیگ

فایل کانفیگ را از یکی از این روش‌ها دریافت کنید:

**روش 1:** دانلود مستقیم از GitHub:
```
https://raw.githubusercontent.com/4n0nymou3/cloudflare-doh-proxy/refs/heads/main/xray-doh-proxy-client-config.jsonc
```

**روش 2:** کپی کردن دستی:

```json
{
  "remarks": "🛡️ Anonymous DoH Proxy",
  "log": {
    "loglevel": "warning"
  },
  "dns": {
    "servers": [
      {
        "address": "**********"
      }
    ],
    "queryStrategy": "UseIP"
  },
  "inbounds": [
    {
      "port": 10808,
      "listen": "127.0.0.1",
      "protocol": "socks",
      "settings": {
        "auth": "noauth",
        "udp": true
      },
      "sniffing": {
        "enabled": true,
        "destOverride": [
          "http",
          "tls"
        ]
      }
    },
    {
      "port": 10809,
      "listen": "127.0.0.1",
      "protocol": "http",
      "settings": {},
      "sniffing": {
        "enabled": true,
        "destOverride": [
          "http",
          "tls"
        ]
      }
    }
  ],
  "outbounds": [
    {
      "protocol": "freedom",
      "settings": {
        "domainStrategy": "UseIP"
      },
      "tag": "direct"
    }
  ],
  "routing": {
    "domainStrategy": "AsIs",
    "rules": [
      {
        "type": "field",
        "outboundTag": "direct",
        "network": "udp,tcp"
      }
    ]
  }
}
```

#### گام 2: ویرایش کانفیگ

1. فایل JSON را با یک text editor باز کنید
2. در قسمت `"address": "**********"` عبارت `**********` را با URL DoH Proxy خود جایگزین کنید
3. مثال:
   ```json
   "address": "https://my-doh-proxy.workers.dev/dns-query"
   ```
4. فایل را ذخیره کنید

#### گام 3: Import در کلاینت

**در v2rayNG (Android):**
1. v2rayNG را باز کنید
2. روی آیکون `+` در گوشه بالا بزنید
3. **Import config from file** را انتخاب کنید
4. فایل JSON ویرایش شده را انتخاب کنید
5. کانفیگ اضافه می‌شود و می‌توانید به آن متصل شوید

**در v2rayN (Windows):**
1. v2rayN را باز کنید
2. **Servers** → **Import bulk URL from clipboard** یا **Import config from file**
3. فایل JSON را انتخاب کنید
4. کانفیگ را انتخاب کرده و Connect بزنید

**در Nekoray:**
1. Nekoray را باز کنید
2. **Program** → **Add profile from clipboard** یا Import
3. محتوای JSON را paste کنید یا فایل را import کنید

#### ⚠️ نکات مهم برای استفاده از کانفیگ Xray:

1. **این کانفیگ فقط DNS را امن می‌کند**:
   - DNS queries شما رمزنگاری می‌شوند
   - ولی ترافیک اینترنت شما رمزنگاری نمی‌شود
   - برای دسترسی به سایت‌های فیلتر شده، هنوز نیاز به VPN دارید

2. **استفاده در ایران**:
   - این روش برای دور زدن فیلترینگ DNS-based مفید است
   - سایت‌هایی که فقط DNS شان فیلتر شده باز می‌شوند
   - برای سایت‌های با فیلترینگ پیچیده‌تر کافی نیست

3. **تنظیمات پورت**:
   - SOCKS5 proxy در پورت `10808`
   - HTTP proxy در پورت `10809`
   - اگر این پورت‌ها اشغال هستند، می‌توانید آن‌ها را تغییر دهید

4. **سازگاری**:
   - این کانفیگ با تمام کلاینت‌های مبتنی بر Xray سازگار است
   - برای دستگاه‌های قدیمی‌تر هم کار می‌کند

### Windows 11

1. **Settings** را باز کنید (کلید Windows + I)
2. به **Network & Internet** بروید
3. روی اتصال فعال خود کلیک کنید (WiFi یا Ethernet)
4. روی **Properties** کلیک کنید
5. به پایین اسکرول کنید تا **DNS server assignment** را ببینید
6. روی **Edit** کلیک کنید
7. از منو **Preferred DNS encryption** گزینه **Encrypted only (DNS over HTTPS)** را انتخاب کنید
8. در قسمت **Preferred DNS** آدرس `1.1.1.1` را وارد کنید
9. در قسمت **Preferred DNS over HTTPS template** URL خود را وارد کنید:
   ```
   https://your-worker.workers.dev/dns-query
   ```
10. روی **Save** کلیک کنید

### Windows 10

Windows 10 به صورت پیش‌فرض از DoH پشتیبانی نمی‌کند. می‌توانید:

- از مرورگر Firefox یا Chrome استفاده کنید
- از کانفیگ Xray در v2rayN استفاده کنید
- یا به Windows 11 ارتقا دهید

### Linux

برای لینوکس می‌توانید:

- از ابزارهایی مثل `dnscrypt-proxy` استفاده کنید
- DoH را در مرورگر تنظیم کنید
- از کلاینت‌های Xray مثل v2rayA استفاده کنید

## 🔍 مرحله پنجم: بررسی عملکرد

### بررسی اینکه DoH فعال است:

1. به سایت [https://1.1.1.1/help](https://1.1.1.1/help) بروید
2. در قسمت **DNS over HTTPS (DoH)** باید **Yes** ببینید
3. اگر **Yes** نوشته شد، تبریک! DoH شما فعال است 🎉

### بررسی سرعت و عملکرد:

1. چند سایت مختلف را باز کنید
2. باید تفاوت قابل توجهی در سرعت نبینید
3. اگر سایت‌ها باز نمی‌شوند، به بخش عیب‌یابی بروید

## 🛠️ عیب‌یابی

### مشکل: صفحه Worker "404 Not Found" نشان می‌دهد

**راه‌حل:**

- مطمئن شوید که Worker به درستی Deploy شده است
- Worker را مجدداً Deploy کنید
- چند دقیقه صبر کنید (گاهی تغییرات کمی زمان می‌برند)

### مشکل: سایت‌ها باز نمی‌شوند

**راه‌حل:**

1. DoH را موقتاً غیرفعال کنید
2. مطمئن شوید اتصال اینترنت شما کار می‌کند
3. URL DoH را دوباره چک کنید (باید دقیقاً `/dns-query` در انتها داشته باشد)
4. مرورگر را ببندید و دوباره باز کنید
5. Cache DNS سیستم را پاک کنید:
   - Windows: `ipconfig /flushdns`
   - Mac/Linux: `sudo dscacheutil -flushcache`

### مشکل: Worker خطای "Rate limit exceeded" می‌دهد

**راه‌حل:**

- این نرمال است اگر بیش از 100 درخواست در دقیقه داشته باشید
- یک دقیقه صبر کنید و دوباره امتحان کنید
- اگر مشکل ادامه دارد، Rate Limit را در کد Worker افزایش دهید

### مشکل: در Intra وقتی ON می‌کنم، اتصال قطع می‌شود

**راه‌حل:**

1. Intra را ببندید و دوباره باز کنید
2. مطمئن شوید URL را صحیح وارد کرده‌اید
3. اگر مشکل ادامه داشت، به جای Custom URL از Cloudflare (1.1.1.1) استفاده کنید

### مشکل: پروفایل iOS/macOS دانلود نمی‌شود

**راه‌حل:**

1. مطمئن شوید که از Safari استفاده می‌کنید (نه Chrome یا Firefox)
2. Worker را مجدداً Deploy کنید
3. Cache مرورگر را پاک کنید و دوباره امتحان کنید
4. اگر مشکل ادامه داشت، فایل را دستی دانلود کرده و سپس نصب کنید

### مشکل: پروفایل iOS نصب نمی‌شود

**راه‌حل:**

1. مطمئن شوید که دستگاه شما به اینترنت متصل است
2. تنظیمات → General → About → Certificate Trust Settings را چک کنید
3. اگر پیغام خطا دریافت کردید، دستگاه را Restart کنید
4. دوباره تلاش کنید

### مشکل: کانفیگ Xray متصل نمی‌شود

**راه‌حل:**

1. مطمئن شوید URL DoH را صحیح وارد کرده‌اید
2. فرمت JSON را بررسی کنید (نباید خطای Syntax داشته باشد)
3. پورت‌های 10808 و 10809 را چک کنید که اشغال نباشند
4. کلاینت را ببندید و دوباره باز کنید

## 📊 مدیریت و نگهداری

### بررسی آمار استفاده:

1. به داشبورد Cloudflare بروید
2. Workers & Pages → Worker خود را انتخاب کنید
3. در تب **Metrics** می‌توانید آمار را ببینید:
   - تعداد درخواست‌ها
   - خطاها
   - مدت زمان اجرا
   - استفاده از CPU

### به‌روزرسانی Worker:

اگر نسخه جدیدی از کد منتشر شد:

1. به بخش Workers بروید
2. Worker خود را انتخاب کنید
3. **Quick Edit** یا **Edit Code** را کلیک کنید
4. کد جدید را جایگزین کنید
5. **Save and Deploy** را بزنید

### حذف Worker (در صورت نیاز):

1. به داشبورد Workers بروید
2. Worker خود را پیدا کنید
3. روی منوی سه نقطه (⋯) کلیک کنید
4. **Delete** را انتخاب کنید
5. تأیید کنید

## 🔐 نکات امنیتی

### توصیه‌های امنیتی:

- ✅ URL Worker خود را با کسی به اشتراک نگذارید
- ✅ به صورت دوره‌ای آمار Worker را چک کنید
- ✅ اگر مصرف غیرعادی دیدید، Worker را موقتاً غیرفعال کنید
- ✅ از HTTPS برای تمام سایت‌ها استفاده کنید
- ✅ DoH جایگزین VPN نیست - برای امنیت کامل از VPN استفاده کنید
- ⚠️ کانفیگ Xray فقط DNS را امن می‌کند، نه ترافیک شما

---

🎉 **تبریک! شما با موفقیت DoH Proxy شخصی خود را راه‌اندازی کردید!**

برای اینترنت آزادتر و امن‌تر 🔒
