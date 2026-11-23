# ![Node Execution](../../images/icons/components/script-deductor_default.svg)Node Execution

The component enables to use already existing workflow node for repeated processing of the new data.

**Base node**: the node or [Supernode](./submodel.md), settings and algorithm of which are to be used repeatedly. It can be located outside the current *Supernode*, *Workflow*, *Module* or *Package*.

## Ports

When creating, the node does not have [ports](../../workflow/ports/README.md). Upon configuration, the node has the ports identical to ports of the base node. It is possible to redefine settings of ports, however, it should be noted that reconfiguration of the input ports can cause incompliance of the new input data with the requirements of the workflow inherited from the base node, and, as a consequence, execution error.

## Wizard

The radio button enables to select the workflow node that is planned to be repeatedly used for processing of the new data. The nodes *available* for selection are dispalyed in the form of a tree.

The nodes tree has, at least, two root branches:

* **Current module** contains a list of nodes of the module in which *Node execution* node is currently created.
* **Current package** (the package name) contains a list of nodes of the current package.

If the current package contains configured links to the external packages, the nodes of these packages will be displayed in the separate tree branches.

> **Important**: The nodes from the external packages, other workflows and supernodes will be displayed in the tree only on condition of access granted to them by their [access modifier](../../workflow/access-modifier.md).

The wizard interface enables to search for the nodes in the tree by means of filters, namely, by name and node comment.

The *Node execution* component cannot repeatedly use the [Loop](./cycle.md) and [Reference node](./unit-link.md) components.

-----

**Note**:

* When executing the node, the base node is not executed.
* [Model overfitting](../../workflow/training-processors.md) inherited from the base node is possible. However, the base node model will be unchanged.
