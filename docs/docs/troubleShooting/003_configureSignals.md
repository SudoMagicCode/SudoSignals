---
layout: default
title: Signals Config File
parent: Troubleshooting
nav_order: 3
---

# Signals Config File

Signals' operation is described by a YAML file.

For a typical installation type, you can locate your config file in:  
`C:\ProgramData\SudoMagic\SudoSignals\config`


If your config file becomes corrupt, you can replace its contents with the following:
```yaml
# sudoSignals configuration file.
# only directly edit this file if you know what you are doing. 
# editing properties in this file can lead to issues monitoring and controlling your installations.
# To safely configure sudoSignals, right click on the sudoSignals systey tray icon and select "Configure".

# installation will hold properties related to identification and control of this system.
installation:
#    productid: 

# startup will hold properties related to running and restarting programs.
startup:
    prestartBAT: ""
    processes: []
    poststartBAT: ""


# daemon will hold information about the sudoSignals program.
daemon:
    configurationPort: 10000

# this is a hold over and will be deleted. 
services: []
```

```tip
Advanced users can choose to edit their YAML manually. Additionally, if you're configuring a large number of servers you may consider using a script to create your configuration files.
```
