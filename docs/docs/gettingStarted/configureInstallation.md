---
layout: default
title: Configure an Installation
parent: Getting Started
nav_order: 4
---

# Configure an Installation
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}
---

sudoSignals runs as a local process on your Windows computer, and is controlled via an online web Dashboard.

## 1. Open the Dashboard

With an installation created, we can now configure how we'd like Signals to manage this machine. To get started, let's make sure that you have the Dashboard open in your browser — [dashboard.sudosignals.com](https://dashboard.sudosignals.com/)

![Configure 001](../../../assets/images/configure-installation/configure-001.png)

## 2. Start sudoSignals

To configure the installation we'll also need sudoSignals running. From the shortcut on your desktop or from the start menu, start sudoSignals.

## 3. Configure from System Tray

Locate the sudoSignals icon in the system tray.

Right click on the system tray icon and select `Configuration`.

![Configure 002](../../../assets/images/configure-installation/configure-002.png
)


Alternatively, you can go to this page on your browser:  
`https://dashboard.sudosignals.com/client`

{: .important }
While we use a webform to capture the configuration data, this page communicates directly with the sudoSignals service to create a configuration YAML file. 

## 4. Assign an Installation

On the Client Configuration page we can assign an installation by selecting the Assign Installation tab.

Assigning an installation will connect the sudoSignals dashboard to your local machine, this configuration step allows the sudoSignals client to communicate to the cloud about this specific computer resource. 

From the `Select an Installation` drop down, select which installation you'd like to assign to this computer. This process associates a Signals installation with your machine.

![Configure 004](../../../assets/images/configure-installation/configure-004.png)

Once you've selected the installation to assign, click `Update` and this will update the configuration YAML file and restart Signals on your computer. 

![Configure 004](../../../assets/images/configure-installation/configure-005.png)

{: .note }
Look for the green notification on the Client Configuration page to confirm that Signals has successfully updated its configuration. 


## 5. Monitor Your Machine

If you only need to know if your installation machine is online, you can click the `View Installation` button, to be taken directly to the dashboard to start monitoring your computer. 

![Configure 006](../../../assets/images/configure-installation/configure-006.png)

## 6. Configure a Process

{: note }
Applications that are controlled and monitored through sudoSignals are refereed to as `processes`. 

More than just monitoring your computer, sudoSignals can start, stop and monitor applications (processes) remotely.  

In order to add a new process to be monitored we need to first configure that process. Begin by heading to the Configuration page by using the system tray icon or navigating to:  

`https://dashboard.sudosignals.com/client`

Next click on the process tab on the Client Configuration page.


### Create a New Process

To create a new process, begin by clicking on `Create new Process`.

![Configure 007](../../../assets/images/configure-installation/configure-007.png)

{: .note }
You can open and close all of the parameters for a process by using the small carrot to the left of the process name.


### Assign a Signals Name

The `SIGNALS_NAME` is the unique name you'd like to associate with your process. You might choose to name this after the tookit you're using, or based on the work a given application is responsible for doing. 

{: .warning }
It is important that this name is unique. Each process managed by Signals should have a unique name. 

![Configure 008](../../../assets/images/configure-installation/configure-008.png)

If you're developing your own plugin, the `process-id` will be used by your application when communicating with signals. 

### Specify a File to Open | **optional**
If you'd like to specify that sudoSignals open an application or file, toggle the `Auto Start` so that is enabled. 

![Configure 008](../../../assets/images/configure-installation/configure-009.png)

After doing this you can specify which file or application you'd like sudoSignals to open. To locate a file click the `Browse` button.


If you have a lot of windows open on your desktop, the file dialog may be hidden. Check your taskbar to find the sudoSignals logo and bring the file dialog to the foreground.  

![Configure 008](../../../assets/images/configure-installation/configure-009-file-tip.png)

This will open a file dialog that you can use to locate your file or application. 

![Configure 008](../../../assets/images/configure-installation/configure-009-file-explorer.png)

### Specify an Application | **optional**
If you've selected a file type that's opened by another application (like `.toe`, .`unity`, etc), sudoSignals will attempt to find programs registered with Windows that can open that file. You can select the application from the drop down list, or select `Other` to manually navigate to the program you want to use.

![Configure 010](../../../assets/images/configure-installation/configure-010.png)

{: .note }
> Selecting a program is an optional field. If you have a built executable you'd like to open, Signals will just open that `.exe`. 
> 
> However, you can also specify which program you'd like your file to be opened with. When using something like TouchDesigner this can be helpful - especially if you have multiple versions of the software installed. 
> 
> If you do have multiple versions of an application installed, make sure that the correct version has been selected for your file.

![Configure 013](../../../assets/images/configure-installation/configure-013.png)

{: .warning }
If you're working with an executable built in Unreal Engine, you may need to take a few extra steps in your configuration. The `.exe` built by Unreal sometimes uses a process starter that runs another executable. Be sure that you're targeting the correct `.exe` when using Signals to be able to faithfully stop and start your process.


### Auto Restart | **optional**

sudoSignals can monitor applications and keep them alive if they quit unexpectedly. To enable Auto Restarting for your process, toggle on the `Auto Restart` feature in the Process configuration.

To have Signals keep the application always running, leave the Restart Limit set to 0. If you only want Signals to restart an application a specific number of times, enter that number in the Restart Limit field. 

![Configure 013](../../../assets/images/configure-installation/configure-014.png)

{: .note }
If you don't want your application to restart infinitely, then specify a Restart Limit value that is greater than 0 so that Signals only restarts the application a fixed number of times.


### Advanced Options | **optional**
Some installations require extra care during start-up and sudoSignals has some advanced features to help ensure everything runs smoothly. To see the advanced Process options expand the `Advanced Options` carrot. 

![Configure 013](../../../assets/images/configure-installation/configure-013.png)

### Preview Command Line | **optional**

The Preview Command Line field displays the equivalent command string that will be used to start your process. If your familiar with starting applications from the Windows terminal reviewing this command may help ensure that your application starts up correctly.

![Configure 011](../../../assets/images/configure-installation/configure-011.png)

### Environment Variables | **optional**

Many applications or environments can access [Environment Variables](https://en.wikipedia.org/wiki/Environment_variable) that are set during application launch. You can add as many Environment Variables as is appropriate for your application. Use the `Add environment variable` button to enter the key and value pair you'd like to have set when your process starts.

![Configure 012](../../../assets/images/configure-installation/configure-012.png)

## 7. Configure Additional Processes | **optional**

sudoSignals can launch as many processes as your installation requires. Repeat this process as many times as you need to configure your installation. 

## 8. Update

Now that we've gotten our installation configured, we can click `Update` in the bottom right hand corner of the Client Configuration page. This will restart Signals, and in turn start any applications you've specified in your installation's configuration. 

![Configure 014](../../../assets/images/configure-installation/configure-014.png)

{: .warning }
It's important that you click `Update` so that your process settings will be saved to the sudoSignals configuration file. If you do not click `Update` you will need to repeat the configuration process.


## 9. Head to the Dashboard

Back on the Dashboard you should now see that Signals is online.

![Configure 015](../../../assets/images/configure-installation/configure-015.png)