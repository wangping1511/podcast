import{d as S,u as O,r as E,o as c,c as _,a as k,b as l,w as u,e as f,t as z,f as w,T as D,F as C,g as h,h as N,i as I,N as V,j as R,k as T,l as F,m as j,n as $,p as v,q,K as W,s as K,v as M}from"./vendor.f3c0785d.js";const H=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}};H();var b=(t,r)=>{const o=t.__vccOpts||t;for(const[s,e]of r)o[s]=e;return o};const U={class:"mt-8 mb-4 flex text-2xl mx-5 font-medium dark:text-white"},G=h("\u53D1\u73B0"),J=h("\u8BA2\u9605"),Q=h("\u6211\u7684"),X={key:0,class:"w-full py-2 text-center text-xl fixed inset-x-0 top-0 z-[1000] bg-white dark:bg-[#141414] shadow-sm"},Y={class:"dark:text-white"},Z=S({setup(t){const{y:r}=O();return(o,s)=>{const e=E("router-link");return c(),_(C,null,[k("div",U,[l(e,{to:"/",class:"mr-2","active-class":"text-4xl"},{default:u(()=>[G]),_:1}),l(e,{to:"/subscription",class:"mr-2","active-class":"text-4xl"},{default:u(()=>[J]),_:1}),l(e,{to:"/me",class:"mr-2","active-class":"text-4xl"},{default:u(()=>[Q]),_:1})]),l(D,{name:"fade"},{default:u(()=>[f(r)>50?(c(),_("div",X,[k("p",Y,z(o.$route.meta.title),1)])):w("",!0)]),_:1})],64)}}});var ee=b(Z,[["__scopeId","data-v-3128580a"]]);const te="modulepreload",A={},re="./",p=function(r,o){return!o||o.length===0?r():Promise.all(o.map(s=>{if(s=`${re}${s}`,s in A)return;A[s]=!0;const e=s.endsWith(".css"),n=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${n}`))return;const i=document.createElement("link");if(i.rel=e?"stylesheet":te,e||(i.as="script",i.crossOrigin=""),i.href=s,document.head.appendChild(i),e)return new Promise((m,a)=>{i.addEventListener("load",m),i.addEventListener("error",a)})})).then(()=>r())};const P=[{path:"/",component:()=>p(()=>import("./index.72e72258.js"),["assets/index.72e72258.js","assets/play-fill.f7cbe0b2.js","assets/vendor.f3c0785d.js","assets/SingleEpisodeData.d18bc574.js","assets/ProgrammeData.6089fa48.js"]),name:"Discover",meta:{title:"\u53D1\u73B0",keepAlive:!0}},{path:"/subscription",component:()=>p(()=>import("./index.8d8975a9.js"),["assets/index.8d8975a9.js","assets/vendor.f3c0785d.js","assets/ProgrammeData.6089fa48.js"]),name:"Subscription",meta:{title:"\u8BA2\u9605",keepAlive:!0}},{path:"/me",component:()=>p(()=>import("./index.347a3337.js"),["assets/index.347a3337.js","assets/vendor.f3c0785d.js"]),name:"Me",meta:{title:"\u6211\u7684",keepAlive:!0}},{path:"/programme-detail/:id",name:"ProgrammeDetail",component:()=>p(()=>import("./ProgrammeDetail.b81e04e8.js"),["assets/ProgrammeDetail.b81e04e8.js","assets/play-fill.f7cbe0b2.js","assets/vendor.f3c0785d.js","assets/color-thief.f79ffa76.js","assets/ProgrammeData.6089fa48.js","assets/SingleEpisodeData.d18bc574.js"])},{path:"/single-episode-detail/:id",name:"SingleEpisodeDetail",component:()=>p(()=>import("./SingleEpisodeDetail.ecb6113d.js"),["assets/SingleEpisodeDetail.ecb6113d.js","assets/color-thief.f79ffa76.js","assets/vendor.f3c0785d.js","assets/SingleEpisodeData.d18bc574.js"])}],g=N({history:I("/podcast/#/"),routes:P,scrollBehavior:(t,r,o)=>o||{top:0}});g.beforeEach((t,r)=>{V.start();const o=B();r.name==="ProgrammeDetail"&&(t.name==="SingleEpisodeDetail"?o.addCacheView("ProgrammeDetail"):o.removeCacheView("ProgrammeDetail"))});g.afterEach(()=>{V.done()});const B=R({id:"app",state:()=>({cacheViews:P.filter(t=>{var r;return(r=t.meta)==null?void 0:r.keepAlive}).map(t=>t.name?t.name.toString():"")}),actions:{addCacheView(t){this.cacheViews.includes(t)||this.cacheViews.push(t)},removeCacheView(t){if(console.log(t),this.cacheViews.includes(t)){const r=this.cacheViews.indexOf(t);this.cacheViews.splice(r,1)}}}});const oe=S({setup(t){const r=T();F(r);const o=["Discover","Subscription","Me"],s=j(),e=$(()=>s.name?o.indexOf(s.name.toString())>-1:!1),n=B();return(i,m)=>{const a=E("router-view");return c(),_("div",null,[l(a,null,{default:u(({Component:d})=>[f(e)?(c(),v(ee,{key:0})):w("",!0),(c(),v(W,{include:f(n).cacheViews},[l(D,{name:"fade"},{default:u(()=>[(c(),v(q(d),{key:i.$route.name}))]),_:2},1024)],1032,["include"]))]),_:1})])}}});var se=b(oe,[["__scopeId","data-v-342d4238"]]);const ne=K();function ie(t){t.use(ne)}(function(t,r){let o=390,s=16,e=r.documentElement,n=r.querySelector("body");i(),t.addEventListener("resize",i),t.addEventListener("pageshow",function(a){a.persisted&&i()});function i(){let a=e.clientWidth/o*s;e.style.fontSize=a+"px",n.style.fontSize=16/a+"rem",m()}function m(){let a=parseInt(e.style.fontSize),d=a;for(let y=0;y<100;y++){let x=parseInt(t.getComputedStyle(e).fontSize)-a;if(Math.abs(x)>=1)x>0?d--:d++,e.style.fontSize=d+"px";else break}}})(window,document);const L=M(se).use(g);ie(L);L.mount("#app");export{b as _};