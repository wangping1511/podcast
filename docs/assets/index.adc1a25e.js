var y=Object.defineProperty,b=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var v=(t,s,o)=>s in t?y(t,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[s]=o,$=(t,s)=>{for(var o in s||(s={}))k.call(s,o)&&v(t,o,s[o]);if(f)for(var o of f(s))E.call(s,o)&&v(t,o,s[o]);return t},w=(t,s)=>b(t,g(s));import{_ as C}from"./index.115f09a6.js";import{d as a,o as r,c as n,F as _,x as m,a as e,t as c,b as d,y as h,r as j,w as A,e as x}from"./vendor.2efe0d9b.js";import{g as p}from"./SingleEpisodeData.d18bc574.js";import{g as B}from"./ProgrammeData.6089fa48.js";const D={class:"mx-5 mb-5"},F=e("div",{class:"flex justify-between"},[e("p",{class:"text-xl font-medium dark:text-white"},"\u4ECA\u65E5\u63A8\u8350"),e("a",{class:"text-primary text-sm self-end"},"\u5F80\u65E5\u63A8\u8350")],-1),L=["onClick"],q={class:"flex-none"},I=["src"],N={class:"ml-4 flex flex-col justify-between"},P={class:"text-xs text-secondary font-medium"},R={class:"dark:text-white overflow-hidden text-sm",style:{display:"-webkit-box","-webkit-line-clamp":"2","-webkit-box-orient":"vertical"}},S={class:"flex items-center"},V={class:"h-5.5 w-5.5 rounded-full bg-basicWhite dark:bg-basicBlack flex justify-center items-center"},z={class:"ml-2 text-xs text-secondary"},T=a({props:{list:{type:Array,required:!0}},setup(t){return(s,o)=>{const i=C;return r(),n("div",D,[F,(r(!0),n(_,null,m(t.list,l=>(r(),n("div",{key:l.id,class:"flex mt-2 mb-3",onClick:u=>s.$router.push("/single-episode-detail/"+l.id)},[e("div",q,[e("img",{class:"rounded h-20 w-20",src:l.coverImg,alt:""},null,8,I)]),e("div",N,[e("div",null,[e("p",P,c(l.programmeName),1),e("p",R,c(l.title),1)]),e("div",S,[e("div",V,[d(i,{class:"text-primary text-sm"})]),e("p",z,c(l.duration)+" \u5206\u949F",1)])])],8,L))),128))])}}}),W={class:"mb-5"},G={class:"flex dark:text-white overflow-x-scroll scrollbar-hide pl-5"},H={class:"flex overflow-visible"},J=["onClick"],K=e("p",{class:"text-xs font-medium text-primary"},"\u7CBE\u9009",-1),M={class:"pr-2 text-base"},O=e("div",{class:"mt-1 h-42 rounded overflow-hidden bg-primary"},null,-1),Q=a({props:{list:{type:Array,required:!0}},setup(t){return(s,o)=>(r(),n("div",W,[e("div",G,[e("div",H,[(r(!0),n(_,null,m(t.list,(i,l)=>(r(),n("div",{class:h(["w-[21.875rem] flex-none flex flex-col justify-between",l===t.list.length-1?"mr-5":" mr-3"]),onClick:u=>s.$router.push("/single-episode-detail/"+i.id)},[e("div",null,[K,e("p",M,c(i.title),1)]),O],10,J))),256))])])]))}}),U={class:"mb-5"},X=e("div",{class:"mx-5 flex justify-between"},[e("p",{class:"text-xl font-medium dark:text-white"},"\u70ED\u95E8\u8282\u76EE"),e("a",{class:"text-primary text-sm self-end"},"\u67E5\u770B\u66F4\u591A")],-1),Y={class:"mt-3 flex overflow-x-scroll scrollbar-hide pl-5"},Z={class:"flex overflow-visible"},ee={class:"h-[10.6875rem] w-[10.6875rem]"},te=["src"],se={class:"dark:text-white text-xs mt-1"},le={class:"text-secondary"},oe=a({props:{list:{type:Array,required:!0}},setup(t){return(s,o)=>{const i=j("router-link");return r(),n("div",U,[X,e("div",Y,[e("div",Z,[(r(!0),n(_,null,m(t.list,(l,u)=>(r(),n("div",{class:h(u===t.list.length-1?"mr-5":"mr-2")},[e("div",ee,[d(i,{to:{name:"ProgrammeDetail",params:{id:l.id}}},{default:A(()=>[e("img",{src:l.coverImg,alt:"...",class:"rounded"},null,8,te)]),_:2},1032,["to"])]),e("div",se,[e("p",null,c(l.name),1),e("p",le,c(l.author),1)])],2))),256))])])])}}}),ie={class:"mb-5"},re=e("div",{class:"flex justify-between mx-5"},[e("p",{class:"text-xl font-medium dark:text-white"},"\u70ED\u95E8\u5355\u96C6"),e("a",{class:"text-primary text-sm self-end"},"\u67E5\u770B\u66F4\u591A")],-1),ne={class:"mt-1"},ce={class:"h-60 flex flex-wrap flex-col overflow-x-scroll scrollbar-hide pl-5"},ae=["onClick"],de=["src"],ue={class:"px-4 font-medium"},_e={class:"text-xs text-secondary"},me=a({props:{list:{required:!0,type:Array}},setup(t){return(s,o)=>(r(),n("div",ie,[re,e("div",ne,[e("div",ce,[(r(!0),n(_,null,m(t.list,(i,l)=>(r(),n("div",{key:i.id,class:h(["h-16 my-1 flex items-center text-sm dark:text-white",(l===t.list.length-1?" w-[23.125rem] pr-5":" w-[21.875rem]")+(l>2?" ml-3":"")]),onClick:u=>s.$router.push("/single-episode-detail/"+i.id)},[e("img",{class:"w-15 h-15 rounded",src:i.coverImg},null,8,de),e("p",ue,c(l+1),1),e("div",null,[e("p",null,c(i.title),1),e("p",_e,c(i.createTime)+" \xB7 "+c(i.duration)+" \u5206\u949F",1)])],10,ae))),128))])])]))}}),xe=a({name:"Discover"}),ye=a(w($({},xe),{setup(t){const s=p(6),o=p(5),i=B(6),l=p(9);return(u,he)=>(r(),n(_,null,[d(Q,{list:x(s)},null,8,["list"]),d(T,{list:x(o)},null,8,["list"]),d(oe,{list:x(i)},null,8,["list"]),d(me,{list:x(l)},null,8,["list"])],64))}}));export{ye as default};
