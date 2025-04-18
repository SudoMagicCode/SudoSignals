---
title: Status Indicators
slug: /v2/dashboard-anatomy/status-indicators
description: "Summary of sudoSignals status indicators"

---

# Status Indicators

Below is a summary of all statuses available in the sudoSignals client and dashboard.

| Indicator                  | Status | Description |
|:------------------------|:----------------| :---------------|
|![Status Initializing](/img/status-indicators/v2-status-initializing.png)         | Initializing |Initial status for clients/machines that have yet to be connected to the sudoSignals web dashboard, and installations that do not have any machines.|
|![Status Running](/img/status-indicators/v2-status-running.png)          | Running      |For processes that are being successfully being controlled by sudoSignals, but that are not using a plugin.|
|![Status Installation Online](/img/status-indicators/v2-status-installation-online.png)                 |  Installation Online |Indicates that an installation is online and connected to the sudoSignals client. Installations with online status indicate that all sub-processes and machines are also `online`.|
|![Status Machine Online](/img/status-indicators/v2-status-machine-online.png)                 |  Machine Online |Indicates that the machine is online and connected to the sudoSignals client. |
|![Status Process Online](/img/status-indicators/v2-status-online.png)                 |  Process Online |Indicates that the process is online and connected to the sudoSignals client. |
|![Status Installation Warning](/img/status-indicators/v2-status-installation-warning.png) | Installation Warning | Indicates that some of an installation's machines or it's processes may be offline.|
|![Status Machine Warning](/img/status-indicators/v2-status-machine-warning.png) | Machine Warning |For machines,  a `warning` status indicates that some of it's processes may be offline. |
|![Status Installation Offline](/img/status-indicators/v2-status-installation-offline.png) | Installation Offline |Indicates that an installation is disconnected. For installations, the `offline` status means that all sub-processes are offline.|
|![Status Machine Offline](/img/status-indicators/v2-status-machine-offline.png) | Machine Offline |Indicates that the machine may be disconnected. |
|![Status Process Offline](/img/status-indicators/v2-status-offline.png) | Process Offline |Indicates that the process may be disconnected. |
|![Status Unknown](/img/status-indicators/v2-status-unknown.png) | Unknown |For unspecified behavior in processes, machines or installations.|