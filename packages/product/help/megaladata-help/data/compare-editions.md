---
description: An overview of Megaladata's editions — Community, Personal, Team, Standard, and Enterprise. Comparing data import and export capabilities, processing, visualization, and connections.
---

# Available Editions

To select the right Megaladata edition, you need to define how you plan to use the platform. There is no difference between the editions as far as available processing algorithms or visualization methods are concerned. Their differences are connected with use cases and integration into the corporate IT environment.

The key questions that stipulate edition selection:

* Is teamwork required?
* How many users will work with the platform?
* What volume of data will be processed?
* What are the performance requirements?
* Is automatic workflow start required?
* Is it required to publish web services?
* How will analytics integrate with company IT systems?
* Is it required to build a fault tolerance and scalable architecture?
* What operating system must be supported by the platform?
* Is OpenID user authentication required?

## Community

This desktop edition is used to train analysts and students on the Megaladata platform. It is not available for commercial use but suitable for individual data analysis where teamwork mechanisms are not required.

The edition allows [working with REST services](https://help.megaladata.com/userguide/integration/connections/list/rest-service.html).

Available for Linux and Windows.

## Personal

A desktop edition designed for autonomous analytical processing. The platform's performance depends only on your workstation's capacity. There is no limit on the number of processors or memory size.

As the edition is designed for the personal work of an analyst, there are no built-in mechanisms of teamwork or integration with business processes and [SOAP services](https://help.megaladata.com/userguide/integration/connections/list/soap-service.html). Scheduled start of workflows is not supported.

The edition is available for Linux and Windows operating systems and can be used in commercial purposes.

## Team

A server edition designed for small teams (up to 5 concurrent users). This edition fits for solving basic analytical tasks. The processed data sizes must match the server with not more than 6 processor cores and up to 12 GB RAM.

[Batch processing](https://help.megaladata.com/userguide/workflow/batchlauncher.html) of workflows using a job scheduler is available. It is possible to call third-party REST services.

Publishing custom REST services is available if you have [Megaladata Integrator](https://help.megaladata.com/userguide/components-platform.html#integrator) (purchased additionally). Integration with SOAP services is not supported.

The edition is available **only for Windows**.

## Standard

This server edition is designed for medium-sized companies with 5 to 10 concurrent users. Not more than 12 processor cores and up to 24 GB of RAM can be used.

It is possible to process data in batch mode, call third-party web services for integration into the company business processes, [publish web services](https://help.megaladata.com/userguide/integration/web-services/publishing-web-service.html), and construct a server cluster.

The edition is available for Linux and Windows.

## Enterprise

This server edition targets corporate processing of large data volumes and implementation of critical business processes in a fail-safe and scalable environment.

There is no limit on the number of processor cores and RAM size. Additional licenses can be bought for any number of users.

It is possible to process data in a job scheduler, call third-party web services for integration into the company business processes, and publish custom web services. 

The standard supply package includes two licences for Megaladata Server and Megaladata Integrator, which allows for constructing a fault-tolerant server cluster.

The edition is available for Linux and Windows.

## Cloud

In the cloud edition, the platform is deployed on a rented virtual machine. The supplied resources can be scaled upon customer request according to the load size change. There is no limit on the number of processor cores and RAM.

Megaladata Server and [Megaladata Integrator](https://help.megaladata.com/userguide/components-platform.html#integrator) are supplied as a bundle. It is possible to process data in a job scheduler, call third-party web services for integration into the company's business processes, publish web services, and construct a server cluster.

The cloud edition is available **only for Linux**.

## Comparison table

|                          | Community Edition  | Personal | Team | Standard | Enterprise | Cloud |
|:-------------------------|:---------:|:--------:|:--------:|:--------:|:----------:|:------:|
| **Components** |           |          |          |          |            |        |
| [Desktop](https://help.megaladata.com/userguide/components-platform.html#desktop) | ● | ● |          |          |            |        |
| [Server](https://help.megaladata.com/userguide/components-platform.html#server) |           |          | ● | ● | ● | ● |
| [Studio](https://help.megaladata.com/userguide/components-platform.html#studio) |           |          | ● | ● | ● | ● |
| [Integrator](https://help.megaladata.com/userguide/components-platform.html#integrator) |           |          | ○ | ○ | ● | ● |
| Additional environments <sup>1</sup> |    |          |          | 1 | 3 |        |
| **Operating system** |           |          |          |          |            |        |
| Windows | ● | ● | ● | ● | ● |        |
| Linux | ● | ● |          | ● | ● | ● |
| **Restrictions** |           |          |          |          |            |        |
| Users/Workstations <sup>2</sup> | 1 | 1 | 5 | 5–10 | 10–∞ | 1–∞ |
| Processor cores |           |          | 1–6 | 1–12 | ∞ | ∞ |
| RAM |           |          | up to 12 GB | up to 24 GB | ∞ | ∞ |
| **Functions** |           |          |          |          |            |        |
| Processing and visualization | ● | ● | ● | ● | ● | ● |
| Batch processing <sup>3</sup> |           |          | ● | ● | ● | ● |
| Job scheduler |           |          | ● | ● | ● | ● |
| [LDAP support](./admin/ldap.md) |           |          |          |          | ● | ● |
| Open ID support |           |          |          |          | ● | ● |
| Fail-safe server cluster |           |          |          |     ○     | ● |  |
| **Integration** |           |          |          |          |            |        |
| Files | ● | ● | ● | ● | ● | ● |
| Databases | ● | ● | ● | ● | ● | ● |
| REST JSON | ● | ● | ● | ● | ● | ● |
| SOAP WSDL |           |          |          | ● | ● | ● |
| Kafka | |  |   |          | ● | ● |
| **Training** |           |          |          |          |            |        |
| Interactive courses | ● | ● | ● | ● | ● | ● |
| **Technical support** |           |          |          |          |            |        |
| Q&A Community | ● | ● | ● | ● | ● | ● |
| SLA Standard |           | ● | ● | ● | ● | ○ |
| SLA Premium |           |          |          |          | ○ | &nbsp; |

Notes:

● — included

○ — can be purchased additionally

<sup>1</sup> Additional enviroments for development, testing, etc., supplied within the terms of the techical support agreement.

<sup>2</sup> The number of sessions is limited for each user/workstation.

> **Important**: A **session** is considered to be one tab or browser window where Megaladata is open. In the Team and Standard editions, a user can start Megaladata simultaneously in **two** different tabs/windows. E.g., for 5 workstations, maximum 10 sessions are available, for 10 workstations, it is 20 sessions. If attempting to open Megaladata in the third tab or window, the user will receive the following message: "Exceeded number of sessions available for your edition".
This restriction doesn't apply to the users with admin rights or in the case of batch workflow processing.

<sup>3</sup> Performed using the *BatchLauncher* utility.

**Read on:** [Getting Started](https://help.megaladata.com/userguide/quick-start/)