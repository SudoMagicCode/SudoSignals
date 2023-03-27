---
layout: default
title: NodeJS
parent: Plugins
has_children: true
nav_order: 2
permalink: /docs/plugins/nodeJS
---

# NodeJS

This plugin operates by communicating to the sudoSignals local service installed on your machine. For more information on how to install check out the [getting started instructions.](https://docs.sudosignals.com/001_gettingStarted/002_installSignals.html)

To getting started using NodeJS and learn more about developing NodeJS apps check out [https://nodejs.dev/learn](https://nodejs.dev/learn) 


To install the sudoSignals plugin into your nodeJS project use the following:

```
npm i sudosignals_nodeplugin
```

You can then bring the sudoSignals code into your project with the following:
```javascript
//require the signals plugin 
var SignalsPlugin = require('sudosignals_nodeplugin').SignalsPlugin

//Specify configured port for sudoSignals client
const SERVICE_PORT = 57002

//Insert Process id from process configuration page in dashboard
const PROCESS_ID = {PROCESS_ID_HERE}

//Create plugin.
var myPlugin = new SignalsPlugin(SERVICE_PORT, id=PROCESS_ID, onConnect=()=>{
	console.log('Plugin has connected to signals service.')
})

```


{: .fs-6 .fw-300 }
