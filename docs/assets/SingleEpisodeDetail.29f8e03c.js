var R=Object.defineProperty,M=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var h=(i,s,e)=>s in i?R(i,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[s]=e,b=(i,s)=>{for(var e in s||(s={}))D.call(s,e)&&h(i,e,s[e]);if(y)for(var e of y(s))H.call(s,e)&&h(i,e,s[e]);return i},v=(i,s)=>M(i,T(s));import{h as I,u as P,_ as V,a as $,e as A}from"./index.158cb5a5.js";import{_ as q,a as z}from"./angle-left-b.dd1f91be.js";import{d as k,A as J,k as w,l as O,B as W,u as F,o as a,c as _,a as o,J as x,e as t,b as G,t as u,f as K,q as g,s as Q}from"./vendor.02f6b6f3.js";import{o as U}from"./color-thief.9d2244d8.js";const X={class:"pt-15"},Y={class:"h-full flex justify-between items-center mx-3"},Z={key:0,class:"dark:text-white w-60 truncate text-base"},ee=["src"],te={class:"text-xs text-secondary mt-2"},se={class:"px-4 text-md font-medium mt-2 text-center"},oe={class:"px-4 text-xs mt-2 text-center"},ne={key:2,class:"text-sm font-medium"},ie={key:3,class:"text-sm font-medium"},le={class:"m-5 dark:text-white"},ae=["innerHTML"],re=k({name:"SingleEpisodeDetail"}),pe=k(v(b({},re),{setup(i){const s=J(),e=I(Number(s.params.id)),r=w(),p=w();let n,c;O(()=>{const l=new U;r.value&&(r.value.complete?(n=l.getColor(r.value),c="#"+((1<<24)+(n[0]<<16)+(n[1]<<8)+n[2]).toString(16).slice(1),p.value.style.setProperty("background-image","linear-gradient("+c+", #E1E1E1)")):r.value.addEventListener("load",function(){n=l.getColor(r.value),c="#"+((1<<24)+(n[0]<<16)+(n[1]<<8)+n[2]).toString(16).slice(1),p.value.style.setProperty("background-image","linear-gradient("+c+", #E1E1E1)")}))});const E=W(()=>n?n[0]*.299+n[1]*.587+n[2]*.114>=192?0:1:0),{y:f}=F(),d=P(),C=l=>{A.emit("play",l)};return(l,m)=>{const j=q,S=z,B=V,L=$;return a(),_("div",null,[o("div",{ref_key:"divRef",ref:p,class:"pb-5"},[o("div",X,[o("div",{class:x(["w-full fixed h-12 top-0",t(f)>200?"dark:bg-[#141414] bg-white shadow":""])},[o("div",Y,[o("div",{class:"bg-black bg-opacity-20 h-7 w-7 flex items-center rounded-full",onClick:m[0]||(m[0]=N=>l.$router.back())},[G(j,{class:"text-xl text-white"})]),t(f)>200?(a(),_("p",Z,u(t(e).title),1)):K("",!0),o("div",{class:x(["bg-black bg-opacity-20 h-7 w-7 flex items-center justify-center rounded-full",t(f)>200?"text-primary":"text-white"])},[(a(),g(S,{key:1,class:"text-xl"}))],2)])],2),o("div",{class:x(["flex flex-col items-center",t(E)===1?"text-white":""])},[o("img",{ref_key:"imgRef",ref:r,class:"bg-primary h-45 w-45 rounded-md shadow-2xl",src:t(e).coverImg,crossorigin:"anonymous"},null,8,ee),o("p",te,u(t(e).createTime),1),o("p",se,u(t(e).title),1),o("p",oe,u(t(e).programmeName)+" >",1),o("div",{class:"flex items-center justify-center w-60 h-10 rounded-lg mt-4 dark:bg-[#161616] bg-[#E1E1E1] bg-opacity-80 text-primary",onClick:m[1]||(m[1]=Q(N=>C(t(e).id),["stop"]))},[t(d).epId===t(e).id&&t(d).play?(a(),g(B,{key:0,class:"text-primary text-xl"})):(a(),g(L,{key:1,class:"text-primary text-xl"})),t(d).epId===t(e).id&&t(d).play?(a(),_("p",ne,"\u6682\u505C")):(a(),_("p",ie,"\u64AD\u653E"))])],2)])],512),o("div",le,[o("p",{class:"text-sm whitespace-pre-line",innerHTML:t(e).description},null,8,ae)])])}}}));export{pe as default};