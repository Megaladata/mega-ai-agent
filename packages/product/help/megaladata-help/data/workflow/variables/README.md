# Variables

A *variable* is a named object that stores a single value of a specific data type. You can use variable values in calculations within nodes such as [Calculator](../../processors/transformation/calc/README.md) and [Condition](../../processors/control/condition.md). Variable values can also function as [control variables](./control-variables.md) to define node parameters.

## Creating variables

You can create variables in the following ways:

* Through the **User variables** output port settings, located in the upper-left corner of the workflow area.  
* Using the [Calculator (Variables)](../../processors/variables/variables-calc.md) or [Table to Variables](../../processors/variables/variables-from-table.md) nodes.

When creating a variable, you need to define the following:

* **Name:** Must be unique within a set of variables. It can include uppercase or lowercase Latin letters, underscores ("_"), and digits. The first character cannot be a digit. This name is used to reference the variable in Calculator's expressions.  
* **Caption:** A user-defined label that can contain any characters, used for clarification.  
* [Data type](../../data/datatype.md): The type of data the variable will hold (e.g., text, number, Boolean).  
* **Value:** The initial value assigned to the variable.

## Variable ports

Ports for variable sets are displayed graphically in the interface as follows:

* Variable input port: ![](../../images/icons/app/node/ports/inputs/variable_inactive.svg) 
* Variable output port: ![](../../images/icons/app/node/ports/outputs/variable_inactive.svg)

> **Important note:** In the workflow, you can link a **variable output port** only with a **variable input port**.

## Components for operating sets of variables

Megaladata provides the following components for working with sets of variables:

* [Replace (Variables)](../../processors/variables/variables-replace.md): Replaces the values of selected variables with values from a specified replacement table.  
* [Calculator (Variables)](../../processors/variables/variables-calc.md): Creates new variables based on entered expressions. Variables from an input port can be used in these expressions.  
* [Variable Union](../../processors/variables/variables-union.md): Combines two or more sets of variables into a single set.  
* [Variables to Table](../../processors/variables/variables-to-table.md): Transforms a set of variables into a data table.  
* [Table to Variables](../../processors/variables/variables-from-table.md): Transforms a data table into a set of variables.

**Read on:** [Control Variables](control-variables.md)
