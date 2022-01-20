var W=Object.defineProperty,Y=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var O=(s,o,u)=>o in s?W(s,o,{enumerable:!0,configurable:!0,writable:!0,value:u}):s[o]=u,S=(s,o)=>{for(var u in o||(o={}))X.call(o,u)&&O(s,u,o[u]);if(N)for(var u of N(o))J.call(o,u)&&O(s,u,o[u]);return s},T=(s,o)=>Y(s,G(o));import{a as K,_ as Q}from"./SingleEpisodeData.939575d6.js";import{o as L,c as A,a as g,d as F,j as Z,z as tt,A as et,k as ot,b as R,l as rt,x as H,e as j,t as q,B as nt,F as U,v as it}from"./vendor.dee3e935.js";import{a as st}from"./ProgrammeData.df3cc968.js";const at={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},ct=g("path",{d:"M18.71 7.21a1 1 0 0 0-1.42 0l-7.45 7.46l-3.13-3.14A1 1 0 1 0 5.29 13l3.84 3.84a1 1 0 0 0 1.42 0l8.16-8.16a1 1 0 0 0 0-1.47z",fill:"currentColor"},null,-1),ut=[ct];function lt(s,o){return L(),A("svg",at,ut)}var ht={name:"uil-check",render:lt};const ft={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},dt=g("path",{d:"M8.5 12.8l5.7 5.6c.4.4 1 .4 1.4 0c.4-.4.4-1 0-1.4l-4.9-5l4.9-5c.4-.4.4-1 0-1.4c-.2-.2-.4-.3-.7-.3c-.3 0-.5.1-.7.3l-5.7 5.6c-.4.5-.4 1.1 0 1.6c0-.1 0-.1 0 0z",fill:"currentColor"},null,-1),mt=[dt];function pt(s,o){return L(),A("svg",ft,mt)}var vt={name:"uil-angle-left-b",render:pt};if(!B)var B={map:function(s,o){var u={};return o?s.map(function(m,h){return u.index=h,o.call(u,m)}):s.slice()},naturalOrder:function(s,o){return s<o?-1:s>o?1:0},sum:function(s,o){var u={};return s.reduce(o?function(m,h,_){return u.index=_,m+o.call(u,h)}:function(m,h){return m+h},0)},max:function(s,o){return Math.max.apply(null,o?B.map(s,o):s)}};var gt=function(){var s=5,o=8-s,u=1e3;function m(e,t,n){return(e<<2*s)+(t<<s)+n}function h(e){var t=[],n=!1;function c(){t.sort(e),n=!0}return{push:function(a){t.push(a),n=!1},peek:function(a){return n||c(),a===void 0&&(a=t.length-1),t[a]},pop:function(){return n||c(),t.pop()},size:function(){return t.length},map:function(a){return t.map(a)},debug:function(){return n||c(),t}}}function _(e,t,n,c,a,r,f){this.r1=e,this.r2=t,this.g1=n,this.g2=c,this.b1=a,this.b2=r,this.histo=f}function b(){this.vboxes=new h(function(e,t){return B.naturalOrder(e.vbox.count()*e.vbox.volume(),t.vbox.count()*t.vbox.volume())})}function x(e,t){if(t.count()){var n=t.r2-t.r1+1,c=t.g2-t.g1+1,a=B.max([n,c,t.b2-t.b1+1]);if(t.count()==1)return[t.copy()];var r,f,d,l,p=0,v=[],w=[];if(a==n)for(r=t.r1;r<=t.r2;r++){for(l=0,f=t.g1;f<=t.g2;f++)for(d=t.b1;d<=t.b2;d++)l+=e[m(r,f,d)]||0;v[r]=p+=l}else if(a==c)for(r=t.g1;r<=t.g2;r++){for(l=0,f=t.r1;f<=t.r2;f++)for(d=t.b1;d<=t.b2;d++)l+=e[m(f,r,d)]||0;v[r]=p+=l}else for(r=t.b1;r<=t.b2;r++){for(l=0,f=t.r1;f<=t.r2;f++)for(d=t.g1;d<=t.g2;d++)l+=e[m(f,d,r)]||0;v[r]=p+=l}return v.forEach(function(y,k){w[k]=p-y}),function(y){var k,z,C,D,M,I=y+"1",E=y+"2",P=0;for(r=t[I];r<=t[E];r++)if(v[r]>p/2){for(C=t.copy(),D=t.copy(),M=(k=r-t[I])<=(z=t[E]-r)?Math.min(t[E]-1,~~(r+z/2)):Math.max(t[I],~~(r-1-k/2));!v[M];)M++;for(P=w[M];!P&&v[M-1];)P=w[--M];return C[E]=M,D[I]=C[E]+1,[C,D]}}(a==n?"r":a==c?"g":"b")}}return _.prototype={volume:function(e){return this._volume&&!e||(this._volume=(this.r2-this.r1+1)*(this.g2-this.g1+1)*(this.b2-this.b1+1)),this._volume},count:function(e){var t=this.histo;if(!this._count_set||e){var n,c,a,r=0;for(n=this.r1;n<=this.r2;n++)for(c=this.g1;c<=this.g2;c++)for(a=this.b1;a<=this.b2;a++)r+=t[m(n,c,a)]||0;this._count=r,this._count_set=!0}return this._count},copy:function(){return new _(this.r1,this.r2,this.g1,this.g2,this.b1,this.b2,this.histo)},avg:function(e){var t=this.histo;if(!this._avg||e){var n,c,a,r,f=0,d=1<<8-s,l=0,p=0,v=0;for(c=this.r1;c<=this.r2;c++)for(a=this.g1;a<=this.g2;a++)for(r=this.b1;r<=this.b2;r++)f+=n=t[m(c,a,r)]||0,l+=n*(c+.5)*d,p+=n*(a+.5)*d,v+=n*(r+.5)*d;this._avg=f?[~~(l/f),~~(p/f),~~(v/f)]:[~~(d*(this.r1+this.r2+1)/2),~~(d*(this.g1+this.g2+1)/2),~~(d*(this.b1+this.b2+1)/2)]}return this._avg},contains:function(e){var t=e[0]>>o;return gval=e[1]>>o,bval=e[2]>>o,t>=this.r1&&t<=this.r2&&gval>=this.g1&&gval<=this.g2&&bval>=this.b1&&bval<=this.b2}},b.prototype={push:function(e){this.vboxes.push({vbox:e,color:e.avg()})},palette:function(){return this.vboxes.map(function(e){return e.color})},size:function(){return this.vboxes.size()},map:function(e){for(var t=this.vboxes,n=0;n<t.size();n++)if(t.peek(n).vbox.contains(e))return t.peek(n).color;return this.nearest(e)},nearest:function(e){for(var t,n,c,a=this.vboxes,r=0;r<a.size();r++)((n=Math.sqrt(Math.pow(e[0]-a.peek(r).color[0],2)+Math.pow(e[1]-a.peek(r).color[1],2)+Math.pow(e[2]-a.peek(r).color[2],2)))<t||t===void 0)&&(t=n,c=a.peek(r).color);return c},forcebw:function(){var e=this.vboxes;e.sort(function(a,r){return B.naturalOrder(B.sum(a.color),B.sum(r.color))});var t=e[0].color;t[0]<5&&t[1]<5&&t[2]<5&&(e[0].color=[0,0,0]);var n=e.length-1,c=e[n].color;c[0]>251&&c[1]>251&&c[2]>251&&(e[n].color=[255,255,255])}},{quantize:function(e,t){if(!e.length||t<2||t>256)return!1;var n=function(l){var p,v=new Array(1<<3*s);return l.forEach(function(w){p=m(w[0]>>o,w[1]>>o,w[2]>>o),v[p]=(v[p]||0)+1}),v}(e);n.forEach(function(){});var c=function(l,p){var v,w,y,k=1e6,z=0,C=1e6,D=0,M=1e6,I=0;return l.forEach(function(E){(v=E[0]>>o)<k?k=v:v>z&&(z=v),(w=E[1]>>o)<C?C=w:w>D&&(D=w),(y=E[2]>>o)<M?M=y:y>I&&(I=y)}),new _(k,z,C,D,M,I,p)}(e,n),a=new h(function(l,p){return B.naturalOrder(l.count(),p.count())});function r(l,p){for(var v,w=l.size(),y=0;y<u;){if(w>=p||y++>u)return;if((v=l.pop()).count()){var k=x(n,v),z=k[0],C=k[1];if(!z)return;l.push(z),C&&(l.push(C),w++)}else l.push(v),y++}}a.push(c),r(a,.75*t);for(var f=new h(function(l,p){return B.naturalOrder(l.count()*l.volume(),p.count()*p.volume())});a.size();)f.push(a.pop());r(f,t);for(var d=new b;f.size();)d.push(f.pop());return d}}}().quantize,V=function(s){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.width=this.canvas.width=s.naturalWidth,this.height=this.canvas.height=s.naturalHeight,this.context.drawImage(s,0,0,this.width,this.height)};V.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)};var $=function(){};$.prototype.getColor=function(s,o){return o===void 0&&(o=10),this.getPalette(s,5,o)[0]},$.prototype.getPalette=function(s,o,u){var m=function(x){var e=x.colorCount,t=x.quality;if(e!==void 0&&Number.isInteger(e)){if(e===1)throw new Error("colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()");e=Math.max(e,2),e=Math.min(e,20)}else e=10;return(t===void 0||!Number.isInteger(t)||t<1)&&(t=10),{colorCount:e,quality:t}}({colorCount:o,quality:u}),h=new V(s),_=function(x,e,t){for(var n=x,c=[],a=0,r=void 0,f=void 0,d=void 0,l=void 0,p=void 0;a<e;a+=t)f=n[0+(r=4*a)],d=n[r+1],l=n[r+2],((p=n[r+3])===void 0||p>=125)&&(f>250&&d>250&&l>250||c.push([f,d,l]));return c}(h.getImageData().data,h.width*h.height,m.quality),b=gt(_,m.colorCount);return b?b.palette():null},$.prototype.getColorFromUrl=function(s,o,u){var m=this,h=document.createElement("img");h.addEventListener("load",function(){var _=m.getPalette(h,5,u);o(_[0],s)}),h.src=s},$.prototype.getImageData=function(s,o){var u=new XMLHttpRequest;u.open("GET",s,!0),u.responseType="arraybuffer",u.onload=function(){if(this.status==200){var m=new Uint8Array(this.response);i=m.length;for(var h=new Array(i),_=0;_<m.length;_++)h[_]=String.fromCharCode(m[_]);var b=h.join(""),x=window.btoa(b);o("data:image/png;base64,"+x)}},u.send()},$.prototype.getColorAsync=function(s,o,u){var m=this;this.getImageData(s,function(h){var _=document.createElement("img");_.addEventListener("load",function(){var b=m.getPalette(_,5,u);o(b[0],this)}),_.src=h})};const _t={class:"pt-15"},xt={class:"w-full fixed h-15 top-0"},bt={class:"h-full flex justify-between mx-4 items-end"},wt={class:"bg-[#878787] h-7 w-7 flex items-center justify-center rounded-full"},yt=["src"],kt={class:"text-sm font-medium mt-2"},Ct={class:"text-xs text-secondary mt-2"},Mt={class:"px-5 mt-3 text-xs"},zt={class:"px-5 pb-5 py-3 dark:text-white"},Et={class:"text-xl font-medium"},Bt={class:"mb-4"},It={class:"text-xs text-secondary"},jt={class:"text-sm"},qt={class:"text-xs text-secondary"},Dt={class:"flex items-center mt-2"},Lt={class:"h-5.5 w-5.5 rounded-full bg-basicWhite dark:bg-basicBlack flex justify-center items-center"},$t={class:"ml-2 text-xs text-primary"},At=F({name:"ProgrammeDetail"}),Tt=F(T(S({},At),{setup(s){const o=Z(),u=st(Number(o.params.id)),m=K(Number(o.params.id)),h=tt([]);et(()=>{const b=new $,x=document.querySelector("img");x&&(x.complete?h.value=b.getColor(x):x.addEventListener("load",function(){h.value=b.getColor(x)}))});const _=ot(()=>h?h.value[0]*.299+h.value[1]*.587+h.value[2]*.114>=192?0:1:0);return(b,x)=>{const e=vt,t=ht,n=Q;return L(),A(U,null,[g("div",{class:"pb-5",style:nt("background-color: rgb("+h.value.join(",")+")")},[g("div",_t,[g("div",xt,[g("div",bt,[g("div",{class:"bg-[#878787] h-7 w-7 flex items-center rounded-full",onClick:x[0]||(x[0]=c=>b.$router.back())},[R(e,{class:"text-xl text-white"})]),g("div",null,[g("div",wt,[(L(),rt(t,{key:1,class:"text-xl text-white"}))])])])]),g("div",{class:H(["flex flex-col items-center",j(_)===1?"text-white":""])},[g("img",{class:"bg-primary h-45 w-45 rounded-md shadow-2xl",src:j(u).coverImg,crossorigin:"anonymous"},null,8,yt),g("p",kt,q(j(u).name),1),g("p",Ct,q(j(u).author),1),g("button",{class:H(["w-60 h-10 rounded-lg mt-2 text-sm font-medium",j(_)===1?"bg-white text-black":"bg-basicBlack text-white"])},"\u6700\u65B0\u5355\u96C6",2),g("p",Mt,q(j(u).description),1)],2)])],4),g("div",zt,[g("p",Et,"\u5355\u96C6 "+q(j(_)),1),(L(!0),A(U,null,it(j(m),c=>(L(),A("div",Bt,[g("p",It,q(c.createTime),1),g("p",jt,q(c.title),1),g("p",qt,q(c.description),1),g("div",Dt,[g("div",Lt,[R(n,{class:"text-primary text-sm"})]),g("p",$t,q(c.duration)+" \u5206\u949F",1)])]))),256))])],64)}}}));export{Tt as default};
