# Control Variables

The control variables port allows you to use variables to define a node's parameters. This means the node's behavior can be dynamically configured during workflow execution, offering more flexible data processing logic.

> **Note:** For nodes that have control variable ports, these are mostly hidden by default. To make such a port visible, select **Show control variables port** from the node's context menu.

Control variables don't have to be accepted from another node. When configuring the port, you can define the list of control variables and their default values.

If you set a value for at least one control variable in the input port of a node, a switch appears in the node configuration wizard, allowing you to choose how the node's parameters are set:

* ![](../../images/icons/propedit/value_default.svg)&nbsp;**Manually:** You directly enter the parameter value.  
* ![](../../images/icons/propedit/variable_default.svg)&nbsp;**Using a variable:** You select a control variable that provides the parameter's value.

To pass a value from the control variable port to any node parameter, use the format `%VAR%`, where `VAR` is the name of your control variable.

This is available for specifying:

* A file name in nodes from the [Import](https://help.megaladata.com/userguide/integration/import/) and [Export](https://help.megaladata.com/userguide/integration/export/) groups.

* A table name in the [Database export node](https://help.megaladata.com/userguide/integration/export/database.html).

## Examples of using control variables:

* As the filter parameter for the [Row Filter](../../processors/transformation/row-filter/README.md) component.  
* As the SQL query parameter for the [Database import component](../../integration/import/database.md) (a variable containing the SQL query text).
* To dynamically name an exported file. For example, to create an [Excel](https://help.megaladata.com/userguide/integration/export/excel.html) file name that includes the current date, you could use `FileName_%today%.xlsx`, where `today` is a variable containing the current date.

**Read on:** [Workflow Variables](workflow-variables.md)

