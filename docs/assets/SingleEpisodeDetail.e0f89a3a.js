var w=Object.defineProperty,k=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var g=(n,s,e)=>s in n?w(n,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[s]=e,x=(n,s)=>{for(var e in s||(s={}))j.call(s,e)&&g(n,e,s[e]);if(_)for(var e of _(s))C.call(s,e)&&g(n,e,s[e]);return n},f=(n,s)=>k(n,E(s));import{_ as B,a as D}from"./angle-left-b.b62b9365.js";import{d as h,x as I,l as L,y as N,u as S,o as u,c as b,a as t,E as p,e as i,b as T,t as d,f as H,p as M,F as V}from"./vendor.00e00a72.js";import{e as F}from"./index.2469d90d.js";import{o as P}from"./color-thief.9d2244d8.js";const $={id:"topDiv",class:"pb-5"},z={class:"pt-15"},A={class:"h-full flex justify-between items-center mx-3"},O={key:0,class:"dark:text-white w-60 truncate text-base"},R=["src"],W={class:"text-xs text-secondary mt-2"},q={class:"px-4 text-md font-medium mt-2 text-center"},G={class:"px-4 text-xs mt-2 text-center"},J=t("div",{class:"flex items-center justify-center w-60 h-10 rounded-lg mt-4 dark:bg-[#161616] bg-[#E1E1E1] bg-opacity-80 text-primary"},[t("p",{class:"text-sm font-medium"},"\u64AD\u653E")],-1),K={class:"m-5 dark:text-white"},Q=["innerHTML"],U=h({name:"SingleEpisodeDetail"}),oe=h(f(x({},U),{setup(n){const s=I(),e=F(Number(s.params.id));let o,a;L(()=>{const r=new P,c=document.getElementById("coverImg");if(c){const l=document.getElementById("topDiv");console.log(l),c.complete?(o=r.getColor(c),a="#"+((1<<24)+(o[0]<<16)+(o[1]<<8)+o[2]).toString(16).slice(1),l.style.setProperty("background-image","linear-gradient("+a+", #E1E1E1)")):c.addEventListener("load",function(){o=r.getColor(c),a="#"+((1<<24)+(o[0]<<16)+(o[1]<<8)+o[2]).toString(16).slice(1),l.style.setProperty("background-image","linear-gradient("+a+", #E1E1E1)")})}});const y=N(()=>o?o[0]*.299+o[1]*.587+o[2]*.114>=192?0:1:0),{y:m}=S();return(r,c)=>{const l=B,v=D;return u(),b(V,null,[t("div",$,[t("div",z,[t("div",{class:p(["w-full fixed h-12 top-0",i(m)>200?"dark:bg-[#141414] bg-white shadow":""])},[t("div",A,[t("div",{class:"bg-black bg-opacity-20 h-7 w-7 flex items-center rounded-full",onClick:c[0]||(c[0]=X=>r.$router.back())},[T(l,{class:"text-xl text-white"})]),i(m)>200?(u(),b("p",O,d(i(e).title),1)):H("",!0),t("div",{class:p(["bg-black bg-opacity-20 h-7 w-7 flex items-center justify-center rounded-full",i(m)>200?"text-primary":"text-white"])},[(u(),M(v,{key:1,class:"text-xl"}))],2)])],2),t("div",{class:p(["flex flex-col items-center",i(y)===1?"text-white":""])},[t("img",{id:"coverImg",class:"bg-primary h-45 w-45 rounded-md shadow-2xl",src:i(e).coverImg,crossorigin:"anonymous"},null,8,R),t("p",W,d(i(e).createTime),1),t("p",q,d(i(e).title),1),t("p",G,d(i(e).programmeName)+" >",1),J],2)])]),t("div",K,[t("p",{class:"text-sm whitespace-pre-line",innerHTML:i(e).description},null,8,Q)])],64)}}}));export{oe as default};
