---
title: Getting Started
slug: /v2/plugins/TouchDesigner/getting-started
description: "Setting up remote operation of your TouchDesigner network with the sudoSignals plugin"
---

# Getting Started

Remotely controlling your TouchDesigner installation with the SudoMagic plugin is easy. There are a few key steps that will make sure you're set up for a successful integration:
1. Ensure you've downloaded and installed the [sudoSignals Client]
2. Configure the client to start a Process ([how to guide here](/v2/getting-started/client-configuration/configure-a-process))
3. Download the [TouchDesigner sudoSignals Plugin]

## Download the Plugin

The Signals plugin can be downloaded from the [GitHub latest release](https://github.com/SudoMagicCode/sudoSignals_td_plugin/releases/latest). Optionally, you can download a specific release by looking through all of our plugin releases here [GitHub all releases](https://github.com/SudoMagicCode/sudoSignals_td_plugin/releases/latest). Please make sure to use a release that's at least version v2.0.0 or greater. Download the asset called `package.zip`.

## Extract
When you extract `package.zip` you'll see a directory called `sudoSignals`, in that director you'll find the `sudoSignals.tox` file that you can add to your project.

## Configure sudoSignals to launch a Process

Configure sudoSignals to open your project file. If you don't have a project handy, you can set sudoSignals open blank TouchDesigner project. If you need a quick reminder about how to configure sudoSignals to open a process, review the [Configure a Process](/v2/getting-started/client-configuration/configure-a-process) page.

## Add the sudoSignals TOX

Next, drop the sudoSignals TOX you downloaded into your project.

![TD Plugin 003](/img/td-remote-setup/v2-remote-setup-003.png)

After dropping the plugin into TouchDesigner you should see some additional information on your dashboard. Your process button should change from red to green, and we should now see controls that are available from our TouchDesigner process.

![TD Plugin 004](/img/td-remote-setup/v2-remote-setup-004.png)

:::caution

If your project is not yet connected to Signals your controls and communication to the dashboard won't show up until you restart your project.

:::

###  Remove the External file Path
TouchDesigner has updated it's mechanics for handling external TOX files, if you drag and drop from your computer into your TOE file this will automatically fill in the external tox parameter on your component. If you don't intended on loading the sudoSignals plugin from disk, be sure to clear this parameter in TouchDesigner.

## Save your Project file

Save your project file on your computer. This will make sure that the sudoSignals TouchDesigner plugin is saved in your project.

## Check your Installation

Once the plugin has been added to your project, you should now see some additional metrics for your installation. 

Notice that in the center column of the Dashboard there is information about your controlled processes. This displays the assigned `Signals Name` along with the software, filename and project uptime.

### Controls
The TouchDesigner Plugin supports controlling parameters in TouchDesigner remotely from the dashboard. This is handled by pointing the `sudoSignals` plugin to an operator with custom parameters. 

A default operator with custom parameters is provided to help you get started.

:::caution Setting your control comp

To set your own controls, simply drag and drop an operator with custom parameters onto the `sudoSignals` TOX's parameter for `Control Comp`. Adding additional control handles is as easy as customizing the Comp and adding more controls.

:::

![TD Plugin 006](/img/td-remote-setup/v2-remote-setup-006.png)

You should see that these same parameters and page names are reflected on the Dashboard:

![TD Plugin 005](/img/td-remote-setup/v2-remote-setup-005.png)


:::info

Controls for the `sudoSignals` plugin work both directions. Updating a custom parameter in TouchDesigner will be reflected on the cloud Dashboard, and changes on the Dashboard will push to the controlled TouchDesigner process. 

:::

### Custom Reports and KPIs

In addition to custom controls, the `sudoSignals` plugin also supports sending custom reports and KPIs to the Dashboard. You'll see a custom parameter called `Custom Reports` on the plugin.

On the dashboard, you'll see a toggle for `Process` reports - this will toggle the graphed view to the reports from your process.

![TD Plugin 007](/img/td-remote-setup/v2-remote-setup-007.png)

A default operator with custom reports is provided to help you get started.

:::caution

Currently only numerical values are supported by the graphing tool kit in use. To ensure correct formatting for your reports make sure your table is formatted as two columns with labels in column 0 and values in column 1. Your table should **not** include a header.

:::

![TD Plugin 008](/img/td-remote-setup/v2-remote-setup-008.png)

KPIs are sent to the Signals service at a regular interval — these are then forwarded to the cloud. These reports can be seen in the graphs section of the Installation view by selecting the `Process` option from the drop down menu.

### Logs

In addition to reports, the TouchDesigner sudoSignals plugin has an example configuration for how to send log messages to your dashboard. 

A default operator with custom reports is provided to help you get started.

![TD Plugin 009](/img/td-remote-setup/v2-remote-setup-009.png)

Log messages from your process can be found on the logs tab in the dashboard.

![TD Plugin 010](/img/td-remote-setup/v2-remote-setup-010.png)

Alternatively, you can use the Plug's API to call for log messages by directly interacting with the TOX. To see more about accessing the Python extension for this component [click here](/v2/plugins/TouchDesigner/plugin-api)

<!-- links -->
[sudoSignals Client]: https://v2-dashboard.sudosignals.com/installer/sudoSignals_Installer.exe
[TouchDesigner sudoSignals Plugin]: https://github.com/SudoMagicCode/sudoSignals_td_plugin/releases/latest