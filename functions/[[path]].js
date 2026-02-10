const UPSTREAM_DNS_PROVIDERS = [
  // ========== Tier 1: Most Popular & Reliable (Cloudflare, Google, Quad9) ==========
  { url: 'https://cloudflare-dns.com/dns-query', priority: 1, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'www.cloudflare.com', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://1.1.1.1/dns-query', priority: 2, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'one.one.one.one', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://1.0.0.1/dns-query', priority: 3, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'one.one.one.one', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://mozilla.cloudflare-dns.com/dns-query', priority: 4, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'mozilla.cloudflare-dns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://security.cloudflare-dns.com/dns-query', priority: 5, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'security.cloudflare-dns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://family.cloudflare-dns.com/dns-query', priority: 6, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'family.cloudflare-dns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://dns64.cloudflare-dns.com/dns-query', priority: 7, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns64.cloudflare-dns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://brave.cloudflare-dns.com/dns-query', priority: 8, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'brave.cloudflare-dns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://dns.google/dns-query', priority: 9, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'www.google.com', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://8888.google/dns-query', priority: 10, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'www.google.com', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://dns64.dns.google/dns-query', priority: 11, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns64.dns.google', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://dns.quad9.net/dns-query', priority: 12, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'www.quad9.net', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://dns9.quad9.net/dns-query', priority: 13, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns9.quad9.net', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://dns10.quad9.net/dns-query', priority: 14, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns10.quad9.net', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://dns11.quad9.net/dns-query', priority: 15, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns11.quad9.net', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://dns12.quad9.net/dns-query', priority: 16, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns12.quad9.net', avgResponseTime: 0, successCount: 0, totalRequests: 0 },

  // ========== Tier 2: Well-Known Providers (NextDNS, OpenDNS, AdGuard) ==========
  { url: 'https://dns.nextdns.io/dns-query', priority: 17, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.nextdns.io', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://doh.opendns.com/dns-query', priority: 18, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'www.opendns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://doh.familyshield.opendns.com/dns-query', priority: 19, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.familyshield.opendns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://doh.umbrella.com/dns-query', priority: 20, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.umbrella.com', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://dns.adguard-dns.com/dns-query', priority: 21, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.adguard-dns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://unfiltered.adguard-dns.com/dns-query', priority: 22, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'unfiltered.adguard-dns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://family.adguard-dns.com/dns-query', priority: 23, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'family.adguard-dns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0 },

  // ========== Tier 3: Privacy-Focused Providers (Mullvad, Control D, RethinkDNS) ==========
  { url: 'https://doh.mullvad.net/dns-query', priority: 24, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.mullvad.net', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://adblock.doh.mullvad.net/dns-query', priority: 25, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'adblock.doh.mullvad.net', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://base.dns.mullvad.net/dns-query', priority: 26, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'base.dns.mullvad.net', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://extended.dns.mullvad.net/dns-query', priority: 27, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'extended.dns.mullvad.net', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://all.dns.mullvad.net/dns-query', priority: 28, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'all.dns.mullvad.net', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://family.dns.mullvad.net/dns-query', priority: 29, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'family.dns.mullvad.net', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://freedns.controld.com/p0', priority: 30, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'freedns.controld.com', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://freedns.controld.com/p1', priority: 31, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'freedns.controld.com', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://freedns.controld.com/p2', priority: 32, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'freedns.controld.com', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://freedns.controld.com/p3', priority: 33, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'freedns.controld.com', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://freedns.controld.com/family', priority: 34, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'freedns.controld.com', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://freedns.controld.com/uncensored', priority: 35, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'freedns.controld.com', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://sky.rethinkdns.com/dns-query', priority: 36, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'sky.rethinkdns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0 },

  // ========== Tier 4: Security & Filtering Providers (CleanBrowsing, DNS0) ==========
  { url: 'https://doh.cleanbrowsing.org/doh/security-filter/', priority: 37, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.cleanbrowsing.org', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://doh.cleanbrowsing.org/doh/adult-filter/', priority: 38, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.cleanbrowsing.org', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://doh.cleanbrowsing.org/doh/family-filter/', priority: 39, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.cleanbrowsing.org', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://zero.dns0.eu/dns-query', priority: 40, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'zero.dns0.eu', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://kids.dns0.eu/dns-query', priority: 41, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'kids.dns0.eu', avgResponseTime: 0, successCount: 0, totalRequests: 0 },

  // ========== Tier 5: Regional/Government Providers (CIRA, DNS4EU, Wikimedia) ==========
  { url: 'https://private.canadianshield.cira.ca/dns-query', priority: 42, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'private.canadianshield.cira.ca', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://protected.canadianshield.cira.ca/dns-query', priority: 43, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'protected.canadianshield.cira.ca', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://family.canadianshield.cira.ca/dns-query', priority: 44, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'family.canadianshield.cira.ca', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://protective.joindns4.eu/dns-query', priority: 45, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'protective.joindns4.eu', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://child.joindns4.eu/dns-query', priority: 46, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'child.joindns4.eu', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://noads.joindns4.eu/dns-query', priority: 47, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'noads.joindns4.eu', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://child-noads.joindns4.eu/dns-query', priority: 48, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'child-noads.joindns4.eu', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://unfiltered.joindns4.eu/dns-query', priority: 49, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'unfiltered.joindns4.eu', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://wikimedia-dns.org/dns-query', priority: 50, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'wikimedia-dns.org', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://doh.wikimedia.org/dns-query', priority: 51, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.wikimedia.org', avgResponseTime: 0, successCount: 0, totalRequests: 0 },

  // ========== Tier 6: European Privacy Providers (Switch, Digitale Gesellschaft, LibreDNS) ==========
  { url: 'https://dns.switch.ch/dns-query', priority: 52, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.switch.ch', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://dns.digitale-gesellschaft.ch/dns-query', priority: 53, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.digitale-gesellschaft.ch', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://doh.libredns.gr/dns-query', priority: 54, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.libredns.gr', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://doh.libredns.gr/noads', priority: 55, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.libredns.gr', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://odvr.nic.cz/dns-query', priority: 56, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'odvr.nic.cz', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://doh.ffmuc.net/dns-query', priority: 57, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.ffmuc.net', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://doh.applied-privacy.net/query', priority: 58, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.applied-privacy.net', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://dns.aa.net.uk/dns-query', priority: 59, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.aa.net.uk', avgResponseTime: 0, successCount: 0, totalRequests: 0 },

  // ========== Tier 7: Asian/Pacific Providers (AliDNS, TWNIC, DNSPod) ==========
  { url: 'https://dns.alidns.com/dns-query', priority: 60, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.alidns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://dns.twnic.tw/dns-query', priority: 61, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.twnic.tw', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://dns.pub/dns-query', priority: 62, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.pub', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://doh.360.cn/dns-query', priority: 63, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.360.cn', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://public.dns.iij.jp/dns-query', priority: 64, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'public.dns.iij.jp', avgResponseTime: 0, successCount: 0, totalRequests: 0 },

  // ========== Tier 8: Additional Quality Providers ==========
  { url: 'https://doh.dns.sb/dns-query', priority: 65, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.dns.sb', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://doh.pub/dns-query', priority: 66, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.pub', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://ordns.he.net/dns-query', priority: 67, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'ordns.he.net', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://dns.brahma.world/dns-query', priority: 68, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.brahma.world', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://dns.cfiec.net/dns-query', priority: 69, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.cfiec.net', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://dns.dnshome.de/dns-query', priority: 70, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.dnshome.de', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://dnsforge.de/dns-query', priority: 71, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dnsforge.de', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://clean.dnsforge.de/dns-query', priority: 72, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'clean.dnsforge.de', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://hard.dnsforge.de/dns-query', priority: 73, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'hard.dnsforge.de', avgResponseTime: 0, successCount: 0, totalRequests: 0 },

  // ========== Tier 9: BlahDNS Servers (Multiple Locations) ==========
  { url: 'https://doh-fi.blahdns.com/dns-query', priority: 74, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh-fi.blahdns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://doh-jp.blahdns.com/dns-query', priority: 75, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh-jp.blahdns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://doh-de.blahdns.com/dns-query', priority: 76, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh-de.blahdns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://doh-sg.blahdns.com/dns-query', priority: 77, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh-sg.blahdns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0 },

  // ========== Tier 10: Pi-DNS Servers (Multiple Locations) ==========
  { url: 'https://doh.centraleu.pi-dns.com/dns-query', priority: 78, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.centraleu.pi-dns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://doh.westus.pi-dns.com/dns-query', priority: 79, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.westus.pi-dns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://doh.eastus.pi-dns.com/dns-query', priority: 80, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.eastus.pi-dns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://doh.northeu.pi-dns.com/dns-query', priority: 81, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.northeu.pi-dns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0 },

  // ========== Tier 11: Tiarap Servers ==========
  { url: 'https://doh.tiar.app/dns-query', priority: 82, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.tiar.app', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://doh.tiarap.org/dns-query', priority: 83, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.tiarap.org', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://jp.tiar.app/dns-query', priority: 84, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'jp.tiar.app', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://jp.tiarap.org/dns-query', priority: 85, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'jp.tiarap.org', avgResponseTime: 0, successCount: 0, totalRequests: 0 },

  // ========== Tier 12: Additional Reliable Providers ==========
  { url: 'https://dns.containerpi.com/dns-query', priority: 86, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.containerpi.com', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://dns.rubyfish.cn/dns-query', priority: 87, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.rubyfish.cn', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://doh.armadillodns.net/dns-query', priority: 88, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.armadillodns.net', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://commons.host/dns-query', priority: 89, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'commons.host', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://doh.crypto.sx/dns-query', priority: 90, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.crypto.sx', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://dns.dnswarden.com/uncensored', priority: 91, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.dnswarden.com', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://resolver-eu.lelux.fi/dns-query', priority: 92, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'resolver-eu.lelux.fi', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://doh.bortzmeyer.fr/dns-query', priority: 93, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.bortzmeyer.fr', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://dns.oszx.co/dns-query', priority: 94, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.oszx.co', avgResponseTime: 0, successCount: 0, totalRequests: 0 },

  // ========== Tier 13: OpenBLD & Specialized Providers ==========
  { url: 'https://ada.openbld.net/dns-query', priority: 95, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'ada.openbld.net', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://ric.openbld.net/dns-query', priority: 96, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'ric.openbld.net', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://luna.openbld.net/dns-query', priority: 97, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'luna.openbld.net', avgResponseTime: 0, successCount: 0, totalRequests: 0 },

  // ========== Tier 14: DNScry.pt Global Network ==========
  { url: 'https://fra01.dnscry.pt/dns-query', priority: 98, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'fra01.dnscry.pt', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://lon01.dnscry.pt/dns-query', priority: 99, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'lon01.dnscry.pt', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://nyc01.dnscry.pt/dns-query', priority: 100, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'nyc01.dnscry.pt', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://par01.dnscry.pt/dns-query', priority: 101, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'par01.dnscry.pt', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://ams01.dnscry.pt/dns-query', priority: 102, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'ams01.dnscry.pt', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://sin01.dnscry.pt/dns-query', priority: 103, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'sin01.dnscry.pt', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://syd01.dnscry.pt/dns-query', priority: 104, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'syd01.dnscry.pt', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://tok01.dnscry.pt/dns-query', priority: 105, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'tok01.dnscry.pt', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://sea01.dnscry.pt/dns-query', priority: 106, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'sea01.dnscry.pt', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://lax01.dnscry.pt/dns-query', priority: 107, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'lax01.dnscry.pt', avgResponseTime: 0, successCount: 0, totalRequests: 0 },

  // ========== Tier 15: UncensoredDNS & Njalla ==========
  { url: 'https://anycast.uncensoreddns.org/dns-query', priority: 108, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'anycast.uncensoreddns.org', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://unicast.uncensoreddns.org/dns-query', priority: 109, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'unicast.uncensoreddns.org', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://dns.njal.la/dns-query', priority: 110, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.njal.la', avgResponseTime: 0, successCount: 0, totalRequests: 0 },

  // ========== Tier 16: MyDNS Network Variants ==========
  { url: 'https://freedom.mydns.network/dns-query', priority: 111, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'freedom.mydns.network', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://paranoia.mydns.network/dns-query', priority: 112, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'paranoia.mydns.network', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://adblock.mydns.network/dns-query', priority: 113, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'adblock.mydns.network', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://family.mydns.network/dns-query', priority: 114, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'family.mydns.network', avgResponseTime: 0, successCount: 0, totalRequests: 0 },

  // ========== Tier 17: Comss.one DNS ==========
  { url: 'https://dns.comss.one/dns-query', priority: 115, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.comss.one', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://router.comss.one/dns-query', priority: 116, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'router.comss.one', avgResponseTime: 0, successCount: 0, totalRequests: 0 },

  // ========== Tier 18: DNS4me Global Network ==========
  { url: 'https://ca01.dns4me.net', priority: 117, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'ca01.dns4me.net', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://ca02.dns4me.net', priority: 118, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'ca02.dns4me.net', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://us01.dns4me.net', priority: 119, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'us01.dns4me.net', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://us02.dns4me.net', priority: 120, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'us02.dns4me.net', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://uk01.dns4me.net', priority: 121, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'uk01.dns4me.net', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://au01.dns4me.net', priority: 122, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'au01.dns4me.net', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://sg01.dns4me.net', priority: 123, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'sg01.dns4me.net', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://de01.dns4me.net', priority: 124, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'de01.dns4me.net', avgResponseTime: 0, successCount: 0, totalRequests: 0 },

  // ========== Tier 19: Restena & SafeServe ==========
  { url: 'https://dnspub.restena.lu/dns-query', priority: 125, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dnspub.restena.lu', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://safeservedns.com/dns-query', priority: 126, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'safeservedns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0 },

  // ========== Tier 20: Rabbit DNS Variants ==========
  { url: 'https://dns.rabbitdns.org/dns-query', priority: 127, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.rabbitdns.org', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://security.rabbitdns.org/dns-query', priority: 128, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'security.rabbitdns.org', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://family.rabbitdns.org/dns-query', priority: 129, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'family.rabbitdns.org', avgResponseTime: 0, successCount: 0, totalRequests: 0 },

  // ========== Tier 21: V.recipes Variants ==========
  { url: 'https://v.recipes/dns-query', priority: 130, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'v.recipes', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://v.recipes/dns-adblock', priority: 131, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'v.recipes', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://v.recipes/dns-ecs', priority: 132, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'v.recipes', avgResponseTime: 0, successCount: 0, totalRequests: 0 },

  // ========== Tier 22: Surfshark & Blokada ==========
  { url: 'https://dns.surfsharkdns.com/dns-query', priority: 133, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.surfsharkdns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://dns.blokada.org/dns-query', priority: 134, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.blokada.org', avgResponseTime: 0, successCount: 0, totalRequests: 0 },

  // ========== Tier 23: HaGeZi DNS (Germany/Finland) ==========
  { url: 'https://root.hagezi.org/dns-query', priority: 135, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'root.hagezi.org', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://wurzn.hagezi.org/dns-query', priority: 136, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'wurzn.hagezi.org', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://juuri.hagezi.org/dns-query', priority: 137, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'juuri.hagezi.org', avgResponseTime: 0, successCount: 0, totalRequests: 0 },

  // ========== Tier 24: LavaDNS & DNS.SB ==========
  { url: 'https://eu1.dns.lavate.ch/dns-query', priority: 138, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'eu1.dns.lavate.ch', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://doh.seby.io/dns-query', priority: 139, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.seby.io', avgResponseTime: 0, successCount: 0, totalRequests: 0 },

  // ========== Tier 25: Absolight DNS ==========
  { url: 'https://resolver1.absolight.net/dns-query', priority: 140, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'resolver1.absolight.net', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://resolver2.absolight.net/dns-query', priority: 141, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'resolver2.absolight.net', avgResponseTime: 0, successCount: 0, totalRequests: 0 },

  // ========== Tier 26: AdFilter (Australia) ==========
  { url: 'https://per.adfilter.net/dns-query', priority: 142, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'per.adfilter.net', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://syd.adfilter.net/dns-query', priority: 143, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'syd.adfilter.net', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://adl.adfilter.net/dns-query', priority: 144, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'adl.adfilter.net', avgResponseTime: 0, successCount: 0, totalRequests: 0 },

  // ========== Tier 27: FDN (French Data Network) ==========
  { url: 'https://ns0.fdn.fr/dns-query', priority: 145, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'ns0.fdn.fr', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://ns1.fdn.fr/dns-query', priority: 146, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'ns1.fdn.fr', avgResponseTime: 0, successCount: 0, totalRequests: 0 },

  // ========== Tier 28: Technitium & Telekom ==========
  { url: 'https://dns.technitium.com/dns-query', priority: 147, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.technitium.com', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://dns.telekom.de/dns-query', priority: 148, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.telekom.de', avgResponseTime: 0, successCount: 0, totalRequests: 0 },

  // ========== Tier 29: Aquilenet & La Contre-Voie ==========
  { url: 'https://dns.aquilenet.fr/dns-query', priority: 149, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.aquilenet.fr', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://doh.lacontrevoie.fr/dns-query', priority: 150, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.lacontrevoie.fr', avgResponseTime: 0, successCount: 0, totalRequests: 0 },

  // ========== Tier 30: Belnet & In-Berlin ==========
  { url: 'https://dns.belnet.be/dns-query', priority: 151, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.belnet.be', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://dns1.in-berlin.de/dns-query', priority: 152, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns1.in-berlin.de', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://dns2.in-berlin.de/dns-query', priority: 153, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns2.in-berlin.de', avgResponseTime: 0, successCount: 0, totalRequests: 0 },

  // ========== Tier 31: UK DNS Privacy & Sunet ==========
  { url: 'https://resolver.dnsprivacy.org.uk/dns-query', priority: 154, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'resolver.dnsprivacy.org.uk', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://resolver.sunet.se/dns-query', priority: 155, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'resolver.sunet.se', avgResponseTime: 0, successCount: 0, totalRequests: 0 },

  // ========== Tier 32: OpenNameServer & Froth.zone ==========
  { url: 'https://ns1.opennameserver.org/dns-query', priority: 156, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'ns1.opennameserver.org', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://dns.froth.zone/dns-query', priority: 157, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.froth.zone', avgResponseTime: 0, successCount: 0, totalRequests: 0 },

  // ========== Tier 33: StormyCloud & Usable Privacy ==========
  { url: 'https://dns.stormycloud.org/dns-query', priority: 158, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.stormycloud.org', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://adfree.usableprivacy.net/dns-query', priority: 159, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'adfree.usableprivacy.net', avgResponseTime: 0, successCount: 0, totalRequests: 0 },

  // ========== Tier 34: DNS4All & SmartGuard ==========
  { url: 'https://doh.dns4all.eu/dns-query', priority: 160, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.dns4all.eu', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://dns.smartguard.io/dns-query', priority: 161, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.smartguard.io', avgResponseTime: 0, successCount: 0, totalRequests: 0 },

  // ========== Tier 35: PlumeDNS & Bitdefender ==========
  { url: 'https://privacy.plumedns.com/dns-query', priority: 162, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'privacy.plumedns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://dns.bitdefender.net/dns-query', priority: 163, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.bitdefender.net', avgResponseTime: 0, successCount: 0, totalRequests: 0 },

  // ========== Tier 36: CCTLD.KG & NIC.LV ==========
  { url: 'https://dns.cctld.kg/dns-query', priority: 164, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.cctld.kg', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://doh.lv/dns-query', priority: 165, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.lv', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://doh.nic.lv/dns-query', priority: 166, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.nic.lv', avgResponseTime: 0, successCount: 0, totalRequests: 0 },

  // ========== Tier 37: DNS over Tor ==========
  { url: 'https://japan.dnsovertor.cc/dns-query', priority: 167, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'japan.dnsovertor.cc', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://chuncheon.dnsovertor.cc/dns-query', priority: 168, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'chuncheon.dnsovertor.cc', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://seoul.dnsovertor.cc/dns-query', priority: 169, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'seoul.dnsovertor.cc', avgResponseTime: 0, successCount: 0, totalRequests: 0 },

  // ========== Tier 38: CERT Estonia & Hafnova ==========
  { url: 'https://dns.cert.ee/dns-query', priority: 170, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.cert.ee', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://secure.hafnova.com/dns-query', priority: 171, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'secure.hafnova.com', avgResponseTime: 0, successCount: 0, totalRequests: 0 },

  // ========== Tier 39: Gamban & Guardio ==========
  { url: 'https://dns.gamban.com/dns-query', priority: 172, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.gamban.com', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://dns.guard.io/dns-query', priority: 173, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.guard.io', avgResponseTime: 0, successCount: 0, totalRequests: 0 },

  // ========== Tier 40: Blue Shield Umbrella ==========
  { url: 'https://rfree1.blue-shield.at/dns-query', priority: 174, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'rfree1.blue-shield.at', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://rfree2.blue-shield.at/dns-query', priority: 175, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'rfree2.blue-shield.at', avgResponseTime: 0, successCount: 0, totalRequests: 0 },

  // ========== Tier 41: DynX DNS ==========
  { url: 'https://dns.dynx.pro/dns-query', priority: 176, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.dynx.pro', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://dns.dynx.pro/dns-query/family', priority: 177, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.dynx.pro', avgResponseTime: 0, successCount: 0, totalRequests: 0 },

  // ========== Tier 42: Arashi DNS & DNS.digitalsize ==========
  { url: 'https://arashi.net.eu.org/dns-query', priority: 178, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'arashi.net.eu.org', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://ns.net.kg/dns-query', priority: 179, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'ns.net.kg', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://dns.digitalsize.net/dns-query', priority: 180, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.digitalsize.net', avgResponseTime: 0, successCount: 0, totalRequests: 0 },

  // ========== Tier 43: Charter Spectrum ==========
  { url: 'https://doh-01.spectrum.com/dns-query', priority: 181, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh-01.spectrum.com', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://doh-02.spectrum.com/dns-query', priority: 182, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh-02.spectrum.com', avgResponseTime: 0, successCount: 0, totalRequests: 0 },

  // ========== Tier 44: QWER DNS ==========
  { url: 'https://dog.dns.qwer.pw/dns-query', priority: 183, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dog.dns.qwer.pw', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://lion.dns.qwer.pw/dns-query', priority: 184, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'lion.dns.qwer.pw', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://frog.dns.qwer.pw/dns-query', priority: 185, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'frog.dns.qwer.pw', avgResponseTime: 0, successCount: 0, totalRequests: 0 },

  // ========== Tier 45: Foxyfy DNS (Multi-region) ==========
  { url: 'https://dns.foxyfy.net/dns-query', priority: 186, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.foxyfy.net', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://de-f1.foxyfy.net/dns-query', priority: 187, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'de-f1.foxyfy.net', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://es-ma.foxyfy.net/dns-query', priority: 188, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'es-ma.foxyfy.net', avgResponseTime: 0, successCount: 0, totalRequests: 0 },

  // ========== Tier 46: Plan9 DNS ==========
  { url: 'https://kronos.plan9-dns.com/dns-query', priority: 189, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'kronos.plan9-dns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://helios.plan9-dns.com/dns-query', priority: 190, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'helios.plan9-dns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://pluton.plan9-dns.com/dns-query', priority: 191, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'pluton.plan9-dns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0 },

  // ========== Tier 47: DNSlow & DNSdoh.art ==========
  { url: 'https://dnslow.me/dns-query', priority: 192, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dnslow.me', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://dnsdoh.art/dns-query', priority: 193, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dnsdoh.art', avgResponseTime: 0, successCount: 0, totalRequests: 0 },

  // ========== Tier 48: AKBXR & Adfreedns ==========
  { url: 'https://dns.akbxr.com/dns-query', priority: 194, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.akbxr.com', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://adfreedns.top/dns-query', priority: 195, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'adfreedns.top', avgResponseTime: 0, successCount: 0, totalRequests: 0 },

  // ========== Tier 49: W3C TAG & CSS Working Group ==========
  { url: 'https://dns.w3ctag.org/dns-query', priority: 196, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.w3ctag.org', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://dns.csswg.org/dns-query', priority: 197, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.csswg.org', avgResponseTime: 0, successCount: 0, totalRequests: 0 },

  // ========== Tier 50: Yarp & SZ DNS ==========
  { url: 'https://yarp.lefolgoc.net/dns-query', priority: 198, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'yarp.lefolgoc.net', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://doh.sz-dns.com/dns-query', priority: 199, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.sz-dns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0 },

  // ========== Tier 51: Marbled Fennec & Pubhole ==========
  { url: 'https://dns.marbledfennec.net/dns-query', priority: 200, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.marbledfennec.net', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://doh.archuser.org/dns-query', priority: 201, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.archuser.org', avgResponseTime: 0, successCount: 0, totalRequests: 0 },

  // ========== Tier 52: Additional Community/Regional Providers ==========
  { url: 'https://dns.kescher.at/dns-query', priority: 202, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.kescher.at', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://ibuki.cgnat.net/dns-query', priority: 203, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'ibuki.cgnat.net', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://doh.li/dns-query', priority: 204, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.li', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://dns4eu.online/dns-query', priority: 205, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns4eu.online', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://dns.elemental.software/dns-query', priority: 206, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.elemental.software', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://doth.huque.com/dns-query', priority: 207, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doth.huque.com', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://zdn.ro/dns-query', priority: 208, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'zdn.ro', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://doh.zknt.org/dns-query', priority: 209, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.zknt.org', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://ns2.4netguides.org/dns-query', priority: 210, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'ns2.4netguides.org', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://dukun.de/dns-query', priority: 211, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dukun.de', avgResponseTime: 0, successCount: 0, totalRequests: 0 },
  { url: 'https://dns.cynthialabs.net/dns-query', priority: 212, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.cynthialabs.net', avgResponseTime: 0, successCount: 0, totalRequests: 0 }
];

const DNS_CACHE_TTL_MIN = 60;
const DNS_CACHE_TTL_MAX = 3600;
const DNS_CACHE_TTL_DEFAULT = 300;
const PARALLEL_RACING_COUNT = 8;
const RACE_TIMEOUT = 5000;
const FALLBACK_TIMEOUT = 3000;
const MAX_DNS_RESPONSE_SIZE = 4096;
const MAX_DNS_REQUEST_SIZE = 512;
const HEALTH_CHECK_INTERVAL = 120000;
const ADAPTIVE_LEARNING_INTERVAL = 300000;
const PROVIDER_ROTATION_INTERVAL = 60000;
const RATE_LIMIT_REQUESTS = 150;
const RATE_LIMIT_WINDOW = 60000;
const RATE_LIMIT_CLEANUP_INTERVAL = 120000;
const MAX_CONCURRENT_REQUESTS = 100;
const RANDOM_DELAY_MIN = 10;
const RANDOM_DELAY_MAX = 150;
const DECOY_REQUEST_PROBABILITY = 0.2;

const dnsCache = new Map();
const rateLimitMap = new Map();
const pendingRequests = new Map();
const providerMetrics = new Map();
let lastCleanupTime = Date.now();
let lastHealthCheck = Date.now();
let lastAdaptiveLearning = Date.now();
let lastProviderRotation = Date.now();
let concurrentRequests = 0;
let globalRequestCount = 0;

const USER_AGENTS = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:132.0) Gecko/20100101 Firefox/132.0',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 14.5; rv:132.0) Gecko/20100101 Firefox/132.0',
  'Mozilla/5.0 (X11; Linux x86_64; rv:132.0) Gecko/20100101 Firefox/132.0',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.1 Safari/605.1.15',
  'Mozilla/5.0 (iPhone; CPU iPhone OS 18_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.1 Mobile/15E148 Safari/604.1',
  'Mozilla/5.0 (iPad; CPU OS 18_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.1 Mobile/15E148 Safari/604.1'
];

const ACCEPT_HEADERS = [
  'application/dns-message',
  'application/dns-json',
  '*/*'
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

function calculateProviderScore(provider) {
  const now = Date.now();
  const timeSinceLastCheck = now - provider.lastCheck;
  const healthWeight = 0.4;
  const speedWeight = 0.35;
  const reliabilityWeight = 0.25;
  
  let healthScore = provider.healthScore;
  if (provider.consecutiveFailures > 0) {
    healthScore = Math.max(0, healthScore - (provider.consecutiveFailures * 15));
  }
  
  let speedScore = 100;
  if (provider.avgResponseTime > 0) {
    speedScore = Math.max(0, 100 - (provider.avgResponseTime / 50));
  }
  
  let reliabilityScore = 100;
  if (provider.totalRequests > 0) {
    const successRate = (provider.successCount / provider.totalRequests) * 100;
    reliabilityScore = successRate;
  }
  
  const freshnessPenalty = Math.min(20, timeSinceLastCheck / 10000);
  
  const totalScore = (healthScore * healthWeight) + 
                    (speedScore * speedWeight) + 
                    (reliabilityScore * reliabilityWeight) - 
                    freshnessPenalty;
  
  return Math.max(0, Math.min(100, totalScore));
}

function selectBestProviders(count) {
  const healthyProviders = UPSTREAM_DNS_PROVIDERS.filter(p => 
    p.healthScore > 30 && p.consecutiveFailures < 5
  );
  
  if (healthyProviders.length === 0) {
    UPSTREAM_DNS_PROVIDERS.forEach(p => {
      p.healthScore = 100;
      p.consecutiveFailures = 0;
    });
    return UPSTREAM_DNS_PROVIDERS.slice(0, count);
  }
  
  const scoredProviders = healthyProviders.map(provider => ({
    provider,
    score: calculateProviderScore(provider)
  }));
  
  scoredProviders.sort((a, b) => b.score - a.score);
  
  const diversityBonus = scoredProviders.slice(0, Math.min(20, scoredProviders.length));
  const randomIndex = Math.floor(Math.random() * Math.min(5, diversityBonus.length));
  if (randomIndex > 0 && diversityBonus[randomIndex]) {
    [diversityBonus[0], diversityBonus[randomIndex]] = [diversityBonus[randomIndex], diversityBonus[0]];
  }
  
  return diversityBonus.slice(0, count).map(item => item.provider);
}

function updateProviderMetrics(provider, success, responseTime) {
  provider.totalRequests++;
  provider.lastCheck = Date.now();
  
  if (success) {
    provider.successCount++;
    provider.consecutiveFailures = 0;
    provider.healthScore = Math.min(100, provider.healthScore + 5);
    
    if (provider.avgResponseTime === 0) {
      provider.avgResponseTime = responseTime;
    } else {
      provider.avgResponseTime = (provider.avgResponseTime * 0.7) + (responseTime * 0.3);
    }
  } else {
    provider.consecutiveFailures++;
    provider.healthScore = Math.max(0, provider.healthScore - 10);
  }
}

async function performAdaptiveLearning() {
  const now = Date.now();
  if (now - lastAdaptiveLearning < ADAPTIVE_LEARNING_INTERVAL) {
    return;
  }
  lastAdaptiveLearning = now;
  
  UPSTREAM_DNS_PROVIDERS.forEach(provider => {
    if (provider.totalRequests > 50) {
      const successRate = (provider.successCount / provider.totalRequests) * 100;
      
      if (successRate < 50) {
        provider.healthScore = Math.max(20, provider.healthScore - 15);
      } else if (successRate > 95) {
        provider.healthScore = Math.min(100, provider.healthScore + 10);
      }
      
      if (provider.avgResponseTime > 3000) {
        provider.healthScore = Math.max(30, provider.healthScore - 10);
      } else if (provider.avgResponseTime < 500) {
        provider.healthScore = Math.min(100, provider.healthScore + 5);
      }
    }
    
    if (now - provider.lastCheck > 600000) {
      provider.healthScore = Math.max(50, provider.healthScore - 10);
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
    .slice(0, 10);
  
  const healthCheckPromises = providersToCheck.map(async (provider) => {
    const startTime = Date.now();
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000);
      
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

async function raceMultipleProviders(dnsQuery, headers) {
  const selectedProviders = selectBestProviders(PARALLEL_RACING_COUNT);
  
  const racePromises = selectedProviders.map(async (provider) => {
    const startTime = Date.now();
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), RACE_TIMEOUT);
    
    try {
      await sleep(getRandomDelay());
      
      const requestHeaders = {
        'Content-Type': 'application/dns-message',
        'Accept': getRandomAcceptHeader(),
        'User-Agent': getRandomUserAgent(),
        'Cache-Control': 'no-cache',
        'DNT': '1'
      };
      
      if (Math.random() < 0.3) {
        requestHeaders['X-Forwarded-For'] = `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
      }
      
      const response = await fetch(provider.url, {
        method: 'POST',
        headers: requestHeaders,
        body: dnsQuery,
        signal: controller.signal
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

async function fallbackProviderRequest(dnsQuery, headers, excludeProviders = []) {
  const availableProviders = UPSTREAM_DNS_PROVIDERS
    .filter(p => !excludeProviders.includes(p.url) && p.healthScore > 20)
    .sort((a, b) => calculateProviderScore(b) - calculateProviderScore(a))
    .slice(0, 5);
  
  for (const provider of availableProviders) {
    const startTime = Date.now();
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), FALLBACK_TIMEOUT);
    
    try {
      const response = await fetch(provider.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/dns-message',
          'Accept': 'application/dns-message',
          'User-Agent': getRandomUserAgent()
        },
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
  let hash = 0;
  for (let i = 12; i < Math.min(view.length, 100); i++) {
    hash = ((hash << 5) - hash) + view[i];
    hash = hash & hash;
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
  
  if (dnsCache.size > 5000) {
    const oldestKeys = Array.from(dnsCache.keys()).slice(0, 1000);
    oldestKeys.forEach(key => dnsCache.delete(key));
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
  
  const decoyDomains = ['example.com', 'example.org', 'example.net', 'localhost', 'test.com'];
  const randomDomain = decoyDomains[Math.floor(Math.random() * decoyDomains.length)];
  
  const decoyQuery = new Uint8Array([
    0x00, 0x00, 0x01, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    ...Array.from(randomDomain).map(c => c.charCodeAt(0)),
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

async function handleDNSQuery(request) {
  const url = new URL(request.url);
  const clientIP = request.headers.get('CF-Connecting-IP') || 'unknown';
  
  if (isRateLimited(clientIP)) {
    return new Response('Rate limit exceeded', { 
      status: 429,
      headers: {
        'Retry-After': '60',
        'Content-Type': 'text/plain'
      }
    });
  }
  
  let dnsQuery;
  
  if (request.method === 'POST') {
    dnsQuery = await request.arrayBuffer();
  } else if (request.method === 'GET') {
    const dnsParam = url.searchParams.get('dns');
    if (!dnsParam) {
      return new Response('Missing dns parameter', { status: 400 });
    }
    try {
      const paddedDns = dnsParam.replace(/-/g, '+').replace(/_/g, '/');
      const padding = '='.repeat((4 - (paddedDns.length % 4)) % 4);
      dnsQuery = Uint8Array.from(atob(paddedDns + padding), c => c.charCodeAt(0)).buffer;
    } catch (e) {
      return new Response('Invalid dns parameter', { status: 400 });
    }
  } else {
    return new Response('Method not allowed', { status: 405 });
  }
  
  if (dnsQuery.byteLength > MAX_DNS_REQUEST_SIZE) {
    return new Response('Request too large', { status: 413 });
  }
  
  if (concurrentRequests >= MAX_CONCURRENT_REQUESTS) {
    return new Response('Server busy', { status: 503 });
  }
  
  concurrentRequests++;
  globalRequestCount++;
  
  try {
    performHealthCheck().catch(() => {});
    performAdaptiveLearning().catch(() => {});
    sendDecoyRequests().catch(() => {});
    
    const cacheKey = getCacheKey(dnsQuery);
    const cachedResponse = getCachedResponse(cacheKey);
    
    if (cachedResponse) {
      return new Response(cachedResponse, {
        status: 200,
        headers: {
          'Content-Type': 'application/dns-message',
          'Cache-Control': `public, max-age=${DNS_CACHE_TTL_DEFAULT}`,
          'X-Cache': 'HIT',
          'X-Provider': 'cache'
        }
      });
    }
    
    let result;
    try {
      result = await raceMultipleProviders(dnsQuery, request.headers);
    } catch (raceError) {
      result = await fallbackProviderRequest(dnsQuery, request.headers);
    }
    
    const ttl = extractTTL(result.data);
    setCachedResponse(cacheKey, result.data, ttl);
    
    return new Response(result.data, {
      status: 200,
      headers: {
        'Content-Type': 'application/dns-message',
        'Cache-Control': `public, max-age=${ttl}`,
        'X-Cache': 'MISS',
        'X-Provider': result.provider,
        'X-Response-Time': `${result.responseTime}ms`
      }
    });
    
  } catch (error) {
    return new Response('DNS query failed', { 
      status: 502,
      headers: {
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

  return new Response(mobileconfig, {
    status: 200,
    headers: {
      'Content-Type': 'application/x-apple-aspen-config; charset=utf-8',
      'Content-Disposition': `attachment; filename="doh-proxy-pro-${hostname}.mobileconfig"`,
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    }
  });
}

async function handleRootRequest(request) {
  const url = new URL(request.url);
  const workerUrl = `https://${url.host}/dns-query`;
  const workerHost = url.host;
  const appleProfileUrl = `https://${url.host}/apple`;
  
  return new Response(generateHTML(workerUrl, workerHost, appleProfileUrl), {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}

function generateHTML(workerUrl, workerHost, appleProfileUrl) {
  return `<!DOCTYPE html>
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
                <strong>فعال و آماده به کار</strong> - سیستم Parallel Racing و یادگیری تطبیقی فعال است
            </div>
        </div>
        
        <div class="info-box">
            <strong>این یک سرویس DNS over HTTPS (DoH) پیشرفته با قابلیت‌های Anti-Censorship است.</strong><br>
            نسخه Pro با تکنولوژی Parallel DNS Racing و یادگیری تطبیقی مبتنی بر هوش مصنوعی برای سرعت و قابلیت اطمینان بالاتر.
        </div>

        <h2>📍 آدرس سرویس شما:</h2>
        <div class="url-container">
            <div class="url-box" id="dohUrl">${workerUrl}</div>
            <button class="copy-btn" onclick="copyToClipboard('dohUrl')">📋 کپی آدرس</button>
        </div>

        <h2>✨ ویژگی‌های پیشرفته:</h2>
        <div class="feature-grid">
            <div class="feature-item">
                <div class="feature-icon">⚡</div>
                <div class="feature-text">Parallel DNS Racing - همزمان 8 سرور برتر را امتحان می‌کند</div>
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
                <div class="feature-icon">🛡️</div>
                <div class="feature-text">رمزنگاری کامل تمام درخواست‌های DNS</div>
            </div>
            <div class="feature-item">
                <div class="feature-icon">⚙️</div>
                <div class="feature-text">استفاده از بیش از 200 سرور DNS معتبر جهانی</div>
            </div>
            <div class="feature-item">
                <div class="feature-icon">🚦</div>
                <div class="feature-text">سیستم Health Check و Circuit Breaker خودکار</div>
            </div>
            <div class="feature-item">
                <div class="feature-icon">💾</div>
                <div class="feature-text">Cache هوشمند برای سرعت بیشتر</div>
            </div>
            <div class="feature-item">
                <div class="feature-icon">🎭</div>
                <div class="feature-text">Random Delay و Decoy Requests برای ضد DPI</div>
            </div>
            <div class="feature-item">
                <div class="feature-icon">🔐</div>
                <div class="feature-text">Domain Fronting Simulation</div>
            </div>
            <div class="feature-item">
                <div class="feature-icon">📊</div>
                <div class="feature-text">امتیازدهی پویا: 40% سلامت، 35% سرعت، 25% قابلیت اطمینان</div>
            </div>
            <div class="feature-item">
                <div class="feature-icon">🔄</div>
                <div class="feature-text">Intelligent Fallback در صورت شکست Racing</div>
            </div>
            <div class="feature-item">
                <div class="feature-icon">🌐</div>
                <div class="feature-text">بهره‌مندی از ECH در سرورهای Cloudflare</div>
            </div>
        </div>

        <h2>🌐 DNS Providers استفاده شده:</h2>
        <div class="dns-list">
            <div class="dns-item">بیش از 200 سرور DNS معتبر از کشورهای مختلف</div>
            <div class="dns-item">• Cloudflare, Google, Quad9, OpenDNS</div>
            <div class="dns-item">• AdGuard, NextDNS, Mullvad</div>
            <div class="dns-item">• BlahDNS (فنلاند، ژاپن، آلمان، سنگاپور)</div>
            <div class="dns-item">• Pi-DNS (اروپا، آمریکا)</div>
            <div class="dns-item">• و 50+ سرور دیگر...</div>
        </div>

        <div class="info-box">
            <strong>✅ این DoH Proxy چه کارهایی انجام می‌دهد:</strong><br><br>
            • <span class="success-highlight">رمزنگاری کامل درخواست‌های DNS</span> - درخواست‌های شما از طریق HTTPS رمزنگاری می‌شوند<br>
            • <span class="success-highlight">دور زدن DNS Poisoning</span> - از دستکاری پاسخ‌های DNS جلوگیری می‌کند<br>
            • <span class="success-highlight">باز کردن وب‌سایت‌های فیلتر شده با DNS</span> - اگر سایتی فقط در لایه DNS مسدود شده باشد، با این DoH قابل دسترسی می‌شود<br>
            • <span class="success-highlight">افزایش حریم خصوصی</span> - ISP نمی‌تواند ببیند به چه دامنه‌هایی Query می‌زنید<br>
            • <span class="success-highlight">بهبود امنیت</span> - از حملات Man-in-the-Middle در لایه DNS جلوگیری می‌کند<br>
            • <span class="success-highlight">سرعت بالاتر</span> - با Racing Mode اولین پاسخ سریع را دریافت می‌کنید
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
  "remarks": "🛡️ DoH Proxy + Fragment",
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
            A: این DoH Proxy شخصی شماست که روی Cloudflare Pages اجرا می‌شود و تکنیک‌های پیشرفته ضد سانسور دارد (Racing Mode, یادگیری تطبیقی، Decoy Requests). در نهایت از همان سرورهای DNS معتبر استفاده می‌کند ولی با قابلیت‌های بسیار بیشتر.<br><br>
            
            <strong>Q: آیا این سرویس رایگان است؟</strong><br>
            A: بله، Cloudflare Pages کاملاً رایگان است و محدودیت ترافیک ندارد.<br><br>
            
            <strong>Q: آیا این سرویس سرعت اینترنت من را کاهش می‌دهد؟</strong><br>
            A: خیر، بلکه ممکن است سرعت را بهبود بخشد چون از Cache هوشمند استفاده می‌کند و با Racing Mode اولین پاسخ سریع را دریافت می‌کنید.<br><br>
            
            <strong>Q: چه تفاوتی بین کانفیگ ساده و کانفیگ Fragment وجود دارد؟</strong><br>
            A: کانفیگ ساده فقط DoH را فعال می‌کند و برای دور زدن فیلترینگ DNS کافی است. کانفیگ Fragment علاوه بر DoH، قابلیت Fragment را هم دارد که به دور زدن فیلترینگ‌های پیشرفته‌تر (DPI) کمک می‌کند. برای حداکثر امنیت، استفاده از کانفیگ Fragment توصیه می‌شود.<br><br>
            
            <strong>Q: آیا کسی می‌تواند ببیند من از این سرویس استفاده می‌کنم؟</strong><br>
            A: درخواست‌های DNS شما رمزنگاری شده و ISP نمی‌تواند محتوای آن‌ها را ببیند. فقط می‌تواند ببیند که به سرور Cloudflare متصل هستید.<br><br>
            
            <strong>Q: تکنولوژی Parallel Racing چگونه کار می‌کند؟</strong><br>
            A: این سیستم همزمان به 8 سرور DNS برتر درخواست می‌فرستد و اولین پاسخ سریع را قبول می‌کند. این باعث کاهش latency و افزایش قابلیت اطمینان می‌شود، به‌خصوص زمانی که برخی سرورها کند یا غیرقابل دسترس هستند.
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
}

export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  
  if (url.pathname === '/dns-query') {
    return handleDNSQuery(request);
  } else if (url.pathname === '/apple') {
    return generateAppleProfile(request.url);
  } else if (url.pathname === '/health') {
    const healthyCount = UPSTREAM_DNS_PROVIDERS.filter(p => p.healthScore > 50).length;
    const avgResponseTime = UPSTREAM_DNS_PROVIDERS
      .filter(p => p.avgResponseTime > 0)
      .reduce((sum, p) => sum + p.avgResponseTime, 0) / UPSTREAM_DNS_PROVIDERS.filter(p => p.avgResponseTime > 0).length || 0;
    
    return new Response(JSON.stringify({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      providers: {
        total: UPSTREAM_DNS_PROVIDERS.length,
        healthy: healthyCount,
        avgResponseTime: Math.round(avgResponseTime)
      },
      cache: {
        entries: dnsCache.size,
        hitRate: 'N/A'
      },
      requests: {
        concurrent: concurrentRequests,
        total: globalRequestCount
      }
    }, null, 2), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } else {
    return handleRootRequest(request);
  }
}