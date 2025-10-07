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

1. فایل [`worker.js`](../worker.js) را از repository باز کنید
2. روی دکمه **Raw** کلیک کنید (در GitHub)
3. تمام محتوا را با `Ctrl+A` انتخاب کنید
4. با `Ctrl+C` کپی کنید
5. به ویرایشگر Cloudflare برگردید
6. با `Ctrl+V` کد را Paste کنید

### گام 5: ذخیره و Deploy

1. روی دکمه **Save and Deploy** کلیک کنید
2. منتظر بمانید تا Worker به روز شود (معمولاً چند ثانیه طول می‌کشد)
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
- یا به Windows 11 ارتقا دهید

### macOS

macOS به صورت native از DoH پشتیبانی محدود دارد. بهترین روش:

- استفاده از مرورگر Firefox یا Chrome با تنظیمات DoH
- یا استفاده از اپلیکیشن‌های شخص ثالث مثل DNSCrypt

### iOS / iPadOS

iOS نیاز به نصب پروفایل DoH دارد که پیچیده است. بهترین روش:

- استفاده از مرورگر Firefox Focus یا Brave که DoH داخلی دارند
- یا استفاده از اپلیکیشن‌های VPN که DoH را پشتیبانی می‌کنند

### Linux

برای لینوکس می‌توانید از ابزارهایی مثل `dnscrypt-proxy` استفاده کنید یا DoH را در مرورگر تنظیم کنید.

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

## 🆘 دریافت کمک

اگر با مشکلی مواجه شدید:

1. ابتدا این راهنما و بخش عیب‌یابی را کامل بخوانید
2. در [GitHub Issues](https://github.com/yourusername/cloudflare-doh-proxy/issues) جستجو کنید
3. اگر مشکل شما قبلاً گزارش نشده، یک Issue جدید باز کنید
4. اطلاعات زیر را در Issue قرار دهید:
   - سیستم عامل و نسخه
   - مرورگر یا اپلیکیشن
   - پیام خطای دقیق
   - مراحلی که انجام داده‌اید

## 📚 منابع بیشتر

- [مستندات رسمی Cloudflare Workers](https://developers.cloudflare.com/workers/)
- [RFC 8484 - DNS Queries over HTTPS](https://datatracker.ietf.org/doc/html/rfc8484)
- [راهنمای امنیت DNS](https://www.cloudflare.com/learning/dns/dns-security/)
- [مستندات Intra](https://getintra.org/)

---

🎉 **تبریک! شما با موفقیت DoH Proxy شخصی خود را راه‌اندازی کردید!**

برای اینترنت آزادتر و امن‌تر 🔒
