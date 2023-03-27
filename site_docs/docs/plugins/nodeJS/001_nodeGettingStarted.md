---
layout: default
title: Getting Started
parent: NodeJS
grand_parent: Plugins
nav_order: 1
---

# Getting Started
To install NodeJS and learn more about developing NodeJS apps check out [https://nodejs.dev/learn](https://nodejs.dev/learn) 


To install the sudoSignals plugin into your nodeJS project use the following:

```
npm i sudosignals_nodeplugin
```

You can then bring the sudoSignals code into your project with the following:
```javascript
//require the signals plugin 
var SignalsPlugin = require('sudosignals_nodeplugin').SignalsPlugin

//Specify configured port for sudoSignals client
const SERVICE_PORT = 80

//Insert Process id from process configuration page in dashboard
const PROCESS_ID = {PROCESS_ID_HERE}

//Create plugin.
var myPlugin = new SignalsPlugin(SERVICE_PORT, id=PROCESS_ID, onConnect=()=>{
	console.log('Plugin has connected to signals service.')
})

```