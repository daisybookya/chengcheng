import{o as r,c,a as s,d as L,r as p,b as C,e as W,f as z,w as B,L as $,g as V,n as j,u as a,F as E,h as _,v as b,i as g,j as N,_ as F}from"./index.802e0b17.js";import{c as M}from"./data.cb7ba302.js";function P(v,t){return r(),c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[s("path",{"fill-rule":"evenodd",d:"M13.28 3.97a.75.75 0 010 1.06L6.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0zm6 0a.75.75 0 010 1.06L12.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z","clip-rule":"evenodd"})])}function S(v,t){return r(),c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[s("path",{"fill-rule":"evenodd",d:"M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z","clip-rule":"evenodd"})])}const A={class:"work h-screen w-screen flex justify-center md:items-center relative overflow-x-hidden md:overfloiw-auto"},D={class:"projects-list pt-20 md:pt-0 md:flex flex-wrap md:flex-nowrap md:overflow-hidden"},I=["onClick"],T=["src"],R={class:"px-5 py-10 block"},U={class:"px-5 py-10 block"},X=L({__name:"WorkView",setup(v){let t=p(0),m=0,n=p(100);const k=N();function d(o=120,l){const e=document.getElementsByClassName("projects-list")[0];let i=+l>0?"right":"left";n.value=e.scrollWidth-e.clientWidth;let u=l*.3,f=+l>0?o+u:o-u;switch(i){case"right":t.value>=n.value?t.value=n.value:(t.value+=f,e.scrollTo({left:t.value,behavior:"smooth"}));break;case"left":t.value<=0?t.value=0:(t.value-=f,e.scrollTo({left:t.value,behavior:"smooth"}));break}}function x(o){o.target.classList.add("done")}function h(o){const e=window.innerWidth/2;o==="left"?d(e,8):d(e,-8)}function w(o){m=Number(o.deltaY.toFixed(0)),d(120,m)}function y(o){k.push({path:`/work-detail/${o}`})}return C(()=>{window.addEventListener("wheel",w)}),W(()=>{window.removeEventListener("wheel",w)}),(o,l)=>(r(),z($,null,{content:B(()=>[s("div",A,[s("div",D,[(r(!0),c(E,null,V(a(M),(e,i)=>(r(),c("div",{key:e.title,class:"cover-outer-box m-10 md:m-3 md:first:ml-0 md:last:mr-0"},[s("div",{onClick:u=>y(i),class:"cover-box w-96 md:w-96 move-in",style:j(`background:${e.subColor}; animation-delay:${1e3+200*i}ms;`)},[s("img",{src:e.img,onLoad:x,class:"s-work w-full h-auto transition-all duration-[500ms]"},null,40,T)],12,I)]))),128))]),_(s("div",{onClick:l[0]||(l[0]=e=>h("right")),class:"hidden md:block backdrop-blur-sm bg-white/30 hover:bg-lime-400 hover:opacity-70 -translate-y-1/2 absolute top-[50vh] rounded-r-full cursor-pointer left-0 z-10 transition-all duration-500"},[s("span",R,[g(a(P),{class:"w-5 h-5 text-black"})])],512),[[b,!(a(t)<=0)]]),_(s("div",{onClick:l[1]||(l[1]=e=>h("left")),class:"hidden md:block backdrop-blur-sm text-center bg-white/30 hover:bg-lime-400 hover:opacity-70 -translate-y-1/2 absolute top-[50vh] rounded-l-full cursor-pointer right-0 z-10 transition-all duration-500"},[s("span",U,[g(a(S),{class:"w-5 h-5 text-black"})])],512),[[b,a(t)<a(n)]])])]),_:1}))}});const H=F(X,[["__scopeId","data-v-23bbc3fd"]]);export{H as default};
