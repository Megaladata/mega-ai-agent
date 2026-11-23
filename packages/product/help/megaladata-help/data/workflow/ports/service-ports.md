# Service Ports

This section describes the different types of service ports available in the workflow area and how to use them.

## Execution order port

Use the ![ ](../../images/icons/app/node/ports/port-order/port-order_inactive.svg)&nbsp;**Execution order** port to manually define the sequence in which workflow nodes are executed.

* **Visibility:** This port is hidden by default. To show it, click ![](../../images/icons/toolbar-controls/order_default.svg)&nbsp;**Customize execution order** on the toolbar. 
 
* **Usage:** To set the execution sequence, link the execution order ports of the relevant nodes to each other in the desired order, as shown in the image:

![Example of using execution order ports](./service-port-1.png)

## Inheritance port

The *inheritance port* connects a [derived node](../derived-component.md) to the base node from which it originates.

* **Visibility:** To display the connection to the parent (base) node, click ![ ](../../images/icons/toolbar-controls/show-derived-nodes_default.svg)&nbsp;**Show parent nodes for derived nodes** on the toolbar.  
* **Usage:** This port helps you trace the lineage of derived components. An example is demonstrated in the image:

![Example of using an inheritance port](service-port-2.png)

> **Note:** The base node can only be indicated this way if it is located within the current workflow area.

## Reference port

The *reference port* shows the source node for a [reference node](../../processors/control/unit-link.md). This helps you understand the origin of a referenced node.

* **Visibility:** To display the connection to source nodes, click ![ ](../../images/icons/toolbar-controls/show-reference-links_default.svg)&nbsp;**Show source nodes for reference nodes** on the toolbar.  
* **Usage:** This port allows you to easily identify the original node that a reference node points to. See the image:

![Example of using a reference connection port](service-port-3.png)

**Read on:** [Optional Ports]()
