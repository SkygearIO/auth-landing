!function(){"use strict";const e=["client/client.53cbcc8a.js","client/index.571be653.js","client/data-privacy.1f0dccda.js","client/security.c6d03c3c.js","client/pricing.ffdc0683.js","client/promise.0139dc4a.js","client/policy.cbc6d9dc.js","client/terms.61b12186.js","client/404.a3f4b520.js","client/sla.fbf58455.js","client/client.432d8ad4.js"].concat(["service-worker-index.html","browserconfig.xml","img/devices-demo.png","img/features/customizable.png","img/features/password-policies-mfa.png","img/features/sessions-management.png","img/features/simple-integration.png","img/features/social-login.png","img/features/sso.png","img/features/user-directories.png","img/features/user-management.png","img/footer-logo.png","img/header-logo.png","img/hero-header-img.png","img/icons/android-chrome-192x192.png","img/icons/android-chrome-512x512.png","img/icons/apple-touch-icon.png","img/icons/favicon-16x16.png","img/icons/favicon-32x32.png","img/icons/favicon.ico","img/icons/mstile-150x150.png","img/icons/safari-pinned-tab.svg","img/og-img.jpeg","img/trustedby/cmic-logo.png","img/trustedby/hkpc-logo.png","img/trustedby/rees-logo.png","img/ui-demo.png","site.webmanifest"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1591596869289").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1591596869289"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const i=new URL(e.request.url);i.protocol.startsWith("http")&&(i.hostname===self.location.hostname&&i.port!==self.location.port||(i.host===self.location.host&&t.has(i.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1591596869289").then(async t=>{try{const i=await fetch(e.request);return t.put(e.request,i.clone()),i}catch(i){const n=await t.match(e.request);if(n)return n;throw i}}))))})}();
