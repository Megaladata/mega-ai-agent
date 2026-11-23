# Optional Ports

Optional ports allow for more flexibility in configuring components. In Megaladata, only input ports can be optional. However, these ports can be used even if they are not connected to receive any input data.

In the interface, optional ports have the same color indication as required ports, but dotted outlines.

Based on the structure of accepted data, there are two types of optional ports (indicated with a corresponding icon):

- Tabular data: ![ ](./../../images/icons/app/node/ports/inputs-optional/table_inactive.svg)
- Variables: ![ ](./../../images/icons/app/node/ports/inputs-optional/variable_inactive.svg)

## Optional tabular data ports

A tabular input port can be optional by default, as in the [Association Rules](../../processors/datamining/associative-rules.md) and [Transaction Clustering](../../processors/datamining/clustering-transactions.md) nodes. Sometimes, regular table ports can be configured as optional, e.g., as in [supernodes](../../processors/control/submodel.md):

![Configuring an optional port within a supernode](optional-input-port.png)

If you mark a supernode's input port as **optional**, as shown in the image, you will be able to run the supernode even if this port has no input data.

The table ports of such nodes as [JavaScript](../../processors/transformation/java-script/README.md), **Python**, [REST Request](../../processors/integration/rest-request.md), and [SOAP Request](../../processors/integration/soap-request.md) are optional, as these nodes can function with no input data.

## Optional variable ports

**Control variables** and **Input variables** are optional variable ports.

In Megaladata, most nodes (but not all) have optional **Control variables** ports; for many nodes, these ports are hidden by default. To show them, select **Show control variables port** in the node's context menu. These ports allow you to customize internal settings of the nodes in your workflow.

Optional **Input variables** ports can be found in such nodes as [Program Execution](../../processors/integration/exec-program.md), [Calculator (Variables)](../../processors/variables/variables-calc.md), and some other. These ports allow for more flexibility in configuring the nodes' interaction.

## Publishing nodes with optional ports

If an input port of a published (shared) node is optional, it means that the element related to this port when sending a request to the Integrator is also optional. That is, if this element is missing in the request, there will be no data sent to the optional port. For example: If a variable port is optional, all variables will keep their default values as set when the package was published.

**Read on:** [Variables](../variables/README.md)