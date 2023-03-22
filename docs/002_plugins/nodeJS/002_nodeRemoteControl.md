---
sort: 2
---

# Reporting and Controls
To unlock more advanced features of sudoSignals in a NodeJS app we have to add a few more elements.  

## 1. Creating Reports
Reports are one of the ways sudoSignals enables you to monitor whats happening in your installation. Here's how we set them up with the nodeJS plugin:

```javascript
// Create a report definition.
var Report1Definition = {
	label: "My Report",
	value: 0, // value should always be a number.
}

// Add the report to plugin
var Report1 = myPlugin.AddReport(Report1Definition)

// Update the report value in your code regularly.
setInterval(()=>{
	// Set value of report.
	/* 
		Note - updates are pulled from the client and may not update as
		quickly as you set them
	*/ 
	Report1.SetValue(Report1.value+1)
}, 3000)

```

## 2. Creating Controls
Controls are a great way of controlling your project when you can't physically access the systems its on. There are many types of supported controls. Here is how to create them:
```javascript
//Create a control definition
/*
Styles currently supported by sudoSignals:
 - Int
 - Float
 - Str	
 - Menu
 - RGB
 - RGBA 
 - XY
 - XYZ
 - UV
 - UVW
 - WH
*/
var Control1Definition = {
	name: "MyInt",
	label: "My Int",
	style: "Int",
}

//Add control to plugin
var Control1 = myPlugin.AddControl(Control1Definition)

//Create a function to handle updates to the control
const updateFunction = (control, currentValue)=>{
	console.log(control.label+' update!')
	console.log("Current value is:", currentValue)
}

//Set up control listener
Control1.on("control-Update", updateFunction)
``` 