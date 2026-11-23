---
description: Configuring the publication of web services in Megaladata
---
# Editing a Web Service
When adding a web service, you must specify a namespace.

In a WSDL service description, a namespace is used to prevent naming conflicts by ensuring all element and attribute names are unique. To set this parameter, select one of the following options:

  * **Use Megaladata Integrator namespace**
  * **Generate a unique namespace for package**: selected by default
  * **Generate a unique namespace for each package version**
  * **Custom**: use this option to set a namespace manually

  > **Note:** When choosing **Custom**, the namespace must be an [absolute URI](https://en.wikipedia.org/wiki/URI#Absolute_URI), in accordance with [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986) and [RFC 3987](https://datatracker.ietf.org/doc/html/rfc3987). In other cases, these requirements are met automatically.

The generated namespace that will be used for publication is displayed in the wizard window.

> **Important:** To avoid a name conflict, you must ensure the uniqueness of `published node name` and `published package namespace` value pair. To do this, we recommend using the **Generate a unique namespace for package** or **Generate a unique namespace for each package version** settings for all published packages, or to set unique namespaces manually.

For publication, specify the path to the package file, select a namespace, and click the **Publish** button.

**Read on:** [Web Services Control Page]()