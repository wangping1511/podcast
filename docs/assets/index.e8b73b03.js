import{r as m,o as _,c as h,a as y,b as v,d as E,e as S,f as g}from"./vendor.569f75c6.js";const L=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}};L();var x=(s,n)=>{const i=s.__vccOpts||s;for(const[o,e]of n)i[o]=e;return i};const b={};function z(s,n){const i=m("router-view");return _(),h("div",null,[y(i)])}var O=x(b,[["render",z]]);const P="modulepreload",p={},A="./",l=function(n,i){return!i||i.length===0?n():Promise.all(i.map(o=>{if(o=`${A}${o}`,o in p)return;p[o]=!0;const e=o.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${t}`))return;const r=document.createElement("link");if(r.rel=e?"stylesheet":P,e||(r.as="script",r.crossOrigin=""),r.href=o,document.head.appendChild(r),e)return new Promise((a,c)=>{r.addEventListener("load",a),r.addEventListener("error",c)})})).then(()=>n())},I=[{path:"/",component:()=>l(()=>import("./index.f4cf4175.js"),["assets/index.f4cf4175.js","assets/index.8bc199c4.css","assets/vendor.569f75c6.js"]),redirect:"discover",children:[{path:"discover",component:()=>l(()=>import("./index.bef77aa1.js"),["assets/index.bef77aa1.js","assets/index.68c4d2b6.css","assets/vendor.569f75c6.js"]),meta:{index:0}},{path:"subscription",component:()=>l(()=>import("./index.c5aa815a.js"),["assets/index.c5aa815a.js","assets/vendor.569f75c6.js"]),meta:{index:1}},{path:"me",component:()=>l(()=>import("./index.67374847.js"),["assets/index.67374847.js","assets/vendor.569f75c6.js"]),meta:{index:2}}]}],R=v({history:E("/podcast/#/"),routes:I});(function(s,n){let i=390,o=16,e=n.documentElement,t=n.querySelector("body");r(),s.addEventListener("resize",r),s.addEventListener("pageshow",function(c){c.persisted&&r()});function r(){let c=e.clientWidth/i*o;e.style.fontSize=c+"px",t.style.fontSize=16/c+"rem",a()}function a(){let c=parseInt(e.style.fontSize),d=c;for(let u=0;u<100;u++){let f=parseInt(s.getComputedStyle(e).fontSize)-c;if(Math.abs(f)>=1)f>0?d--:d++,e.style.fontSize=d+"px";else break}}})(window,document);S(O).use(R).use(g()).mount("#app");export{x as _};
