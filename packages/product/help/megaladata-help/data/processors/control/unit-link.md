# ![Reference Node](../../images/icons/controls/reference_link.svg) Reference Node

Reference node enables to receive results of processing (execution) of the other node that can be located outside the current [Supernode](./submodel.md), [Workflow](../../workflow/README.md), *Module* or *Package*. As opposed to the [Node execution](../../processors/control/execute-node.md) component, the *Reference node* component does not accept input data, and it can be used only as source of the data from other nodes. According to the strategy of [decomposition](../../quick-start/design-principles.md#decomposition) of the complex analytic solution that can consist of several *Workflows* or *Packages*, it performs the task of data transfer between its independent blocks.

## Ports

When creating, the *Reference node* does not have [ports](../../workflow/ports/README.md). Upon the node configuration, the output ports of the data source node are displayed. Configuration of these ports is available only in the source node.

## Wizard

The nodes available for reference creation are displayed in the wizard window in the form of a tree. The current module nodes and all nodes available for reference are separately displayed for navigation convenience. Availability of nodes is defined by their visibility (refer to the next section - "Visibility of nodes"). It is required to select one of the nodes the output data of which is to be received in the current workflow location.
    
The wizard interface enables to search for the nodes in the general list by means of filters, namely, by name and node comment.

## Visibility of Nodes

The nodes that are outside the current *Supernode*, *Workflow*, *Module* or *Package* are not available for selection by default. To configure the node visibility, it is required to install corresponding [Access modifier](../../workflow/access-modifier.md). To provide a reference to nodes of the other *Package*, it is required to create a [reference to the other Package](../../workflow/link-to-packet.md) in the current *Package*.

> **Important**: When executing the *Reference node*, the node that is the reference source is executed.