!function(){"use strict";const e=["client/client.2aab9811.js","client/index.0530df71.js","client/Resources.e4f11339.js","client/pricing.151d7297.js","client/client.142a99f0.js"].concat(["service-worker-index.html","devices-demo.png","favicon.png","features/customizable.png","features/password-policies-mfa.png","features/sessions-management.png","features/simple-integration.png","features/social-login.png","features/sso.png","features/user-directories.png","features/user-management.png","footer-logo.png","header-logo.png","hero-header-img.png","logo-192.png","logo-512.png","manifest.json","trustedby/cmic-logo.png","trustedby/hkpc-logo.png","trustedby/rees-logo.png","ui-demo.png"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1590484552891").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1590484552891"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1590484552891").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const n=await t.match(e.request);if(n)return n;throw s}}))))})}();