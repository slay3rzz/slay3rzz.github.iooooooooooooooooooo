if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let d={};const c=e=>n(e,o),t={module:{uri:o},exports:d,require:c};i[o]=Promise.all(r.map((e=>t[e]||c(e)))).then((e=>(s(...e),d)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-0d7279dd.css",revision:null},{url:"assets/index-f6571b0d.js",revision:null},{url:"assets/workbox-window.prod.es5-dc90f814.js",revision:null},{url:"config.js",revision:"93356f340a6f4018b4648578698e7629"},{url:"index.html",revision:"6ed012c1fef28d70bbf27cdb4aab3648"},{url:"favicon.ico",revision:"de7674bb092bad4dc08dd526e8464697"},{url:"apple-touch-icon.png",revision:"cae0ab92548ba98dd5aeb34235f9617f"},{url:"safari-pinned-tab.svg",revision:"fd363adc5ac206e38c78a8a9d9bbde85"},{url:"android-chrome-192x192.png",revision:"496c321c53778a12b16f31802f6f2bc3"},{url:"android-chrome-512x512.png",revision:"9c2ae7b2713faecc1a99c7918c885934"},{url:"manifest.webmanifest",revision:"31b651545b2cf072f732b7c1609d61c5"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
