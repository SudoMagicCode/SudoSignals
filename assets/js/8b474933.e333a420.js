"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[705],{2836:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var i=e(5893),t=e(1151);const l={title:"Install Signals",slug:"/getting-started/installing-sudoSignals",description:"A step-by-step guide through installing sudoSignals"},a="Installing sudoSignals",o={id:"gettingStarted/installSignals",title:"Install Signals",description:"A step-by-step guide through installing sudoSignals",source:"@site/docs/gettingStarted/003-installSignals.md",sourceDirName:"gettingStarted",slug:"/getting-started/installing-sudoSignals",permalink:"/getting-started/installing-sudoSignals",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Install Signals",slug:"/getting-started/installing-sudoSignals",description:"A step-by-step guide through installing sudoSignals"},sidebar:"tutorialSidebar",previous:{title:"Create an Account",permalink:"/getting-started/create-an-account"},next:{title:"Create an Installation",permalink:"/getting-started/create-an-installation"}},d={},c=[{value:"Download sudoSignals",id:"download-sudosignals",level:2},{value:"Run the Installer",id:"run-the-installer",level:2},{value:"Windows Protection",id:"windows-protection",level:3},{value:"Welcome",id:"welcome",level:3},{value:"Accept the EULA",id:"accept-the-eula",level:3},{value:"Select Installation Location",id:"select-installation-location",level:3},{value:"Additional Settings",id:"additional-settings",level:3},{value:"Install",id:"install",level:3},{value:"Finish",id:"finish",level:3},{value:"Finding Signals",id:"finding-signals",level:2}];function r(n){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",input:"input",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"installing-sudosignals",children:"Installing sudoSignals"}),"\n",(0,i.jsx)(s.p,{children:"sudoSignals runs as a local process on your Windows computer. In order for Signals to monitor your applications, we need to install the local client."}),"\n",(0,i.jsx)(s.h2,{id:"download-sudosignals",children:"Download sudoSignals"}),"\n",(0,i.jsxs)(s.p,{children:["Here is the ",(0,i.jsx)(s.a,{href:"https://sudosignals-downloads.s3.amazonaws.com/production/sudoSignals_Installer.exe",children:"latest sudoSignals installer"}),"."]}),"\n",(0,i.jsx)(s.admonition,{title:"Versioning",type:"caution",children:(0,i.jsx)(s.p,{children:"You should always use a sudoSignals client whose system version matches the major and minor version for the dashboard. For example, the client 1.0.1 is compatible with a dashboard 1.0.5; however a client with a version 1.1.1 would not be compatible with a dashboard 1.0.5. Versioning follows the pattern major.minor.patch - e.g. 1.0.1"})}),"\n",(0,i.jsx)(s.h2,{id:"run-the-installer",children:"Run the Installer"}),"\n",(0,i.jsx)(s.p,{children:"After downloading the installer, it's time to get sudoSignals up and running. Start by double clicking the installer."}),"\n",(0,i.jsx)(s.h3,{id:"windows-protection",children:"Windows Protection"}),"\n",(0,i.jsx)(s.admonition,{type:"caution",children:(0,i.jsx)(s.p,{children:"We're working on getting our Windows application publisher certificate. In the meantime, there's an extra step to getting the installer working."})}),"\n",(0,i.jsx)(s.p,{children:"You should see a warning from Windows about an application from an unknown publisher."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Install Signals 001",src:e(2778).Z+"",width:"803",height:"750"})}),"\n",(0,i.jsxs)(s.p,{children:["First click the link for ",(0,i.jsx)(s.strong,{children:"More info"}),", and then click ",(0,i.jsx)(s.strong,{children:"Run anyway"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Install Signals 002",src:e(5596).Z+"",width:"803",height:"750"})}),"\n",(0,i.jsx)(s.h3,{id:"welcome",children:"Welcome"}),"\n",(0,i.jsxs)(s.p,{children:["You should then see the Welcome window of the Setup Wizard; begin the installation process by clicking ",(0,i.jsx)(s.code,{children:"Next."})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Install Signals 003",src:e(6163).Z+"",width:"899",height:"678"})}),"\n",(0,i.jsx)(s.h3,{id:"accept-the-eula",children:"Accept the EULA"}),"\n",(0,i.jsxs)(s.p,{children:["Signals has an end user licensing agreement, mark that you accept the agreement and then click ",(0,i.jsx)(s.code,{children:"Next."})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Install Signals 004",src:e(5570).Z+"",width:"899",height:"678"})}),"\n",(0,i.jsx)(s.h3,{id:"select-installation-location",children:"Select Installation Location"}),"\n",(0,i.jsxs)(s.p,{children:["By default sudoSignals is installed in ",(0,i.jsx)(s.code,{children:"Program Files(x86)\\SudoSignals"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Install Signals 005",src:e(9120).Z+"",width:"899",height:"678"})}),"\n",(0,i.jsx)(s.h3,{id:"additional-settings",children:"Additional Settings"}),"\n",(0,i.jsx)(s.p,{children:"There are some additional settings you can adjust when installing sudoSignals."}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","sudoSignals Client is the control software that's required with this installation"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Create a desktop shortcut (optional)"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Remove beta config files - if you were a beta tester it is important to check this box"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Remove old configuration files - if you're installing a major Signals release this is an important box to check"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Install Signals 006",src:e(41).Z+"",width:"899",height:"678"})}),"\n",(0,i.jsx)(s.h3,{id:"install",children:"Install"}),"\n",(0,i.jsxs)(s.p,{children:["Review the installer's settings and if everything looks correct, you can begin the installation process by clicking ",(0,i.jsx)(s.code,{children:"Install"}),"."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Install Signals 007",src:e(3892).Z+"",width:"899",height:"678"})}),"\n",(0,i.jsx)(s.h3,{id:"finish",children:"Finish"}),"\n",(0,i.jsxs)(s.p,{children:["You can complete the Setup Wizard by clicking ",(0,i.jsx)(s.code,{children:"Finish"}),". By default sudoSignals is configured to launch when installation is complete."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Install Signals 008",src:e(548).Z+"",width:"899",height:"678"})}),"\n",(0,i.jsx)(s.h2,{id:"finding-signals",children:"Finding Signals"}),"\n",(0,i.jsxs)(s.p,{children:["If you've selected the ",(0,i.jsx)(s.code,{children:"Create a desktop shortcut"})," option during setup, you can find a shortcut to sudoSignals on your desktop. You can also find Signals in the start menu."]}),"\n",(0,i.jsx)(s.p,{children:"sudoSignals also includes a system tray icon. When sudoSignals is running you should see a system tray icon."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Sys tray icon 009",src:e(2590).Z+"",width:"482",height:"377"})})]})}function h(n={}){const{wrapper:s}={...(0,t.a)(),...n.components};return s?(0,i.jsx)(s,{...n,children:(0,i.jsx)(r,{...n})}):r(n)}},2778:(n,s,e)=>{e.d(s,{Z:()=>i});const i=e.p+"assets/images/install-signals-001-40e9a9144c534cd0d20f14ca1f3db6e1.png"},5596:(n,s,e)=>{e.d(s,{Z:()=>i});const i=e.p+"assets/images/install-signals-002-d3dfa4f5f5019bdedfd07c75e81fd4ba.png"},6163:(n,s,e)=>{e.d(s,{Z:()=>i});const i=e.p+"assets/images/install-signals-003-35709d9bcf63baf62925acb2ee3f1fae.png"},5570:(n,s,e)=>{e.d(s,{Z:()=>i});const i=e.p+"assets/images/install-signals-004-7b8c5cc3795d8fb7fbccfc65ccfe9d35.png"},9120:(n,s,e)=>{e.d(s,{Z:()=>i});const i=e.p+"assets/images/install-signals-005-7bab21bc8b00217c1c86cd023727359f.png"},41:(n,s,e)=>{e.d(s,{Z:()=>i});const i=e.p+"assets/images/install-signals-006-9ac1bbc5ce3de63172c9a585669abbbc.png"},3892:(n,s,e)=>{e.d(s,{Z:()=>i});const i=e.p+"assets/images/install-signals-007-d1e03682e3e4ba7864beb037a0537122.png"},548:(n,s,e)=>{e.d(s,{Z:()=>i});const i=e.p+"assets/images/install-signals-008-28f9f5b0cb2fbcb0bfe053445ee68d39.png"},2590:(n,s,e)=>{e.d(s,{Z:()=>i});const i=e.p+"assets/images/install-signals-009-4dde531906b0f1b2ad5193d6cf14610e.png"},1151:(n,s,e)=>{e.d(s,{Z:()=>o,a:()=>a});var i=e(7294);const t={},l=i.createContext(t);function a(n){const s=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function o(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:a(n.components),i.createElement(l.Provider,{value:s},n.children)}}}]);