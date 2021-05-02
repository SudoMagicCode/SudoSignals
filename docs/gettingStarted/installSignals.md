---
sort: 2
---

# Installing sudoSignals

sudoSignals runs as a local process on your Windows computer. In order for Signals to monitor your applications, we need to install the local service to keep your installation looking its best.

## 1. Download sudoSignals

Here is the [latest sudoSignals installer](https://github.com/SudoMagicCode/sudoSignals_releases/releases/latest/download/SudoSignals_Installer.msi).


If you need an older version of Signals, you can see all of the [sudoSignals releases here](https://github.com/SudoMagicCode/sudoSignals_releases/releases).

## 2. Run the Installer
After downloading the installer, it's time to get sudoSignals up and running. Start by double clicking the installer.

### Windows Protection

```note
We're working on getting our Windows application publisher certificate. In the meantime, there's an extra step to getting the installer working. 
```

You should see a warning from Windows about an application from an unknown publisher. 

![Install Signals 001](../assets/images/windows-installer/install-signals-001.jpg)

First click the link for **More info**, and then click **run anyway**

![Install Signals 002](../assets/images/windows-installer/install-signals-002.jpg)

### Welcome

You should then see the Welcome window of the Setup Wizard; begin the installation process by clicking `Next.`

![Install Signals 003](../assets/images/windows-installer/install-signals-003.jpg)

### Accept the EULA

Signals has an end user licensing agreement, mark that you agree to the agreement and click `Next.`

![Install Signals 004](../assets/images/windows-installer/install-signals-004.jpg)

### Select Installation Type

There are three different Setup Types for Signals. If you'd like to use our recommend settings, select `Typical` — this will install Signals for you automatically. If you'd like to designate where Signals is installed select `Custom`. Right now `Complete` has all of the same installation elements as `Typical`, in future releases we're planning on having some more advanced features for users to select.

![Install Signals 005](../assets/images/windows-installer/install-signals-005.jpg)

### Install

Next click `Install` to get the Signals service installed on your computer.

![Install Signals 006](../assets/images/windows-installer/install-signals-006.jpg)


### Complete the Installation

Finally, you can complete the installation by clicking `Finish.`

![Install Signals 007](../assets/images/windows-installer/install-signals-007.jpg)


## 3. Start sudoSignals

You should now have a sudoSignals shortcut on your desktop and in your start menu. 

![Install Signals 008](../assets/images/windows-installer/install-signals-008.jpg)

Once you start Signals, you should see a system tray icon.

![Install Signals 009](../assets/images/windows-installer/install-signals-009.jpg)
