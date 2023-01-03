import{d as b,o as S,c as E,a as t,t as w,y as L,s as D,_ as I,b as B,e as R,f as V,w as d,L as P,i as p,m as n,p as U,q as N}from"./index.8973f7be.js";const O={class:"w-[100%] md:w-[60%] xl:w-[50%] text-sky-600"},q={class:"running ml-5 w-52 rotate-90 origin-top-left overflow-hidden text-3xl txt-black leading-normal"},z={class:"flow-txt w-[1000px] flex text-sky-600"},F=b({__name:"Intro",props:{title:{type:String,required:!0},size:{type:String}},setup(e){return(a,c)=>(S(),E("div",O,[t("div",q,[t("div",z,[t("div",null,w(e.title),1),t("div",null,w(e.title),1)])]),t("div",{class:D(["ml-10 -mt-14 font-serif leading-normal",[e.size]])},[L(a.$slots,"content",{},void 0,!0)],2)]))}});const f=I(F,[["__scopeId","data-v-4114e6cf"]]),r=e=>(U("data-v-45d53daf"),e=e(),N(),e),Y={class:"about h-full transition-all duration-1000"},$=r(()=>t("div",{class:"about-banner flow-bg w-full flex justify-end items-center p-10 h-screen bg-[url(/qbkls.webp)] bg-fixed"},[t("h1",{class:"text-sky-600 text-5xl md:text-6xl lg:text-8xl font-bold uppercase font-display sm:leading-normal lg:leading-relaxed"},[n(" About Cheng "),t("br"),n("Cheng Design ")])],-1)),T={class:"part flex justify-start px-14 py-10 mt-20","data-color":"#f0e6fc"},j=r(()=>t("br",null,null,-1)),M={class:"part flex justify-end px-14 py-10 mt-20","data-color":"#f7e2c6"},H=r(()=>t("ul",null,[t("li",null,"-Javascript: Vue/React/Typescript"),t("li",null,"-Css:scss/less/tailwindcss"),t("li",null,"-UI framework:Ant Design/Boostrap/Vuetify"),t("li",null,"-git/github"),t("li",null,"-photoshop"),t("li",null,"-illustrator")],-1)),K={class:"part flex justify-evenly px-14 py-10 mt-20","data-color":"#def3ff"},G=r(()=>t("p",null,[n(" \u201C"),t("i",null,"A SPARK IS YOUR MEANINGS OF LIFE, YOUR PASSIONS, YOUR PURPOSES, ISN\u2018T A SOUL\u2019S PURPOSE."),n('\u201D From film "Soul"'),t("br"),n(" I hope I can help you complete a spark in your life and bring more good things. ")],-1)),J=r(()=>t("div",{class:"m-auto py-24 overflow-hidden w-screen"},[t("div",{class:"run-txt hover:text-sky-600 text-5xl text-white bg-lime-500 flex leading-normal h-20"},[t("div",null," Let's get Started.Contact Dasiy!Let's get Started.Contact Dasiy! "),t("div",null," Let's get Started.Contact Dasiy!Let's get Started.Contact Dasiy! ")])],-1)),X=b({__name:"AboutView",setup(e){document.body.style.overflowX="hidden";let a=[],c=0,u=!1,_=null;B(()=>{a=k(".part"),_=document.querySelector(".about"),document.addEventListener("scroll",g)});function k(s){if(s!==""){let l=document.getElementsByClassName("about-banner")[0].getBoundingClientRect().height,i=document.querySelectorAll(s),x=i[0].getBoundingClientRect().y,y=[];return console.log(l,x),i.forEach((m,Q)=>{let h=m.getBoundingClientRect().y;x>l&&(h-=l);const C=m.getAttribute("data-color")||"",v={ele:m,y:h,color:C};console.log(l,v),y.push(v)}),y}return[]}function A(s,o){let l=30,i=a[o];s+l>i.y&&_!==null&&(_.setAttribute("style",`background:${i.color}`),i.ele.classList.add("active"))}function g(s){c=window.scrollY,u||(window.requestAnimationFrame(()=>{for(let o=0,l=a.length;o<l;o++)A(c,o);u=!1}),u=!0)}return R(()=>{document.removeEventListener("scroll",g)}),(s,o)=>(S(),V(P,null,{content:d(()=>[t("div",Y,[$,t("div",T,[p(f,{title:"| Intro:About Daisy",size:"text-3xl md:text-5xl md:leading-normal"},{content:d(()=>[n(" Hi,my name is Daisy,"),j,n(" a Designer and Front-End Developer with over 5 years of experience working in Taiwan Taichung. ")]),_:1})]),t("div",M,[p(f,{title:"| Professional Skills",size:"text-2xl md:text-4xl md:leading-normal"},{content:d(()=>[H]),_:1})]),t("div",K,[p(f,{title:"|More about:Faith",size:"text-2xl md:text-4xl md:leading-normal"},{content:d(()=>[G]),_:1})]),J])]),_:1}))}});const Z=I(X,[["__scopeId","data-v-45d53daf"]]);export{Z as default};