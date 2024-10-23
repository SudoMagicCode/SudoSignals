---
title: Dashboard
slug: /v2/getting-started/machine-view/dashboard
description: "An overview of the features on the Dashboard"
---

# Dashboard

The Dashboard is your single pane of glass view into the status of your installation.

The Dashboard view is made up of three primary tiles:
* Processes
* Controls
* Graphed Reports

These tiles are intended to provide you with quick access to all of the mission critical information you may need about your installation and its operation.

![View 03](/img/view-installation/view-stats-003.png)

## Processes

The Processes view is a tiled section of all the processes that are communicating with the sudoSignals client on your installation machine. Installations information includes:
* Process Name
* Connection State
* Software & Software Version
* The number of restarts the process has experienced

Each process is represented as a small rectangular tile below the Start and Stop buttons. The `Start All Processes` and `Stop All Processes` buttons can be used to start or stop all Processes that sudoSignals is configured to `Auto Start`. This gives you the ability to remotely startup or shutdown the applications that are controlled by sudoSignals.

## Controls

Controls can be accessed by using one of the [SudoMagic developed plugins](https://docs.sudosignals.com/002_plugins/), or by building your own controls by following the sudoSignals [client API](/v2/api). Depending on the environment, the [SudoMagic](https://www.sudomagic.com/) plugins are intended to be drag and drop solutions for fast integration with the sudoSignals dashboard. The TouchDesigner plugin, for example, lets you quickly mirror your controls from your TouchDesigner project in a web friendly format. Control schemas are pre-defined, and allow for your development team to focus on building compelling experiences rather than creating overly complex dashboard controls.

## Graphs and Reports

On the right are graphed reports from your installation. Key performance indicators (KPIs) are available at both the Machine and Process level. By default, the KPIs for your machine will be displayed. These metrics are polled directly from the operating system. These graphs give you a quick view of your systems performance over time - allowing you to monitor your machine's performance remotely.

On the top of the graphs, you can toggle either Machine or Process graphs. Each process can also send metrics back to Signals to be displayed in this graph view. The data used for graphs is available for download as a Report from the System Info view.