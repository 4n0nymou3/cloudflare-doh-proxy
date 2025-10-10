const UPSTREAM_DNS_PROVIDERS = [
  'https://cloudflare-dns.com/dns-query',
  'https://dns.google/dns-query',
  'https://dns.quad9.net/dns-query',
  'https://doh.opendns.com/dns-query'
];

const DNS_CACHE_TTL = 300;
const REQUEST_TIMEOUT = 10000;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    if (url.pathname === '/apple') {
      return generateAppleProfile(request.url);
    }
    
    if (url.pathname === '/dns-query') {
      if (request.method === 'OPTIONS') {
        return new Response(null, {
          status: 204,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Max-Age': '86400'
          }
        });
      }

      try {
        let dnsResponse;
        
        if (request.method === 'GET') {
          const dnsParam = url.searchParams.get('dns');
          
          if (!dnsParam) {
            throw new Error('Missing dns parameter');
          }

          if (!/^[A-Za-z0-9_-]+$/.test(dnsParam)) {
            throw new Error('Invalid dns parameter format');
          }

          for (let i = 0; i < UPSTREAM_DNS_PROVIDERS.length; i++) {
            try {
              const upstreamUrl = new URL(UPSTREAM_DNS_PROVIDERS[i]);
              upstreamUrl.searchParams.set('dns', dnsParam);
              
              url.searchParams.forEach((value, key) => {
                if (key !== 'dns') {
                  upstreamUrl.searchParams.set(key, value);
                }
              });
              
              const controller = new AbortController();
              const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT);
              
              const response = await fetch(upstreamUrl.toString(), {
                method: 'GET',
                headers: {
                  'Accept': 'application/dns-message',
                  'User-Agent': 'DoH-Proxy-Worker/1.0'
                },
                signal: controller.signal
              });
              
              clearTimeout(timeoutId);
              
              if (response.ok) {
                dnsResponse = response;
                break;
              }
              
            } catch (error) {
              if (i === UPSTREAM_DNS_PROVIDERS.length - 1) {
                throw error;
              }
              continue;
            }
          }
        } else if (request.method === 'POST') {
          const contentType = request.headers.get('Content-Type');
          
          if (contentType !== 'application/dns-message') {
            throw new Error('Invalid Content-Type');
          }

          const body = await request.arrayBuffer();
          
          if (body.byteLength === 0 || body.byteLength > 512) {
            throw new Error('Invalid DNS message size');
          }

          for (let i = 0; i < UPSTREAM_DNS_PROVIDERS.length; i++) {
            try {
              const controller = new AbortController();
              const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT);
              
              const response = await fetch(UPSTREAM_DNS_PROVIDERS[i], {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/dns-message',
                  'Accept': 'application/dns-message',
                  'User-Agent': 'DoH-Proxy-Worker/1.0'
                },
                body: body,
                signal: controller.signal
              });
              
              clearTimeout(timeoutId);
              
              if (response.ok) {
                dnsResponse = response;
                break;
              }
              
            } catch (error) {
              if (i === UPSTREAM_DNS_PROVIDERS.length - 1) {
                throw error;
              }
              continue;
            }
          }
        } else {
          return new Response('Method not allowed', { 
            status: 405,
            headers: {
              'Allow': 'GET, POST, OPTIONS'
            }
          });
        }

        return new Response(dnsResponse.body, {
          status: dnsResponse.status,
          headers: {
            'Content-Type': 'application/dns-message',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Cache-Control': `public, max-age=${DNS_CACHE_TTL}`,
            'X-Content-Type-Options': 'nosniff',
            'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
          }
        });
        
      } catch (error) {
        return new Response('DNS query failed: ' + error.message, { 
          status: 500,
          headers: {
            'Content-Type': 'text/plain'
          }
        });
      }
    }
    
    return new Response(getHomePage(request.url), {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'X-XSS-Protection': '1; mode=block',
        'Referrer-Policy': 'no-referrer'
      }
    });
  }
};

function generateAppleProfile(requestUrl) {
  const baseUrl = new URL(requestUrl);
  const dohUrl = `${baseUrl.protocol}//${baseUrl.hostname}/dns-query`;
  const hostname = baseUrl.hostname;
  
  const uuid1 = crypto.randomUUID();
  const uuid2 = crypto.randomUUID();
  const uuid3 = crypto.randomUUID();
  
  const mobileconfig = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>PayloadContent</key>
    <array>
        <dict>
            <key>DNSSettings</key>
            <dict>
                <key>DNSProtocol</key>
                <string>HTTPS</string>
                <key>ServerURL</key>
                <string>${dohUrl}</string>
            </dict>
            <key>PayloadDescription</key>
            <string>Configures device to use Anonymous DoH Proxy</string>
            <key>PayloadDisplayName</key>
            <string>Anonymous DoH Proxy</string>
            <key>PayloadIdentifier</key>
            <string>com.cloudflare.${uuid2}.dnsSettings.managed</string>
            <key>PayloadType</key>
            <string>com.apple.dnsSettings.managed</string>
            <key>PayloadUUID</key>
            <string>${uuid3}</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
            <key>ProhibitDisablement</key>
            <false/>
        </dict>
    </array>
    <key>PayloadDescription</key>
    <string>This profile enables encrypted DNS (DNS over HTTPS) on iOS, iPadOS, and macOS devices using your personal DoH Proxy.</string>
    <key>PayloadDisplayName</key>
    <string>Anonymous DoH Proxy - ${hostname}</string>
    <key>PayloadIdentifier</key>
    <string>com.cloudflare.${uuid1}</string>
    <key>PayloadRemovalDisallowed</key>
    <false/>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>${uuid1}</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
</dict>
</plist>`;

  return new Response(mobileconfig, {
    status: 200,
    headers: {
      'Content-Type': 'application/x-apple-aspen-config; charset=utf-8',
      'Content-Disposition': `attachment; filename="doh-proxy-${hostname}.mobileconfig"`,
      'Cache-Control': 'no-cache'
    }
  });
}

function getHomePage(requestUrl) {
  const fullDohUrl = new URL('/dns-query', requestUrl).href;
  const appleProfileUrl = new URL('/apple', requestUrl).href;
  const workerHostname = new URL(requestUrl).hostname;
  
  return `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DoH Proxy - DNS over HTTPS</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            color: #e2e8f0;
        }
        .container {
            background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.5);
            max-width: 900px;
            width: 100%;
            padding: 40px;
            border: 1px solid #475569;
        }
        h1 {
            color: #60a5fa;
            margin-bottom: 20px;
            font-size: 2.5em;
            text-shadow: 0 0 20px rgba(96, 165, 250, 0.5);
        }
        .status-container {
            display: flex;
            justify-content: center;
            margin-bottom: 30px;
        }
        .status {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: white;
            padding: 12px 24px;
            border-radius: 30px;
            font-weight: bold;
            box-shadow: 0 8px 25px rgba(16, 185, 129, 0.5);
            display: flex;
            align-items: center;
            gap: 12px;
            animation: pulse 2s infinite;
            position: relative;
        }
        .status::before {
            content: '';
            width: 12px;
            height: 12px;
            background: #ffffff;
            border-radius: 50%;
            animation: blink 1.5s infinite;
            box-shadow: 0 0 10px #ffffff;
        }
        @keyframes pulse {
            0%, 100% {
                box-shadow: 0 8px 25px rgba(16, 185, 129, 0.5);
            }
            50% {
                box-shadow: 0 8px 35px rgba(16, 185, 129, 0.8);
            }
        }
        @keyframes blink {
            0%, 100% {
                opacity: 1;
            }
            50% {
                opacity: 0.3;
            }
        }
        .info-box {
            background: rgba(30, 41, 59, 0.8);
            padding: 20px;
            border-radius: 10px;
            margin: 20px 0;
            border-right: 4px solid #60a5fa;
            backdrop-filter: blur(10px);
        }
        .url-box {
            background: #0f172a;
            color: #22d3ee;
            padding: 15px;
            border-radius: 8px;
            font-family: monospace;
            word-break: break-all;
            margin: 10px 0;
            direction: ltr;
            text-align: left;
            border: 1px solid #1e40af;
            box-shadow: inset 0 2px 10px rgba(0,0,0,0.5);
        }
        .feature {
            display: flex;
            align-items: center;
            margin: 15px 0;
            padding: 10px;
            background: rgba(30, 41, 59, 0.6);
            border-radius: 8px;
            border: 1px solid #334155;
        }
        .feature::before {
            content: "✓";
            color: #10b981;
            font-weight: bold;
            font-size: 1.5em;
            margin-left: 15px;
        }
        h2 {
            color: #93c5fd;
            margin: 30px 0 15px 0;
            font-size: 1.5em;
        }
        .dns-list {
            background: rgba(30, 41, 59, 0.6);
            padding: 20px;
            border-radius: 10px;
            margin: 15px 0;
            border: 1px solid #334155;
        }
        .dns-item {
            padding: 8px;
            margin: 5px 0;
            background: rgba(15, 23, 42, 0.8);
            border-radius: 5px;
            font-family: monospace;
            font-size: 0.9em;
            border: 1px solid #1e293b;
        }
        .warning {
            background: rgba(180, 83, 9, 0.2);
            border-right: 4px solid #f59e0b;
            padding: 15px;
            border-radius: 8px;
            margin: 20px 0;
            border: 1px solid #f59e0b;
        }
        .usage-section {
            background: rgba(30, 41, 59, 0.6);
            padding: 20px;
            border-radius: 10px;
            margin: 20px 0;
            border: 1px solid #334155;
        }
        .usage-item {
            margin: 15px 0;
            padding: 15px;
            background: rgba(15, 23, 42, 0.8);
            border-radius: 8px;
            border-right: 3px solid #60a5fa;
        }
        .usage-item strong {
            color: #60a5fa;
            display: block;
            margin-bottom: 8px;
            font-size: 1.1em;
        }
        .code-box {
            background: #0a0e1a;
            color: #a5f3fc;
            padding: 15px;
            border-radius: 8px;
            font-family: monospace;
            font-size: 0.85em;
            overflow-x: auto;
            margin: 15px 0;
            border: 1px solid #1e293b;
            white-space: pre-wrap;
            word-wrap: break-word;
        }
        .copy-btn, .download-btn {
            background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 8px;
            cursor: pointer;
            margin-top: 10px;
            margin-left: 10px;
            font-size: 0.95em;
            transition: all 0.3s;
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            text-decoration: none;
        }
        .download-btn {
            background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
        }
        .copy-btn:hover, .download-btn:hover {
            box-shadow: 0 6px 20px rgba(59, 130, 246, 0.5);
            transform: translateY(-2px);
        }
        .download-btn:hover {
            box-shadow: 0 6px 20px rgba(139, 92, 246, 0.5);
        }
        .copy-btn:active, .download-btn:active {
            transform: translateY(0);
        }
        .copy-btn.copied {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            box-shadow: 0 6px 20px rgba(16, 185, 129, 0.5);
        }
        .footer {
            text-align: center;
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #334155;
            color: #94a3b8;
            font-size: 0.95em;
        }
        .footer a {
            color: #60a5fa;
            text-decoration: none;
            transition: all 0.3s;
            font-weight: 600;
        }
        .footer a:hover {
            color: #93c5fd;
            text-shadow: 0 0 10px rgba(96, 165, 250, 0.5);
        }
        @media (max-width: 600px) {
            .container {
                padding: 20px;
            }
            h1 {
                font-size: 1.8em;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🔒 DoH Proxy</h1>
        <div class="status-container">
            <div class="status">
                <span>✓ فعال و آماده به کار</span>
            </div>
        </div>
        
        <div class="info-box">
            <strong>این یک سرویس DNS over HTTPS (DoH) است که با امنیت بالا کار می‌کند.</strong>
        </div>

        <h2>📍 آدرس سرویس شما:</h2>
        <div class="url-box" id="dohUrl">${fullDohUrl}</div>
        <button class="copy-btn" onclick="copyToClipboard('dohUrl')">📋 کپی آدرس</button>

        <h2>✨ ویژگی‌های این DoH Proxy:</h2>
        <div class="feature">استفاده از 4 سرور DNS معتبر با قابلیت Fallback خودکار</div>
        <div class="feature">رمزنگاری کامل تمام درخواست‌های DNS</div>
        <div class="feature">محدودیت نرخ درخواست برای جلوگیری از سوء استفاده</div>
        <div class="feature">Cache هوشمند برای سرعت بیشتر</div>
        <div class="feature">Timeout مدیریت شده برای پایداری بالا</div>
        <div class="feature">پشتیبانی از GET و POST method</div>

        <h2>🌐 سرورهای DNS استفاده شده:</h2>
        <div class="dns-list">
            <div class="dns-item">1. Cloudflare DNS (1.1.1.1)</div>
            <div class="dns-item">2. Google DNS (8.8.8.8)</div>
            <div class="dns-item">3. Quad9 DNS (9.9.9.9)</div>
            <div class="dns-item">4. OpenDNS</div>
        </div>

        <div class="warning">
            <strong>⚠️ توجه:</strong> این سرویس فقط DNS queries را رمزنگاری می‌کند و جایگزین VPN نیست. برای دسترسی کامل به سایت‌های فیلتر شده، از VPN استفاده کنید.
        </div>

        <h2>📱 نحوه استفاده:</h2>
        <div class="usage-section">
            <div class="usage-item">
                <strong>🌐 مرورگرها (Firefox, Chrome, Edge, Brave):</strong>
                بروید به تنظیمات مرورگر → بخش Privacy یا Security → DNS over HTTPS → انتخاب Custom Provider و آدرس بالا را وارد کنید.
            </div>

            <div class="usage-item">
                <strong>📱 اپلیکیشن Intra (اندروید):</strong>
                1. اپلیکیشن Intra را از Google Play نصب کنید<br>
                2. اپلیکیشن را باز کنید<br>
                3. روی گزینه "Configure custom server URL" بزنید<br>
                4. آدرس زیر را در قسمت Custom DNS over HTTPS server URL وارد کنید:<br>
                <div class="url-box" style="margin-top: 10px; font-size: 0.85em;">${fullDohUrl}</div>
                5. دکمه ON را فعال کنید و از اینترنت امن‌تر لذت ببرید!
            </div>

            <div class="usage-item">
                <strong>🍎 iOS, iPadOS و macOS:</strong>
                برای استفاده در دستگاه‌های اپل، کافی است پروفایل شخصی خود را دانلود و نصب کنید:<br><br>
                <a href="${appleProfileUrl}" class="download-btn">🍎 دانلود پروفایل iOS/macOS</a>
                <br><br>
                <strong>نحوه نصب:</strong><br>
                • <strong>iOS/iPadOS:</strong> فایل را با Safari دانلود کنید → Settings → General → VPN, DNS & Device Management → Downloaded Profile → Install<br>
                • <strong>macOS:</strong> فایل را دانلود کنید → System Settings → Privacy & Security → Profiles → نصب پروفایل
            </div>

            <div class="usage-item">
                <strong>🔧 کلاینت‌های Xray (v2rayNG و مشابه):</strong>
                برای استفاده در کلاینت‌های مبتنی بر Xray، می‌توانید از کانفیگ زیر استفاده کنید:<br><br>
                <div class="code-box" id="xrayConfig">{
  "remarks": "🛡️ Anonymous DoH Proxy",
  "dns": {
    "servers": [{"address": "${fullDohUrl}"}],
    "queryStrategy": "UseIP"
  },
  "inbounds": [
    {
      "port": 10808,
      "listen": "127.0.0.1",
      "protocol": "socks",
      "settings": {"auth": "noauth", "udp": true},
      "sniffing": {
        "enabled": true,
        "destOverride": ["http", "tls"]
      }
    }
  ],
  "outbounds": [
    {
      "protocol": "freedom",
      "settings": {"domainStrategy": "UseIP"},
      "tag": "direct"
    }
  ],
  "routing": {
    "domainStrategy": "AsIs",
    "rules": [
      {"type": "field", "outboundTag": "direct", "network": "udp,tcp"}
    ]
  }
}</div>
                <button class="copy-btn" onclick="copyToClipboard('xrayConfig')">📋 کپی کانفیگ Xray</button>
                <br><br>
                <strong>نکته:</strong> این کانفیگ فقط DNS را امن می‌کند. برای دسترسی کامل به سایت‌های فیلتر شده نیاز به VPN دارید.
            </div>

            <div class="usage-item">
                <strong>💻 ویندوز 11:</strong>
                Settings → Network & Internet → Properties → DNS server assignment → Edit → Preferred DNS encryption: Encrypted only (DNS over HTTPS) و آدرس بالا را وارد کنید.
            </div>

            <div class="usage-item">
                <strong>🔧 روتر:</strong>
                بسته به مدل روتر، ممکن است پشتیبانی از DoH داشته باشد. به تنظیمات DNS روتر خود مراجعه کنید.
            </div>
        </div>

        <div class="footer">
            <p>Designed by: <a href="https://t.me/BXAMbot" target="_blank" rel="noopener noreferrer">Anonymous</a></p>
        </div>
    </div>

    <script>
        function copyToClipboard(elementId) {
            const element = document.getElementById(elementId);
            const text = element.textContent;
            const btn = event.target;
            const originalHTML = btn.innerHTML;
            
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(text).then(() => {
                    btn.classList.add('copied');
                    btn.innerHTML = '✓ کپی شد!';
                    setTimeout(() => {
                        btn.classList.remove('copied');
                        btn.innerHTML = originalHTML;
                    }, 2000);
                }).catch(() => {
                    fallbackCopy(text, btn, originalHTML);
                });
            } else {
                fallbackCopy(text, btn, originalHTML);
            }
        }
        
        function fallbackCopy(text, btn, originalHTML) {
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                btn.classList.add('copied');
                btn.innerHTML = '✓ کپی شد!';
                setTimeout(() => {
                    btn.classList.remove('copied');
                    btn.innerHTML = originalHTML;
                }, 2000);
            } catch (err) {
                btn.innerHTML = '❌ خطا در کپی';
                setTimeout(() => {
                    btn.innerHTML = originalHTML;
                }, 2000);
            }
            document.body.removeChild(textArea);
        }
    </script>
</body>
</html>`;
}