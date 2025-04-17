"use strict";(self.webpackChunksudoSignalsDocs=self.webpackChunksudoSignalsDocs||[]).push([[1379],{2640:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"v1/plugins/nodeJS/nodeGettingStarted","title":"Getting Started","description":"An overview of NodeJS for sudoSignals","source":"@site/docs/v1/plugins/nodeJS/002-nodeGettingStarted.md","sourceDirName":"v1/plugins/nodeJS","slug":"/v1/plugins/NodeJS/getting-started","permalink":"/v1/plugins/NodeJS/getting-started","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Getting Started","slug":"/v1/plugins/NodeJS/getting-started","description":"An overview of NodeJS for sudoSignals"},"sidebar":"v1Sidebar","previous":{"title":"NodeJS","permalink":"/v1/plugins/NodeJS"},"next":{"title":"Logging, Reporting, and Controls","permalink":"/v1/plugins/NodeJS/Node-remote-conrol"}}');var s=t(4848),i=t(8453);const r={title:"Getting Started",slug:"/v1/plugins/NodeJS/getting-started",description:"An overview of NodeJS for sudoSignals"},d="Getting Started",a={},l=[];function c(e){const n={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"getting-started",children:"Getting Started"})}),"\n",(0,s.jsxs)(n.p,{children:["To install NodeJS and learn more about developing NodeJS apps check out ",(0,s.jsx)(n.a,{href:"https://nodejs.dev/learn",children:"https://nodejs.dev/learn"})]}),"\n",(0,s.jsx)(n.p,{children:"To install the sudoSignals plugin into your nodeJS project use the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"npm i sudosignals_nodeplugin\n"})}),"\n",(0,s.jsx)(n.p,{children:"You can then bring the sudoSignals code into your project with the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"//require the signals plugin \nvar SignalsPlugin = require('sudosignals_nodeplugin').SignalsPlugin\n\n//Insert Process id from process configuration page in dashboard\nconst PROCESS_ID = \"PROCESS_ID_HERE\"\n\n//Create plugin.\nvar myPlugin = new SignalsPlugin(id=PROCESS_ID, onStart=()=>{\n\tconsole.log('Plugin has connected to signals service.')\n})\n\n"})})]})}function g(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>d});var o=t(6540);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);