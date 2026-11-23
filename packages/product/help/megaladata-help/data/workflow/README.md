# Workflow Design

The *workflow* is the core operational unit within a Megaladata module (for details on modules, see [package usage type and structure](../quick-start/package.md)). It defines a specific sequence of steps to process your data.

## Building your workflow

**Nodes: The Building Blocks.** Workflows are constructed using nodes. Each node represents a distinct data processing step or action, based on a specific data processing component. You can use standard, pre-built components provided by Megaladata or create your own custom [derived components](./derived-component.md).

**The Workflow Area.** When you create a new workflow, the design canvas (workflow area) is initially empty. You build your process by adding the necessary nodes to this area and arranging them according to your task's logic. This is typically done in [interactive mode](./interactive-mode.md).

**Connecting Nodes via Ports.** Nodes communicate and pass data between each other using [ports](./ports/README.md):

* **Input ports:** Located on the left side of a node's icon, these ports receive data from preceding nodes or data sources.  
* **Output ports:** Located on the right side, these ports send the processed data onwards to the next nodes in the sequence.

## Enhancing workflow functionality

* **Variables:** To make your workflows more flexible and dynamic, you can use [variables](./variables/README.md). Variables are objects that store a single value of a specific data type. They can be used to parameterize nodes or pass control values. There are generally two types:  

  * **Workflow variables:** accessible throughout the entire workflow.  
  * **Node variables:** scoped specifically to the node where they are defined or used.

**Derived Components:** You can create reusable, custom components by grouping existing nodes and logic into a *derived component*. These components maintain the fundamental structure of standard nodes but can be configured with unique settings and indicators tailored to your specific needs. This promotes modularity and efficiency.

**Visibility Settings:** Control the availability and reusability of your workflow elements (e.g., nodes) in other workflows by configuring their [visibility](./access-modifier.md).

## Executing and optimizing workflows

**Execution modes:**

* **Interactive mode:** Run, test, and debug workflows directly within the Megaladata graphical interface.  
* [Batch mode](./batchlauncher.md): Execute workflows automatically without the user interface. This is ideal for operations with input data (transformation, transfer, loading).

**Node training and retraining:** Certain nodes, especially those involving machine learning (e.g., [Neural Net (Regression)](../processors/datamining/neural-network-regression.md), [Neural Net (Classification)](../processors/datamining/neural-network-classification.md), or [Clustering](../processors/datamining/clustering.md)) require [training](./training-processors.md) on a dataset. The retraining function is vital when your source data changes, allowing you to update the underlying model with new information without redesigning the workflow.

[Workflow progress control](./run-order.md): For specific requirements or optimization (like improving execution speed), Megaladata allows you to manually define the order in which nodes execute.

[Caching](./caching.md): To speed up execution and avoid re-calculating results unnecessarily, especially during development or iterative runs, you can enable caching. This stores the output of nodes in memory, reusing the stored results if the inputs haven't changed.

## Deployment considerations

When necessary, you can execute a designed workflow in a different environment (e.g., move from development to production). In this case, be mindful of [locale settings](./local-settings.md). Changes in these settings can impact the workflow's execution and potentially alter the results.
