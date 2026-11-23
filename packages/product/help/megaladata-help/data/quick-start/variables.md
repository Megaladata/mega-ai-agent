---
description: Using variables in the Megaladata analytical platform. Control variables. Examples of using variables.
---

# Using Variables

Besides data tables, variables are another fundamental type of object used for calculations and control flow in Megaladata Studio.

A _variable_ is a named value belonging to one of the available [data types](./../data/datatype.md).

Dedicated _variables ports_ are used to receive and transfer variables between nodes. This type of port can handle multiple variables simultaneously, both as inputs and outputs.

This way, a list of variables can be transferred from node to node.

Examples of using variables:

* Employing a variable in a formula for calculating an expression value within a [Calculator](./../processors/transformation/calc/README.md) node.
* Using a variable as a parameter of the [Condition](./../processors/control/condition.md) component.

## Control variables

Variables can also be used dynamically to configure node settings during workflow execution. These are often called [control variables](https://help.megaladata.com/userguide/workflow/variables/control-variables.html).

This allows node parameters themselves to be calculated or determined by the preceding workflow logic, enabling more flexible and adaptive data processing logic.

Here are some practical examples of employing control variables:

* Using a variable to define filtering criteria in the [Row Filter](./../processors/transformation/row-filter/README.md) (e.g., setting the filter condition based on a calculated variable).
* Using a variable that holds the complete SQL query string to be executed by a [Database](./../integration/import/database.md) import node.

**Read on:** [Interface](./../interface/README.md)