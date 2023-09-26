import{j as b,k as p,l as x,o as i,c as l,a as t,t as _,g as s,m as v,u as R,q as d,s as m,F as $,r as k,v as T,x as q,y as w,h as B}from"./entry.9e00fb99.js";import{I as M,u as h}from"./iconify.6d3b4082.js";const O={class:"about-item"},U={class:"about-content-box"},D={class:"about-item-text"},F={__name:"AboutItem",props:{about:Object},setup(o){b(()=>{p()});const{locale:e}=x({useScope:"global"});return(n,u)=>{var c,a;return i(),l("li",O,[t("div",U,[t("p",D,_(s(e)==="en"?(c=o.about.description)==null?void 0:c.en:(a=o.about.description)==null?void 0:a.ru_RU),1)])])}}},H=F,P={class:"service-item"},N={class:"service-icon-box"},V=["src"],X={class:"service-content-box"},z={class:"h4 service-item-title"},E={class:"service-item-text"},J={__name:"ServiceItem",props:{service:Object},setup(o){b(()=>{p()});const{locale:e}=x({useScope:"global"});return(n,u)=>{var c,a;return i(),l("li",P,[t("div",N,[o.service.image!==null&&o.service.icon!==""?(i(),l("img",{key:0,src:o.service.image,alt:"mobile app icon",class:"w-40"},null,8,V)):(i(),v(s(M),{key:1,icon:o.service.icon,class:"text-ranko-500 text-[3rem] mx-auto",style:{width:"40px"}},null,8,["icon"]))]),t("div",X,[t("h4",z,_(o.service.title),1),t("p",E,_(s(e)==="en"?(c=o.service.description)==null?void 0:c.en:(a=o.service.description)==null?void 0:a.ru_RU),1)])])}}},Y=J,Z=""+globalThis.__publicAssetsURL("images/icon-quote.svg"),G={class:"about active","data-page":"about"},K={class:"h2 article-title"},Q={class:"about-text"},W={class:"about-list"},tt={class:"service"},et=t("br",null,null,-1),st={class:"service-list"},ot={class:"testimonials-modal"},ct=t("ion-icon",{name:"close-outline"},null,-1),at=[ct],it={class:"flex gap-5 mb-5 justify-start items-center"},nt={class:"modal-avatar-box"},lt=["src"],rt={class:"modal-content"},_t={class:"h3 modal-title"},ut=t("time",{datetime:"2021-06-14"},"14 June, 2021",-1),dt={class:"flex gap-5 items-start"},mt=t("img",{class:"my-auto hidden md:block",src:Z,alt:"quote icon"},null,-1),ht=["innerHTML"],vt=t("div",{class:"mt-2 flex justify-end text-sm text-gray-600 italic"}," Company Co. ",-1),bt=B('<section class="clients"><h3 class="h3 clients-title"> Clients </h3><ul class="clients-list has-scrollbar"><li class="clients-item"><a href="https://example.com" target="_blank"></a></li></ul></section>',1),ft={__name:"index",async setup(o){let e,n;R({}),b(()=>{p()});const{locale:u}=x({useScope:"global"});[e,n]=d(()=>h("/api/testimonials","$PslAyef5YX")),e=await e,n();const c=m({}),a=m(!1),g=m(!1);function I(){c.value={},a.value=!1,g.value=!1}const{data:S}=([e,n]=d(()=>h("/api/services","$6PO73qLRkI")),e=await e,n(),e),{data:j}=([e,n]=d(()=>h("/api/about","$nn2AXZkwPl")),e=await e,n(),e);return(A,pt)=>{var f,y;const C=H,L=Y;return i(),l("article",G,[t("header",null,[t("h2",K,_(A.$t("pageTitles.about")),1)]),t("section",Q,[t("ul",W,[(i(!0),l($,null,k(s(j),r=>(i(),v(C,{key:r.id,about:r},null,8,["about"]))),128))])]),t("section",tt,[et,t("ul",st,[(i(!0),l($,null,k(s(S),r=>(i(),v(L,{key:r.id,service:r},null,8,["service"]))),128))])]),t("div",{class:w(["modal-container",{active:s(a)}])},[T(t("div",{class:w(["overlay",{active:s(g)}])},null,2),[[q,s(a)]]),t("section",ot,[t("button",{class:"modal-close-btn",onClick:I},at),t("div",it,[t("div",nt,[t("img",{src:s(c).image,alt:"Daniel lewis",width:"80"},null,8,lt)]),t("div",rt,[t("h4",_t,_(s(c).title),1),ut])]),t("div",dt,[mt,t("p",{class:"text-justify text-gray-400 text-sm md:text-md",innerHTML:s(u)==="en"?(f=s(c).content)==null?void 0:f.en:(y=s(c).content)==null?void 0:y.ru_RU},null,8,ht)]),vt])],2),bt])}}};export{ft as default};