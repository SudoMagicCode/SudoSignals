---
title: Status Indicators
slug: /v2/dashboard-anatomy/status-indicators
description: "Summary of sudoSignals status indicators"

---

# Status Indicators

Below is a summary of all statuses available in the sudoSignals client and dashboard.

| Indicator                  | Status | Description |
|:------------------------|:-----------| :-----------|
|![Status Initializing](/img/status-indicators/v2-status-initializing.png)         | Initializing |Initial status for clients/machines that have yet to be connected to the sudoSignals web dashboard, and installations that do not have any machines.|
|![Status Running](/img/status-indicators/v2-status-running.png)          | Running      |For processes that are being successfully being controlled by sudoSignals, but that are not using a plugin.|
|![Status Online](/img/status-indicators/v2-status-online.png)                 | Online |Indicates that a process or machine is online and connected to the sudoSignals client. Installations with online status indicate that all sub-processes and machines are also `online`.|
|![Status Warning](/img/status-indicators/v2-status-warning.png) | Warning |For machines,  a `warning` status indicates that some of it's processes may be offline. For installations, the aforementioned is true and/or some machines may be offline as well.|
|![Status Offline](/img/status-indicators/v2-status-offline.png) | Offline |Indicates that a process or machine may be disconnected. For installations, the `offline` status means that all sub-processes are offline.|
|![Status Unknown](/img/status-indicators/v2-status-unknown.png) | Unknown |For unspecified behavior in processes, machines or installations.|