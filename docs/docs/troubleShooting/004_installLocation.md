---
layout: default
title: Signals Config File
parent: Troubleshooting
nav_order: 4
---

# Installation Location

The sudoSignals client is installed on your computer in:  
`C:\Program Files (x86)\SudoSignals`  

In this director you will find all of the `.exe` files that are used to run sudoSignals.   

In rare occasions if you are debugging a performance issue you may need to run sudoSignals from the console. To do this:  

## 1. Quit Signals and any controlled process  
Quit sudoSignals from the tray icon and close any open sudoSignals monitored process  
![Quit sudoSignals](../assets/images/installation-location/quit_from_tray.png)  
<br>
<br>
## 2. Open a new terminal window
In a new terminal window move to the installation directory for sudoSignals  
`cd "C:\Program Files (x86)\SudoSignals"`  
![sudoSignals dir in terminal](../assets/images/installation-location/signals_dir_terminal.png)  
<br>
<br>
## 3. Use the --console flag
Start sudoSignals with the `--console` flag  
`sudosignals.exe --console`  
![sudoSignals with console flag](../assets/images/installation-location/signals_with_console_flag.png)  
<br>
<br>
## 4. Watch messages in the sudoSignals console
This will launch the sudoSignals client with an open console that displays any logged messages  
![sudoSignals console](../assets/images/installation-location/sudoSignals_console.png)  
<br>
<br>
## 5. Return to typical use
To close the console version of sudoSignals, quit sudoSignals from the tray icon  
![Quit sudoSignals](../assets/images/installation-location/quit_from_tray.png)