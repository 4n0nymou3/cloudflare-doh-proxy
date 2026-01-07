const UPSTREAM_DNS_PROVIDERS = [
  { url: 'https://odoh.cloudflare-dns.com/dns-query', priority: 1, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'odoh.cloudflare-dns.com' },
  { url: 'https://cloudflare-dns.com/dns-query', priority: 2, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'www.cloudflare.com' },
  { url: 'https://dns.google/dns-query', priority: 3, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'www.google.com' },
  { url: 'https://dns.quad9.net/dns-query', priority: 4, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'www.quad9.net' },
  { url: 'https://doh.opendns.com/dns-query', priority: 5, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'www.opendns.com' },
  { url: 'https://1.1.1.1/dns-query', priority: 6, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'one.one.one.one' },
  { url: 'https://1.0.0.1/dns-query', priority: 7, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'one.one.one.one' },
  { url: 'https://dns64.dns.google/dns-query', priority: 8, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns64.dns.google' },
  { url: 'https://dns.adguard-dns.com/dns-query', priority: 9, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.adguard-dns.com' },
  { url: 'https://unfiltered.adguard-dns.com/dns-query', priority: 10, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'unfiltered.adguard-dns.com' },
  { url: 'https://dns.nextdns.io/dns-query', priority: 11, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.nextdns.io' },
  { url: 'https://doh.mullvad.net/dns-query', priority: 12, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.mullvad.net' },
  { url: 'https://adblock.doh.mullvad.net/dns-query', priority: 13, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'adblock.doh.mullvad.net' },
  { url: 'https://base.dns.mullvad.net/dns-query', priority: 14, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'base.dns.mullvad.net' },
  { url: 'https://doh.wikimedia.org/dns-query', priority: 15, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.wikimedia.org' },
  { url: 'https://doh.libredns.gr/dns-query', priority: 16, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.libredns.gr' },
  { url: 'https://dns.switch.ch/dns-query', priority: 17, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.switch.ch' },
  { url: 'https://dns.digitale-gesellschaft.ch/dns-query', priority: 18, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.digitale-gesellschaft.ch' },
  { url: 'https://doh.centraleu.pi-dns.com/dns-query', priority: 19, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.centraleu.pi-dns.com' },
  { url: 'https://doh.westus.pi-dns.com/dns-query', priority: 20, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.westus.pi-dns.com' },
  { url: 'https://doh.eastus.pi-dns.com/dns-query', priority: 21, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.eastus.pi-dns.com' },
  { url: 'https://dns.aa.net.uk/dns-query', priority: 22, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.aa.net.uk' },
  { url: 'https://doh.ffmuc.net/dns-query', priority: 23, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.ffmuc.net' },
  { url: 'https://doh.applied-privacy.net/query', priority: 24, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.applied-privacy.net' },
  { url: 'https://doh.dns.sb/dns-query', priority: 25, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.dns.sb' },
  { url: 'https://doh.pub/dns-query', priority: 26, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.pub' },
  { url: 'https://dns.alidns.com/dns-query', priority: 27, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.alidns.com' },
  { url: 'https://doh.360.cn/dns-query', priority: 28, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.360.cn' },
  { url: 'https://dns.twnic.tw/dns-query', priority: 29, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.twnic.tw' },
  { url: 'https://ordns.he.net/dns-query', priority: 30, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'ordns.he.net' },
  { url: 'https://doh.familyshield.opendns.com/dns-query', priority: 31, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.familyshield.opendns.com' },
  { url: 'https://dns.cfiec.net/dns-query', priority: 32, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.cfiec.net' },
  { url: 'https://doh.cleanbrowsing.org/doh/security-filter', priority: 33, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.cleanbrowsing.org' },
  { url: 'https://dns.brahma.world/dns-query', priority: 34, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.brahma.world' },
  { url: 'https://dns.dnshome.de/dns-query', priority: 35, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.dnshome.de' },
  { url: 'https://doh-fi.blahdns.com/dns-query', priority: 36, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh-fi.blahdns.com' },
  { url: 'https://doh-jp.blahdns.com/dns-query', priority: 37, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh-jp.blahdns.com' },
  { url: 'https://doh-de.blahdns.com/dns-query', priority: 38, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh-de.blahdns.com' },
  { url: 'https://doh-sg.blahdns.com/dns-query', priority: 39, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh-sg.blahdns.com' },
  { url: 'https://doh.tiar.app/dns-query', priority: 40, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.tiar.app' },
  { url: 'https://doh.tiarap.org/dns-query', priority: 41, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.tiarap.org' },
  { url: 'https://jp.tiar.app/dns-query', priority: 42, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'jp.tiar.app' },
  { url: 'https://jp.tiarap.org/dns-query', priority: 43, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'jp.tiarap.org' },
  { url: 'https://dns.containerpi.com/dns-query', priority: 44, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.containerpi.com' },
  { url: 'https://dns.rubyfish.cn/dns-query', priority: 45, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.rubyfish.cn' },
  { url: 'https://doh.armadillodns.net/dns-query', priority: 46, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.armadillodns.net' },
  { url: 'https://commons.host/dns-query', priority: 47, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'commons.host' },
  { url: 'https://doh.crypto.sx/dns-query', priority: 48, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.crypto.sx' },
  { url: 'https://dns.dnswarden.com/uncensored', priority: 49, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.dnswarden.com' },
  { url: 'https://resolver-eu.lelux.fi/dns-query', priority: 50, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'resolver-eu.lelux.fi' },
  { url: 'https://doh.bortzmeyer.fr/dns-query', priority: 51, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.bortzmeyer.fr' },
  { url: 'https://dns.oszx.co/dns-query', priority: 52, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.oszx.co' }
];

const DNS_CACHE_TTL_MIN = 60;
const DNS_CACHE_TTL_MAX = 3600;
const DNS_CACHE_TTL_DEFAULT = 300;
const REQUEST_TIMEOUT_MIN = 7000;
const REQUEST_TIMEOUT_MAX = 14000;
const MAX_RETRIES = 4;
const RATE_LIMIT_REQUESTS = 150;
const RATE_LIMIT_WINDOW = 60000;
const RATE_LIMIT_CLEANUP_INTERVAL = 120000;
const MAX_DNS_RESPONSE_SIZE = 4096;
const MAX_DNS_REQUEST_SIZE = 512;
const HEALTH_CHECK_INTERVAL = 180000;
const CIRCUIT_BREAKER_THRESHOLD = 4;
const CIRCUIT_BREAKER_TIMEOUT = 90000;
const MAX_CONCURRENT_REQUESTS = 80;
const RANDOM_DELAY_MIN = 20;
const RANDOM_DELAY_MAX = 200;
const DECOY_REQUEST_PROBABILITY = 0.25;

const dnsCache = new Map();
const rateLimitMap = new Map();
const pendingRequests = new Map();
const providerMetrics = new Map();
let lastCleanupTime = Date.now();
let lastHealthCheck = Date.now();
let concurrentRequests = 0;

const USER_AGENTS = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:132.0) Gecko/20100101 Firefox/132.0',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Safari/605.1.15',
  'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1',
  'Mozilla/5.0 (iPad; CPU OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1',
  'Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Edg/130.0.0.0'
];

const ACCEPT_LANGUAGES = [
  'en-US,en;q=0.9',
  'en-GB,en;q=0.9',
  'fa-IR,fa;q=0.9,en;q=0.8',
  'de-DE,de;q=0.9,en;q=0.8',
  'fr-FR,fr;q=0.9,en;q=0.8',
  'es-ES,es;q=0.9,en;q=0.8',
  'ja-JP,ja;q=0.9,en;q=0.8',
  'zh-CN,zh;q=0.9,en;q=0.8'
];

const REFERERS = [
  'https://www.google.com/',
  'https://www.youtube.com/',
  'https://www.bing.com/',
  'https://duckduckgo.com/',
  'https://www.wikipedia.org/',
  'https://news.google.com/',
  'https://www.cloudflare.com/',
  'https://x.com/',
  'https://www.instagram.com/',
  'https://www.reddit.com/',
  'https://www.github.com/'
];

const SEC_CH_UA = [
  '"Google Chrome";v="130", "Chromium";v="130", "Not=A?Brand";v="99"',
  '"Google Chrome";v="131", "Chromium";v="131", "Not=A?Brand";v="99"',
  '"Microsoft Edge";v="130", "Chromium";v="130", "Not=A?Brand";v="99"',
  '""Not/A)Brand";v="99", "Microsoft Edge";v="130", "Chromium";v="130"'
];

const SEC_CH_UA_PLATFORM = [
  '"Windows"',
  '"macOS"',
  '"Linux"',
  '"Android"',
  '"iOS"'
];

const SEC_CH_UA_MOBILE = ['?0', '?1'];

export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  if (url.pathname === '/apple') {
    return generateAppleProfile(request.url);
  }
  
  const clientIP = request.headers.get('CF-Connecting-IP') || 
                   request.headers.get('X-Forwarded-For')?.split(',')[0]?.trim() || 
                   request.headers.get('X-Real-IP') ||
                   'unknown';

  cleanupRateLimitMap();
  performHealthCheckIfNeeded();

  if (!checkRateLimit(clientIP)) {
    return new Response('Rate limit exceeded. Please try again later.', {
      status: 429,
      headers: {
        'Content-Type': 'text/plain',
        'Retry-After': '60',
        'Cache-Control': 'no-store'
      }
    });
  }

  if (concurrentRequests >= MAX_CONCURRENT_REQUESTS) {
    return new Response('Server busy. Please try again.', {
      status: 503,
      headers: {
        'Content-Type': 'text/plain',
        'Retry-After': '5',
        'Cache-Control': 'no-store'
      }
    });
  }

  if (url.pathname !== '/dns-query') {
    return new Response(getHomePage(request.url), {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'X-XSS-Protection': '1; mode=block',
        'Referrer-Policy': 'no-referrer',
        'Cache-Control': 'public, max-age=3600'
      }
    });
  }

  if (request.method === 'OPTIONS') {
    return handleOptions();
  }

  await addRandomDelay();

  concurrentRequests++;

  try {
    let dnsResponse;
    
    if (request.method === 'GET') {
      dnsResponse = await handleGetRequest(url);
    } else if (request.method === 'POST') {
      dnsResponse = await handlePostRequest(request);
    } else {
      return new Response('Method not allowed', { 
        status: 405,
        headers: {
          'Allow': 'GET, POST, OPTIONS',
          'Content-Type': 'text/plain'
        }
      });
    }

    if (!dnsResponse || !dnsResponse.body) {
      throw new Error('Invalid DNS response received');
    }

    const responseBody = await dnsResponse.arrayBuffer();
    
    if (responseBody.byteLength > MAX_DNS_RESPONSE_SIZE) {
      throw new Error('DNS response too large');
    }

    const cacheTTL = calculateDynamicTTL(responseBody);

    return new Response(responseBody, {
      status: 200,
      headers: {
        'Content-Type': 'application/dns-message',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Cache-Control': `public, max-age=${cacheTTL}`,
        'X-Content-Type-Options': 'nosniff',
        'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
        'X-DNS-Proxy': 'Cloudflare-Pages-Ultimate'
      }
    });
  } catch (error) {
    console.error('DNS query error:', error.message, {
      method: request.method,
      clientIP: clientIP,
      timestamp: new Date().toISOString()
    });

    return new Response('DNS query failed: ' + error.message, { 
      status: 500,
      headers: {
        'Content-Type': 'text/plain',
        'Cache-Control': 'no-store'
      }
    });
  } finally {
    concurrentRequests--;
  }
}

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
            <string>Configures device to use Ultimate Anonymous DoH Proxy with ODoH support</string>
            <key>PayloadDisplayName</key>
            <string>Ultimate Anonymous DoH Proxy</string>
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
    <string>This profile enables encrypted DNS (DNS over HTTPS) with ultimate anti-censorship and privacy features, including ODoH support.

Designed by: Anonymous - Ultimate 2026</string>
    <key>PayloadDisplayName</key>
    <string>Ultimate Anonymous DoH Proxy - ${hostname}</string>
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
      'Content-Disposition': `attachment; filename="ultimate-doh-proxy-${hostname}.mobileconfig"`,
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    }
  });
}

async function handleGetRequest(url) {
  const dnsParam = url.searchParams.get('dns');
  
  if (!dnsParam) {
    throw new Error('Missing dns parameter');
  }

  if (!isValidBase64Url(dnsParam)) {
    throw new Error('Invalid dns parameter format');
  }

  const cacheKey = `GET:${dnsParam}`;

  const pending = pendingRequests.get(cacheKey);
  if (pending) {
    return pending;
  }

  const cachedResponse = getCachedResponse(cacheKey);
  if (cachedResponse) {
    return new Response(cachedResponse, {
      status: 200,
      headers: { 'X-Cache': 'HIT' }
    });
  }

  const requestPromise = (async () => {
    try {
      const providers = getHealthySortedProviders();
      const response = await queryDNSWithRace(providers, (provider) => {
        const upstreamUrl = new URL(provider.url);
        upstreamUrl.searchParams.set('dns', dnsParam);
        
        url.searchParams.forEach((value, key) => {
          if (key !== 'dns') {
            upstreamUrl.searchParams.set(key, value);
          }
        });

        const timeout = calculateDynamicTimeout(provider);
        const headers = generateEnhancedHeaders(provider);

        return fetchWithTimeout(upstreamUrl.toString(), {
          method: 'GET',
          headers: headers
        }, timeout);
      });

      const responseBody = await response.arrayBuffer();
      setCachedResponse(cacheKey, responseBody);
      
      return new Response(responseBody, {
        status: 200,
        headers: { 'X-Cache': 'MISS' }
      });
    } finally {
      pendingRequests.delete(cacheKey);
    }
  })();

  pendingRequests.set(cacheKey, requestPromise);
  return requestPromise;
}

async function handlePostRequest(request) {
  const contentType = request.headers.get('Content-Type');
  if (contentType !== 'application/dns-message') {
    throw new Error('Invalid Content-Type. Expected application/dns-message');
  }

  const body = await request.arrayBuffer();
  
  if (body.byteLength === 0 || body.byteLength > MAX_DNS_REQUEST_SIZE) {
    throw new Error(`Invalid DNS message size: ${body.byteLength} bytes`);
  }

  const cacheKey = `POST:${arrayBufferToBase64(body)}`;

  const pending = pendingRequests.get(cacheKey);
  if (pending) {
    return pending;
  }

  const cachedResponse = getCachedResponse(cacheKey);
  if (cachedResponse) {
    return new Response(cachedResponse, {
      status: 200,
      headers: { 'X-Cache': 'HIT' }
    });
  }

  const requestPromise = (async () => {
    try {
      const providers = getHealthySortedProviders();
      const response = await queryDNSWithRace(providers, (provider) => {
        const timeout = calculateDynamicTimeout(provider);
        const headers = generateEnhancedHeaders(provider);
        headers['Content-Type'] = 'application/dns-message';
        headers['Content-Length'] = body.byteLength.toString();

        return fetchWithTimeout(provider.url, {
          method: 'POST',
          headers: headers,
          body: body
        }, timeout);
      });

      const responseBody = await response.arrayBuffer();
      setCachedResponse(cacheKey, responseBody);
      
      return new Response(responseBody, {
        status: 200,
        headers: { 'X-Cache': 'MISS' }
      });
    } finally {
      pendingRequests.delete(cacheKey);
    }
  })();

  pendingRequests.set(cacheKey, requestPromise);
  return requestPromise;
}

async function queryDNSWithRace(providers, fetchFunction) {
  const errors = [];
  
  if (Math.random() < DECOY_REQUEST_PROBABILITY) {
    sendDecoyRequest().catch(() => {});
  }
  
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    const availableProviders = providers.filter(p => !isCircuitBreakerOpen(p));
    
    if (availableProviders.length === 0) {
      await sleep(1000);
      continue;
    }

    const promises = availableProviders.map(async (provider) => {
      const startTime = Date.now();
      try {
        const response = await fetchFunction(provider);
        
        if (response.ok) {
          const contentType = response.headers.get('Content-Type');
          if (contentType && contentType.includes('application/dns-message')) {
            const duration = Date.now() - startTime;
            recordSuccess(provider, duration);
            return response;
          }
          throw new Error(`Invalid content type: ${contentType}`);
        }
        
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      } catch (error) {
        const duration = Date.now() - startTime;
        recordFailure(provider, duration);
        errors.push({
          provider: provider.url,
          attempt: attempt,
          error: error.message,
          duration: duration
        });
        throw error;
      }
    });

    try {
      return await Promise.any(promises);
    } catch (aggregateError) {
      if (attempt < MAX_RETRIES) {
        const backoffTime = Math.min(200 * Math.pow(2, attempt), 2500);
        await sleep(backoffTime);
        continue;
      }
    }
  }

  console.error('All DNS providers failed:', errors);
  throw new Error('All upstream DNS servers failed after retries');
}

async function fetchWithTimeout(url, options, timeout) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    });
    return response;
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error(`Request timeout after ${timeout}ms`);
    }
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}

function generateEnhancedHeaders(provider) {
  const headers = {
    'Accept': 'application/dns-message',
    'User-Agent': getRandomUserAgent(),
    'Accept-Language': getRandomElement(ACCEPT_LANGUAGES),
    'Accept-Encoding': 'gzip, deflate, br, zstd',
    'DNT': Math.random() > 0.5 ? '1' : '0',
    'Connection': 'keep-alive',
    'Upgrade-Insecure-Requests': '1',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'cross-site',
    'Sec-CH-UA': getRandomElement(SEC_CH_UA),
    'Sec-CH-UA-Mobile': getRandomElement(SEC_CH_UA_MOBILE),
    'Sec-CH-UA-Platform': getRandomElement(SEC_CH_UA_PLATFORM)
  };

  if (Math.random() > 0.3) {
    headers['Referer'] = getRandomElement(REFERERS);
  }

  if (Math.random() > 0.5 && provider.fronting) {
    headers['Host'] = provider.fronting;
  }

  if (Math.random() > 0.7) {
    headers['Cache-Control'] = 'no-cache, max-age=0';
  }

  if (Math.random() > 0.6) {
    headers['Pragma'] = 'no-cache';
  }

  return headers;
}

async function sendDecoyRequest() {
  const decoyProviders = [
    'https://www.google.com/robots.txt',
    'https://www.cloudflare.com/favicon.ico',
    'https://www.wikipedia.org/static/favicon/wikipedia.ico',
    'https://www.bing.com/favicon.ico',
    'https://news.google.com/robots.txt',
    'https://www.youtube.com/robots.txt',
    'https://x.com/robots.txt',
    'https://www.reddit.com/robots.txt',
    'https://www.github.com/robots.txt'
  ];

  const decoyUrl = getRandomElement(decoyProviders);
  const headers = {
    'User-Agent': getRandomUserAgent(),
    'Accept': '*/*',
    'Accept-Language': getRandomElement(ACCEPT_LANGUAGES),
    'Referer': getRandomElement(REFERERS),
    'Sec-CH-UA': getRandomElement(SEC_CH_UA),
    'Sec-CH-UA-Platform': getRandomElement(SEC_CH_UA_PLATFORM)
  };

  try {
    await fetchWithTimeout(decoyUrl, {
      method: 'GET',
      headers: headers
    }, 6000);
  } catch (e) {
  }
}

async function addRandomDelay() {
  const delay = Math.floor(Math.random() * (RANDOM_DELAY_MAX - RANDOM_DELAY_MIN + 1)) + RANDOM_DELAY_MIN;
  await sleep(delay);
}

function handleOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
      'Cache-Control': 'public, max-age=86400'
    }
  });
}

function checkRateLimit(clientIP) {
  const now = Date.now();
  const clientData = rateLimitMap.get(clientIP);
  
  if (!clientData) {
    rateLimitMap.set(clientIP, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW
    });
    return true;
  }
  
  if (now > clientData.resetTime) {
    rateLimitMap.set(clientIP, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW
    });
    return true;
  }
  
  if (clientData.count >= RATE_LIMIT_REQUESTS) {
    return false;
  }
  
  clientData.count++;
  return true;
}

function cleanupRateLimitMap() {
  const now = Date.now();
  
  if (now - lastCleanupTime < RATE_LIMIT_CLEANUP_INTERVAL) {
    return;
  }
  
  lastCleanupTime = now;
  
  for (const [clientIP, data] of rateLimitMap.entries()) {
    if (now > data.resetTime) {
      rateLimitMap.delete(clientIP);
    }
  }
  
  if (dnsCache.size > 2000) {
    const entriesToDelete = dnsCache.size - 1000;
    let deleted = 0;
    for (const key of dnsCache.keys()) {
      if (deleted >= entriesToDelete) break;
      dnsCache.delete(key);
      deleted++;
    }
  }

  pendingRequests.clear();
}

function getCachedResponse(key) {
  const cached = dnsCache.get(key);
  if (!cached) return null;
  
  if (Date.now() > cached.expiresAt) {
    dnsCache.delete(key);
    return null;
  }
  
  return cached.data;
}

function setCachedResponse(key, data) {
  const ttl = calculateDynamicTTL(data);
  const expiresAt = Date.now() + (ttl * 1000);
  dnsCache.set(key, { data, expiresAt });
}

function calculateDynamicTTL(responseData) {
  try {
    const view = new DataView(responseData);
    if (view.byteLength < 12) return DNS_CACHE_TTL_DEFAULT;
    
    const ancount = view.getUint16(6);
    
    if (ancount === 0) {
      return DNS_CACHE_TTL_MIN;
    }
    
    if (ancount > 8) {
      return DNS_CACHE_TTL_MAX;
    }
    
    return DNS_CACHE_TTL_DEFAULT;
  } catch (e) {
    return DNS_CACHE_TTL_DEFAULT;
  }
}

function getHealthySortedProviders() {
  return UPSTREAM_DNS_PROVIDERS
    .filter(p => p.healthScore > 20)
    .sort((a, b) => {
      const scoreA = a.healthScore / a.priority;
      const scoreB = b.healthScore / b.priority;
      return scoreB - scoreA;
    })
    .slice(0, 5);
}

function calculateDynamicTimeout(provider) {
  const baseTimeout = REQUEST_TIMEOUT_MIN;
  const healthPenalty = (100 - provider.healthScore) * 60;
  const timeout = Math.min(baseTimeout + healthPenalty, REQUEST_TIMEOUT_MAX);
  return timeout;
}

function recordSuccess(provider, duration) {
  provider.consecutiveFailures = 0;
  provider.healthScore = Math.min(100, provider.healthScore + 8);
  provider.lastCheck = Date.now();
  
  if (!providerMetrics.has(provider.url)) {
    providerMetrics.set(provider.url, { successes: 0, failures: 0, avgDuration: 0 });
  }
  
  const metrics = providerMetrics.get(provider.url);
  metrics.successes++;
  metrics.avgDuration = (metrics.avgDuration * (metrics.successes - 1) + duration) / metrics.successes;
}

function recordFailure(provider, duration) {
  provider.consecutiveFailures++;
  provider.healthScore = Math.max(0, provider.healthScore - 15);
  provider.lastCheck = Date.now();
  
  if (!providerMetrics.has(provider.url)) {
    providerMetrics.set(provider.url, { successes: 0, failures: 0, avgDuration: 0 });
  }
  
  const metrics = providerMetrics.get(provider.url);
  metrics.failures++;
}

function isCircuitBreakerOpen(provider) {
  if (provider.consecutiveFailures < CIRCUIT_BREAKER_THRESHOLD) {
    return false;
  }
  
  const timeSinceLastCheck = Date.now() - provider.lastCheck;
  if (timeSinceLastCheck > CIRCUIT_BREAKER_TIMEOUT) {
    provider.consecutiveFailures = Math.floor(provider.consecutiveFailures / 2);
    return false;
  }
  
  return true;
}

function performHealthCheckIfNeeded() {
  const now = Date.now();
  if (now - lastHealthCheck < HEALTH_CHECK_INTERVAL) {
    return;
  }
  
  lastHealthCheck = now;
  
  UPSTREAM_DNS_PROVIDERS.forEach(provider => {
    if (provider.healthScore < 60) {
      provider.healthScore = Math.min(100, provider.healthScore + 15);
    }
    
    if (now - provider.lastCheck > HEALTH_CHECK_INTERVAL * 2) {
      provider.healthScore = 100;
      provider.consecutiveFailures = 0;
    }
  });
}

function getRandomUserAgent() {
  return USER_AGENTS[Math.floor(Math.random() * USER_AGENTS.length)];
}

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function isValidBase64Url(str) {
  if (!str || str.length === 0 || str.length > 2048) {
    return false;
  }
  
  const base64UrlRegex = /^[A-Za-z0-9_-]+={0,2}$/;
  return base64UrlRegex.test(str);
}

function arrayBufferToBase64(buffer) {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
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
    <title>Ultimate DoH Proxy 2026 - نسخه نهایی و قدرتمند</title>
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
        .success-box {
            background: rgba(16, 185, 129, 0.2);
            border-right: 4px solid #10b981;
            border: 1px solid #10b981;
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
        .feature-new {
            border-right: 3px solid #f59e0b;
        }
        .feature-new::before {
            content: "★";
            color: #f59e0b;
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
            direction: ltr;
            text-align: left;
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
            direction: ltr;
            text-align: left;
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
        .highlight {
            color: #10b981;
            font-weight: bold;
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
        <h1>🔒 Ultimate DoH Proxy</h1>
        <div class="status-container">
            <div class="status">
                <span>✓ نسخه نهایی با 52 سرور DNS و پشتیبانی ODoH</span>
            </div>
        </div>
        
        <div class="info-box">
            <strong>قدرتمندترین سرویس DNS over HTTPS با حداکثر امنیت، حریم خصوصی و مقاومت در برابر سانسور</strong>
        </div>

        <h2>📍 آدرس سرویس شما:</h2>
        <div class="url-box" id="dohUrl">${fullDohUrl}</div>
        <button class="copy-btn" onclick="copyToClipboard('dohUrl')">📋 کپی آدرس</button>

        <h2>✨ ویژگی‌های نسخه Ultimate:</h2>
        <div class="feature-new">52 سرور DNS با اولویت Oblivious DoH Cloudflare</div>
        <div class="feature">رمزنگاری کامل + لایه حریم خصوصی اضافی ODoH</div>
        <div class="feature">Rate Limit: 150 درخواست در دقیقه</div>
        <div class="feature">Cache بزرگ 2000 رکورد</div>
        <div class="feature">80 درخواست همزمان</div>
        <div class="feature-new">Random Delay: 20-200ms</div>
        <div class="feature-new">Decoy Requests: 25% احتمال</div>
        <div class="feature-new">هدرهای مدرن Sec-CH-UA</div>
        <div class="feature-new">User-Agents به‌روز Chrome 130/131</div>
        <div class="feature-new">Health Check بهینه‌شده</div>
        <div class="feature-new">Circuit Breaker پیشرفته</div>

        <h2>🌐 DNS Providers:</h2>
        <div class="dns-list">
            <div class="dns-item">🔵 ODoH Cloudflare (حریم خصوصی حداکثر)</div>
            <div class="dns-item">• Cloudflare, Google, Quad9, OpenDNS</div>
            <div class="dns-item">• AdGuard, NextDNS, Mullvad, Wikimedia</div>
            <div class="dns-item">• BlahDNS (4 منطقه), Pi-DNS (3 منطقه)</div>
            <div class="dns-item">• و 40+ سرور دیگر...</div>
        </div>

        <div class="info-box success-box">
            <strong>✅ قابلیت‌های این DoH:</strong><br><br>
            • <span class="highlight">رمزنگاری کامل DNS</span> + حریم خصوصی ODoH<br>
            • <span class="highlight">دور زدن DNS Poisoning</span><br>
            • <span class="highlight">باز کردن سایت‌های فیلتر شده با DNS</span><br>
            • <span class="highlight">مخفی کردن هویت از سرور DNS</span> (ODoH)<br>
            • <span class="highlight">مقاومت بالا در برابر DPI</span>
        </div>

        <div class="warning">
            <strong>💡 ODoH چیست؟</strong><br><br>
            Oblivious DoH لایه اضافی حریم خصوصی است که:<br>
            • حتی سرور DNS نمی‌تواند IP شما را ببیند<br>
            • درخواست‌ها از طریق Proxy ارسال می‌شوند<br>
            • حریم خصوصی بیشتر از DoH معمولی<br><br>
            <strong>توجه:</strong> این DoH فقط فیلترینگ DNS را دور می‌زند. برای فیلترینگ SNI, IP و DPI به VPN نیاز دارید.
        </div>

        <h2>📱 نحوه استفاده:</h2>
        <div class="usage-section">
            <div class="usage-item">
                <strong>🌐 مرورگرها:</strong>
                تنظیمات → Privacy/Security → DNS over HTTPS → Custom Provider → آدرس بالا<br><br>
                <strong>فعال‌سازی ECH در Firefox:</strong><br>
                about:config → network.dns.echconfig.enabled → true
            </div>

            <div class="usage-item">
                <strong>📱 Intra (اندروید):</strong>
                Configure custom server URL → آدرس بالا را وارد کنید
            </div>

            <div class="usage-item">
                <strong>🍎 iOS, iPadOS و macOS:</strong>
                <a href="${appleProfileUrl}" class="download-btn">🍎 دانلود پروفایل</a>
                <br><br>
                <strong>نصب:</strong> Settings → General → VPN & Device Management → Install
            </div>

            <div class="usage-item">
                <strong>🔧 Xray/v2rayNG:</strong>
                <div class="code-box" id="xrayConfig">{
  "remarks": "🛡️ Ultimate DoH Proxy",
  "dns": {
    "servers": [
      {
        "address": "${fullDohUrl}",
        "skipFallback": true
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
        "destOverride": ["http", "tls"]
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
}</div>
                <button class="copy-btn" onclick="copyToClipboard('xrayConfig')">📋 کپی کانفیگ</button>
            </div>

            <div class="usage-item">
                <strong>💻 ویندوز 11:</strong>
                Settings → Network & Internet → Properties → DNS → Edit → Encrypted only (DoH) → آدرس بالا
            </div>
        </div>

        <h2>❓ سوالات متداول:</h2>
        <div class="info-box">
            <strong>Q: تفاوت این با نسخه قبلی چیست؟</strong><br>
            A: 52 سرور (به جای 50)، ODoH Cloudflare در اولویت اول، User-Agents جدیدتر، هدرهای Sec-CH-UA، Rate Limit بیشتر (150)، Cache بزرگتر (2000)، Random Delay بیشتر، Decoy Requests بیشتر (25%)، بهینه‌سازی‌های متعدد.<br><br>
            
            <strong>Q: ODoH چقدر حریم خصوصی اضافه می‌کند؟</strong><br>
            A: با ODoH حتی سرور DNS نمی‌تواند IP واقعی شما را ببیند. درخواست از طریق Proxy ارسال می‌شود.<br><br>
            
            <strong>Q: آیا سرعت کاهش می‌یابد؟</strong><br>
            A: خیر، Cache بزرگ و هوشمند باعث افزایش سرعت می‌شود.<br><br>
            
            <strong>Q: آیا رایگان است؟</strong><br>
            A: بله، Cloudflare Pages کاملاً رایگان و بدون محدودیت ترافیک است.<br><br>
            
            <strong>Q: چه سایت‌هایی باز می‌شوند؟</strong><br>
            A: سایت‌هایی که فقط با DNS فیلتر شده‌اند. برای سایر موارد به VPN نیاز دارید.
        </div>

        <h2>🛡️ امنیت و حریم خصوصی:</h2>
        <div class="info-box">
            <strong>لایه‌های حفاظتی:</strong><br><br>
            1️⃣ <span class="highlight">HTTPS Encryption</span> - رمزنگاری کامل ترافیک<br>
            2️⃣ <span class="highlight">ODoH Privacy Layer</span> - مخفی کردن IP از DNS<br>
            3️⃣ <span class="highlight">52 DNS Servers</span> - تنوع و پایداری<br>
            4️⃣ <span class="highlight">Traffic Obfuscation</span> - مبهم‌سازی الگوی ترافیک<br>
            5️⃣ <span class="highlight">Modern Headers</span> - شبیه‌سازی مرورگر واقعی<br>
            6️⃣ <span class="highlight">Decoy Requests</span> - گمراه کردن DPI<br>
            7️⃣ <span class="highlight">Random Delays</span> - رفتار انسانی طبیعی
        </div>

        <div class="footer">
            <p><strong>Ultimate DoH Proxy 2026</strong></p>
            <p>Maximum Privacy • Maximum Performance • Maximum Security</p>
            <p style="margin-top: 10px;">Designed by: Anonymous</p>
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