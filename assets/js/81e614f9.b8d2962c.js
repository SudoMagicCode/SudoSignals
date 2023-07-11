"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[653],{4137:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>g});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),d=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=d(t.components);return n.createElement(s.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),p=d(a),u=r,g=p["".concat(s,".").concat(u)]||p[u]||m[u]||o;return a?n.createElement(g,i(i({ref:e},c),{},{components:a})):n.createElement(g,i({ref:e},c))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[p]="string"==typeof t?t:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},112:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(7462),r=(a(7294),a(4137));const o={title:"Glossary",slug:"/troubleshooting/glossary",description:"A collection of the terminology that's used when describing sudoSignals."},i="Glossary",l={unversionedId:"troubleShooting/glossary",id:"troubleShooting/glossary",title:"Glossary",description:"A collection of the terminology that's used when describing sudoSignals.",source:"@site/docs/troubleShooting/002-glossary.md",sourceDirName:"troubleShooting",slug:"/troubleshooting/glossary",permalink:"/troubleshooting/glossary",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Glossary",slug:"/troubleshooting/glossary",description:"A collection of the terminology that's used when describing sudoSignals."},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting",permalink:"/troubleshooting"},next:{title:"sudoSignals Features",permalink:"/troubleshooting/account-features"}},s={},d=[],c={toc:d},p="wrapper";function m(t){let{components:e,...a}=t;return(0,r.kt)(p,(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"glossary"},"Glossary"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Term"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"account type")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Your sudoSignals account type describes the tier and features you can access on your web dashboard: free, basic, standard or enterprise.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"auto- start")),(0,r.kt)("td",{parentName:"tr",align:"left"},"sudoSignals tracks to see if your target application is running and can be configured to keep the application running if it unexpectedly quits.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"card")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The at-a-glance representation of an installation on the web dashboard.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"client")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The sudoSignals application that runs on a machine in a venue. This application will broker communication between your local processes and the sudoSingals web dashboard.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"controlled process")),(0,r.kt)("td",{parentName:"tr",align:"left"},"A process that you intend to control remotely with a sudoSignals plugin.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"custom controls")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Custom controls are defined at the process level, and allow for bidirectional communication between the web dashboard and the local process. Custom controls mirror state on your local machine to the web dashboard. Controls follow a API specification which allows sudoSignals to generate a user interface without the requirement for custom development.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"drive monitoring")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The capability of the local sudoSignals client to monitor the drive status of your installation machine. On Windows OS, sudoSignals uses a system library to communicate key statistics about your local server with the cloud.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"environment variable")),(0,r.kt)("td",{parentName:"tr",align:"left"},"An environment variable is a dynamic-named value that can affect the way running processes will behave on a computer. Environment variables are part of the environment in which a process runs. ",(0,r.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Environment_variable"},"See more on Wikipedia."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"graph")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The 2D line graph of data presented in the dashboard view of an installation. Data from \u2018reports\u2019 is the only data that can be displayed in a graph on the sudoSignals dashboard.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"heartbeat monitoring")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The sudoSignals client communicates with a heartbeat style mechanic, which looks for communication from your local server at a regular interval. If the web dashboard misses consecutive heartbeats it will notify you that your process or installation has gone offline.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"installation")),(0,r.kt)("td",{parentName:"tr",align:"left"},"A computer resource you wish to monitor and control.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"logs")),(0,r.kt)("td",{parentName:"tr",align:"left"},"String messages communicated from a local process to the sudoSignals web dashboard. Logs are intended as messages you wish you communicate from a process to the web dashboard. Logs are composed of both a log level and a message. The log level is represented as an integer value of 0, 1,  or 2. This corresponds to a log level of Info Warning, and Critical. Log messages can be a maximum of 255 characters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"notifications")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Email or SMS messages sent when sudoSignals detects a notification event. Currently supported events include: a process going offline (e.g. quitting unexpectedly), or an installation going offline.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"plugin")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The generalized framework developed for a specialized environment - i.e. the sudoSignals TouchDesigner plugin. Plugins allow local processes to communicate with the sudoSignals client.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"product-id")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The internal ID used by sudoSignals to associate a user with installations. This is unique to the installation that sudoSignals is controlling.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"process")),(0,r.kt)("td",{parentName:"tr",align:"left"},"An application you wish to control or monitor with sudoSignals. sudoSignals can send control messages to a process that has a supported plugin.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"reports")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Key-value pairs that are sent from controlled processes to the web dashboard. This data can be graphed and downloaded from the dashboard. Report keys should be constructed as strings, and values as numbers. Reports are intended to be graphed on the sudoSignals web dashboard and are displayed in the order they are received.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"signals-id")),(0,r.kt)("td",{parentName:"tr",align:"left"},"A generated ID used by sudoSignals to communicate with your local processes. This is unique to the process that sudoSignals is controlling.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"signals-name")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The user generated name that is attached to a process running on your installation machine.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"saved states")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The state of all custom controls for a given process at a given moment in time. The complete collection of custom controls are saved at the process level in a \u2018state\u2019. States allow a user to recall a process's custom controls at a given moment. In other applications this may be referred to as a preset.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"web dashboard")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The sudoSignals website where a user can access the status or control parameters for their installations.")))))}m.isMDXComponent=!0}}]);