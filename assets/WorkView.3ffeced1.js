import{o as s,c,a as r,d as L,r as p,b as C,e as W,f as z,w as B,L as $,g as V,n as j,u as a,F as E,h as _,v as g,i as k,j as N,_ as F}from"./index.8973f7be.js";import{c as M}from"./data.c37dea97.js";function P(v,t){return s(),c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[r("path",{"fill-rule":"evenodd",d:"M13.28 3.97a.75.75 0 010 1.06L6.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0zm6 0a.75.75 0 010 1.06L12.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z","clip-rule":"evenodd"})])}function S(v,t){return s(),c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[r("path",{"fill-rule":"evenodd",d:"M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z","clip-rule":"evenodd"})])}const A={class:"work h-screen w-screen flex justify-center md:items-center relative overflow-x-hidden md:overfloiw-auto"},D={class:"projects-list md:flex flex-wrap md:flex-nowrap md:overflow-hidden"},I=["onClick"],T=["src"],R=L({__name:"WorkView",setup(v){let t=p(0),m=0,n=p(100);const b=N();function d(o=120,l){const e=document.getElementsByClassName("projects-list")[0];let i=+l>0?"right":"left";n.value=e.scrollWidth-e.clientWidth;let u=l*.3,f=+l>0?o+u:o-u;switch(i){case"right":t.value>=n.value?t.value=n.value:(t.value+=f,e.scrollTo({left:t.value,behavior:"smooth"}));break;case"left":t.value<=0?t.value=0:(t.value-=f,e.scrollTo({left:t.value,behavior:"smooth"}));break}}function x(o){o.target.classList.add("done")}function w(o){const e=window.innerWidth/2;o==="left"?d(e,8):d(e,-8)}function h(o){m=Number(o.deltaY.toFixed(0)),d(120,m)}function y(o){b.push({path:`/work-detail/${o}`})}return C(()=>{window.addEventListener("wheel",h)}),W(()=>{window.removeEventListener("wheel",h)}),(o,l)=>(s(),z($,null,{content:B(()=>[r("div",A,[r("div",D,[(s(!0),c(E,null,V(a(M),(e,i)=>(s(),c("div",{key:e.title,class:"cover-outer-box m-10 md:m-3 md:first:ml-0 md:last:mr-0"},[r("div",{onClick:u=>y(i),class:"cover-box w-96 md:w-80 move-in",style:j(`background:${e.subColor}; animation-delay:${1e3+200*i}ms;`)},[r("img",{src:e.img,onLoad:x,class:"s-work hover:opacity-60 w-full h-auto transition-all duration-[2000ms]"},null,40,T)],12,I)]))),128))]),_(r("div",{onClick:l[0]||(l[0]=e=>w("right")),class:"backdrop-blur-sm bg-white/30 hover:bg-lime-400 hover:opacity-70 -translate-y-1/2 absolute top-[50vh] py-10 pr-5 pl-1 rounded-r-full cursor-pointer left-0 z-10 transition-all duration-500"},[k(a(P),{class:"w-5 h-5 text-black"})],512),[[g,!(a(t)<=0)]]),_(r("div",{onClick:l[1]||(l[1]=e=>w("left")),class:"backdrop-blur-sm bg-white/30 hover:bg-lime-400 hover:opacity-70 -translate-y-1/2 absolute top-[50vh] py-10 pr-5 pl-1 rounded-l-full cursor-pointer right-0 z-10 transition-all duration-500"},[k(a(S),{class:"w-5 h-5 text-black"})],512),[[g,a(t)<a(n)]])])]),_:1}))}});const q=F(R,[["__scopeId","data-v-5087df9a"]]);export{q as default};
