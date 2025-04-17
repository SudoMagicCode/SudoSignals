"use strict";(self.webpackChunksudoSignalsDocs=self.webpackChunksudoSignalsDocs||[]).push([[6682],{89:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"v2/plugins/plugins","title":"Plugins","description":"An overview of the currently available sudoSignals plugins","source":"@site/docs/v2/plugins/plugins.mdx","sourceDirName":"v2/plugins","slug":"/v2/plugins","permalink":"/v2/plugins","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":40,"frontMatter":{"title":"Plugins","sidebar_position":40,"slug":"/v2/plugins","description":"An overview of the currently available sudoSignals plugins"},"sidebar":"v2Sidebar","previous":{"title":"Installation Controls","permalink":"/v2/remote-control/installation-controls"},"next":{"title":"TouchDesigner","permalink":"/v2/plugins/TouchDesigner"}}');var r=n(4848),i=n(8453),o=n(7473);const l={title:"Plugins",sidebar_position:40,slug:"/v2/plugins",description:"An overview of the currently available sudoSignals plugins"},a="Plugins",c={},u=[];function d(e){const t={a:"a",h1:"h1",header:"header",hr:"hr",p:"p",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"plugins",children:"Plugins"})}),"\n",(0,r.jsx)(t.p,{children:"Plugins are used to communicate between Signals and an application. They allow you to remotely control your installations and to send data to and from the Dashboard."}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.a,{href:"https://www.sudomagic.com/",children:"SudoMagic"})," team has some open source plugins that are officially supported."]}),"\n",(0,r.jsxs)(t.p,{children:["If you're interested in contributing a plugin for official support ",(0,r.jsx)(t.a,{href:"http://sudosignals.com/contact",children:"please contact us by visiting this page"}),"."]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(o.A,{})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},7473:(e,t,n)=>{n.d(t,{A:()=>C});var s=n(6540),r=n(4164),i=n(102),o=n(6289),l=n(797);const a=["zero","one","two","few","many","other"];function c(e){return a.filter((t=>e.includes(t)))}const u={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function d(){const{i18n:{currentLocale:e}}=(0,l.A)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:c(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),u}}),[e])}function p(){const e=d();return{selectMessage:(t,n)=>function(e,t,n){const s=e.split("|");if(1===s.length)return s[0];s.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const r=n.select(t),i=n.pluralForms.indexOf(r);return s[Math.min(i,s.length-1)]}(n,t,e)}}var h=n(2887),m=n(539),f=n(9303);const g={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var x=n(4848);function v(e){let{href:t,children:n}=e;return(0,x.jsx)(o.A,{href:t,className:(0,r.A)("card padding--lg",g.cardContainer),children:n})}function j(e){let{href:t,icon:n,title:s,description:i}=e;return(0,x.jsxs)(v,{href:t,children:[(0,x.jsxs)(f.A,{as:"h2",className:(0,r.A)("text--truncate",g.cardTitle),title:s,children:[n," ",s]}),i&&(0,x.jsx)("p",{className:(0,r.A)("text--truncate",g.cardDescription),title:i,children:i})]})}function y(e){let{item:t}=e;const n=(0,i.Nr)(t),s=function(){const{selectMessage:e}=p();return t=>e(t,(0,m.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,x.jsx)(j,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??s(t.items.length)}):null}function b(e){let{item:t}=e;const n=(0,h.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,i.cC)(t.docId??void 0);return(0,x.jsx)(j,{href:t.href,icon:n,title:t.label,description:t.description??s?.description})}function w(e){let{item:t}=e;switch(t.type){case"link":return(0,x.jsx)(b,{item:t});case"category":return(0,x.jsx)(y,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function A(e){let{className:t}=e;const n=(0,i.$S)();return(0,x.jsx)(C,{items:n.items,className:t})}function C(e){const{items:t,className:n}=e;if(!t)return(0,x.jsx)(A,{...e});const s=(0,i.d1)(t);return(0,x.jsx)("section",{className:(0,r.A)("row",n),children:s.map(((e,t)=>(0,x.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,x.jsx)(w,{item:e})},t)))})}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var s=n(6540);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);