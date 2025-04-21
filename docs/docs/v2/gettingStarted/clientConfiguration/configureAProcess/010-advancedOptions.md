---
title: Advanced 	Options
slug: /v2/getting-started/client-configuration/configure-a-process/advanced-options
description: "Configuring your Processes"
---

## Advanced Process Options (optional)

Some installations require extra care during start-up and sudoSignals has some advanced features to help ensure everything runs smoothly. To see the advanced Process options expand the `Advanced Options` carrot. 

![Client Profile Process 003](/img/client-configuration/v2-client-profile-process-003.png)

:::info Optional Configuration

Advanced process options are optional and not required for sudoSignals to monitor and control your processes.

:::

## Working Directory
The Working Directory field allows you to specify the execution directory for your selected file and program. This may be especially important if you are launching a project that's written in Python or NodeJS.

## Command Line Preview 

The Preview Command Line field displays the equivalent command string that will be used to start your process. If your familiar with starting applications from the Windows terminal reviewing this command may help ensure that your application starts up correctly.

![Client Profile Process 003A](/img/client-configuration/v2-client-profile-process-003A.png)

### Command Line Arguments

![Client Profile Process 003B](/img/client-configuration/v2-client-profile-process-003B.png)


## Environment Variables 

Many applications or environments can access [Environment Variables] that are set during application launch. You can add as many Environment Variables as is appropriate for your application. Use the `Add Environment Variables` button to enter the key and value pair you'd like to have set when your process starts.

![Client Profile Process 003C](/img/client-configuration/v2-client-profile-process-003C.png)


<!-- links -->
[Environment Variables]: https://en.wikipedia.org/wiki/Environment_variable