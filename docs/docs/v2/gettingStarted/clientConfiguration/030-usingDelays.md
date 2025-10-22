---
title: Using Delays
slug: /v2/getting-started/client-configuration/using-delays
description: "How to use Delays"

---

# Using Delays
Delays are a helpful way to postpone the start of an application. For instance, if we need our `TouchDesigner_Data` processes to start 10 seconds after sudoSignals launches, we can use a `delay`.

![Client Profile Process 004](/img/client-configuration/v2-client-profile-process-004.png)

## Adding Delays

We can add a delay by pressing the `Add Delay` button in the Processes column.

![Client Profile Process 004A](/img/client-configuration/v2-client-profile-process-004A.png)

### Adjusting Delays

By default, delays are set to `0.5 seconds`. Click on the clock icon to adjust the duration of the delay.

![Client Profile Process 005](/img/client-configuration/v2-client-profile-process-005.png)

A dialog will appear where you can adjust the duration (in seconds).

![Client Profile Process 005A](/img/client-configuration/v2-client-profile-process-005A.png)

The placement of the delay can also be adjusted by using the handle icon (left) of the delay card.

![Client Profile Process 005B](/img/client-configuration/v2-client-profile-process-005B.png)

![Client Profile Process 005C](/img/client-configuration/v2-client-profile-process-005C.png)

## Multiple Processes
Delays are also a great way to organize multiple processes. Without delays, sudoSignals will launch all applications on start at the same time. With delays, we can organize our processes to start in a specific order and cadence.

![Client Profile Process 005D](/img/client-configuration/v2-client-profile-process-005D.png)
