---
title: Config Files & Client Logs
slug: /troubleshooting/config-and-logs
description: "Where are my user config files located on my computer?"
---

# Config Files & Client Logs

_Where are my user config files located on my computer?_

User config files are located alongside the `sudosignals.exe` application on your server. For most users that directory path will look like:  

`C:\Program Files (x86)\sudoSignals\config`

_Does the locally running client produce any log files?_

Yes! sudoSignals does produce log files. These are located alongside the `sudosignals.exe` application on your server. For most users that directory path with be:  

`C:\Program Files (x86)\sudoSignals\logs`

A typical log file should look something like this:

```
INFO: 2023/03/26 20:25:50 ---------- Logging initialized -----------
INFO: 2023/03/26 20:25:50 VERSION: v1.0.5
INFO: 2023/03/26 20:25:50 connected to starter
WARN: 2023/03/26 20:25:50 Config file version mismatch: Attempting Update.
INFO: 2023/03/26 20:25:50 loading configuration from config/default.yaml
INFO: 2023/03/26 20:25:50 No Client ID found, waiting for updates...
INFO: 2023/03/26 20:25:50 listening for configuration connections on 57001
INFO: 2023/03/26 20:37:14 service updated
INFO: 2023/03/26 20:37:14 service restart
```