!function(){"use strict";const e=["client/client.0ea7618e.js","client/index.019b0ecd.js","client/Resources.2cbffc6d.js","client/pricing.7430cf24.js","client/client.515de446.js"].concat(["service-worker-index.html","browserconfig.xml","img/devices-demo.png","img/features/customizable.png","img/features/password-policies-mfa.png","img/features/sessions-management.png","img/features/simple-integration.png","img/features/social-login.png","img/features/sso.png","img/features/user-directories.png","img/features/user-management.png","img/footer-logo.png","img/header-logo.png","img/hero-header-img.png","img/icons/android-chrome-192x192.png","img/icons/android-chrome-512x512.png","img/icons/apple-touch-icon.png","img/icons/favicon-16x16.png","img/icons/favicon-32x32.png","img/icons/favicon.ico","img/icons/mstile-150x150.png","img/icons/safari-pinned-tab.svg","img/trustedby/cmic-logo.png","img/trustedby/hkpc-logo.png","img/trustedby/rees-logo.png","site.webmanifest","ui-demo.png"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1590547078833").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1590547078833"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&t.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1590547078833").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const i=await t.match(e.request);if(i)return i;throw n}}))))})}();
