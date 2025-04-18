---
title: Reports
slug: /v2/getting-started/machine-view/reports
description: "An overview of Reports on the Dashboard"
---

# Reports

The machine and its processes can send metrics back to Signals to be displayed in this graph view. 

![Machine View 04](/img/view-machine/v2-machine-view-004.png)

:::warning Processes Reports

For processes to report back metrics to sudoSignals, they need to be using a [Plugin](../../plugins).

:::

## Machine Reports

The machine reports section shows graphs for this machine. Hovering over a line on the graph shows the corresponding machine and statistic.

Additionally, the section header includes two buttons: `Duration` and `Download Reports`.

The `Duration` dropdown allows you to select a window of time to view reports:

- 10 Minutes
- 1 Hour
- 1 Day 
- 1 Week

![Machine View 04A](/img/view-machine/v2-machine-view-004A.png)

The `Download Reports` button opens a dialog that allows you to download reports for:

![Machine View 04B](/img/view-machine/v2-machine-view-004B.png)

## Process Reports

Process reports has everything from machine reports, except it is focused on processes not machines. additionally, this section a dropdown button for `Process Selection.`

![Machine View 04C](/img/view-machine/v2-machine-view-004C.png)

## Downloads

Logs and Reports from your installation can be downloaded for your offline review. These logs can be especially useful if you want to review data that exists outside of the graphed view on the dashboard. Note that this data is formatted as JSON. 

## 