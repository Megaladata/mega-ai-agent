---
description: Main elements of the Megaladata analytical platform. Standard and derived platform components for implementing custom data analysis algorithms. Nodes of a data processing workflow.
---

# Getting Started

To perform analysis tasks, Megaladata allows you to import data from different sources. Then, you can use this data to apply the necessary algorithms. The processing results can be viewed within the system or exported to external data destinations.

Thus, the platform can be used both for creating independent analytical solutions and for developing modules integrated with external systems.

## The workflow

One of the main concepts on which the Megaladata platform is based is the [workflow](./first-workflow.md).

_Workflow_: Sequence of actions required for data analysis. In Megaladata, it is a combination of data processing nodes configured by the user to solve a particular task.

Each workflow node performs a specific data processing operation. A list of possible operations is represented by a library of pre-built [components](https://help.megaladata.com/userguide/processors/#standard-components).

The nodes receive and transfer data through [input and output ports](./../workflow/ports/README.md). The processing sequence is determined by connecting the output port of one workflow node to the input port of the next, as shown in the figure:

![Example workflow](./readme-1.png)

## Components and nodes

You can create workflow nodes from two types of components:

* _Standard components_ are provided by the platform.
* _Derived components_ are created and configured by a user.

With derived components, implementing various data processing models is not limited by the standard platform components, and can be expanded by users. You can create a derived component by combining workflow nodes that implement custom processing logic.

Most often, derived components take the form of [supernodes](./../processors/control/submodel.md).

A _supernode_ is a special node that can include other workflow nodes. Within a supernode, you can configure a custom processing logic. Think of a supernode as a black box: It accepts information through input ports, performs the configured processing, and sends results to output ports. Input and output ports of a supernode can be customized.

![Example workflow](./readme-1.png)

This figure features an [ABC analysis](https://github.com/Megaladata/starter-kit/blob/main/docs/abc-analysis.md) node that is a derived component in form of a supernode. The following figure shows what's inside:

![Nodes within the ABC analysis supernode](./readme-2.png)

A supernode can also include other supernodes. Nesting of supernodes inside each other is not limited.

## Data ports

Megaladata's nodes can have different ports which accept different kinds of data:

<table>
    <tr>
        <th align="left" width="150">Port</th>
        <th align="left">Accepted Data</th>
    </tr>
    <tr>
        <td><img src="../images/icons/app/node/ports/inputs/table_inactive.svg"> Table</td>
        <td>A structured dataset organized in the form of two-dimensional table consisting of columns and rows. The table cells contain the data items: strings, numbers, dates, or logical values.</td>
    </tr>
    <tr>
        <td><img src="../images/icons/app/node/ports/inputs/variable_inactive.svg"> Variables</td>
        <td>A variable is an object that can contain only one value. In Megaladata, you can convert data from tables to variables and vice versa using special components.</td>
    </tr>
     <tr>
        <td><img src="../images/icons/app/node/ports/inputs/tree_inactive.svg"> Data tree</td>
        <td>A set of data represented as a hierarchic tree-like structure.</td>
    </tr>
    <tr>
        <td><img src="../images/icons/app/node/ports/inputs/link_inactive.svg"> Connections</td>
        <td>This data defines configuration for working with external sources and destinations.</td>
    </tr>
</table>

As tables, variables, and connections have different structures, their corresponding ports cannot be interconnected and are identified differently.

A node's functionality determines the number of the node's inputs and outputs. While the inputs can be configured automatically (when connecting a link) or manually, the outputs are typically fixed by the node's function.