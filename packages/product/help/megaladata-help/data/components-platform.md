---
description: Overview of the platform's elements — Megaladata Desktop, Server, Studio, and Integrator.
---

# Platform Elements

The Megaladata analytical platform can be operated in server mode for teamwork and in desktop mode for personal analytics. Composition of components depends on the [platform edition](compare-editions.md).

## Desktop

The platform component designated for autonomous data processing on a personal computer. It can process large data arrays restricted only by the workstation's resources.

Megaladata Desktop does not contain tools for teamwork, access control, and publication of web services.

| System Requirements | Minimum | Recommended |
|:--------- |:-------------|:------------- |
| OS | **Windows** 10 or higher; **Linux** (Kernel 5.3+ ¹ ² and GTK 3 support required) | |
| CPU <sup>3</sup> | 2 cores | 16 cores|
| RAM | 4 GB | 8 GB |
| Disk Space  | 1 GB | 10 GB (+ User Data) |

<sup>1</sup> It is possible to use the Linux kernel starting from 4.11 if there is no need to connect Python.

<sup>2</sup> In some cases, the `xdg-open` and `dbus-send` utilities and the value of the environment variable `DESKTOP_SESSION` are used.

<sup>3</sup> Supports x64 processors Intel Core, AMD FX and newer, containing instructions [SSE4.2](https://en.wikipedia.org/wiki/SSE4#SSE4.2) and [POPCNT](https://en.wikipedia.org/wiki/SSE4#POPCNT_and_LZCNT).

## Server

The analytical server completes tasks such as loading, calculation, model training, visualization, access control, and others. Megaladata Server is a key platform element required for teamwork. Megaladata Server is designated for deployment in the internal network when there is more than one user working from different workstations.

Megaladata Studio is required for server control, configuration, visualization, and other operations. Other platform components, with the exception of the Desktop component, can interact with Megaladata Server.

The basic version of all server and cloud editions includes Megaladata Server and minimum of 5 concurrent licenses for users with "Workflow design" or "View reports" roles. To execute workflows through a scheduled start or by calling web services published with the Integrator, no additional user licenses are required. The basic server version is sufficient.

| System Requirements | Minimum | Recommended |
|:--------- |:-------------|:------------- |
| OS | **Windows** Server 2019 or higher; **Linux** (Kernel 5.3+ <sup>4</sup> <sup>5</sup>) | |
| CPU <sup>6</sup> | 4 cores | 16 cores (Number of users x 1.6 + 1) |
| RAM | 8 GB | 16 GB (Number of users x 2 + 2) |
| Disk space  | 200 GB | 500 GB (+ User Data) |
| Ping delay | < 50 ms | < 15 ms |

> **Note:** System requirements may vary based on data volumes and interactions with third-party applications.

<sup>4</sup> It is possible to use the Linux kernel starting from 4.11 if there is no need to connect Python.

<sup>5</sup> The distribution must contain the systemd.so.0 library (for logging in journald) and packages: glibc 2.17 or higher, libstdc++6 version 6.1 or higher, libicu 61 or higher.

<sup>6</sup> Supports x64 processors Intel Core, AMD FX and newer, containing instructions [SSE4.2](https://en.wikipedia.org/wiki/SSE4#SSE4.2) and [POPCNT](https://en.wikipedia.org/wiki/SSE4#POPCNT_and_LZCNT).

## Studio

Megaladata Studio is the client web application where you can design processing workflows, visualize data, change server configuration, and perform access control.

Studio is the main tool for analysts and end users, implementing the user interface for platform operation. Megaladata Server provides data processing.

Supported browsers: 

[Chrome](https://www.google.com/intl/com/chrome/) 84.0 or higher  
[Firefox](https://www.mozilla.org/en-US/firefox/enterprise/) 79.0 or higher  
[Opera](https://www.opera.com/) 70.0 or higher  
[Safari](https://support.apple.com/safari) 14.1 or higher  
[Edge](https://support.microsoft.com/en-us/windows) 84.0 or higher  
or other Chromium-based browsers 84.0 or higher

## Integrator

This platform component enables you to publish custom web services that implement the logic of the workflows developed in the Megaladata Server. Megaladata Integrator ensures an architecture that provides fault tolerance, load balancing, and horizontal scaling.

| System Requirements | Minimum | Recommended |
|:--------- |:-------------|:------------- |
| OS | **Windows** Server 2019 or higher | **Linux**<sup>7</sup> Debian(11+), Fedora(37+), Ubuntu(20.04+) |
| Software | For **Windows**: IIS 8.0 or higher, [ASP.NET Core Runtime 8.0](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) Hosting Bundle | |
| CPU <sup>8</sup> | 2 cores | 4 cores |
| RAM | 2 GB | 4 GB |
| Disk space | 100 GB | 500 GB for Windows, 200 GB for Linux |

Note:

<sup>7</sup> The distribution must contain packages: glibc 2.17 or higher or musl 1.2.2 or higher.

<sup>8</sup> For Linux, x64 CPU is required.

[Read on: Available Editions](https://help.megaladata.com/userguide/compare-editions.html)