---
title: Getting Started
slug: /plugins/NodeJS/getting-started
description: "An overview of NodeJS for sudoSignals"
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

//Insert Process id from process configuration page in dashboard
const PROCESS_ID = "PROCESS_ID_HERE"

//Create plugin.
var myPlugin = new SignalsPlugin(id=PROCESS_ID, onStart=()=>{
	console.log('Plugin has connected to signals service.')
})

```