---
sort: 1
---

# Glossary

Term | Definition
--- | ---
`account type` | Your sudoSignals account type describes the tier and features you can access on your web dashboard: free, basic, standard or enterprise.
`auto- start` |  sudoSignals tracks to see if your target application is running and can be configured to keep the application running if it unexpectedly quits.
`card` | The at-a-glance representation of an installation on the web dashboard.
`client` | The sudoSignals application that runs on a machine in a venue. This application will broker communication between your local processes and the sudoSingals web dashboard. 
`controlled process` | A process that you intend to control remotely with a sudoSignals plugin.
`custom controls` | Custom controls are defined at the process level, and allow for bidirectional communication between the web dashboard and the local process. Custom controls mirror state on your local machine to the web dashboard. Controls follow a API specification which allows sudoSignals to generate a user interface without the requirement for custom development.
`drive monitoring` | The capability of the local sudoSignals client to monitor the drive status of your installation machine. On Windows OS, sudoSignals uses a system library to communicate key statistics about your local server with the cloud. 
`environment variable` | An environment variable is a dynamic-named value that can affect the way running processes will behave on a computer. Environment variables are part of the environment in which a process runs. [See more one wikipedia](https://en.wikipedia.org/wiki/Environment_variable)  
`graph` | The 2D line graph of data presented in the dashboard view of an installation. Data from ‘reports’ is the only data that can be displayed in a graph on the sudoSignals dashboard. 
`heartbeat monitoring` | The sudoSignals client communicates with a heartbeat style mechanic, which looks for communication from your local server at a regular interval. If the web dashboard misses consecutive heartbeats it will notify you that your process or installation has gone offline. 
`installation` | A computer resource you wish to monitor and control. 
`logs` | String messages communicated from a local process to the sudoSignals web dashboard. Logs are intended as messages you wish you communicate from a process to the web dashboard. Logs are composed of both a log level and a message. The log level is represented as an integer value of 0, 1,  or 2. This corresponds to a log level of Info Warning, and Critical. Log messages can be a maximum of 255 characters 
`notifications` | Email or SMS messages sent when sudoSignals detects a notification event. Currently supported events include: a process going offline (e.g. quitting unexpectedly), or an installation going offline. 
`plugin` | The generalized framework developed for a specialized environment - i.e. the sudoSignals TouchDesigner plugin. Plugins allow local processes to communicate with the sudoSignals client. 
`product-id` | The internal ID used by sudoSignals to associate a user with installations. This is unique to the installation that sudoSignals is controlling.
`process` | An application you wish to control or monitor with sudoSignals. sudoSignals can send control messages to a process that has a supported plugin. 
`reports` | Key-value pairs that are sent from controlled processes to the web dashboard. This data can be graphed and downloaded from the dashboard. Report keys should be constructed as strings, and values as numbers. Reports are intended to be graphed on the sudoSignals web dashboard and are displayed in the order they are received. 
`signals-id` | A generated ID used by sudoSignals to communicate with your local processes. This is unique to the process that sudoSignals is controlling.
`signals-name` | The user generated name that is attached to a process running on your installation machine.
`saved states` | The state of all custom controls for a given process at a given moment in time. The complete collection of custom controls are saved at the process level in a ‘state’. States allow a user to recall a process's custom controls at a given moment. In other applications this may be referred to as a preset. 
`web dashboard` | The sudoSignals website where a user can access the status or control parameters for their installations. 