import{d,i as x,j as v,k as f,r as _,o as c,c as r,l as u,b as e,w as s,T as h,F as m,t as w,m as B,n as l}from"./vendor.d16dbc4d.js";import{_ as k}from"./plugin-vue_export-helper.21dcd24c.js";const b={class:"mt-8 mb-4 flex text-2xl mx-5 font-medium dark:text-white"},g=l("\u53D1\u73B0"),y=l("\u8BA2\u9605"),N=l("\u6211\u7684"),T={key:0,class:"w-full py-2 text-center text-xl fixed inset-x-0 top-0 z-[1000] bg-white dark:bg-basicBlack"},E={class:"dark:text-white"},C=d({setup(p){const i=[{index:"0",title:"\u53D1\u73B0"},{index:1,title:"\u8BA2\u9605"},{index:2,title:"\u6211\u7684"}],o=x(!1),t=()=>{const a=document.documentElement.scrollTop||document.body.scrollTop;o.value=a>50};return v(()=>{window.addEventListener("scroll",t)}),f(()=>{window.removeEventListener("scroll",t)}),(a,j)=>{const n=_("router-link");return c(),r(m,null,[u("div",b,[e(n,{to:"/discover",class:"mr-2","active-class":"text-4xl"},{default:s(()=>[g]),_:1}),e(n,{to:"/subscription",class:"mr-2","active-class":"text-4xl"},{default:s(()=>[y]),_:1}),e(n,{to:"/me",class:"mr-2","active-class":"text-4xl"},{default:s(()=>[N]),_:1})]),e(h,{name:"fade"},{default:s(()=>[o.value?(c(),r("div",T,[u("p",E,w(i[a.$route.meta.index].title),1)])):B("",!0)]),_:1})],64)}}});var V=k(C,[["__scopeId","data-v-7d1c248a"]]);const A=d({setup(p){return(i,o)=>{const t=_("router-view");return c(),r(m,null,[e(V),e(t)],64)}}});export{A as default};
