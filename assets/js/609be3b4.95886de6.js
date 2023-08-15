"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[775],{4137:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=i.createContext({}),s=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return i.createElement(l.Provider,{value:n},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),g=s(t),d=o,f=g["".concat(l,".").concat(d)]||g[d]||p[d]||r;return t?i.createElement(f,a(a({ref:n},c),{},{components:t})):i.createElement(f,a({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=d;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u[g]="string"==typeof e?e:o,a[1]=u;for(var s=2;s<r;s++)a[s]=t[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4575:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>u,toc:()=>s});var i=t(7462),o=(t(7294),t(4137));const r={title:"Manual Configuration",slug:"/plugins/TouchDesigner/manual-config",description:"Manually configuring the TouchDesigner plugin"},a="Manual Configuration |",u={unversionedId:"plugins/TouchDesigner/manual-config",id:"plugins/TouchDesigner/manual-config",title:"Manual Configuration",description:"Manually configuring the TouchDesigner plugin",source:"@site/docs/plugins/TouchDesigner/003-manual-config.md",sourceDirName:"plugins/TouchDesigner",slug:"/plugins/TouchDesigner/manual-config",permalink:"/plugins/TouchDesigner/manual-config",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Manual Configuration",slug:"/plugins/TouchDesigner/manual-config",description:"Manually configuring the TouchDesigner plugin"},sidebar:"tutorialSidebar",previous:{title:"Remote Control",permalink:"/plugins/TouchDesigner/remote-control"},next:{title:"NodeJS",permalink:"/plugins/NodeJS"}},l={},s=[{value:"Client Configuration",id:"client-configuration",level:2},{value:"Configuring the Plugin in TouchDesigner",id:"configuring-the-plugin-in-touchdesigner",level:2}],c={toc:s},g="wrapper";function p(e){let{components:n,...r}=e;return(0,o.kt)(g,(0,i.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"manual-configuration-"},"Manual Configuration |"),(0,o.kt)("p",null,"In some instances you may want to manually configure your the sudoSignals TouchDesigner plugin. For example, if sudoSignals is running in an ",(0,o.kt)("a",{parentName:"p",href:"https://derivative.ca/UserGuide/Engine_COMP"},"Engine COMP"),", or as an embedded component inside another system. In those cases you way want sudoSignals to report out machine stats, or provide some handles for control without using sudoSignals to start the process itself."),(0,o.kt)("h2",{id:"client-configuration"},"Client Configuration"),(0,o.kt)("p",null,"Configuring the sudoSignals client is an important first step in the manual configuration process. On the configuration page take note of your ",(0,o.kt)("inlineCode",{parentName:"p"},"Process ID")," this will be an essential identifier when setting-up the TouchDesigner Plugin to work with Signals."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create Account 002",src:t(5847).Z,width:"1427",height:"690"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For manual plugin configurations, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Auto Start")," parameter should be toggled off. In these cases, we expect Signals to be running inside of another TouchDesigner process either as an Engine, or in an embedded TOX. In either of those cases, Signals would no longer be used to start and stop your project, only for controls")),(0,o.kt)("h2",{id:"configuring-the-plugin-in-touchdesigner"},"Configuring the Plugin in TouchDesigner"),(0,o.kt)("p",null,"Drag and drop the ",(0,o.kt)("inlineCode",{parentName:"p"},"sudoSignals")," TOX into your network."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create Account 002",src:t(1271).Z,width:"1807",height:"1136"})),(0,o.kt)("p",null,"On the ",(0,o.kt)("inlineCode",{parentName:"p"},"Advanced Settings")," page toggle on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Manual Configuration")," parameter:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create Account 002",src:t(9570).Z,width:"539",height:"392"})),(0,o.kt)("p",null,"With ",(0,o.kt)("inlineCode",{parentName:"p"},"Manual Concfiguration")," toggled on, head back to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Settings")," page. On the settings page enter the ",(0,o.kt)("inlineCode",{parentName:"p"},"Process ID")," from the ",(0,o.kt)("inlineCode",{parentName:"p"},"Client Configuration")," page."),(0,o.kt)("p",null,"Next head back to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Advanced Settings")," page and click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Reset Connection")," to restart the connection between TouchDesigner and sudoSignals."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You only have to reset your connection the first time you set-up Signals. From now when TouchDesigner starts Signals will reach out and attempt to connect with Signals so it can act as a relay to your Dashboard.")))}p.isMDXComponent=!0},5847:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/td-manual-config-01-6d78be49aea0d2954a3fcf20fb0fb8e4.png"},1271:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/td-manual-config-02-4bf526f9409db79f62f51215f684ab13.png"},9570:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/td-manual-config-03-0a2d7face6708d3262a0ab2de1b63bb3.png"}}]);