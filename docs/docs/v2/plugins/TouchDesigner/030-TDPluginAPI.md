---
title: TouchDesigner Plugin API
slug: /v2/plugins/TouchDesigner/plugin-api
description: "TouchDesigner Plugin API"
---

# TouchDesigner Signals Plugin API 

The TouchDesigner Signals plugin currently has a limited API that exposes some convenience operations for users. The current API implementation is focused on logging, with a plan to expand access in the future. For now, please use the custom parameters for the signals TOX as your primary mode of interaction for operations other than logging.

The `signals` class definition can be found at `sudoSignals/local/modules/signalsToxApi`

## Operator Access

Any given project should only contain one sudoSignals TOX, for that reason we have assigned a Global OP shortcut for this TOX `SudoSignals`. You can access this operator from anywhere in your TouchDesigner network by using:

```python
op.SudoSignals
```

## Logging

While you can generate logs by changing the contents of a log table, you may also find that it's easier to create log events by accessing Python extension for the sudoSignals TOX. The log method can be accessed by using `Send_log()` on the Signals TOX.

```python
op.SudoSignals(logLevel:str, message:str)
```

Log Level | Descriptor | 
--- | --- |
LOG | Marked as LOG, useful for any logged data that has carries no warning. | 
INFO | Marked as INFO, useful for any logged operation that provides direct information about a process or behavior. |
WARN | marked as WARNING, this is useful for operations that require some user intervention. |
CRIT | Marked as CRITICAL, this is useful for any operations that may cause system instability. |
ALERT | Marked as ALERT, this log type will generate an Alert. If you have signals configured to send email or SMS messages this will forward the contents of your alert to the selected notification medium. |

Your message should be a string less than 256 characters in length.

Example usage:

```python
op.SudoSignals("WARN", "Eep - something has gone wrong, check all the bananas")
```