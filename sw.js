if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,a)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const n={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return n;default:return e(s)}}))).then((e=>{const s=a(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-7ce2238d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-legacy.008015ed.js",revision:"cd79048727d605c9d9c2ac3ead8eba83"},{url:"assets/index.95007edd.css",revision:"6b07317108e00fd275f6f9096b850393"},{url:"assets/index.d956caa5.js",revision:"edc6274a999e8200ad07131d421d6d30"},{url:"assets/polyfills-legacy.3f8a47fb.js",revision:"0c3bf5d97817497664ee27a2d0b2cd1b"},{url:"assets/vendor-legacy.ab60a080.js",revision:"2a7d6d1f2e9c50d01ce58fa64ebf6202"},{url:"assets/vendor.e7b6eb7a.js",revision:"07b20e98b61ab44bf8c50759457d5b3f"},{url:"index.html",revision:"2bc100b1c6268a64c49271fb9798b2f5"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon.svg",revision:"6eba738ff15466af3bd84804b5c183d4"},{url:"favicon.ico",revision:"49681fc6a15abeb8ef16c3b4cb051146"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"apple-touch-icon.png",revision:"2b295da1e218ace483f4cf65f7e74b0f"},{url:"pwa-192x192.png",revision:"37b387716485299875a26df69275495a"},{url:"pwa-512x512.png",revision:"a5077522f2fc059d3459b734a89f01c6"},{url:"manifest.webmanifest",revision:"8e957cf8d667fba16247f4fa50077fa0"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
