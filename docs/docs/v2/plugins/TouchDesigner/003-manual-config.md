---
title: Manual Configuration
slug: /v2/plugins/TouchDesigner/manual-config
description: "Manually configuring the TouchDesigner plugin"
---

# Manual Configuration | 

In some instances you may want to manually configure your the sudoSignals TouchDesigner plugin. For example, if sudoSignals is running in an [Engine COMP](https://derivative.ca/UserGuide/Engine_COMP), or as an embedded component inside another system. In those cases you way want sudoSignals to report out machine stats, or provide some handles for control without using sudoSignals to start the process itself.

## Client Configuration

Configuring the sudoSignals client is an important first step in the manual configuration process. On the configuration page take note of your `Process ID` this will be an essential identifier when setting-up the TouchDesigner Plugin to work with Signals.

![Create Account 002](/img/td-manual-config/td-manual-config-01.png)

:::info

For manual plugin configurations, the `Auto Start` parameter should be toggled off. In these cases, we expect Signals to be running inside of another TouchDesigner process either as an Engine, or in an embedded TOX. In either of those cases, Signals would no longer be used to start and stop your project, only for controls

:::

## Configuring the Plugin in TouchDesigner

Drag and drop the `sudoSignals` TOX into your network.

![Create Account 002](/img/td-manual-config/td-manual-config-02.png)

On the `Advanced Settings` page toggle on the `Manual Configuration` parameter:

![Create Account 002](/img/td-manual-config/td-manual-config-03.png)

With `Manual Configuration` toggled on, head back to the `Settings` page. On the settings page enter the `Process ID` from the `Client Configuration` page.

Next head back to the `Advanced Settings` page and click on `Reset Connection` to restart the connection between TouchDesigner and sudoSignals.

:::info

You only have to reset your connection the first time you set-up Signals. From now when TouchDesigner starts Signals will reach out and attempt to connect with Signals so it can act as a relay to your Dashboard.

:::

<!-- links -->
[sudoSignals Client]: https://sudosignals-downloads.s3.amazonaws.com/production/sudoSignals_Installer.exe
[TouchDesigner sudoSignals Plugin]: https://github.com/SudoMagicCode/sudoSignals_tdClient_releases//releases/latest/download/SudoSignals.tox