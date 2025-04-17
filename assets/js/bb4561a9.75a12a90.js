"use strict";(self.webpackChunksudoSignalsDocs=self.webpackChunksudoSignalsDocs||[]).push([[4067],{2177:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>u});const o=JSON.parse('{"id":"v1/plugins/nodeJS/nodeJS","title":"NodeJS","description":"An overview of NodeJS for sudoSignals","source":"@site/docs/v1/plugins/nodeJS/nodeJS.mdx","sourceDirName":"v1/plugins/nodeJS","slug":"/v1/plugins/NodeJS","permalink":"/v1/plugins/NodeJS","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"NodeJS","slug":"/v1/plugins/NodeJS","description":"An overview of NodeJS for sudoSignals"},"sidebar":"v1Sidebar","previous":{"title":"Manual Configuration","permalink":"/v1/plugins/TouchDesigner/manual-config"},"next":{"title":"Getting Started","permalink":"/v1/plugins/NodeJS/getting-started"}}');var r=t(4848),s=t(8453),i=t(7473);const l={title:"NodeJS",slug:"/v1/plugins/NodeJS",description:"An overview of NodeJS for sudoSignals"},c="NodeJS",a={},u=[];function d(e){const n={a:"a",code:"code",h1:"h1",header:"header",hr:"hr",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"nodejs",children:"NodeJS"})}),"\n",(0,r.jsxs)(n.p,{children:["This plugin operates by communicating to the sudoSignals local service installed on your machine. For more information on how to install check out the ",(0,r.jsx)(n.a,{href:"https://docs.sudosignals.com/docs/gettingStarted/installSignals/",children:"getting started instructions."})]}),"\n",(0,r.jsxs)(n.p,{children:["To getting started using NodeJS and learn more about developing NodeJS apps check out ",(0,r.jsx)(n.a,{href:"https://nodejs.dev/learn",children:"https://nodejs.dev/learn"})]}),"\n",(0,r.jsx)(n.p,{children:"To install the sudoSignals plugin into your nodeJS project use the following:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"npm i sudosignals_nodeplugin\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can then bring the sudoSignals code into your project with the following:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"//require the signals plugin \nvar SignalsPlugin = require('sudosignals_nodeplugin').SignalsPlugin\n\n//Insert Process id from process configuration page in dashboard\nconst PROCESS_ID = \"PROCESS_ID_HERE\"\n\n//Create plugin.\nvar myPlugin = new SignalsPlugin(id=PROCESS_ID, onStart=()=>{\n\tconsole.log('Plugin has connected to signals service.')\n})\n\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(i.A,{})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},7473:(e,n,t)=>{t.d(n,{A:()=>y});var o=t(6540),r=t(4164),s=t(102),i=t(6289),l=t(797);const c=["zero","one","two","few","many","other"];function a(e){return c.filter((n=>e.includes(n)))}const u={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function d(){const{i18n:{currentLocale:e}}=(0,l.A)();return(0,o.useMemo)((()=>{try{return function(e){const n=new Intl.PluralRules(e);return{locale:e,pluralForms:a(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${n.message}\n`),u}}),[e])}function g(){const e=d();return{selectMessage:(n,t)=>function(e,n,t){const o=e.split("|");if(1===o.length)return o[0];o.length>t.pluralForms.length&&console.error(`For locale=${t.locale}, a maximum of ${t.pluralForms.length} plural forms are expected (${t.pluralForms.join(",")}), but the message contains ${o.length}: ${e}`);const r=t.select(n),s=t.pluralForms.indexOf(r);return o[Math.min(s,o.length-1)]}(t,n,e)}}var p=t(2887),h=t(539),m=t(9303);const f={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var S=t(4848);function x(e){let{href:n,children:t}=e;return(0,S.jsx)(i.A,{href:n,className:(0,r.A)("card padding--lg",f.cardContainer),children:t})}function j(e){let{href:n,icon:t,title:o,description:s}=e;return(0,S.jsxs)(x,{href:n,children:[(0,S.jsxs)(m.A,{as:"h2",className:(0,r.A)("text--truncate",f.cardTitle),title:o,children:[t," ",o]}),s&&(0,S.jsx)("p",{className:(0,r.A)("text--truncate",f.cardDescription),title:s,children:s})]})}function v(e){let{item:n}=e;const t=(0,s.Nr)(n),o=function(){const{selectMessage:e}=g();return n=>e(n,(0,h.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return t?(0,S.jsx)(j,{href:t,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??o(n.items.length)}):null}function N(e){let{item:n}=e;const t=(0,p.A)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,s.cC)(n.docId??void 0);return(0,S.jsx)(j,{href:n.href,icon:t,title:n.label,description:n.description??o?.description})}function J(e){let{item:n}=e;switch(n.type){case"link":return(0,S.jsx)(N,{item:n});case"category":return(0,S.jsx)(v,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}function w(e){let{className:n}=e;const t=(0,s.$S)();return(0,S.jsx)(y,{items:t.items,className:n})}function y(e){const{items:n,className:t}=e;if(!n)return(0,S.jsx)(w,{...e});const o=(0,s.d1)(n);return(0,S.jsx)("section",{className:(0,r.A)("row",t),children:o.map(((e,n)=>(0,S.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,S.jsx)(J,{item:e})},n)))})}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var o=t(6540);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);