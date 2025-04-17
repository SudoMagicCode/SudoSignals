---
title: System Info
slug: /v2/getting-started/machine-view/sys-info
description: "An overview of the features on the system info view on the Dashboard"
---

# System Info

System Information contains detailed information about the machine's hardware. These details can often be critical when troubleshooting performance issues, or determining if there may be a critical system issue. 

![Machine View 03](/img/view-machine/v2-machine-view-003.png)

## Machine Details

Machine name, uptime, and last updated gives an at-a-glance view of the hardware you're monitoring. `Uptime` provides critical information on time since the last Windows restart. `Last Updated` is the time stamp since the last heartbeat from the sudoSignals client to the web Dashboard.

![Machine View 03A](/img/view-machine/v2-machine-view-003A.png)

:::caution

If you ever experience issues with your installation, the support team at sudoSignals may ask you to provide information about the `Installation Id`, `Client Version`, or `Client Id` for better troubleshooting.

:::

## Hardware Details

Hardware details provides vital insight into your local hardware. These details are reported directly from Windows [hardware discovery](https://pkg.go.dev/github.com/jaypipes/ghw).  Below are the 5 categories for hardware details
* GPU Information
* CPU Information
* Memory Information
* Drive Information
* Network Information  
