"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[779],{8745:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var t=i(5893),o=i(1151);const a={title:"Configure a Process",slug:"/getting-started/configure-an-installation/configure-a-process",description:"Configuring a process"},s="Configure a Process",r={id:"gettingStarted/configureInstallation/configureProcess",title:"Configure a Process",description:"Configuring a process",source:"@site/docs/gettingStarted/configureInstallation/002-configureProcess.md",sourceDirName:"gettingStarted/configureInstallation",slug:"/getting-started/configure-an-installation/configure-a-process",permalink:"/getting-started/configure-an-installation/configure-a-process",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Configure a Process",slug:"/getting-started/configure-an-installation/configure-a-process",description:"Configuring a process"},sidebar:"tutorialSidebar",previous:{title:"Configure an Installation",permalink:"/getting-started/configure-an-installation"},next:{title:"View Installations",permalink:"/getting-started/view-installations"}},l={},c=[{value:"Create a New Process",id:"create-a-new-process",level:2},{value:"Assign a Signals Name",id:"assign-a-signals-name",level:2},{value:"Specify a File to Open (optional)",id:"specify-a-file-to-open-optional",level:2},{value:"Specify an Application (optional)",id:"specify-an-application-optional",level:2},{value:"Auto Restart (optional)",id:"auto-restart-optional",level:2},{value:"Advanced Options (optional)",id:"advanced-options-optional",level:2},{value:"Preview Command Line (optional)",id:"preview-command-line-optional",level:2},{value:"Environment Variables (optional)",id:"environment-variables-optional",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"configure-a-process",children:"Configure a Process"}),"\n",(0,t.jsx)(n.p,{children:"sudoSignals runs as a local process on your Windows computer, and is controlled via an online web Dashboard."}),"\n",(0,t.jsx)(n.admonition,{title:"Terminology",type:"info",children:(0,t.jsxs)(n.p,{children:["Applications that are controlled and monitored through sudoSignals are refereed to as ",(0,t.jsx)(n.code,{children:"processes"}),"."]})}),"\n",(0,t.jsx)(n.p,{children:"More than just monitoring your computer, sudoSignals can start, stop and monitor applications (processes) remotely."}),"\n",(0,t.jsx)(n.p,{children:"In order to add a new process to be monitored we need to first configure that process. Begin by heading to the Configuration page by using the system tray icon or navigating to:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"https://dashboard.sudosignals.com/client"})}),"\n",(0,t.jsx)(n.p,{children:"Next click on the process tab on the Client Configuration page."}),"\n",(0,t.jsx)(n.h2,{id:"create-a-new-process",children:"Create a New Process"}),"\n",(0,t.jsxs)(n.p,{children:["To create a new process, begin by clicking on ",(0,t.jsx)(n.code,{children:"Create new Process"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Configure 007",src:i(7906).Z+"",width:"1920",height:"1030"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"You can open and close all of the parameters for a process by using the small carrot to the left of the process name."})}),"\n",(0,t.jsx)(n.h2,{id:"assign-a-signals-name",children:"Assign a Signals Name"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"SIGNALS_NAME"})," is the unique name you'd like to associate with your process. You might choose to name this after the tookit you're using, or based on the work a given application is responsible for doing."]}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsx)(n.p,{children:"It is important that this name is unique. Each process managed by Signals should have a unique name."})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Configure 008",src:i(7769).Z+"",width:"1920",height:"1030"})}),"\n",(0,t.jsxs)(n.p,{children:["If you're developing your own plugin, the ",(0,t.jsx)(n.code,{children:"process-id"})," will be used by your application when communicating with signals."]}),"\n",(0,t.jsx)(n.h2,{id:"specify-a-file-to-open-optional",children:"Specify a File to Open (optional)"}),"\n",(0,t.jsxs)(n.p,{children:["If you'd like to specify that sudoSignals open an application or file, toggle the ",(0,t.jsx)(n.code,{children:"Auto Start"})," so that is enabled."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Configure 009",src:i(3670).Z+"",width:"1920",height:"1030"})}),"\n",(0,t.jsxs)(n.p,{children:["After doing this you can specify which file or application you'd like sudoSignals to open. To locate a file click the ",(0,t.jsx)(n.code,{children:"Browse"})," button."]}),"\n",(0,t.jsx)(n.p,{children:"If you have a lot of windows open on your desktop, the file dialog may be hidden. Check your taskbar to find the sudoSignals logo and bring the file dialog to the foreground."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Configure 009",src:i(3143).Z+"",width:"137",height:"59"})}),"\n",(0,t.jsx)(n.p,{children:"This will open a file dialog that you can use to locate your file or application."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Configure 009",src:i(1810).Z+"",width:"1465",height:"998"})}),"\n",(0,t.jsx)(n.h2,{id:"specify-an-application-optional",children:"Specify an Application (optional)"}),"\n",(0,t.jsxs)(n.p,{children:["If you've selected a file type that's opened by another application (like ",(0,t.jsx)(n.code,{children:".toe"}),", ",(0,t.jsx)(n.code,{children:".unity"}),", etc), sudoSignals will attempt to find programs registered with Windows that can open that file. You can select the application from the drop down list, or select ",(0,t.jsx)(n.code,{children:"Other"})," to manually navigate to the program you want to use."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Configure 010",src:i(4345).Z+"",width:"1920",height:"1030"})}),"\n",(0,t.jsxs)(n.p,{children:["Selecting a program is an optional field. If you have a built executable you'd like to open, Signals will just open that ",(0,t.jsx)(n.code,{children:".exe"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"However, you can also specify which program you'd like your file to be opened with.\nWhen using something like TouchDesigner this can be helpful - especially if you have multiple versions of the software installed."}),"\n",(0,t.jsx)(n.p,{children:"If you do have multiple versions of an application installed, make sure that the correct version has been selected for your file."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Configure 013",src:i(5513).Z+"",width:"1920",height:"1030"})}),"\n",(0,t.jsx)(n.admonition,{title:"Unreal Engine",type:"caution",children:(0,t.jsxs)(n.p,{children:["If you're working with an executable built in Unreal Engine, you may need to take a few extra steps in your configuration. The ",(0,t.jsx)(n.code,{children:".exe"})," built by Unreal sometimes uses a process starter that runs another executable. Be sure that you're targeting the correct ",(0,t.jsx)(n.code,{children:".exe"})," when using Signals to be able to faithfully stop and start your process."]})}),"\n",(0,t.jsx)(n.h2,{id:"auto-restart-optional",children:"Auto Restart (optional)"}),"\n",(0,t.jsxs)(n.p,{children:["sudoSignals can monitor applications and keep them alive if they quit unexpectedly. To enable Auto Restarting for your process, toggle on the ",(0,t.jsx)(n.code,{children:"Auto Restart"})," feature in the Process configuration."]}),"\n",(0,t.jsx)(n.p,{children:"To have Signals keep the application always running, leave the Restart Limit set to 0. If you only want Signals to restart an application a specific number of times, enter that number in the Restart Limit field."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Configure 013",src:i(3252).Z+"",width:"1920",height:"1030"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"If you don't want your application to restart infinitely, then specify a Restart Limit value that is greater than 0 so that Signals only restarts the application a fixed number of times."})}),"\n",(0,t.jsx)(n.h2,{id:"advanced-options-optional",children:"Advanced Options (optional)"}),"\n",(0,t.jsxs)(n.p,{children:["Some installations require extra care during start-up and sudoSignals has some advanced features to help ensure everything runs smoothly. To see the advanced Process options expand the ",(0,t.jsx)(n.code,{children:"Advanced Options"})," carrot."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Configure 013A",src:i(3338).Z+"",width:"1920",height:"1030"})}),"\n",(0,t.jsx)(n.h2,{id:"preview-command-line-optional",children:"Preview Command Line (optional)"}),"\n",(0,t.jsx)(n.p,{children:"The Preview Command Line field displays the equivalent command string that will be used to start your process. If your familiar with starting applications from the Windows terminal reviewing this command may help ensure that your application starts up correctly."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Configure 011",src:i(624).Z+"",width:"1920",height:"1030"})}),"\n",(0,t.jsx)(n.h2,{id:"environment-variables-optional",children:"Environment Variables (optional)"}),"\n",(0,t.jsxs)(n.p,{children:["Many applications or environments can access ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Environment_variable",children:"Environment Variables"})," that are set during application launch. You can add as many Environment Variables as is appropriate for your application. Use the ",(0,t.jsx)(n.code,{children:"Add environment variable"})," button to enter the key and value pair you'd like to have set when your process starts."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Configure 012",src:i(4505).Z+"",width:"1920",height:"1030"})})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},7906:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/configure-007-ced09edd13dc687048c5aa9c92aebc12.png"},7769:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/configure-008-9d42915cb2c3656e7f033c3e9d0ea803.png"},1810:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/configure-009-file-explorer-cc5df79bf166a7a173bd01fe94a8545c.png"},3143:(e,n,i)=>{i.d(n,{Z:()=>t});const t="data:image/png;base64,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"},3670:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/configure-009-0cbeace20d5460ceb5cdbf514eabac21.png"},4345:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/configure-010-2875ae8c13aef42ddd56f112e21728c4.png"},624:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/configure-011-ee6004de16d9062b05957c3ad21f8c3b.png"},4505:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/configure-012-1644e3f698de13782b94489e867aa992.png"},5513:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/configure-013-eeca60320a9245ddd7e131bc2a4e90ca.png"},3338:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/configure-013a-3c0881dca13c37fc3cd12473da9d15ff.png"},3252:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/configure-014-691a6aaea40543a75568925b5ad0cfe3.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>s});var t=i(7294);const o={},a=t.createContext(o);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);