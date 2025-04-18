---
title: Logs
slug: /v2/getting-started/view-installations/logs
description: "An overview of the Logs on the Dashboard"
---

# Logs

Logs provide realtime updates about the performance of your installation.

Both the sudoSignals client and your installation processes can report log messages to the dashboard. Logs are string-based messages that are intended to be human readable. Logs have three different levels of importance:
* Log
* Info
* Critical
* Warning
* Alert

![Installation View 06](/img/view-installation/v2-installation-view-006.png)

## Log Formatting

Log messages are formatted as:  
`{log icon} {time-stamp} | {log-level} | {reporting-process} | {log message}`

![Installation View 06A](/img/view-installation/v2-installation-view-006A.png)

:::danger

The current character limit for logs is 255.

:::

## Log Duration & Download

The log section header includes two buttons: `Duration` and `Download Logs`.

The `Duration` dropdown allows you to select a window of time to view reports:

- 10 Minutes
- 1 Hour
- 1 Day 
- 1 Week

![Installation View 06B](/img/view-installation/v2-installation-view-006B.png)

The `Download Logs` button opens a dialog that allows you to download logs:

![Installation View 06C](/img/view-installation/v2-installation-view-006C.png)