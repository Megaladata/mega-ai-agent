---
description: Learn to create "supernodes" in Megaladata. Simplify workflow structure by wrapping multiple nodes into one with the Supernode component.
---
# ![Supernode](./../../images/icons/components/generic_default.svg)&nbsp;Supernode

*Supernode* is a special node that you can configure to contain other nodes of the [workflow](./../../workflow/README.md).

The main purpose of supernodes:
- **Simplify:** Make your workflows more readable by combining several nodes of a specific data processing stage into one supernode. A supernode can *include other supernodes*, nesting without limits. This allows you to build a *hierarchical workflow*.
- **Reuse:** In a supernode, you can implement any processing logic and define the required structure of input and output data. Through [derived components](./../../workflow/derived-component.md), [Node Execution](./execute-node.md) nodes, [web services](./../../integration/web-services/README.md), and [batch workflow processing](./../../scheduler/batch-processing.md), you can reuse the processing logic created in a supernode for new data.

## Ports

Initially, a supernode does not have any input or output ports. Create them in the configuration wizard. You can create any number of ports, selecting from the following options:

### Input

* ![Input variables](./../../images/icons/app/node/ports/inputs-optional/variable_inactive.svg)&nbsp;**Variables** (optional port)
* ![Input data source](./../../images/icons/app/node/ports/inputs/table_inactive.svg)&nbsp;**Table**
* ![Input data source](./../../images/icons/app/node/ports/inputs-optional/table_inactive.svg)&nbsp;**Table** (optional).
* ![Input data tree](./../../images/icons/app/node/ports/inputs/tree_inactive.svg)&nbsp;**Data tree**

### Output

* ![Output variables](./../../images/icons/app/node/ports/outputs/variable_inactive.svg)&nbsp;**Variables**
* ![Output dataset](./../../images/icons/app/node/ports/outputs/table_inactive.svg)&nbsp;**Table**
* ![Output data tree](./../../images/icons/app/node/ports/outputs/tree_inactive.svg)&nbsp;**Data tree**

## Configuration wizard

On the **Supernode** page, create the necessary input and output ports. Set each port's type, name, and caption (this will be displayed on hover):
* ![Inputs](./../../images/icons/system_object_18/port-in_default.svg)&nbsp;**Inputs**:
  * ![New port](./../../images/icons/toolbar-controls/plus_default.svg)&nbsp;**Add**: Create a new input port:
    * ![variables](./../../images/icons/app/node/ports/inputs-optional/variable_inactive.svg)&nbsp;**Variables**
    * ![table](./../../images/icons/app/node/ports/inputs/table_inactive.svg)&nbsp;**Table**
      > To make a **Table** input port optional, enable the **Optional** property.
    * ![data tree](./../../images/icons/app/node/ports/inputs/tree_inactive.svg)&nbsp;**Data tree**
* ![Outputs](./../../images/icons/system-object/port-out_default.svg)&nbsp;**Outputs**:
  * ![New port](./../../images/icons/toolbar-controls/plus_default.svg)&nbsp;**Add**: Create a new output port:
    * ![variables](./../../images/icons/app/node/ports/outputs/variable_inactive.svg)&nbsp;**Variables**
    * ![table](./../../images/icons/app/node/ports/outputs/table_inactive.svg)&nbsp;**Table**
    * ![data tree](./../../images/icons/app/node/ports/outputs/tree_inactive.svg)&nbsp;**Data tree**

### Toolbar buttons

* ![Move down](./../../images/icons/toolbar-controls/movedown_default.svg)&nbsp;**Move down**: Use this to place the selected port lower in the list.
* ![Move up](./../../images/icons/toolbar-controls/moveup_default.svg)&nbsp;**Move up**: Move the selected port higher in the list.

### Other actions

* ![Delete port](./../../images/icons/toolbar-controls/delete_default.svg)&nbsp;**Delete**: Use this button on the right of the port's row to delete the port.
* ![Delete all ports](./../../images/icons/toolbar-controls/delete-all_default.svg)&nbsp;**Delete all**: Use this button on the right of the header row to delete all added ports.

### Port naming options

* **Default**: By default, the wizard displays `Unique` in the **Name** column. This means, the system generates a unique internal name automatically. You can always select this option from the dropdown menu upon double-clicking the name field.
* **Custom**: Enter a unique port name directly into the field. It can include Latin letters (`a` to `z` and `A` to `Z`), digits, and the underscore (`_`). The name cannot start with a digit. Ensure uniqueness within the list of input/output ports, depending on your port category.

## Inside a supernode

Click the **Enter** button on the supernode to open the internal workflow area and build your processing workflow there. When editing the supernode's contents, the input and output ports created in the wizard are displayed on the left (above the ![Input node](./../../images/icons/app/node/ports/submodel-port/submodel-port_20x20.svg)&nbsp;**Input node** icon) and on the right (above the ![Output node](./../../images/icons/app/node/ports/submodel-port/submodel-port_20x20.svg)&nbsp;**Output node** icon).

To activate the supernode's inner nodes:
- Connect the nodes to the **Output node**; or 
- Define the execution order by connecting them to the **Synchronization input port**.

To deactivate the nodes within the supernode:
- Connect the nodes to the **Input node** and **Output node**; or
- Define the execution order by connecting them to the **Synchronization output port** and **Synchronization input port**.

Inside a supernode, you can use [workflow variables](../../workflow/variables/workflow-variables.md), including **user variables**. Note that these variables will only be used *within the supernode*.

Click ![Exit supernode](./../../images/icons/app/node/submodel/back.svg)&nbsp;**Move out** to exit the supernode and return to the parent workflow.

> **Note:** You can deactivate all nodes and connections inside a supernode using the ![](./../../images/icons/toolbar-controls/toolbar-controls_sliced_18x18_deactivate-all_default.svg)&nbsp;**Deactivate all subnodes** command in the supernode's context menu.

**Read on:** [Reference Node](unit-link.md)