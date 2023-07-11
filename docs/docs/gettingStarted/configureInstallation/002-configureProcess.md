---
title: Configure a Process
slug: /getting-started/configure-an-installation/configure-a-process
description: "Configuring a process"
---

# Configure a Process


sudoSignals runs as a local process on your Windows computer, and is controlled via an online web Dashboard.


:::info Terminology

Applications that are controlled and monitored through sudoSignals are refereed to as `processes`. 

:::

More than just monitoring your computer, sudoSignals can start, stop and monitor applications (processes) remotely.  

In order to add a new process to be monitored we need to first configure that process. Begin by heading to the Configuration page by using the system tray icon or navigating to:  

`https://dashboard.sudosignals.com/client`

Next click on the process tab on the Client Configuration page.


## Create a New Process

To create a new process, begin by clicking on `Create new Process`.

![Configure 007](/img/configure-installation/configure-007.png)

:::info

You can open and close all of the parameters for a process by using the small carrot to the left of the process name.

:::

## Assign a Signals Name

The `SIGNALS_NAME` is the unique name you'd like to associate with your process. You might choose to name this after the tookit you're using, or based on the work a given application is responsible for doing. 

:::danger

It is important that this name is unique. Each process managed by Signals should have a unique name. 

:::

![Configure 008](/img/configure-installation/configure-008.png)

If you're developing your own plugin, the `process-id` will be used by your application when communicating with signals. 

## Specify a File to Open (optional)

If you'd like to specify that sudoSignals open an application or file, toggle the `Auto Start` so that is enabled. 

![Configure 009](/img/configure-installation/configure-009.png)

After doing this you can specify which file or application you'd like sudoSignals to open. To locate a file click the `Browse` button.


If you have a lot of windows open on your desktop, the file dialog may be hidden. Check your taskbar to find the sudoSignals logo and bring the file dialog to the foreground.  

![Configure 009](/img/configure-installation/configure-009-file-tip.png)

This will open a file dialog that you can use to locate your file or application. 

![Configure 009](/img/configure-installation/configure-009-file-explorer.png)

## Specify an Application (optional)

If you've selected a file type that's opened by another application (like `.toe`, `.unity`, etc), sudoSignals will attempt to find programs registered with Windows that can open that file. You can select the application from the drop down list, or select `Other` to manually navigate to the program you want to use.

![Configure 010](/img/configure-installation/configure-010.png)


Selecting a program is an optional field. If you have a built executable you'd like to open, Signals will just open that `.exe`. 

However, you can also specify which program you'd like your file to be opened with. 
When using something like TouchDesigner this can be helpful - especially if you have multiple versions of the software installed. 

If you do have multiple versions of an application installed, make sure that the correct version has been selected for your file.

![Configure 013](/img/configure-installation/configure-013.png)

:::caution Unreal Engine

If you're working with an executable built in Unreal Engine, you may need to take a few extra steps in your configuration. The `.exe` built by Unreal sometimes uses a process starter that runs another executable. Be sure that you're targeting the correct `.exe` when using Signals to be able to faithfully stop and start your process.

:::

## Auto Restart (optional)

sudoSignals can monitor applications and keep them alive if they quit unexpectedly. To enable Auto Restarting for your process, toggle on the `Auto Restart` feature in the Process configuration.

To have Signals keep the application always running, leave the Restart Limit set to 0. If you only want Signals to restart an application a specific number of times, enter that number in the Restart Limit field. 

![Configure 013](/img/configure-installation/configure-014.png)

:::info

If you don't want your application to restart infinitely, then specify a Restart Limit value that is greater than 0 so that Signals only restarts the application a fixed number of times.

:::

## Advanced Options (optional)

Some installations require extra care during start-up and sudoSignals has some advanced features to help ensure everything runs smoothly. To see the advanced Process options expand the `Advanced Options` carrot. 

![Configure 013A](/img/configure-installation/configure-013a.png)

## Preview Command Line (optional)

The Preview Command Line field displays the equivalent command string that will be used to start your process. If your familiar with starting applications from the Windows terminal reviewing this command may help ensure that your application starts up correctly.

![Configure 011](/img/configure-installation/configure-011.png)

## Environment Variables (optional)

Many applications or environments can access [Environment Variables] that are set during application launch. You can add as many Environment Variables as is appropriate for your application. Use the `Add environment variable` button to enter the key and value pair you'd like to have set when your process starts.

![Configure 012](/img/configure-installation/configure-012.png)


<!-- links -->
[Environment Variables]: https://en.wikipedia.org/wiki/Environment_variable