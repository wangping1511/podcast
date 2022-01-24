import{d as S,u as B,r as k,o as c,c as u,a as l,b as d,w as _,e as v,t as P,f as E,T as A,F as L,g,h as O,i as R,N as D,j as N,k as h,l as I,m as M,n as T,p as j,q as F,K as q,s as W,v as H}from"./vendor.2efe0d9b.js";const K=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}};K();var x=(t,s)=>{const o=t.__vccOpts||t;for(const[r,e]of s)o[r]=e;return o};const U={class:"mt-8 mb-4 flex text-2xl mx-5 font-medium dark:text-white"},Q=g("\u53D1\u73B0"),Y=g("\u8BA2\u9605"),X=g("\u6211\u7684"),G={key:0,class:"w-full py-2 text-center text-xl fixed inset-x-0 top-0 z-[1000] bg-white dark:bg-[#141414] shadow-sm"},J={class:"dark:text-white"},Z=S({setup(t){const{y:s}=B();return(o,r)=>{const e=k("router-link");return c(),u(L,null,[l("div",U,[d(e,{to:"/",class:"mr-2","active-class":"text-4xl"},{default:_(()=>[Q]),_:1}),d(e,{to:"/subscription",class:"mr-2","active-class":"text-4xl"},{default:_(()=>[Y]),_:1}),d(e,{to:"/me",class:"mr-2","active-class":"text-4xl"},{default:_(()=>[X]),_:1})]),d(A,{name:"fade"},{default:_(()=>[v(s)>50?(c(),u("div",G,[l("p",J,P(o.$route.meta.title),1)])):E("",!0)]),_:1})],64)}}});var ee=x(Z,[["__scopeId","data-v-3128580a"]]);const te="modulepreload",V={},se="./",m=function(s,o){return!o||o.length===0?s():Promise.all(o.map(r=>{if(r=`${se}${r}`,r in V)return;V[r]=!0;const e=r.endsWith(".css"),n=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${n}`))return;const i=document.createElement("link");if(i.rel=e?"stylesheet":te,e||(i.as="script",i.crossOrigin=""),i.href=r,document.head.appendChild(i),e)return new Promise((f,a)=>{i.addEventListener("load",f),i.addEventListener("error",a)})})).then(()=>s())};const $=[{path:"/",component:()=>m(()=>import("./index.adc1a25e.js"),["assets/index.adc1a25e.js","assets/vendor.2efe0d9b.js","assets/SingleEpisodeData.d18bc574.js","assets/ProgrammeData.6089fa48.js"]),name:"Discover",meta:{title:"\u53D1\u73B0",keepAlive:!0}},{path:"/subscription",component:()=>m(()=>import("./index.12cc4e17.js"),["assets/index.12cc4e17.js","assets/vendor.2efe0d9b.js","assets/ProgrammeData.6089fa48.js"]),name:"Subscription",meta:{title:"\u8BA2\u9605",keepAlive:!0}},{path:"/me",component:()=>m(()=>import("./index.5547141b.js"),["assets/index.5547141b.js","assets/vendor.2efe0d9b.js"]),name:"Me",meta:{title:"\u6211\u7684",keepAlive:!0}},{path:"/programme-detail/:id",name:"ProgrammeDetail",component:()=>m(()=>import("./ProgrammeDetail.db9d0ec8.js"),["assets/ProgrammeDetail.db9d0ec8.js","assets/color-thief.b5fd51f5.js","assets/vendor.2efe0d9b.js","assets/ProgrammeData.6089fa48.js","assets/SingleEpisodeData.d18bc574.js"])},{path:"/single-episode-detail/:id",name:"SingleEpisodeDetail",component:()=>m(()=>import("./SingleEpisodeDetail.1734a5c1.js"),["assets/SingleEpisodeDetail.1734a5c1.js","assets/color-thief.b5fd51f5.js","assets/vendor.2efe0d9b.js","assets/SingleEpisodeData.d18bc574.js"])}],y=O({history:R("/podcast/#/"),routes:$,scrollBehavior:(t,s,o)=>o||{top:0}});y.beforeEach((t,s)=>{D.start();const o=C();s.name==="ProgrammeDetail"&&(t.name==="SingleEpisodeDetail"?o.addCacheView("ProgrammeDetail"):o.removeCacheView("ProgrammeDetail"))});y.afterEach(()=>{D.done()});const C=N({id:"app",state:()=>({cacheViews:$.filter(t=>{var s;return(s=t.meta)==null?void 0:s.keepAlive}).map(t=>t.name?t.name.toString():"")}),actions:{addCacheView(t){this.cacheViews.includes(t)||this.cacheViews.push(t)},removeCacheView(t){if(console.log(t),this.cacheViews.includes(t)){const s=this.cacheViews.indexOf(t);this.cacheViews.splice(s,1)}}}}),oe={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},re=l("path",{d:"M18.92 13c-.5 0-.91.37-.98.86a6.006 6.006 0 0 1-7.42 4.96c-2.25-.54-3.91-2.27-4.39-4.53A6.014 6.014 0 0 1 12 7v2.79c0 .45.54.67.85.35l3.79-3.79c.2-.2.2-.51 0-.71l-3.79-3.79a.5.5 0 0 0-.85.36V5c-4.94 0-8.84 4.48-7.84 9.6c.6 3.11 2.9 5.5 5.99 6.19c4.83 1.08 9.15-2.2 9.77-6.67c.09-.59-.4-1.12-1-1.12zm-8.38 2.22c-.06.05-.12.09-.2.12s-.17.04-.27.04a.69.69 0 0 1-.45-.15c-.06-.05-.1-.1-.13-.17s-.05-.14-.05-.22h-.85c0 .21.04.39.12.55s.19.28.33.38s.29.18.46.23s.35.07.53.07c.21 0 .41-.03.6-.08s.34-.14.48-.24s.24-.24.32-.39s.12-.33.12-.53c0-.23-.06-.44-.18-.61s-.3-.3-.54-.39c.1-.05.2-.1.28-.17s.15-.14.2-.22s.1-.16.13-.25s.04-.18.04-.27c0-.2-.04-.37-.11-.53s-.17-.28-.3-.38s-.28-.18-.46-.23s-.37-.08-.59-.08c-.19 0-.38.03-.54.08s-.32.13-.44.23s-.23.22-.3.37s-.11.3-.11.48h.85a.455.455 0 0 1 .17-.35c.05-.04.11-.07.18-.1s.14-.03.22-.03c.1 0 .18.01.25.04s.13.06.18.11s.08.11.11.17s.04.14.04.22c0 .18-.05.32-.16.43s-.26.16-.48.16h-.43v.66h.45c.11 0 .2.01.29.04s.16.06.22.11s.11.12.14.2s.05.18.05.29c0 .09-.01.17-.04.24s-.08.11-.13.17zm3.9-3.44c-.18-.07-.37-.1-.59-.1s-.41.03-.59.1s-.33.18-.45.33s-.23.34-.29.57s-.1.5-.1.82v.74c0 .32.04.6.11.82s.17.42.3.57s.28.26.46.33s.37.1.59.1s.41-.03.59-.1s.33-.18.45-.33s.22-.34.29-.57s.1-.5.1-.82v-.74c0-.32-.04-.6-.11-.82s-.17-.42-.3-.57s-.28-.26-.46-.33zm.01 2.57c0 .19-.01.35-.04.48s-.06.24-.11.32s-.11.14-.19.17s-.16.05-.25.05s-.18-.02-.25-.05s-.14-.09-.19-.17s-.09-.19-.12-.32s-.04-.29-.04-.48v-.97c0-.19.01-.35.04-.48s.06-.23.12-.31s.11-.14.19-.17s.16-.05.25-.05s.18.02.25.05s.14.09.19.17s.09.18.12.31s.04.29.04.48v.97z",fill:"currentColor"},null,-1),ne=[re];function ie(t,s){return c(),u("svg",oe,ne)}var ae={name:"ic-round-forward30",render:ie};const ce={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 16 16"},le=l("g",{fill:"currentColor"},[l("path",{d:"M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"})],-1),de=[le];function ue(t,s){return c(),u("svg",ce,de)}var _e={name:"bi-play-fill",render:ue};const pe={},me={class:"fixed bottom-0 w-full px-5.5 py-2 bg-gray-50 dark:bg-[#141414] shadow-md"},fe={class:"flex justify-between"},he=l("div",{class:"flex items-center"},[l("img",{class:"h-12 w-12 rounded shadow-2xl",src:"https://imagev2.xmcdn.com/storages/1ffd-audiofreehighqps/D0/01/CMCoOScEHgXSAATUDQCQnxWC.jpeg!strip=1&quality=7&magick=webp&op_type=5&upload_type=album&name=mobile_large&device_type=ios",alt:"..."}),l("p",{class:"w-50 font-medium text-base dark:text-white ml-4 truncate"},"\u7231\u4E0A\u4F60\u7684\u5361\u7EDD\u5BF9\u662F\u62C9\u8428\u5927\u5BB6\u7231\u4E0A\u4E86\u591A\u4E45\u554A\u662F")],-1),ve={class:"flex items-center"};function ge(t,s){const o=_e,r=ae;return c(),u("div",me,[l("div",fe,[he,l("div",ve,[(c(),h(o,{key:0,class:"text-primary text-2xl"})),d(r,{class:"ml-2 text-primary text-2xl"})])])])}var xe=x(pe,[["render",ge]]);const ye=S({setup(t){const s=I();M(s);const o=["Discover","Subscription","Me"],r=T(),e=j(()=>r.name?o.indexOf(r.name.toString())>-1:!1),n=C();return(i,f)=>{const a=k("router-view");return c(),u("div",null,[d(a,null,{default:_(({Component:p})=>[v(e)?(c(),h(ee,{key:0})):E("",!0),d(A,{name:"fade"},{default:_(()=>[(c(),h(q,{include:v(n).cacheViews},[(c(),h(F(p),{key:i.$route.name}))],1032,["include"]))]),_:2},1024),d(xe)]),_:1})])}}});var we=x(ye,[["__scopeId","data-v-4b18bd61"]]);const be=W();function Se(t){t.use(be)}(function(t,s){let o=390,r=16,e=s.documentElement,n=s.querySelector("body");i(),t.addEventListener("resize",i),t.addEventListener("pageshow",function(a){a.persisted&&i()});function i(){let a=e.clientWidth/o*r;e.style.fontSize=a+"px",n.style.fontSize=16/a+"rem",f()}function f(){let a=parseInt(e.style.fontSize),p=a;for(let w=0;w<100;w++){let b=parseInt(t.getComputedStyle(e).fontSize)-a;if(Math.abs(b)>=1)b>0?p--:p++,e.style.fontSize=p+"px";else break}}})(window,document);const z=H(we).use(y);Se(z);z.mount("#app");export{_e as _,x as a};
