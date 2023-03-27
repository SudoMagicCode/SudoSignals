---
layout: default
title: Signals Config File
parent: Troubleshooting
nav_order: 3
---

# Signals Config File

Signals' operation is described by a YAML file.
{: .fs-6 .fw-300 }

For a typical installation type, you can locate your config file in:  

`C:\ProgramData\SudoMagic\sudoSignals\config`


If your config file becomes corrupt, you can replace its contents with the following:
```yaml
# sudoSignals configuration file.
# only directly edit this file if you know what you are doing. 
# editing properties in this file can lead to issues monitoring and controlling your installations.
# To safely configure sudoSignals, right click on the sudoSignals systey tray icon and select "Configure".

version: v1.0.5
installation:
    clientid: ""
    productid: ""
startup:
    processes: []
```

{: .important}
Advanced users can choose to edit their YAML manually. Additionally, if you're configuring a large number of servers you may consider using a script to create your configuration files.
