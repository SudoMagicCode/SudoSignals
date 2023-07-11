"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[833],{4137:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),u=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return o.createElement(s.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(t),d=r,m=c["".concat(s,".").concat(d)]||c[d]||g[d]||a;return t?o.createElement(m,l(l({ref:n},p),{},{components:t})):o.createElement(m,l({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<a;u++)l[u]=t[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},261:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var o=t(7462),r=(t(7294),t(4137));const a={title:"Logging, Reporting, and Controls",slug:"/plugins/NodeJS/Node-remote-conrol",description:"To unlock more advanced features of sudoSignals in a NodeJS app we have to add a few more elements.  "},l="Logging, Reporting, and Controls",i={unversionedId:"plugins/nodeJS/nodeRemoteControl",id:"plugins/nodeJS/nodeRemoteControl",title:"Logging, Reporting, and Controls",description:"To unlock more advanced features of sudoSignals in a NodeJS app we have to add a few more elements.  ",source:"@site/docs/plugins/nodeJS/003-nodeRemoteControl.md",sourceDirName:"plugins/nodeJS",slug:"/plugins/NodeJS/Node-remote-conrol",permalink:"/plugins/NodeJS/Node-remote-conrol",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Logging, Reporting, and Controls",slug:"/plugins/NodeJS/Node-remote-conrol",description:"To unlock more advanced features of sudoSignals in a NodeJS app we have to add a few more elements.  "},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/plugins/NodeJS/getting-started"},next:{title:"Troubleshooting",permalink:"/troubleshooting"}},s={},u=[{value:"1. Creating Logs",id:"1-creating-logs",level:2},{value:"2. Creating Reports",id:"2-creating-reports",level:2},{value:"3. Creating Controls",id:"3-creating-controls",level:2}],p={toc:u},c="wrapper";function g(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"logging-reporting-and-controls"},"Logging, Reporting, and Controls"),(0,r.kt)("p",null,"To unlock more advanced features of sudoSignals in a NodeJS app we have to add a few more elements.  "),(0,r.kt)("h2",{id:"1-creating-logs"},"1. Creating Logs"),(0,r.kt)("p",null,"Reports are one of the ways sudoSignals enables you to monitor whats happening in your installation. Here's how we set them up with the nodeJS plugin:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'//require the signals plugin \nvar SignalsPlugin = require(\'sudosignals_nodeplugin\').SignalsPlugin\n\n//Insert Process id from process configuration page in dashboard\nconst PROCESS_ID = "PROCESS_ID_HERE"\n\n//Create plugin.\nvar myPlugin = new SignalsPlugin(id=PROCESS_ID, onStart=()=>{\n    console.log(\'Plugin has connected to signals service.\')\n    myPlugin.Log("Hello sudoSignals!", logLevel=0)          // logs a "INFO" message\n    myPlugin.Log("Uh Oh sudoSignals!", logLevel=1)          // logs a "WARN" message\n    myPlugin.Log("sudoSignals, we have a problem...", logLevel=2)   // logs a "CRIT" message\n})\n')),(0,r.kt)("h2",{id:"2-creating-reports"},"2. Creating Reports"),(0,r.kt)("p",null,"Reports are one of the ways sudoSignals enables you to monitor whats happening in your installation. Here's how we set them up with the nodeJS plugin:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// Create a report definition.\nvar Report1Definition = {\n    label: "My Report",\n    value: 0, // value should always be a number.\n}\n\n// Add the report to plugin\nvar Report1 = myPlugin.AddReport(Report1Definition)\n\n// Update the report value in your code regularly.\nsetInterval(()=>{\n    // Set value of report.\n    /* \n        Note - updates are pulled from the client and may not update as\n        quickly as you set them\n    */ \n    Report1.SetValue(Report1.value+1)\n}, 3000)\n\n')),(0,r.kt)("h2",{id:"3-creating-controls"},"3. Creating Controls"),(0,r.kt)("p",null,"Controls are a great way of controlling your project when you can't physically access the systems its on. There are many types of supported controls. Here is how to create them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'//Create a control definition\n/*\nStyles currently supported by sudoSignals:\n - Int\n - Float\n - Str  \n - Menu\n - RGB\n - RGBA \n - XY\n - XYZ\n - UV\n - UVW\n - WH\n*/\nvar Control1Definition = {\n    name: "MyInt",\n    label: "My Int",\n    style: "Int",\n}\n\n//Add control to plugin\nvar Control1 = myPlugin.AddControl(Control1Definition)\n\n//Create a function to handle updates to the control\nconst updateFunction = (control, currentValue)=>{\n    console.log(control.label+\' update!\')\n    console.log("Current value is:", currentValue)\n}\n\n//Set up control listener\nControl1.on("control-Update", updateFunction)\n')))}g.isMDXComponent=!0}}]);