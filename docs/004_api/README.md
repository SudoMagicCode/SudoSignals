---
sort: 10
---

# Plugin API

Plugins use an API for communicating with the local sudoSignals service. While there are some existing plugins for sudoSignals, you're welcome to develop your own tools to better suite your organizations' needs.

sudoSignals has an open websocket API for controlling and reporting on process behavior. The local sudoSignals service is reponsible for starting processes on the local server, reporting system dianostic information, and relaying information and control settings between the dashboard and the plugins embedded in the monitored processes.  

![sudoSignals Plugin Flow](../assets/images/plugin-api/signals-plugin-api-001.png)

{% include list.liquid all=true %}
