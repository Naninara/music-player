if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>i(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(a(...e),t)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"07342dafa201e8fcdaad733739a4238a"},{url:"/_next/static/H8ir7yZpx5qU7HB-71VoV/_buildManifest.js",revision:"e0a21c7d7f93d89dce16df0231dc76f2"},{url:"/_next/static/H8ir7yZpx5qU7HB-71VoV/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/247-a43a6a0d28670560.js",revision:"H8ir7yZpx5qU7HB-71VoV"},{url:"/_next/static/chunks/250-b6b719c01f8eae66.js",revision:"H8ir7yZpx5qU7HB-71VoV"},{url:"/_next/static/chunks/255-a65f802cc847b394.js",revision:"H8ir7yZpx5qU7HB-71VoV"},{url:"/_next/static/chunks/52ab8b6c-3d3a95953dca3f79.js",revision:"H8ir7yZpx5qU7HB-71VoV"},{url:"/_next/static/chunks/53c13509-1383eb4a12894381.js",revision:"H8ir7yZpx5qU7HB-71VoV"},{url:"/_next/static/chunks/69-fa67ff71d3459200.js",revision:"H8ir7yZpx5qU7HB-71VoV"},{url:"/_next/static/chunks/795d4814-f1515b6248a0c360.js",revision:"H8ir7yZpx5qU7HB-71VoV"},{url:"/_next/static/chunks/8e1d74a4-a7c5bcaf2a361383.js",revision:"H8ir7yZpx5qU7HB-71VoV"},{url:"/_next/static/chunks/9-04cf2d30d11c1ec6.js",revision:"H8ir7yZpx5qU7HB-71VoV"},{url:"/_next/static/chunks/app/_not-found-6ab9298928316d53.js",revision:"H8ir7yZpx5qU7HB-71VoV"},{url:"/_next/static/chunks/app/home/loading-16e2ca902a32ce63.js",revision:"H8ir7yZpx5qU7HB-71VoV"},{url:"/_next/static/chunks/app/home/page-ee4d205647268468.js",revision:"H8ir7yZpx5qU7HB-71VoV"},{url:"/_next/static/chunks/app/layout-ebff32134925671a.js",revision:"H8ir7yZpx5qU7HB-71VoV"},{url:"/_next/static/chunks/app/page-e23dab11ae38a369.js",revision:"H8ir7yZpx5qU7HB-71VoV"},{url:"/_next/static/chunks/app/queue/loading-38fd82e1c9f2ad89.js",revision:"H8ir7yZpx5qU7HB-71VoV"},{url:"/_next/static/chunks/app/queue/page-5ddb37defc6e987f.js",revision:"H8ir7yZpx5qU7HB-71VoV"},{url:"/_next/static/chunks/app/search/%5BsongId%5D/loading-3f523770870ddc63.js",revision:"H8ir7yZpx5qU7HB-71VoV"},{url:"/_next/static/chunks/app/search/%5BsongId%5D/page-ae7399c733d52962.js",revision:"H8ir7yZpx5qU7HB-71VoV"},{url:"/_next/static/chunks/app/search/layout-d3aa4bdd5480871a.js",revision:"H8ir7yZpx5qU7HB-71VoV"},{url:"/_next/static/chunks/app/search/loading-51d4f76191f6200e.js",revision:"H8ir7yZpx5qU7HB-71VoV"},{url:"/_next/static/chunks/app/search/page-b0c1ef02ae522f30.js",revision:"H8ir7yZpx5qU7HB-71VoV"},{url:"/_next/static/chunks/f7333993-ce59f47af4697eec.js",revision:"H8ir7yZpx5qU7HB-71VoV"},{url:"/_next/static/chunks/fd9d1056-610cb13cd2bcde54.js",revision:"H8ir7yZpx5qU7HB-71VoV"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"H8ir7yZpx5qU7HB-71VoV"},{url:"/_next/static/chunks/main-47f13626f10de8d4.js",revision:"H8ir7yZpx5qU7HB-71VoV"},{url:"/_next/static/chunks/main-app-9debf7f5daaef31c.js",revision:"H8ir7yZpx5qU7HB-71VoV"},{url:"/_next/static/chunks/pages/_app-75f6107b0260711c.js",revision:"H8ir7yZpx5qU7HB-71VoV"},{url:"/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js",revision:"H8ir7yZpx5qU7HB-71VoV"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-16c68000da53772e.js",revision:"H8ir7yZpx5qU7HB-71VoV"},{url:"/_next/static/css/240a4fc32ff0969a.css",revision:"240a4fc32ff0969a"},{url:"/_next/static/css/57290f2119a95540.css",revision:"57290f2119a95540"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/icon-192x192.png",revision:"a566889011627c2166f196060657ae88"},{url:"/icon-256x256.png",revision:"af95445f644fc5a3ce0fd9eb729060d3"},{url:"/icon-384x384.png",revision:"f1deb44fc7863d7c1a4cd85d6753b21b"},{url:"/icon-512x512.png",revision:"093462b9fde5ead12693b9446f116fc3"},{url:"/landing.png",revision:"56edbca52ab42f391d9d14809a5c0448"},{url:"/manifest.json",revision:"e45417b804c2bf4ac8db0200030c6cd6"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
