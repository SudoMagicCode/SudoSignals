---
title: sudoSignals Config File
slug: /troubleshooting/config-file
description: "Working with a YAML file for configuration."
---

# Signals Config File

Signals' operation is described by a YAML file.

For a typical installation type, you can locate your config file in:  

`C:\Program Files (x86)\sudoSignals\config`


If your config file becomes corrupt, you can replace its contents with the following:

```yaml
# sudoSignals configuration file.
# only directly edit this file if you know what you are doing. 
# editing properties in this file can lead to issues monitoring 
# and controlling your installations.
#
# To safely configure sudoSignals, right click on the sudoSignals 
# systey tray icon and select "Configure".

version: v1.0.5
installation:
    clientid: ""
    productid: ""
startup:
    processes: []
```

:::tip

Advanced users can choose to edit their YAML manually. Additionally, if you're configuring a large number of servers you may consider using a script to create your configuration files.

:::