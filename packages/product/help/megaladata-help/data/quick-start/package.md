---
description: Understanding packages and modules in Megaladata. Files with .mgp, .lck, and .autosave extensions.
---

# Package Structure and Usage

In [**Megaladata**](https://megaladata.com/), all project work is organized within packages. A _package_ serves as the minimum unit for deployment and acts as a container for project items like components, workflows, and connections.

Packages are saved individually in the form of files with `.mgp` extension. Packages include [references](./../workflow/link-to-packet.md) and modules.

_References_ link to other packages, allowing you to use their [derived components](https://help.megaladata.com/userguide/workflow/derived-component.html) and connections within your current project. These shared items are only available if they were explicitely published (marked for sharing) in the source package.

Each package contains at least one module. A _module_ contains the following items:

* The [workflow](https://help.megaladata.com/userguide/quick-start/first-workflow.html): A sequence of data processing nodes.
* [Connections](https://help.megaladata.com/userguide/integration/connections/): Define settings for connecting to external data sources and destinations.
* [Components](https://help.megaladata.com/userguide/workflow/derived-component.html): A list of derived components (_supernodes_) available in the package, including those created within this package and those connected from other packages via references.

> **Note:**
> 1. When you open a package (`<Package_name>.mgp`), a lock file named `<Package_name>.mgp.lck` is automatically created in the same directory. This prevents other users from editing or deleting the package while you have it open. The `.mgp.lck` file is automatically deleted when you close the package.
>
> 2. If the package autosave option is enabled (see [Packages](https://help.megaladata.com/userguide/interface/packages.html) for details), an autosave file named `<Package_name>.mgp.autosave` is created next to the original `.mgp` file. The package contents are automatically saved to this `.mgp.autosave` file at the configured frequency. If needed, you can restore from the most recent autosave. First, ensure the original package is closed in Megaladata. Then, consider backing up the current `.mgp` file. Finally, rename the `<Package_name>.mgp.autosave` file to `<Package_name>.mgp`.

**Read on:** [The First Workflow](./first-workflow.md)
