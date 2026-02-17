const UPSTREAM_DNS_PROVIDERS = [
  { url: 'https://cloudflare-dns.com/dns-query', priority: 1, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'www.cloudflare.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://1.1.1.1/dns-query', priority: 2, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'one.one.one.one', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://1.0.0.1/dns-query', priority: 3, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'one.one.one.one', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://mozilla.cloudflare-dns.com/dns-query', priority: 4, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'mozilla.cloudflare-dns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://security.cloudflare-dns.com/dns-query', priority: 5, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'security.cloudflare-dns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://family.cloudflare-dns.com/dns-query', priority: 6, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'family.cloudflare-dns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns64.cloudflare-dns.com/dns-query', priority: 7, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns64.cloudflare-dns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://brave.cloudflare-dns.com/dns-query', priority: 8, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'brave.cloudflare-dns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.google/dns-query', priority: 9, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'www.google.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://8888.google/dns-query', priority: 10, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'www.google.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns64.dns.google/dns-query', priority: 11, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns64.dns.google', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.quad9.net/dns-query', priority: 12, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'www.quad9.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns9.quad9.net/dns-query', priority: 13, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns9.quad9.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns10.quad9.net/dns-query', priority: 14, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns10.quad9.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns11.quad9.net/dns-query', priority: 15, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns11.quad9.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns12.quad9.net/dns-query', priority: 16, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns12.quad9.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.nextdns.io/dns-query', priority: 17, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.nextdns.io', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.opendns.com/dns-query', priority: 18, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'www.opendns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'na', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.familyshield.opendns.com/dns-query', priority: 19, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.familyshield.opendns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'na', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.umbrella.com/dns-query', priority: 20, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.umbrella.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.adguard-dns.com/dns-query', priority: 21, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.adguard-dns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://unfiltered.adguard-dns.com/dns-query', priority: 22, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'unfiltered.adguard-dns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://family.adguard-dns.com/dns-query', priority: 23, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'family.adguard-dns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.mullvad.net/dns-query', priority: 24, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.mullvad.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://adblock.doh.mullvad.net/dns-query', priority: 25, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'adblock.doh.mullvad.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://base.dns.mullvad.net/dns-query', priority: 26, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'base.dns.mullvad.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://extended.dns.mullvad.net/dns-query', priority: 27, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'extended.dns.mullvad.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://all.dns.mullvad.net/dns-query', priority: 28, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'all.dns.mullvad.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://family.dns.mullvad.net/dns-query', priority: 29, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'family.dns.mullvad.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://freedns.controld.com/p0', priority: 30, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'freedns.controld.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://freedns.controld.com/p1', priority: 31, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'freedns.controld.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://freedns.controld.com/p2', priority: 32, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'freedns.controld.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://freedns.controld.com/p3', priority: 33, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'freedns.controld.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://freedns.controld.com/family', priority: 34, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'freedns.controld.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://freedns.controld.com/uncensored', priority: 35, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'freedns.controld.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://sky.rethinkdns.com/dns-query', priority: 36, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'sky.rethinkdns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.cleanbrowsing.org/doh/security-filter/', priority: 37, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.cleanbrowsing.org', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.cleanbrowsing.org/doh/adult-filter/', priority: 38, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.cleanbrowsing.org', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.cleanbrowsing.org/doh/family-filter/', priority: 39, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.cleanbrowsing.org', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://zero.dns0.eu/dns-query', priority: 40, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'zero.dns0.eu', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://kids.dns0.eu/dns-query', priority: 41, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'kids.dns0.eu', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://private.canadianshield.cira.ca/dns-query', priority: 42, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'private.canadianshield.cira.ca', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'na', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://protected.canadianshield.cira.ca/dns-query', priority: 43, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'protected.canadianshield.cira.ca', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'na', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://family.canadianshield.cira.ca/dns-query', priority: 44, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'family.canadianshield.cira.ca', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'na', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://protective.joindns4.eu/dns-query', priority: 45, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'protective.joindns4.eu', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://child.joindns4.eu/dns-query', priority: 46, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'child.joindns4.eu', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://noads.joindns4.eu/dns-query', priority: 47, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'noads.joindns4.eu', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://child-noads.joindns4.eu/dns-query', priority: 48, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'child-noads.joindns4.eu', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://unfiltered.joindns4.eu/dns-query', priority: 49, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'unfiltered.joindns4.eu', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://wikimedia-dns.org/dns-query', priority: 50, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'wikimedia-dns.org', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.wikimedia.org/dns-query', priority: 51, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.wikimedia.org', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.switch.ch/dns-query', priority: 52, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.switch.ch', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.digitale-gesellschaft.ch/dns-query', priority: 53, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.digitale-gesellschaft.ch', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.libredns.gr/dns-query', priority: 54, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.libredns.gr', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.libredns.gr/noads', priority: 55, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.libredns.gr', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://odvr.nic.cz/dns-query', priority: 56, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'odvr.nic.cz', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.ffmuc.net/dns-query', priority: 57, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.ffmuc.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.applied-privacy.net/query', priority: 58, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.applied-privacy.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.aa.net.uk/dns-query', priority: 59, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.aa.net.uk', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.alidns.com/dns-query', priority: 60, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.alidns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'asia', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.twnic.tw/dns-query', priority: 61, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.twnic.tw', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'asia', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.pub/dns-query', priority: 62, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.pub', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'asia', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.360.cn/dns-query', priority: 63, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.360.cn', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'asia', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://public.dns.iij.jp/dns-query', priority: 64, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'public.dns.iij.jp', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'asia', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.dns.sb/dns-query', priority: 65, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.dns.sb', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.pub/dns-query', priority: 66, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.pub', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://ordns.he.net/dns-query', priority: 67, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'ordns.he.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.brahma.world/dns-query', priority: 68, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.brahma.world', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.cfiec.net/dns-query', priority: 69, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.cfiec.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.dnshome.de/dns-query', priority: 70, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.dnshome.de', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dnsforge.de/dns-query', priority: 71, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dnsforge.de', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://clean.dnsforge.de/dns-query', priority: 72, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'clean.dnsforge.de', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://hard.dnsforge.de/dns-query', priority: 73, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'hard.dnsforge.de', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh-fi.blahdns.com/dns-query', priority: 74, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh-fi.blahdns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh-jp.blahdns.com/dns-query', priority: 75, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh-jp.blahdns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'asia', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh-de.blahdns.com/dns-query', priority: 76, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh-de.blahdns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh-sg.blahdns.com/dns-query', priority: 77, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh-sg.blahdns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'asia', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.centraleu.pi-dns.com/dns-query', priority: 78, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.centraleu.pi-dns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.westus.pi-dns.com/dns-query', priority: 79, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.westus.pi-dns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'na', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.eastus.pi-dns.com/dns-query', priority: 80, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.eastus.pi-dns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'na', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.northeu.pi-dns.com/dns-query', priority: 81, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.northeu.pi-dns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.tiar.app/dns-query', priority: 82, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.tiar.app', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'asia', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.tiarap.org/dns-query', priority: 83, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.tiarap.org', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'asia', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://jp.tiar.app/dns-query', priority: 84, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'jp.tiar.app', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'asia', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://jp.tiarap.org/dns-query', priority: 85, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'jp.tiarap.org', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'asia', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.containerpi.com/dns-query', priority: 86, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.containerpi.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.rubyfish.cn/dns-query', priority: 87, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.rubyfish.cn', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'asia', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.armadillodns.net/dns-query', priority: 88, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.armadillodns.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://commons.host/dns-query', priority: 89, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'commons.host', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.crypto.sx/dns-query', priority: 90, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.crypto.sx', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.dnswarden.com/uncensored', priority: 91, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.dnswarden.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://resolver-eu.lelux.fi/dns-query', priority: 92, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'resolver-eu.lelux.fi', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.bortzmeyer.fr/dns-query', priority: 93, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.bortzmeyer.fr', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.oszx.co/dns-query', priority: 94, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.oszx.co', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://ada.openbld.net/dns-query', priority: 95, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'ada.openbld.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://ric.openbld.net/dns-query', priority: 96, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'ric.openbld.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://luna.openbld.net/dns-query', priority: 97, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'luna.openbld.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://fra01.dnscry.pt/dns-query', priority: 98, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'fra01.dnscry.pt', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://lon01.dnscry.pt/dns-query', priority: 99, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'lon01.dnscry.pt', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://nyc01.dnscry.pt/dns-query', priority: 100, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'nyc01.dnscry.pt', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'na', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://par01.dnscry.pt/dns-query', priority: 101, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'par01.dnscry.pt', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://ams01.dnscry.pt/dns-query', priority: 102, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'ams01.dnscry.pt', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://sin01.dnscry.pt/dns-query', priority: 103, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'sin01.dnscry.pt', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'asia', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://syd01.dnscry.pt/dns-query', priority: 104, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'syd01.dnscry.pt', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'oceania', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://tok01.dnscry.pt/dns-query', priority: 105, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'tok01.dnscry.pt', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'asia', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://sea01.dnscry.pt/dns-query', priority: 106, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'sea01.dnscry.pt', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'na', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://lax01.dnscry.pt/dns-query', priority: 107, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'lax01.dnscry.pt', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'na', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://anycast.uncensoreddns.org/dns-query', priority: 108, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'anycast.uncensoreddns.org', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://unicast.uncensoreddns.org/dns-query', priority: 109, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'unicast.uncensoreddns.org', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.njal.la/dns-query', priority: 110, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.njal.la', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://freedom.mydns.network/dns-query', priority: 111, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'freedom.mydns.network', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://paranoia.mydns.network/dns-query', priority: 112, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'paranoia.mydns.network', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://adblock.mydns.network/dns-query', priority: 113, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'adblock.mydns.network', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://family.mydns.network/dns-query', priority: 114, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'family.mydns.network', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.comss.one/dns-query', priority: 115, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.comss.one', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://router.comss.one/dns-query', priority: 116, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'router.comss.one', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://ca01.dns4me.net', priority: 117, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'ca01.dns4me.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'na', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://ca02.dns4me.net', priority: 118, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'ca02.dns4me.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'na', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://us01.dns4me.net', priority: 119, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'us01.dns4me.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'na', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://us02.dns4me.net', priority: 120, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'us02.dns4me.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'na', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://uk01.dns4me.net', priority: 121, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'uk01.dns4me.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://au01.dns4me.net', priority: 122, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'au01.dns4me.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'oceania', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://sg01.dns4me.net', priority: 123, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'sg01.dns4me.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'asia', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://de01.dns4me.net', priority: 124, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'de01.dns4me.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dnspub.restena.lu/dns-query', priority: 125, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dnspub.restena.lu', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://safeservedns.com/dns-query', priority: 126, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'safeservedns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.rabbitdns.org/dns-query', priority: 127, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.rabbitdns.org', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://security.rabbitdns.org/dns-query', priority: 128, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'security.rabbitdns.org', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://family.rabbitdns.org/dns-query', priority: 129, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'family.rabbitdns.org', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://v.recipes/dns-query', priority: 130, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'v.recipes', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://v.recipes/dns-adblock', priority: 131, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'v.recipes', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://v.recipes/dns-ecs', priority: 132, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'v.recipes', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.surfsharkdns.com/dns-query', priority: 133, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.surfsharkdns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.blokada.org/dns-query', priority: 134, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.blokada.org', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://root.hagezi.org/dns-query', priority: 135, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'root.hagezi.org', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://wurzn.hagezi.org/dns-query', priority: 136, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'wurzn.hagezi.org', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://juuri.hagezi.org/dns-query', priority: 137, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'juuri.hagezi.org', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://eu1.dns.lavate.ch/dns-query', priority: 138, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'eu1.dns.lavate.ch', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.seby.io/dns-query', priority: 139, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.seby.io', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'oceania', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://resolver1.absolight.net/dns-query', priority: 140, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'resolver1.absolight.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://resolver2.absolight.net/dns-query', priority: 141, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'resolver2.absolight.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://per.adfilter.net/dns-query', priority: 142, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'per.adfilter.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'oceania', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://syd.adfilter.net/dns-query', priority: 143, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'syd.adfilter.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'oceania', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://adl.adfilter.net/dns-query', priority: 144, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'adl.adfilter.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'oceania', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://ns0.fdn.fr/dns-query', priority: 145, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'ns0.fdn.fr', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://ns1.fdn.fr/dns-query', priority: 146, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'ns1.fdn.fr', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.technitium.com/dns-query', priority: 147, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.technitium.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.telekom.de/dns-query', priority: 148, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.telekom.de', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.aquilenet.fr/dns-query', priority: 149, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.aquilenet.fr', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.lacontrevoie.fr/dns-query', priority: 150, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.lacontrevoie.fr', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.belnet.be/dns-query', priority: 151, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.belnet.be', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns1.in-berlin.de/dns-query', priority: 152, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns1.in-berlin.de', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns2.in-berlin.de/dns-query', priority: 153, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns2.in-berlin.de', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://resolver.dnsprivacy.org.uk/dns-query', priority: 154, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'resolver.dnsprivacy.org.uk', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://resolver.sunet.se/dns-query', priority: 155, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'resolver.sunet.se', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://ns1.opennameserver.org/dns-query', priority: 156, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'ns1.opennameserver.org', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.froth.zone/dns-query', priority: 157, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.froth.zone', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.stormycloud.org/dns-query', priority: 158, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.stormycloud.org', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://adfree.usableprivacy.net/dns-query', priority: 159, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'adfree.usableprivacy.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'na', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.dns4all.eu/dns-query', priority: 160, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.dns4all.eu', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.smartguard.io/dns-query', priority: 161, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.smartguard.io', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://privacy.plumedns.com/dns-query', priority: 162, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'privacy.plumedns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.bitdefender.net/dns-query', priority: 163, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.bitdefender.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.cctld.kg/dns-query', priority: 164, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.cctld.kg', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'asia', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.lv/dns-query', priority: 165, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.lv', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.nic.lv/dns-query', priority: 166, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.nic.lv', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://japan.dnsovertor.cc/dns-query', priority: 167, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'japan.dnsovertor.cc', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'asia', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://chuncheon.dnsovertor.cc/dns-query', priority: 168, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'chuncheon.dnsovertor.cc', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'asia', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://seoul.dnsovertor.cc/dns-query', priority: 169, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'seoul.dnsovertor.cc', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'asia', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.cert.ee/dns-query', priority: 170, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.cert.ee', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://secure.hafnova.com/dns-query', priority: 171, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'secure.hafnova.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.kescher.at/dns-query', priority: 202, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.kescher.at', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://ibuki.cgnat.net/dns-query', priority: 203, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'ibuki.cgnat.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.li/dns-query', priority: 204, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.li', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns4eu.online/dns-query', priority: 205, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns4eu.online', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.elemental.software/dns-query', priority: 206, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.elemental.software', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doth.huque.com/dns-query', priority: 207, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doth.huque.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://zdn.ro/dns-query', priority: 208, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'zdn.ro', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.zknt.org/dns-query', priority: 209, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.zknt.org', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://ns2.4netguides.org/dns-query', priority: 210, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'ns2.4netguides.org', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dukun.de/dns-query', priority: 211, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dukun.de', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.cynthialabs.net/dns-query', priority: 212, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.cynthialabs.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.la.ahadns.net/dns-query', priority: 213, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.la.ahadns.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'na', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.ny.ahadns.net/dns-query', priority: 214, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.ny.ahadns.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'na', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.nl.ahadns.net/dns-query', priority: 215, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.nl.ahadns.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.pl.ahadns.net/dns-query', priority: 216, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.pl.ahadns.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.in.ahadns.net/dns-query', priority: 217, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.in.ahadns.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'asia', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.sg.ahadns.net/dns-query', priority: 218, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.sg.ahadns.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'asia', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.au.ahadns.net/dns-query', priority: 219, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.au.ahadns.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'oceania', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dnslow.me/dns-query', priority: 220, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dnslow.me', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.dns-over-https.com/dns-query', priority: 221, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.dns-over-https.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.nic.fr/dns-query', priority: 222, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.nic.fr', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.decloudus.com/dns-query', priority: 223, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.decloudus.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.flatuslifir.is/dns-query', priority: 224, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.flatuslifir.is', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.paesa.es/dns-query', priority: 225, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.paesa.es', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://jcdns.pikapods.com/dns-query', priority: 226, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'jcdns.pikapods.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.360.cn/dns-query', priority: 227, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.360.cn', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'asia', circuitState: 'closed', lastCircuitOpen: 0 }
];

const DNS_CACHE_TTL_MIN = 60;
const DNS_CACHE_TTL_MAX = 3600;
const DNS_CACHE_TTL_DEFAULT = 300;
const PARALLEL_RACING_COUNT = 10;
const RACE_TIMEOUT = 4000;
const FALLBACK_TIMEOUT = 3000;
const MAX_DNS_RESPONSE_SIZE = 4096;
const MAX_DNS_REQUEST_SIZE = 1024;
const HEALTH_CHECK_INTERVAL = 90000;
const ADAPTIVE_LEARNING_INTERVAL = 180000;
const RATE_LIMIT_REQUESTS = 200;
const RATE_LIMIT_WINDOW = 60000;
const RATE_LIMIT_CLEANUP_INTERVAL = 120000;
const MAX_CONCURRENT_REQUESTS = 150;
const RANDOM_DELAY_MIN = 5;
const RANDOM_DELAY_MAX = 100;
const DECOY_REQUEST_PROBABILITY = 0.25;
const CIRCUIT_BREAKER_THRESHOLD = 5;
const CIRCUIT_BREAKER_TIMEOUT = 60000;
const NEGATIVE_CACHE_TTL = 300;
const QNAME_MINIMIZATION_ENABLED = true;
const DNS_PADDING_ENABLED = true;
const ECS_STRIPPING_ENABLED = true;

const dnsCache = new Map();
const negativeDnsCache = new Map();
const rateLimitMap = new Map();
const pendingRequests = new Map();
let lastCleanupTime = Date.now();
let lastHealthCheck = Date.now();
let lastAdaptiveLearning = Date.now();
let concurrentRequests = 0;
let globalRequestCount = 0;

const USER_AGENTS = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36 Edg/130.0.0.0',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:133.0) Gecko/20100101 Firefox/133.0',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 14.7; rv:133.0) Gecko/20100101 Firefox/133.0',
  'Mozilla/5.0 (X11; Linux x86_64; rv:133.0) Gecko/20100101 Firefox/133.0',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.2 Safari/605.1.15',
  'Mozilla/5.0 (iPhone; CPU iPhone OS 18_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.2 Mobile/15E148 Safari/604.1',
  'Mozilla/5.0 (iPad; CPU OS 18_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.2 Mobile/15E148 Safari/604.1',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 OPR/117.0.0.0'
];

const ACCEPT_HEADERS = [
  'application/dns-message',
  'application/dns-json',
  '*/*',
  'application/dns-message, application/dns-json',
  'application/dns-message;q=0.9, */*;q=0.8'
];

const ADDITIONAL_HEADERS = [
  { 'X-Request-ID': () => crypto.randomUUID() },
  { 'X-Client-Version': () => `DoH/${Math.floor(Math.random() * 10) + 1}.${Math.floor(Math.random() * 10)}` },
  { 'Accept-Language': () => ['en-US,en;q=0.9', 'en-GB,en;q=0.9', 'en;q=0.8'][Math.floor(Math.random() * 3)] },
  { 'Sec-CH-UA': () => `"Chromium";v="${120 + Math.floor(Math.random() * 10)}", "Google Chrome";v="${120 + Math.floor(Math.random() * 10)}"` }
];

const DECOY_DOMAINS = [
  'example.com', 'example.org', 'example.net', 'cloudflare.com', 'google.com',
  'wikipedia.org', 'github.com', 'microsoft.com', 'apple.com', 'amazon.com',
  'youtube.com', 'twitter.com', 'facebook.com', 'reddit.com', 'stackoverflow.com',
  'mozilla.org', 'w3.org', 'ietf.org', 'rfc-editor.org', 'archive.org'
];

function getRandomUserAgent() {
  return USER_AGENTS[Math.floor(Math.random() * USER_AGENTS.length)];
}

function getRandomAcceptHeader() {
  return ACCEPT_HEADERS[Math.floor(Math.random() * ACCEPT_HEADERS.length)];
}

function getRandomDelay() {
  return Math.floor(Math.random() * (RANDOM_DELAY_MAX - RANDOM_DELAY_MIN + 1)) + RANDOM_DELAY_MIN;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getAdaptiveTimeout(provider) {
  const baseTimeout = RACE_TIMEOUT;
  if (provider.avgResponseTime > 0) {
    return Math.min(baseTimeout, Math.max(1000, provider.avgResponseTime * 3));
  }
  return baseTimeout;
}

function checkCircuitBreaker(provider) {
  const now = Date.now();
  if (provider.circuitState === 'open') {
    if (now - provider.lastCircuitOpen > CIRCUIT_BREAKER_TIMEOUT) {
      provider.circuitState = 'half-open';
      return true;
    }
    return false;
  }
  if (provider.consecutiveFailures >= CIRCUIT_BREAKER_THRESHOLD) {
    provider.circuitState = 'open';
    provider.lastCircuitOpen = now;
    return false;
  }
  return true;
}

function getClientRegion(cfData) {
  if (!cfData || !cfData.country) return 'global';
  const country = cfData.country;
  if (['US', 'CA', 'MX'].includes(country)) return 'na';
  if (['CN', 'JP', 'KR', 'SG', 'TW', 'IN'].includes(country)) return 'asia';
  if (['GB', 'DE', 'FR', 'IT', 'ES', 'NL', 'CH', 'SE', 'NO', 'FI', 'PL', 'CZ'].includes(country)) return 'eu';
  if (['AU', 'NZ'].includes(country)) return 'oceania';
  if (['BR', 'AR', 'CL'].includes(country)) return 'sa';
  return 'global';
}

function calculateProviderScore(provider, clientRegion = 'global') {
  const now = Date.now();
  const timeSinceLastCheck = now - provider.lastCheck;
  const healthWeight = 0.35;
  const speedWeight = 0.30;
  const reliabilityWeight = 0.20;
  const regionWeight = 0.15;

  let healthScore = provider.healthScore;
  if (provider.consecutiveFailures > 0) {
    healthScore = Math.max(0, healthScore - (provider.consecutiveFailures * 12));
  }

  let speedScore = 100;
  if (provider.avgResponseTime > 0) {
    speedScore = Math.max(0, 100 - (provider.avgResponseTime / 40));
  }

  let reliabilityScore = 100;
  if (provider.totalRequests > 10) {
    const successRate = (provider.successCount / provider.totalRequests) * 100;
    reliabilityScore = successRate;
  }

  let regionScore = 50;
  if (provider.region === clientRegion) {
    regionScore = 100;
  } else if (provider.region === 'global') {
    regionScore = 75;
  }

  const freshnessPenalty = Math.min(15, timeSinceLastCheck / 12000);

  const totalScore = (healthScore * healthWeight) +
                    (speedScore * speedWeight) +
                    (reliabilityScore * reliabilityWeight) +
                    (regionScore * regionWeight) -
                    freshnessPenalty;

  return Math.max(0, Math.min(100, totalScore));
}

function selectBestProviders(count, clientRegion = 'global') {
  const healthyProviders = UPSTREAM_DNS_PROVIDERS.filter(p =>
    p.healthScore > 25 &&
    p.consecutiveFailures < CIRCUIT_BREAKER_THRESHOLD &&
    checkCircuitBreaker(p)
  );

  if (healthyProviders.length === 0) {
    UPSTREAM_DNS_PROVIDERS.forEach(p => {
      p.healthScore = 100;
      p.consecutiveFailures = 0;
      p.circuitState = 'closed';
    });
    return UPSTREAM_DNS_PROVIDERS.slice(0, count);
  }

  const scoredProviders = healthyProviders.map(provider => ({
    provider,
    score: calculateProviderScore(provider, clientRegion)
  }));

  scoredProviders.sort((a, b) => b.score - a.score);

  const diversityPool = scoredProviders.slice(0, Math.min(25, scoredProviders.length));
  const randomIndex = Math.floor(Math.random() * Math.min(8, diversityPool.length));
  if (randomIndex > 0 && diversityPool[randomIndex]) {
    [diversityPool[0], diversityPool[randomIndex]] = [diversityPool[randomIndex], diversityPool[0]];
  }

  return diversityPool.slice(0, count).map(item => item.provider);
}

function updateProviderMetrics(provider, success, responseTime) {
  provider.totalRequests++;
  provider.lastCheck = Date.now();

  if (success) {
    provider.successCount++;
    provider.consecutiveFailures = 0;
    provider.healthScore = Math.min(100, provider.healthScore + 6);
    if (provider.circuitState === 'half-open') {
      provider.circuitState = 'closed';
    }

    if (provider.avgResponseTime === 0) {
      provider.avgResponseTime = responseTime;
    } else {
      provider.avgResponseTime = (provider.avgResponseTime * 0.65) + (responseTime * 0.35);
    }
  } else {
    provider.consecutiveFailures++;
    provider.healthScore = Math.max(0, provider.healthScore - 12);
  }
}

async function performAdaptiveLearning() {
  const now = Date.now();
  if (now - lastAdaptiveLearning < ADAPTIVE_LEARNING_INTERVAL) {
    return;
  }
  lastAdaptiveLearning = now;

  UPSTREAM_DNS_PROVIDERS.forEach(provider => {
    if (provider.totalRequests > 30) {
      const successRate = (provider.successCount / provider.totalRequests) * 100;

      if (successRate < 40) {
        provider.healthScore = Math.max(15, provider.healthScore - 20);
      } else if (successRate > 97) {
        provider.healthScore = Math.min(100, provider.healthScore + 12);
      }

      if (provider.avgResponseTime > 2500) {
        provider.healthScore = Math.max(25, provider.healthScore - 12);
      } else if (provider.avgResponseTime < 400) {
        provider.healthScore = Math.min(100, provider.healthScore + 8);
      }
    }

    if (now - provider.lastCheck > 900000) {
      provider.healthScore = Math.max(40, provider.healthScore - 15);
    }
  });
}

async function performHealthCheck() {
  const now = Date.now();
  if (now - lastHealthCheck < HEALTH_CHECK_INTERVAL) {
    return;
  }
  lastHealthCheck = now;

  const testQuery = new Uint8Array([
    0x00, 0x00, 0x01, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x07, 0x65, 0x78, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0x03, 0x63, 0x6f, 0x6d,
    0x00, 0x00, 0x01, 0x00, 0x01
  ]);

  const providersToCheck = UPSTREAM_DNS_PROVIDERS
    .filter(p => now - p.lastCheck > HEALTH_CHECK_INTERVAL)
    .slice(0, 12);

  const healthCheckPromises = providersToCheck.map(async (provider) => {
    const startTime = Date.now();
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2500);

      const response = await fetch(provider.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/dns-message',
          'Accept': 'application/dns-message',
          'User-Agent': getRandomUserAgent()
        },
        body: testQuery,
        signal: controller.signal
      });

      clearTimeout(timeoutId);
      const responseTime = Date.now() - startTime;

      if (response.ok) {
        updateProviderMetrics(provider, true, responseTime);
      } else {
        updateProviderMetrics(provider, false, responseTime);
      }
    } catch (error) {
      const responseTime = Date.now() - startTime;
      updateProviderMetrics(provider, false, responseTime);
    }
  });

  await Promise.allSettled(healthCheckPromises);
}

function applyQnameMinimization(dnsQuery) {
  if (!QNAME_MINIMIZATION_ENABLED) return dnsQuery;
  return dnsQuery;
}

function applyDnsPadding(dnsQuery) {
  if (!DNS_PADDING_ENABLED) return dnsQuery;
  try {
    const view = new Uint8Array(dnsQuery);
    if (view.length < 12) return dnsQuery;

    const arcount = (view[10] << 8) | view[11];
    if (arcount > 0) return dnsQuery;

    const paddingDataSize = Math.floor(Math.random() * 60) + 16;
    const rdlength = 4 + paddingDataSize;
    const optRRSize = 11 + rdlength;
    const optRR = new Uint8Array(optRRSize);

    let i = 0;
    optRR[i++] = 0x00;
    optRR[i++] = 0x00;
    optRR[i++] = 0x29;
    optRR[i++] = 0x10;
    optRR[i++] = 0x00;
    optRR[i++] = 0x00;
    optRR[i++] = 0x00;
    optRR[i++] = 0x00;
    optRR[i++] = 0x00;
    optRR[i++] = (rdlength >> 8) & 0xFF;
    optRR[i++] = rdlength & 0xFF;
    optRR[i++] = 0x00;
    optRR[i++] = 0x0C;
    optRR[i++] = (paddingDataSize >> 8) & 0xFF;
    optRR[i++] = paddingDataSize & 0xFF;

    const result = new Uint8Array(view.length + optRR.length);
    result.set(view);
    result.set(optRR, view.length);
    result[10] = 0x00;
    result[11] = 0x01;

    return result.buffer;
  } catch (e) {
    return dnsQuery;
  }
}

function stripECS(dnsQuery) {
  if (!ECS_STRIPPING_ENABLED) return dnsQuery;
  try {
    const view = new Uint8Array(dnsQuery);
    if (view.length < 12) return dnsQuery;

    const arcount = (view[10] << 8) | view[11];
    if (arcount === 0) return dnsQuery;

    let offset = 12;
    const qdcount = (view[4] << 8) | view[5];

    for (let i = 0; i < qdcount && offset < view.length; i++) {
      while (offset < view.length) {
        const len = view[offset];
        if (len === 0) { offset++; break; }
        if ((len & 0xC0) === 0xC0) { offset += 2; break; }
        offset += len + 1;
      }
      offset += 4;
    }

    const ancount = (view[6] << 8) | view[7];
    const nscount = (view[8] << 8) | view[9];
    const skipSections = ancount + nscount;

    for (let i = 0; i < skipSections && offset < view.length; i++) {
      while (offset < view.length) {
        const len = view[offset];
        if (len === 0) { offset++; break; }
        if ((len & 0xC0) === 0xC0) { offset += 2; break; }
        offset += len + 1;
      }
      if (offset + 10 > view.length) return dnsQuery;
      const rdlength = (view[offset + 8] << 8) | view[offset + 9];
      offset += 10 + rdlength;
    }

    let optStart = -1;
    let optEnd = -1;
    let scanOffset = offset;

    for (let i = 0; i < arcount && scanOffset < view.length; i++) {
      const rrStart = scanOffset;
      while (scanOffset < view.length) {
        const len = view[scanOffset];
        if (len === 0) { scanOffset++; break; }
        if ((len & 0xC0) === 0xC0) { scanOffset += 2; break; }
        scanOffset += len + 1;
      }
      if (scanOffset + 10 > view.length) break;
      const rrType = (view[scanOffset] << 8) | view[scanOffset + 1];
      const rdlength = (view[scanOffset + 8] << 8) | view[scanOffset + 9];
      const rrEnd = scanOffset + 10 + rdlength;
      if (rrType === 41) {
        optStart = rrStart;
        optEnd = rrEnd;
        break;
      }
      scanOffset = rrEnd;
    }

    if (optStart === -1) return dnsQuery;

    const optNameEnd = optStart + 1;
    const optRdataStart = optNameEnd + 9;
    const optRdataEnd = optEnd;

    let hasECS = false;
    let rPos = optRdataStart;
    while (rPos + 4 <= optRdataEnd) {
      const optCode = (view[rPos] << 8) | view[rPos + 1];
      const optLen = (view[rPos + 2] << 8) | view[rPos + 3];
      if (optCode === 8) { hasECS = true; break; }
      rPos += 4 + optLen;
    }

    if (!hasECS) return dnsQuery;

    const newRdataBytes = [];
    rPos = optRdataStart;
    while (rPos + 4 <= optRdataEnd) {
      const optCode = (view[rPos] << 8) | view[rPos + 1];
      const optLen = (view[rPos + 2] << 8) | view[rPos + 3];
      if (optCode !== 8) {
        for (let j = rPos; j < rPos + 4 + optLen && j < view.length; j++) {
          newRdataBytes.push(view[j]);
        }
      }
      rPos += 4 + optLen;
    }

    const newRdlength = newRdataBytes.length;
    const sizeDiff = (optRdataEnd - optRdataStart) - newRdlength;
    const resultSize = view.length - sizeDiff;
    const result = new Uint8Array(resultSize);

    let writePos = 0;
    for (let j = 0; j < optRdataStart; j++) result[writePos++] = view[j];

    result[optRdataStart - 2] = (newRdlength >> 8) & 0xFF;
    result[optRdataStart - 1] = newRdlength & 0xFF;

    for (const b of newRdataBytes) result[writePos++] = b;

    for (let j = optRdataEnd; j < view.length; j++) result[writePos++] = view[j];

    return result.buffer;
  } catch (e) {
    return dnsQuery;
  }
}

function buildEnhancedHeaders(baseHeaders) {
  const headers = { ...baseHeaders };

  if (Math.random() < 0.4) {
    const randomHeader = ADDITIONAL_HEADERS[Math.floor(Math.random() * ADDITIONAL_HEADERS.length)];
    const headerKey = Object.keys(randomHeader)[0];
    const headerValue = randomHeader[headerKey]();
    headers[headerKey] = headerValue;
  }

  if (Math.random() < 0.25) {
    headers['X-Forwarded-For'] = `${Math.floor(Math.random() * 223) + 1}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
  }

  return headers;
}

async function raceMultipleProviders(dnsQuery, headers, clientRegion = 'global') {
  let processedQuery = applyQnameMinimization(dnsQuery);
  processedQuery = applyDnsPadding(processedQuery);
  processedQuery = stripECS(processedQuery);

  const selectedProviders = selectBestProviders(PARALLEL_RACING_COUNT, clientRegion);

  const racePromises = selectedProviders.map(async (provider) => {
    const startTime = Date.now();
    const controller = new AbortController();
    const adaptiveTimeout = getAdaptiveTimeout(provider);
    const timeoutId = setTimeout(() => controller.abort(), adaptiveTimeout);

    try {
      await sleep(getRandomDelay());

      const requestHeaders = buildEnhancedHeaders({
        'Content-Type': 'application/dns-message',
        'Accept': getRandomAcceptHeader(),
        'User-Agent': getRandomUserAgent(),
        'Cache-Control': 'no-cache',
        'DNT': '1'
      });

      const response = await fetch(provider.url, {
        method: 'POST',
        headers: requestHeaders,
        body: processedQuery,
        signal: controller.signal,
        cf: {
          cacheTtl: DNS_CACHE_TTL_DEFAULT,
          cacheEverything: true
        }
      });

      clearTimeout(timeoutId);
      const responseTime = Date.now() - startTime;

      if (!response.ok) {
        updateProviderMetrics(provider, false, responseTime);
        throw new Error(`HTTP ${response.status}`);
      }

      const responseData = await response.arrayBuffer();

      if (responseData.byteLength > MAX_DNS_RESPONSE_SIZE) {
        updateProviderMetrics(provider, false, responseTime);
        throw new Error('Response too large');
      }

      updateProviderMetrics(provider, true, responseTime);

      return {
        data: responseData,
        provider: provider.url,
        responseTime: responseTime
      };

    } catch (error) {
      clearTimeout(timeoutId);
      const responseTime = Date.now() - startTime;
      updateProviderMetrics(provider, false, responseTime);
      throw error;
    }
  });

  return Promise.any(racePromises);
}

async function fallbackProviderRequest(dnsQuery, headers, excludeProviders = [], clientRegion = 'global') {
  const availableProviders = UPSTREAM_DNS_PROVIDERS
    .filter(p =>
      !excludeProviders.includes(p.url) &&
      p.healthScore > 15 &&
      checkCircuitBreaker(p)
    )
    .sort((a, b) => calculateProviderScore(b, clientRegion) - calculateProviderScore(a, clientRegion))
    .slice(0, 8);

  for (const provider of availableProviders) {
    const startTime = Date.now();
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), FALLBACK_TIMEOUT);

    try {
      const requestHeaders = buildEnhancedHeaders({
        'Content-Type': 'application/dns-message',
        'Accept': 'application/dns-message',
        'User-Agent': getRandomUserAgent()
      });

      const response = await fetch(provider.url, {
        method: 'POST',
        headers: requestHeaders,
        body: dnsQuery,
        signal: controller.signal
      });

      clearTimeout(timeoutId);
      const responseTime = Date.now() - startTime;

      if (response.ok) {
        const responseData = await response.arrayBuffer();
        updateProviderMetrics(provider, true, responseTime);
        return {
          data: responseData,
          provider: provider.url,
          responseTime: responseTime
        };
      }

      updateProviderMetrics(provider, false, responseTime);
    } catch (error) {
      clearTimeout(timeoutId);
      const responseTime = Date.now() - startTime;
      updateProviderMetrics(provider, false, responseTime);
    }
  }

  throw new Error('All fallback providers failed');
}

function getCacheKey(dnsQuery) {
  const view = new Uint8Array(dnsQuery);
  let hash = 2166136261;
  for (let i = 4; i < view.length; i++) {
    hash ^= view[i];
    hash = Math.imul(hash, 16777619) >>> 0;
  }
  return `dns_${hash}`;
}

function getCachedResponse(cacheKey) {
  const cached = dnsCache.get(cacheKey);
  if (!cached) return null;

  if (Date.now() - cached.timestamp > cached.ttl * 1000) {
    dnsCache.delete(cacheKey);
    return null;
  }

  return cached.response;
}

function setCachedResponse(cacheKey, response, ttl = DNS_CACHE_TTL_DEFAULT) {
  const finalTTL = Math.max(DNS_CACHE_TTL_MIN, Math.min(DNS_CACHE_TTL_MAX, ttl));
  dnsCache.set(cacheKey, {
    response: response,
    timestamp: Date.now(),
    ttl: finalTTL
  });

  if (dnsCache.size > 8000) {
    const sortedEntries = Array.from(dnsCache.entries())
      .sort((a, b) => a[1].timestamp - b[1].timestamp);
    const toDelete = sortedEntries.slice(0, 2000);
    toDelete.forEach(([key]) => dnsCache.delete(key));
  }
}

function checkNegativeCache(cacheKey) {
  const cached = negativeDnsCache.get(cacheKey);
  if (!cached) return null;

  if (Date.now() - cached.timestamp > NEGATIVE_CACHE_TTL * 1000) {
    negativeDnsCache.delete(cacheKey);
    return null;
  }

  return cached.response;
}

function setNegativeCache(cacheKey, response) {
  negativeDnsCache.set(cacheKey, {
    response: response,
    timestamp: Date.now()
  });

  if (negativeDnsCache.size > 2000) {
    const oldestKeys = Array.from(negativeDnsCache.keys()).slice(0, 500);
    oldestKeys.forEach(key => negativeDnsCache.delete(key));
  }
}

function isNXDOMAIN(dnsResponse) {
  try {
    const view = new DataView(dnsResponse);
    const flags = view.getUint16(2);
    const rcode = flags & 0x000F;
    return rcode === 3;
  } catch (e) {
    return false;
  }
}

function extractTTL(dnsResponse) {
  try {
    const view = new DataView(dnsResponse);
    let offset = 12;
    const qdcount = view.getUint16(4);

    for (let i = 0; i < qdcount; i++) {
      while (offset < dnsResponse.byteLength && view.getUint8(offset) !== 0) {
        const len = view.getUint8(offset);
        if (len > 63) break;
        offset += len + 1;
      }
      offset += 5;
    }

    if (offset + 10 < dnsResponse.byteLength) {
      offset += 10;
      const ttl = view.getUint32(offset);
      return Math.min(ttl, DNS_CACHE_TTL_MAX);
    }
  } catch (e) {
    return DNS_CACHE_TTL_DEFAULT;
  }
  return DNS_CACHE_TTL_DEFAULT;
}

function isRateLimited(clientIP) {
  const now = Date.now();

  if (now - lastCleanupTime > RATE_LIMIT_CLEANUP_INTERVAL) {
    const cutoff = now - RATE_LIMIT_WINDOW;
    for (const [ip, data] of rateLimitMap.entries()) {
      if (data.windowStart < cutoff) {
        rateLimitMap.delete(ip);
      }
    }
    lastCleanupTime = now;
  }

  let clientData = rateLimitMap.get(clientIP);

  if (!clientData || now - clientData.windowStart > RATE_LIMIT_WINDOW) {
    clientData = {
      count: 0,
      windowStart: now
    };
    rateLimitMap.set(clientIP, clientData);
  }

  clientData.count++;

  return clientData.count > RATE_LIMIT_REQUESTS;
}

async function sendDecoyRequests() {
  if (Math.random() > DECOY_REQUEST_PROBABILITY) return;

  const randomDomain = DECOY_DOMAINS[Math.floor(Math.random() * DECOY_DOMAINS.length)];

  const decoyQuery = new Uint8Array([
    0x00, 0x00, 0x01, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    ...Array.from(randomDomain.split('.').map(part =>
      [part.length, ...Array.from(part).map(c => c.charCodeAt(0))]
    ).flat()),
    0x00, 0x00, 0x01, 0x00, 0x01
  ]);

  const randomProvider = UPSTREAM_DNS_PROVIDERS[Math.floor(Math.random() * UPSTREAM_DNS_PROVIDERS.length)];

  try {
    fetch(randomProvider.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/dns-message',
        'User-Agent': getRandomUserAgent()
      },
      body: decoyQuery
    }).catch(() => {});
  } catch (e) {}
}

function buildCORSHeaders(origin) {
  return {
    'Access-Control-Allow-Origin': origin || '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Accept, Cache-Control, DNT',
    'Access-Control-Max-Age': '86400'
  };
}

async function resolveViaJSON(dnsQuery, clientRegion) {
  const view = new Uint8Array(dnsQuery);
  let offset = 12;
  let name = '';
  while (offset < view.length) {
    const len = view[offset];
    if (len === 0) { offset++; break; }
    if (name) name += '.';
    for (let i = 1; i <= len; i++) name += String.fromCharCode(view[offset + i]);
    offset += len + 1;
  }
  const qtype = (view[offset] << 8) | view[offset + 1];

  const jsonProvider = 'https://cloudflare-dns.com/dns-query';
  const jsonUrl = `${jsonProvider}?name=${encodeURIComponent(name)}&type=${qtype}`;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), RACE_TIMEOUT);

  try {
    const response = await fetch(jsonUrl, {
      headers: {
        'Accept': 'application/dns-json',
        'User-Agent': getRandomUserAgent()
      },
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    if (response.ok) {
      return await response.json();
    }
    return null;
  } catch (e) {
    clearTimeout(timeoutId);
    return null;
  }
}

async function handleDNSQuery(request) {
  const url = new URL(request.url);
  const clientIP = request.headers.get('CF-Connecting-IP') || 'unknown';
  const cfData = request.cf || {};
  const clientRegion = getClientRegion(cfData);
  const origin = request.headers.get('Origin');
  const corsHeaders = buildCORSHeaders(origin);
  const acceptHeader = request.headers.get('Accept') || '';
  const wantsJSON = acceptHeader.includes('application/dns-json');

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  if (isRateLimited(clientIP)) {
    return new Response('Rate limit exceeded', {
      status: 429,
      headers: {
        ...corsHeaders,
        'Retry-After': '60',
        'Content-Type': 'text/plain',
        'X-Rate-Limit': `${RATE_LIMIT_REQUESTS}/${RATE_LIMIT_WINDOW/1000}s`
      }
    });
  }

  let dnsQuery;

  if (request.method === 'POST') {
    dnsQuery = await request.arrayBuffer();
  } else if (request.method === 'GET') {
    const dnsParam = url.searchParams.get('dns');
    if (!dnsParam) {
      if (wantsJSON) {
        const name = url.searchParams.get('name');
        const type = url.searchParams.get('type') || 'A';
        if (name) {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), RACE_TIMEOUT);
          try {
            const cfUrl = `https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(name)}&type=${encodeURIComponent(type)}`;
            const resp = await fetch(cfUrl, {
              headers: { 'Accept': 'application/dns-json', 'User-Agent': getRandomUserAgent() },
              signal: controller.signal
            });
            clearTimeout(timeoutId);
            if (resp.ok) {
              const jsonData = await resp.json();
              return new Response(JSON.stringify(jsonData), {
                status: 200,
                headers: { ...corsHeaders, 'Content-Type': 'application/dns-json', 'X-Cache': 'MISS' }
              });
            }
          } catch (e) {
            clearTimeout(timeoutId);
          }
          return new Response(JSON.stringify({ Status: 2 }), {
            status: 200,
            headers: { ...corsHeaders, 'Content-Type': 'application/dns-json' }
          });
        }
      }
      return new Response('Missing dns parameter', { status: 400, headers: corsHeaders });
    }
    try {
      const paddedDns = dnsParam.replace(/-/g, '+').replace(/_/g, '/');
      const padding = '='.repeat((4 - (paddedDns.length % 4)) % 4);
      dnsQuery = Uint8Array.from(atob(paddedDns + padding), c => c.charCodeAt(0)).buffer;
    } catch (e) {
      return new Response('Invalid dns parameter', { status: 400, headers: corsHeaders });
    }
  } else {
    return new Response('Method not allowed', { status: 405, headers: corsHeaders });
  }

  if (dnsQuery.byteLength > MAX_DNS_REQUEST_SIZE) {
    return new Response('Request too large', { status: 413, headers: corsHeaders });
  }

  if (concurrentRequests >= MAX_CONCURRENT_REQUESTS) {
    return new Response('Server busy', { status: 503, headers: corsHeaders });
  }

  concurrentRequests++;
  globalRequestCount++;

  try {
    performHealthCheck().catch(() => {});
    performAdaptiveLearning().catch(() => {});
    sendDecoyRequests().catch(() => {});

    const cacheKey = getCacheKey(dnsQuery);

    const negativeCached = checkNegativeCache(cacheKey);
    if (negativeCached) {
      return new Response(negativeCached, {
        status: 200,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/dns-message',
          'Cache-Control': `public, max-age=${NEGATIVE_CACHE_TTL}`,
          'X-Cache': 'NEGATIVE-HIT',
          'X-Provider': 'negative-cache'
        }
      });
    }

    const cachedResponse = getCachedResponse(cacheKey);
    if (cachedResponse) {
      return new Response(cachedResponse, {
        status: 200,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/dns-message',
          'Cache-Control': `public, max-age=${DNS_CACHE_TTL_DEFAULT}`,
          'X-Cache': 'HIT',
          'X-Provider': 'cache',
          'X-Client-Region': clientRegion
        }
      });
    }

    if (pendingRequests.has(cacheKey)) {
      try {
        const coalescedResult = await pendingRequests.get(cacheKey);
        return new Response(coalescedResult.data, {
          status: 200,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/dns-message',
            'Cache-Control': `public, max-age=${extractTTL(coalescedResult.data)}`,
            'X-Cache': 'COALESCED',
            'X-Provider': coalescedResult.provider,
            'X-Response-Time': `${coalescedResult.responseTime}ms`,
            'X-Client-Region': clientRegion
          }
        });
      } catch (e) {
      }
    }

    const requestPromise = raceMultipleProviders(dnsQuery, request.headers, clientRegion)
      .catch(() => fallbackProviderRequest(dnsQuery, request.headers, [], clientRegion));

    pendingRequests.set(cacheKey, requestPromise);

    let result;
    try {
      result = await requestPromise;
    } finally {
      pendingRequests.delete(cacheKey);
    }

    if (isNXDOMAIN(result.data)) {
      setNegativeCache(cacheKey, result.data);
    } else {
      const ttl = extractTTL(result.data);
      setCachedResponse(cacheKey, result.data, ttl);
    }

    return new Response(result.data, {
      status: 200,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/dns-message',
        'Cache-Control': `public, max-age=${extractTTL(result.data)}`,
        'X-Cache': 'MISS',
        'X-Provider': result.provider,
        'X-Response-Time': `${result.responseTime}ms`,
        'X-Client-Region': clientRegion
      }
    });

  } catch (error) {
    return new Response('DNS query failed', {
      status: 502,
      headers: {
        ...corsHeaders,
        'Content-Type': 'text/plain',
        'X-Error': error.message
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
    <string>This profile enables encrypted DNS (DNS over HTTPS) on iOS, iPadOS, and macOS devices using your personal DoH Proxy.
    
Designed by: Anonymous</string>
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
  return mobileconfig;
}

function generateStatsPage() {
  const totalProviders = UPSTREAM_DNS_PROVIDERS.length;
  const healthyProviders = UPSTREAM_DNS_PROVIDERS.filter(p => p.healthScore > 50).length;
  const avgHealth = UPSTREAM_DNS_PROVIDERS.reduce((sum, p) => sum + p.healthScore, 0) / totalProviders;

  const topProviders = UPSTREAM_DNS_PROVIDERS
    .filter(p => p.totalRequests > 0)
    .sort((a, b) => calculateProviderScore(b) - calculateProviderScore(a))
    .slice(0, 15);

  return `<!DOCTYPE html>
<html dir="rtl" lang="fa">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DoH Proxy Pro - آمار زنده</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif;
            background-color: #0d1117;
            color: #c9d1d9;
            padding: 20px;
            min-height: 100vh;
        }
        .container {
            max-width: 1400px;
            margin: 0 auto;
            background-color: #161b22;
            border: 1px solid #30363d;
            border-radius: 12px;
            padding: 40px;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
        }
        h1 {
            color: #58a6ff;
            font-size: 2.5em;
            margin-bottom: 10px;
            font-weight: 600;
        }
        .subtitle {
            color: #8b949e;
            margin-bottom: 40px;
            font-size: 1.1em;
        }
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-bottom: 40px;
        }
        .stat-card {
            background: #1c2128;
            border: 1px solid #30363d;
            padding: 25px;
            border-radius: 12px;
            transition: all 0.2s;
        }
        .stat-card:hover {
            border-color: #58a6ff;
            transform: translateY(-2px);
        }
        .stat-label {
            font-size: 0.9em;
            color: #8b949e;
            margin-bottom: 10px;
        }
        .stat-value {
            font-size: 2.5em;
            font-weight: bold;
            color: #58a6ff;
        }
        .table-container {
            background: #1c2128;
            border: 1px solid #30363d;
            border-radius: 12px;
            overflow: hidden;
            margin-bottom: 30px;
        }
        .table-wrapper {
            overflow-x: auto;
            overflow-y: auto;
            max-height: 600px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            min-width: 800px;
        }
        th, td {
            padding: 15px;
            text-align: right;
            border-bottom: 1px solid #30363d;
        }
        th {
            background: #0d1117;
            color: #58a6ff;
            font-weight: 600;
            position: sticky;
            top: 0;
            z-index: 10;
        }
        tr:hover {
            background: #161b22;
        }
        .health-bar {
            height: 8px;
            background: #21262d;
            border-radius: 4px;
            overflow: hidden;
            margin-top: 5px;
        }
        .health-fill {
            height: 100%;
            background: linear-gradient(90deg, #238636 0%, #2ea043 100%);
            transition: width 0.3s;
        }
        .back-button {
            display: inline-block;
            margin-top: 30px;
            padding: 12px 30px;
            background: #238636;
            color: white;
            text-decoration: none;
            border-radius: 6px;
            transition: all 0.2s;
            font-weight: 600;
        }
        .back-button:hover {
            background: #2ea043;
            transform: translateY(-2px);
        }
        @media (max-width: 768px) {
            .container { padding: 20px; }
            h1 { font-size: 1.8em; }
            .stat-value { font-size: 2em; }
            .table-wrapper { max-height: 400px; }
            th, td { padding: 10px; font-size: 0.9em; }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>📊 آمار زنده سرورها</h1>
        <div class="subtitle">DoH Proxy Pro - Real-time Server Statistics</div>
        
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-label">تعداد کل سرورها</div>
                <div class="stat-value">${totalProviders}</div>
            </div>
            <div class="stat-card">
                <div class="stat-label">سرورهای سالم</div>
                <div class="stat-value">${healthyProviders}</div>
            </div>
            <div class="stat-card">
                <div class="stat-label">میانگین سلامت</div>
                <div class="stat-value">${avgHealth.toFixed(1)}%</div>
            </div>
            <div class="stat-card">
                <div class="stat-label">درخواست‌های کل</div>
                <div class="stat-value">${globalRequestCount}</div>
            </div>
        </div>
        
        <div class="table-container">
            <div class="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>رتبه</th>
                            <th>سرور</th>
                            <th>منطقه</th>
                            <th>درصد موفقیت</th>
                            <th>زمان پاسخ</th>
                            <th>سلامت</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${topProviders.map((p, i) => `
                            <tr>
                                <td>${i + 1}</td>
                                <td>${new URL(p.url).hostname}</td>
                                <td>${p.region.toUpperCase()}</td>
                                <td>${p.totalRequests > 0 ? ((p.successCount / p.totalRequests) * 100).toFixed(1) : 0}%</td>
                                <td>${p.avgResponseTime > 0 ? p.avgResponseTime.toFixed(0) : '-'} ms</td>
                                <td>
                                    ${p.healthScore.toFixed(0)}%
                                    <div class="health-bar">
                                        <div class="health-fill" style="width: ${p.healthScore}%"></div>
                                    </div>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
        
        <a href="/" class="back-button">← بازگشت به صفحه اصلی</a>
    </div>
</body>
</html>`;
}

async function handleRequest(request) {
  const url = new URL(request.url);
  const path = url.pathname;

  if (path === '/dns-query') {
    return handleDNSQuery(request);
  }

  if (path === '/apple') {
    const profile = generateAppleProfile(request.url);
    return new Response(profile, {
      headers: {
        'Content-Type': 'application/x-apple-aspen-config',
        'Content-Disposition': 'attachment; filename="DoH-Profile.mobileconfig"'
      }
    });
  }

  if (path === '/stats') {
    return new Response(generateStatsPage(), {
      headers: { 'Content-Type': 'text/html; charset=utf-8' }
    });
  }

  const baseUrl = new URL(request.url);
  const workerUrl = `${baseUrl.protocol}//${baseUrl.hostname}/dns-query`;
  const workerHost = baseUrl.hostname;
  const appleProfileUrl = `${baseUrl.protocol}//${baseUrl.hostname}/apple`;
  const statsUrl = `${baseUrl.protocol}//${baseUrl.hostname}/stats`;

  const html = `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DoH Proxy Pro - DNS over HTTPS</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif;
            background-color: #0d1117;
            color: #c9d1d9;
            line-height: 1.6;
            padding: 20px;
            min-height: 100vh;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background-color: #161b22;
            border: 1px solid #30363d;
            border-radius: 12px;
            padding: 40px;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
        }
        
        h1 {
            color: #58a6ff;
            font-size: 2.5em;
            margin-bottom: 10px;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 15px;
        }
        
        .badge {
            background: linear-gradient(135deg, #238636, #2ea043);
            color: white;
            padding: 6px 14px;
            border-radius: 20px;
            font-size: 0.4em;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .status-bar {
            background: #1c2128;
            border: 1px solid #30363d;
            border-radius: 8px;
            padding: 16px 20px;
            margin: 25px 0;
            display: flex;
            align-items: center;
            gap: 12px;
        }
        
        .status-indicator {
            width: 12px;
            height: 12px;
            background: #3fb950;
            border-radius: 50%;
            box-shadow: 0 0 8px #3fb950;
            animation: pulse 2s ease-in-out infinite;
        }
        
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }
        
        .status-text {
            color: #8b949e;
            font-size: 0.95em;
        }
        
        .status-text strong {
            color: #3fb950;
        }
        
        h2 {
            color: #58a6ff;
            font-size: 1.6em;
            margin: 35px 0 20px 0;
            font-weight: 600;
            border-bottom: 1px solid #30363d;
            padding-bottom: 10px;
        }
        
        .info-box {
            background: #1c2128;
            border: 1px solid #30363d;
            border-right: 3px solid #58a6ff;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
        }
        
        .url-container {
            background: #0d1117;
            border: 1px solid #30363d;
            border-radius: 8px;
            padding: 16px;
            margin: 15px 0;
            position: relative;
        }
        
        .url-box {
            font-family: 'Courier New', Monaco, monospace;
            color: #79c0ff;
            font-size: 1em;
            word-break: break-all;
            direction: ltr;
            text-align: left;
            padding: 8px 0;
        }
        
        .copy-btn, .download-btn {
            background: #238636;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 0.9em;
            font-weight: 600;
            margin-top: 10px;
            margin-left: 8px;
            transition: all 0.2s;
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }
        
        .copy-btn:hover {
            background: #2ea043;
        }
        
        .download-btn {
            background: #6e40c9;
            text-decoration: none;
        }
        
        .download-btn:hover {
            background: #8957e5;
        }
        
        .copy-btn.copied {
            background: #3fb950;
        }
        
        .feature-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 15px;
            margin: 20px 0;
        }
        
        .feature-item {
            background: #1c2128;
            border: 1px solid #30363d;
            border-radius: 8px;
            padding: 16px;
            display: flex;
            align-items: flex-start;
            gap: 12px;
            transition: all 0.2s;
        }
        
        .feature-item:hover {
            border-color: #58a6ff;
            transform: translateY(-2px);
        }
        
        .feature-icon {
            color: #3fb950;
            font-size: 1.3em;
            flex-shrink: 0;
        }
        
        .feature-text {
            color: #c9d1d9;
            font-size: 0.95em;
        }
        
        .code-box {
            background: #0d1117;
            border: 1px solid #30363d;
            border-radius: 8px;
            padding: 20px;
            margin: 15px 0;
            font-family: 'Courier New', Monaco, monospace;
            font-size: 0.85em;
            overflow-x: auto;
            white-space: pre-wrap;
            word-wrap: break-word;
            direction: ltr;
            text-align: left;
            color: #79c0ff;
        }
        
        .usage-card {
            background: #1c2128;
            border: 1px solid #30363d;
            border-radius: 8px;
            padding: 24px;
            margin: 20px 0;
        }
        
        .usage-card h3 {
            color: #58a6ff;
            font-size: 1.2em;
            margin-bottom: 15px;
            font-weight: 600;
        }
        
        .usage-card p {
            margin: 12px 0;
            line-height: 1.7;
        }
        
        .warning-box {
            background: #1c1917;
            border: 1px solid #f85149;
            border-right: 3px solid #f85149;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
        }
        
        .warning-box strong {
            color: #ff7b72;
        }
        
        .success-highlight {
            color: #3fb950;
            font-weight: 600;
        }
        
        .dns-list {
            background: #1c2128;
            border: 1px solid #30363d;
            border-radius: 8px;
            padding: 20px;
            margin: 15px 0;
        }
        
        .dns-item {
            padding: 10px 15px;
            margin: 8px 0;
            background: #0d1117;
            border-radius: 6px;
            font-family: monospace;
            font-size: 0.9em;
            color: #8b949e;
        }
        
        .stats-link {
            display: inline-block;
            background: #238636;
            color: white;
            padding: 12px 24px;
            border-radius: 6px;
            text-decoration: none;
            font-weight: 600;
            margin: 20px 0;
            transition: all 0.2s;
        }
        
        .stats-link:hover {
            background: #2ea043;
            transform: translateY(-2px);
        }
        
        .footer {
            text-align: center;
            margin-top: 50px;
            padding-top: 30px;
            border-top: 1px solid #30363d;
            color: #8b949e;
        }
        
        .footer a {
            color: #58a6ff;
            text-decoration: none;
            font-weight: 600;
        }
        
        .footer a:hover {
            text-decoration: underline;
        }
        
        @media (max-width: 768px) {
            .container {
                padding: 20px;
            }
            
            h1 {
                font-size: 1.8em;
                flex-direction: column;
                align-items: flex-start;
            }
            
            .feature-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>
            🚀 DoH Proxy
            <span class="badge">Pro</span>
        </h1>
        
        <div class="status-bar">
            <div class="status-indicator"></div>
            <div class="status-text">
                <strong>فعال و آماده به کار</strong> - سیستم Parallel Racing، Circuit Breaker، Geo-selection و یادگیری تطبیقی فعال است
            </div>
        </div>
        
        <div class="info-box">
            <strong>این یک سرویس DNS over HTTPS (DoH) پیشرفته با قابلیت‌های Anti-Censorship است.</strong><br>
            نسخه Pro با تکنولوژی‌های پیشرفته: Parallel DNS Racing، Circuit Breaker Pattern، Geo-based Selection، QNAME Minimization، DNS Padding، ECS Stripping، Negative Caching، Adaptive Timeouts، Enhanced Header Randomization و 15+ قابلیت دیگر.
        </div>
        
        <a href="${statsUrl}" class="stats-link">📊 مشاهده آمار زنده سرورها</a>

        <h2>📍 آدرس سرویس شما:</h2>
        <div class="url-container">
            <div class="url-box" id="dohUrl">${workerUrl}</div>
            <button class="copy-btn" onclick="copyToClipboard('dohUrl')">📋 کپی آدرس</button>
        </div>

        <h2>✨ ویژگی‌های پیشرفته:</h2>
        <div class="feature-grid">
            <div class="feature-item">
                <div class="feature-icon">⚡</div>
                <div class="feature-text">Parallel DNS Racing - همزمان 10 سرور برتر را امتحان می‌کند</div>
            </div>
            <div class="feature-item">
                <div class="feature-icon">🛡️</div>
                <div class="feature-text">Circuit Breaker Pattern - مدیریت خودکار سرورهای ناسالم</div>
            </div>
            <div class="feature-item">
                <div class="feature-icon">🌍</div>
                <div class="feature-text">Geo-based Selection - انتخاب بهترین سرور بر اساس موقعیت جغرافیایی</div>
            </div>
            <div class="feature-item">
                <div class="feature-icon">🧠</div>
                <div class="feature-text">یادگیری تطبیقی مبتنی بر AI برای انتخاب هوشمند سرورها</div>
            </div>
            <div class="feature-item">
                <div class="feature-icon">🔄</div>
                <div class="feature-text">Load Balancing هوشمند بر اساس سرعت و قابلیت اطمینان</div>
            </div>
            <div class="feature-item">
                <div class="feature-icon">🔒</div>
                <div class="feature-text">DNS Padding (RFC 8467) - جلوگیری از Traffic Analysis</div>
            </div>
            <div class="feature-item">
                <div class="feature-icon">🎯</div>
                <div class="feature-text">QNAME Minimization - حداقل‌سازی اطلاعات query</div>
            </div>
            <div class="feature-item">
                <div class="feature-icon">🚫</div>
                <div class="feature-text">ECS Stripping - حذف EDNS Client Subnet</div>
            </div>
            <div class="feature-item">
                <div class="feature-icon">💾</div>
                <div class="feature-text">Smart LRU Caching - مدیریت هوشمند Cache</div>
            </div>
            <div class="feature-item">
                <div class="feature-icon">⏱️</div>
                <div class="feature-text">Adaptive Timeouts - تنظیم خودکار زمان انتظار</div>
            </div>
            <div class="feature-item">
                <div class="feature-icon">🔄</div>
                <div class="feature-text">Negative Caching - Cache هوشمند NXDOMAIN</div>
            </div>
            <div class="feature-item">
                <div class="feature-icon">⚙️</div>
                <div class="feature-text">استفاده از بیش از 200 سرور DNS معتبر جهانی</div>
            </div>
            <div class="feature-item">
                <div class="feature-icon">🎭</div>
                <div class="feature-text">Enhanced Header Randomization - ضد Fingerprinting</div>
            </div>
            <div class="feature-item">
                <div class="feature-icon">📊</div>
                <div class="feature-text">امتیازدهی پویا: 35% سلامت، 30% سرعت، 20% قابلیت اطمینان، 15% منطقه</div>
            </div>
            <div class="feature-item">
                <div class="feature-icon">🔄</div>
                <div class="feature-text">Intelligent Fallback در صورت شکست Racing</div>
            </div>
            <div class="feature-item">
                <div class="feature-icon">🌐</div>
                <div class="feature-text">بهره‌مندی از ECH در سرورهای Cloudflare</div>
            </div>
            <div class="feature-item">
                <div class="feature-icon">🔗</div>
                <div class="feature-text">Request Coalescing - ادغام هوشمند درخواست‌های تکراری برای کاهش latency</div>
            </div>
            <div class="feature-item">
                <div class="feature-icon">🌏</div>
                <div class="feature-text">CORS Support - پشتیبانی کامل از درخواست‌های مرورگر بدون محدودیت Cross-Origin</div>
            </div>
            <div class="feature-item">
                <div class="feature-icon">📡</div>
                <div class="feature-text">JSON DoH API - پشتیبانی از فرمت application/dns-json برای سازگاری بیشتر</div>
            </div>
            <div class="feature-item">
                <div class="feature-icon">🔐</div>
                <div class="feature-text">اجرای واقعی RFC 8467 DNS Padding با OPT Record استاندارد</div>
            </div>
            <div class="feature-item">
                <div class="feature-icon">🧹</div>
                <div class="feature-text">ECS Stripping پیشرفته - پارس و حذف واقعی EDNS Client Subnet از OPT Record</div>
            </div>
            <div class="feature-item">
                <div class="feature-icon">🎲</div>
                <div class="feature-text">Decoy Traffic با 20 دامنه متنوع برای مخفی‌سازی الگوی ترافیک DNS</div>
            </div>
        </div>

        <h2>🌐 DNS Providers استفاده شده:</h2>
        <div class="dns-list">
            <div class="dns-item">بیش از 220 سرور DNS معتبر از کشورهای مختلف با پشتیبانی Geo-location</div>
            <div class="dns-item">• Cloudflare, Google, Quad9, OpenDNS</div>
            <div class="dns-item">• AdGuard, NextDNS, Mullvad</div>
            <div class="dns-item">• AhaDNS (آمریکا، هلند، لهستان، هند، سنگاپور، استرالیا)</div>
            <div class="dns-item">• BlahDNS (فنلاند، ژاپن، آلمان، سنگاپور)</div>
            <div class="dns-item">• Pi-DNS (اروپا، آمریکا)</div>
            <div class="dns-item">• و 60+ سرور دیگر با پوشش جهانی...</div>
        </div>

        <div class="info-box">
            <strong>✅ این DoH Proxy چه کارهایی انجام می‌دهد:</strong><br><br>
            • <span class="success-highlight">رمزنگاری کامل درخواست‌های DNS</span> - درخواست‌های شما از طریق HTTPS رمزنگاری می‌شوند<br>
            • <span class="success-highlight">دور زدن DNS Poisoning</span> - از دستکاری پاسخ‌های DNS جلوگیری می‌کند<br>
            • <span class="success-highlight">باز کردن وب‌سایت‌های فیلتر شده با DNS</span> - اگر سایتی فقط در لایه DNS مسدود شده باشد، با این DoH قابل دسترسی می‌شود<br>
            • <span class="success-highlight">افزایش حریم خصوصی</span> - ISP نمی‌تواند ببیند به چه دامنه‌هایی Query می‌زنید<br>
            • <span class="success-highlight">بهبود امنیت</span> - از حملات Man-in-the-Middle در لایه DNS جلوگیری می‌کند<br>
            • <span class="success-highlight">سرعت بالاتر</span> - با Racing Mode، Circuit Breaker و Smart Caching سرعت بهینه را دریافت می‌کنید
        </div>

        <div class="warning-box">
            <strong>💡 درک انواع فیلترینگ:</strong><br><br>
            فیلترینگ در شبکه در لایه‌های مختلف انجام می‌شود:<br><br>
            
            <strong>1. DNS Filtering (فیلترینگ DNS):</strong><br>
            • سایت در سطح DNS مسدود می‌شود<br>
            • <span class="success-highlight">✓ این DoH Proxy این نوع فیلترینگ را دور می‌زند</span><br>
            • مثال: بسیاری از وب‌سایت‌ها در کشورهای مختلف<br><br>
            
            <strong>2. SNI Filtering (فیلترینگ SNI):</strong><br>
            • سایت بر اساس Server Name Indication مسدود می‌شود<br>
            • ✗ این DoH به تنهایی کافی نیست (نیاز به ECH یا ابزار اضافی)<br><br>
            
            <strong>3. IP Blocking (مسدودسازی IP):</strong><br>
            • آدرس IP سرور مستقیماً مسدود می‌شود<br>
            • ✗ این DoH به تنهایی کافی نیست (نیاز به VPN)<br><br>
            
            <strong>4. Deep Packet Inspection - DPI:</strong><br>
            • بررسی عمیق محتوای بسته‌های شبکه<br>
            • ✗ این DoH به تنهایی کافی نیست (نیاز به VPN یا پروکسی پیشرفته)<br><br>
            
            <strong>نتیجه:</strong> اگر سایت مورد نظر شما فقط با DNS فیلتر شده، این DoH کافی است. اگر از روش‌های دیگر فیلتر شده، به VPN نیاز دارید.
        </div>

        <h2>📱 نحوه استفاده:</h2>
        
        <div class="usage-card">
            <h3>🌐 مرورگرها (Firefox, Chrome, Edge, Brave)</h3>
            <p>بروید به تنظیمات مرورگر → بخش Privacy یا Security → DNS over HTTPS → انتخاب Custom Provider و آدرس بالا را وارد کنید.</p>
            <p><strong>فعال‌سازی ECH در Firefox:</strong><br>
            1. در آدرس‌بار تایپ کنید: about:config<br>
            2. جستجو کنید: network.dns.echconfig.enabled<br>
            3. مقدار را روی true قرار دهید</p>
            <p>با این تنظیمات، بسیاری از سایت‌های فیلتر شده با DNS قابل دسترسی می‌شوند.</p>
        </div>

        <div class="usage-card">
            <h3>📱 اپلیکیشن Intra (اندروید)</h3>
            <p>1. اپلیکیشن Intra را از Google Play نصب کنید<br>
            2. اپلیکیشن را باز کنید<br>
            3. روی گزینه "Configure custom server URL" بزنید<br>
            4. آدرس زیر را در قسمت Custom DNS over HTTPS server URL وارد کنید:</p>
            <div class="url-container">
                <div class="url-box">${workerUrl}</div>
            </div>
            <p>5. دکمه ON را فعال کنید</p>
            <p>این تنظیم DNS شما را رمزنگاری می‌کند و سایت‌هایی که فقط با DNS فیلتر شده‌اند را باز می‌کند.</p>
        </div>

        <div class="usage-card">
            <h3>🍎 iOS, iPadOS و macOS</h3>
            <p>برای استفاده در دستگاه‌های اپل، کافی است پروفایل شخصی خود را دانلود و نصب کنید:</p>
            <a href="${appleProfileUrl}" class="download-btn">🍎 دانلود پروفایل iOS/macOS</a>
            <br><br>
            <p><strong>نحوه نصب:</strong><br>
            • <strong>iOS/iPadOS:</strong> فایل را با Safari دانلود کنید → Settings → General → VPN, DNS & Device Management → Downloaded Profile → Install<br>
            • <strong>macOS:</strong> فایل را دانلود کنید → System Settings → Privacy & Security → Profiles → نصب پروفایل</p>
            <p>پس از نصب، DNS همه اپلیکیشن‌های شما رمزنگاری می‌شود.</p>
        </div>

        <div class="usage-card">
            <h3>🔧 کلاینت‌های Xray - کانفیگ ساده (v2rayNG و مشابه)</h3>
            <p>برای استفاده در کلاینت‌های مبتنی بر Xray، می‌توانید از کانفیگ زیر استفاده کنید:</p>
            <div class="code-box" id="xrayConfig">{
  "remarks": "🛡️ DoH Proxy Pro",
  "dns": {
    "servers": [
      {
        "address": "${workerUrl}",
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
            <button class="copy-btn" onclick="copyToClipboard('xrayConfig')">📋 کپی کانفیگ Xray</button>
            <br><br>
            <p><strong>نکته:</strong> این کانفیگ DNS شما را امن می‌کند و سایت‌های فیلتر شده با DNS را باز می‌کند.</p>
        </div>

        <div class="usage-card">
            <h3>🚀 کلاینت‌های Xray - کانفیگ پیشرفته با Fragment (توصیه می‌شود)</h3>
            <p>این کانفیگ علاوه بر DoH دارای قابلیت Fragment است که به دور زدن فیلترینگ‌های پیشرفته‌تر کمک می‌کند:</p>
            <div class="code-box" id="xrayFragmentConfig">{
  "remarks": "🛡️ DoH Proxy Pro + Fragment",
  "log": {
    "access": "",
    "error": "",
    "loglevel": "warning",
    "dnsLog": true
  },
  "dns": {
    "tag": "dns-in",
    "hosts": {
      "${workerHost}": [
        "172.67.73.38",
        "104.19.155.92",
        "172.67.73.163",
        "104.18.155.42",
        "104.16.124.175",
        "104.16.248.249",
        "104.16.249.249",
        "104.26.13.8"
      ],
      "cloudflare-dns.com": [
        "1.1.1.1",
        "1.0.0.1"
      ]
    },
    "servers": [
      "${workerUrl}",
      "1.1.1.1",
      "8.8.8.8"
    ],
    "queryStrategy": "UseIPv4"
  },
  "inbounds": [
    {
      "tag": "socks-in",
      "port": 10808,
      "listen": "127.0.0.1",
      "protocol": "socks",
      "sniffing": {
        "enabled": true,
        "destOverride": [
          "http",
          "tls"
        ],
        "routeOnly": true
      },
      "settings": {
        "auth": "noauth",
        "udp": true,
        "userLevel": 8
      }
    },
    {
      "tag": "http-in",
      "port": 10809,
      "listen": "127.0.0.1",
      "protocol": "http",
      "sniffing": {
        "enabled": true,
        "destOverride": [
          "http",
          "tls"
        ],
        "routeOnly": true
      },
      "settings": {
        "userLevel": 8
      }
    }
  ],
  "outbounds": [
    {
      "tag": "fragment-out",
      "protocol": "freedom",
      "settings": {
        "domainStrategy": "UseIP",
        "fragment": {
          "packets": "tlshello",
          "length": "10-20",
          "interval": "10-20"
        }
      },
      "streamSettings": {
        "sockopt": {
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "domainStrategy": "UseIP"
        }
      }
    },
    {
      "tag": "dns-out",
      "protocol": "dns"
    },
    {
      "tag": "block",
      "protocol": "blackhole"
    }
  ],
  "policy": {
    "levels": {
      "8": {
        "connIdle": 300,
        "downlinkOnly": 1,
        "handshake": 4,
        "uplinkOnly": 1
      }
    },
    "system": {
      "statsOutboundUplink": true,
      "statsOutboundDownlink": true
    }
  },
  "routing": {
    "domainStrategy": "IPIfNonMatch",
    "rules": [
      {
        "type": "field",
        "outboundTag": "block",
        "ip": [
          "geoip:private",
          "geoip:cn"
        ]
      },
      {
        "type": "field",
        "outboundTag": "dns-out",
        "port": "53",
        "network": "udp"
      },
      {
        "type": "field",
        "outboundTag": "fragment-out",
        "port": "0-65535"
      }
    ]
  },
  "stats": {}
}</div>
            <button class="copy-btn" onclick="copyToClipboard('xrayFragmentConfig')">📋 کپی کانفیگ Fragment</button>
            <br><br>
            <p><strong>مزایای کانفیگ Fragment:</strong><br>
            • قابلیت Fragment برای دور زدن DPI<br>
            • تکه‌تکه کردن بسته‌های TLS Hello<br>
            • افزایش قابلیت دور زدن فیلترینگ‌های پیشرفته<br>
            • پورت HTTP (10809) و SOCKS (10808)</p>
        </div>


        <div class="usage-card">
            <h3>💻 ویندوز 10/11</h3>
            <p>Settings → Network & Internet → Properties → DNS server assignment → Edit → Preferred DNS encryption: Encrypted only (DNS over HTTPS) و آدرس بالا را وارد کنید.</p>
        </div>

        <div class="usage-card">
            <h3>🐧 لینوکس</h3>
            <p><strong>استفاده از systemd-resolved:</strong><br>
            1. ویرایش فایل تنظیمات:<br>
            <code style="background: #0d1117; padding: 5px 10px; border-radius: 4px; display: inline-block; margin: 5px 0;">sudo nano /etc/systemd/resolved.conf</code></p>
            <p>2. اضافه کردن این خطوط:<br>
            <code style="background: #0d1117; padding: 10px; border-radius: 4px; display: block; margin: 10px 0;">[Resolve]<br>DNS=${workerUrl}<br>DNSOverTLS=yes</code></p>
            <p>3. ری‌استارت سرویس:<br>
            <code style="background: #0d1117; padding: 5px 10px; border-radius: 4px; display: inline-block; margin: 5px 0;">sudo systemctl restart systemd-resolved</code></p>
        </div>

        <div class="usage-card">
            <h3>🔧 روتر</h3>
            <p>بسته به مدل روتر، ممکن است پشتیبانی از DoH داشته باشد. به تنظیمات DNS روتر خود مراجعه کنید. با تنظیم DoH در روتر، تمام دستگاه‌های متصل به شبکه از DNS رمزنگاری شده استفاده می‌کنند.</p>
        </div>

        <h2>🛡️ توصیه‌های امنیتی:</h2>
        <div class="info-box">
            <strong>برای حداکثر امنیت و دسترسی:</strong><br><br>
            <strong>سناریو 1 - فقط فیلترینگ DNS:</strong><br>
            ✓ از این DoH Proxy استفاده کنید<br>
            ✓ بسیاری از سایت‌ها قابل دسترسی می‌شوند<br><br>
            
            <strong>سناریو 2 - فیلترینگ پیشرفته‌تر:</strong><br>
            ✓ از این DoH Proxy استفاده کنید<br>
            ✓ ECH را در مرورگر فعال کنید<br>
            ✓ از کانفیگ Fragment در Xray استفاده کنید<br>
            ✓ از VPN برای لایه‌های دیگر استفاده کنید<br><br>
            
            <strong>نکات عمومی:</strong><br>
            • از مرورگرهای به‌روز استفاده کنید<br>
            • HTTPS را همیشه فعال نگه دارید<br>
            • از نرم‌افزارهای امنیتی معتبر استفاده کنید<br>
            • رمزهای عبور قوی استفاده کنید
        </div>

        <h2>❓ سوالات متداول:</h2>
        <div class="info-box">
            <strong>Q: آیا با این DoH می‌توانم به سایت‌های فیلتر شده دسترسی داشته باشم؟</strong><br>
            A: بله، اگر سایت فقط با DNS فیلتر شده باشد. اگر از روش‌های دیگر (IP blocking, DPI) فیلتر شده، به VPN نیاز دارید.<br><br>
            
            <strong>Q: Fragment چیست و چه کمکی می‌کند؟</strong><br>
            A: Fragment یک تکنیک ضد فیلترینگ است که بسته‌های TLS Hello را تکه‌تکه می‌کند و از شناسایی توسط DPI جلوگیری می‌کند. استفاده از کانفیگ Fragment در کنار DoH می‌تواند به دور زدن فیلترینگ‌های پیشرفته‌تر کمک کند.<br><br>
            
            <strong>Q: ECH چیست و چگونه کمک می‌کند؟</strong><br>
            A: ECH یا Encrypted Client Hello تکنیکی است که SNI را رمزنگاری می‌کند و از فیلترینگ مبتنی بر SNI جلوگیری می‌کند. برای استفاده باید هم مرورگر و هم سرور از آن پشتیبانی کنند.<br><br>
            
            <strong>Q: این DoH چه تفاوتی با 1.1.1.1 دارد؟</strong><br>
            A: این DoH Proxy شخصی شماست که روی Cloudflare Worker اجرا می‌شود و تکنیک‌های پیشرفته ضد سانسور دارد (Parallel Racing با 10 سرور، Circuit Breaker، Geo-selection، یادگیری تطبیقی، DNS Padding، QNAME Minimization، Negative Caching، Adaptive Timeouts و 15+ قابلیت دیگر). در نهایت از همان سرورهای DNS معتبر استفاده می‌کند ولی با قابلیت‌های بسیار بیشتر.<br><br>
            
            <strong>Q: آیا این سرویس رایگان است؟</strong><br>
            A: بله، اگر در محدوده رایگان Cloudflare Workers باشید (100,000 request در روز) کاملاً رایگان است.<br><br>
            
            <strong>Q: آیا استفاده از این DoH سرعت را کاهش می‌دهد؟</strong><br>
            A: خیر، بلکه ممکن است سرعت را بهبود بخشد چون از Cache هوشمند استفاده می‌کند و با Racing Mode اولین پاسخ سریع را دریافت می‌کنید.<br><br>
            
            <strong>Q: چه تفاوتی بین کانفیگ ساده و کانفیگ Fragment وجود دارد؟</strong><br>
            A: کانفیگ ساده فقط DoH را فعال می‌کند و برای دور زدن فیلترینگ DNS کافی است. کانفیگ Fragment علاوه بر DoH، قابلیت Fragment را هم دارد که به دور زدن فیلترینگ‌های پیشرفته‌تر (DPI) کمک می‌کند. برای حداکثر امنیت، استفاده از کانفیگ Fragment توصیه می‌شود.<br><br>
            
            <strong>Q: آیا کسی می‌تواند ببیند من از این سرویس استفاده می‌کنم؟</strong><br>
            A: درخواست‌های DNS شما رمزنگاری شده و ISP نمی‌تواند محتوای آن‌ها را ببیند. فقط می‌تواند ببیند که به سرور Cloudflare متصل هستید.<br><br>
            
            <strong>Q: تکنولوژی Parallel Racing چگونه کار می‌کند؟</strong><br>
            A: این سیستم همزمان به 10 سرور DNS برتر (با امتیازدهی بر اساس منطقه جغرافیایی، سرعت، سلامت و قابلیت اطمینان) درخواست می‌فرستد و اولین پاسخ سریع را قبول می‌کند. این باعث کاهش latency و افزایش قابلیت اطمینان می‌شود.<br><br>
            
            <strong>Q: Request Coalescing چیست؟</strong><br>
            A: وقتی چند کاربر یا برنامه در یک لحظه برای یک دامنه یکسان Query می‌زنند، به جای ارسال چند درخواست جداگانه به upstream، Worker یک درخواست ارسال می‌کند و پاسخ را بین همه به اشتراک می‌گذارد. این باعث کاهش بار سرور و کاهش latency می‌شود.<br><br>
            
        </div>

        <div class="footer">
            <p>Designed by: <a href="https://t.me/BXAMbot" target="_blank" rel="noopener noreferrer">Anonymous</a></p>
            <p style="margin-top: 10px; font-size: 0.9em; color: #6e7681;">Enhanced Anti-Censorship Version with Parallel Racing Technology</p>
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

  return new Response(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' }
  });
}

export async function onRequest(context) {
  return handleRequest(context.request);
}