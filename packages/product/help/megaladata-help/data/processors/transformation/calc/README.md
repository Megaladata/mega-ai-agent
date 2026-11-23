# ![ ](../../../images/icons/components/calc-data_default.svg)Calculator

It enables to create the new fields that are calculated by the defined formula based on the values of variables, other fields and **functions**, or using the [JavaScript](./javascript.md) code.

### Input

* ![ ](../../../images/icons/app/node/ports/outputs/table_inactive.svg) Input data source (data table);
* ![ ](../../../images/icons/app/node/ports/inputs-optional/variable_inactive.svg) Input variables (variables), optional.

### Output

* ![ ](../../../images/icons/app/node/ports/outputs/table_inactive.svg) Output data set (data table).

## Wizard

The wizard window includes the following areas:

1. [List of expressions](#list-of-expressions).
2. [The expression code area](#the-expression-code-area).
3. [Fields/variables](#fields/variables).
4. [List of functions](#list-of-functions).

### List of Expressions

The area is designated for entry of *Expressions*, namely, calculated fields to be added to the input data set as the result of processing. The expression value in each data set row will be calculated using the [formula](./expression.md) or the JavaScript code.

It is possible to create a new expression using the toolbar area or the context menu. There are the following toolbar and context menu operations:

* ![ ](../../../images/icons/calcdata/expression_default.svg)|![](../../../images/icons/calcdata/javascript_default.svg) **Syntax** (drop-down list) enables to set [syntax of the calculator expressions calculation](#Calculator-syntax).
* ![ ](../../../images/icons/toolbar-controls/edit_default.svg) **Edit** enables to set expression parameters.
* ![ ](../../../images/icons/toolbar-controls/up_default.svg) **Move up** enables to move the expression one item position up the list.
* ![ ](../../../images/icons/toolbar-controls/down_default.svg) **Move down** enables to move the expression one item position down the list.
* ![ ](../../../images/icons/toolbar-controls/plus_default.svg) **Add expression** enables to add a new expression with the default parameters.
* ![ ](../../../images/icons/toolbar-controls/clone_default.svg) **Add expression by the example** enables to add a new expression with data type, description and formula similar to the current expression.
* ![ ](../../../images/icons/toolbar-controls/delete_default.svg) **Delete expression** enables to delete the current expression.
* ![ ](../../../images/icons/toolbar-controls/delete-all_default.svg) **Delete all expressions** enables to delete all existing expressions.

When adding and editing expressions, the dialog of parameters editing is displayed. The following expression parameters can be changed:

* **Name**: it is required to enter the [field name](../../../data/datasetfieldoptions.md) assigned to the column in the output data set.
* **Caption**: it is required to enter the [field caption](../../../data/datasetfieldoptions.md) assigned to the column in the output data set.
* **Data type**: it is required to select [data type](../../../data/datatype.md) of the field in the output data set.
* **Intermediate**: when selecting this checkbox, the expression can be used in calculations but it is not included into the list of fields of the output data set.
* **Cache**: saving of the earlier calculated expression value is reasonable in the case of the repeated use of the expression values by the subsequent handlers and visualizers in order to avoid repeated calculations.
* **Description**: clarifying information.

> **Important:** The name must be unique. It must start from the capital or lower case Latin letter or from the underscore character. Succeeding name characters can be the same, or they can be digits.

When you first open the wizard, the list of expressions contains one real item with `Expr0` name. `ExpressionN` caption and `ExprN` name are assigned to the new expression by default where `N` is a number providing uniqueness.

### The Expression Code Area

It is required to set the [expression calculation formula](./expression.md) or the [JavaScript code](./javascript.md) in the code area depending on the selected calculator syntax. It is possible to insert references to the input fields/variables and syntactic constructions of functions into the expression code by double click on them in the corresponding areas or by dragging them with the mouse. References to the expressions created in the *Calculator* can be set in the code area by the manual input of the expression name.

Changes in the code area are saved on exit.

### Fields/Variables

The area contains the list of fields and variables supplied to the handler input. The list and features of fields/variables are defined when configuring input ports of the handler.

Double click on the list item position enables to enter the field/variable name to the expression code area. The Drag-and-Drop method enables to perform the same actions.

### List of Functions

Name, input argument and description of the **functions available for use**.

It is possible to filter by the function category and name.

Double click on the position of the selected function enables to enter its syntax to the expression code area. The Drag-and-Drop method enables to perform the same actions.

It is possible to insert references to the fields/variables and syntactic constructions of functions into the expression code by double click on them in the corresponding areas or by dragging them with the mouse.

## Calculator Syntax

There are two methods used to calculate expressions in the calculator:

* ![ ](../../../images/icons/calcdata/expression_default.svg) [Expression](./expression.md).
* ![ ](../../../images/icons/calcdata/javascript_default.svg) [JavaScript](./javascript.md).

To select the syntax, it is required to select *JavaScript* or *Expression* in the expressions list menu (refer to Figure 1).

![Select calculator mode](./readme-1.png)

> **Note: It is required to select ** Calculator mode *Expression* or *JavaScript* for all fields, namely, it is not possible to set *Expression* syntax for one field, and *JavaScript* - for another.
