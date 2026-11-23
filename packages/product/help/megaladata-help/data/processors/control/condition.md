# ![Condition](../../images/icons/components/condition_default.svg) Condition

The component is used in the workflow branch point as a switch between data processing options. Only one workflow branch is executed according to the given conditions, and execution of other branches is locked.

The active branch is detected as follows:

1. The branches are successively tested for authenticity from the top of the list downwards starting from the first one.
1. When detecting the branch with the "true" value, testing is stopped, the branch becomes active, and other branches are locked, even if there are true branches down the list.
1. If all branches have the "false" value, the special *Otherwise* branch will be activated.

## Ports

Primarily, there are no input and output [ports](../../workflow/ports/README.md), they are created by a user in the wizard. It is sufficient to add input ports and save the component settings for initial setup. It is not required to configure the condition list, as the input data structure has not been transferred to the component. There are the following types of ports:

### Input

* ![Input variables](../../images/icons/app/node/ports/inputs/variable_inactive.svg) **Input variables**: set of variables.
* ![Input data source](../../images/icons/app/node/ports/inputs/table_inactive.svg) **Input data source** — data table.

### Output

* ![Output variables](../../images/icons/app/node/ports/outputs/variable_inactive.svg) **Output variables**: set of variables.
* ![Output data set](../../images/icons/app/node/ports/outputs/table_inactive.svg) **Output data set**: data table.

## Wizard

### Step 1. Configuration of the Node Ports

It enables to provide the presence of the required ports. It is possible to set a type, name and caption for each port. It will be displayed when hovering a cursor over it.

* ![Create new port](../../images/icons/toolbar-controls/plus_default.svg) **Add** enables to create a new input port as follows:
   * ![For variables](../../images/icons/app/node/ports/inputs/variable_hover.svg) **Variables** — for variables.
   * ![For table](../../images/icons/app/node/ports/inputs/table_hover.svg) **Table** — for table.
* ![Move port down](../../images/icons/toolbar-controls/movedown_default.svg) **Move down**, ![Move port up](../../images/icons/toolbar-controls/moveup_default.svg) **Move up**: it is possible to define location of the selected port relative to the component node by moving it.
* ![Edit port parameters](../../images/icons/toolbar-controls/edit_default.svg) **Edit** eanbles to edit port parameters.
* ![Create output](../../images/icons/checkbox-states/checked_default.svg) **Pass to output**: the output port will be created in each branch for the selected input port.
* ![Delete port](../../images/icons/toolbar-controls/delete_default.svg) enables to delete port.
* ![Delete all ports](../../images/icons/toolbar-controls/delete-all_default.svg) enables to delete all ports.

### Step 2. Configuration of the Condition List

**Condition branch list** contains options of the further workflow execution.

* ![Add branch](../../images/icons/toolbar-controls/plus_default.svg) **Add** enables to add a new condition branch.
* ![Move branch down](../../images/icons/toolbar-controls/movedown_default.svg) **Move down**, ![Move branch up](../../images/icons/toolbar-controls/moveup_default.svg) **Move up** enable to prioritise the selected branch by its moving relative to other branches.
* ![Delete branch](../../images/icons/toolbar-controls/delete_default.svg) enables to delete branch.
* ![Delete all branches](../../images/icons/toolbar-controls/delete-all_default.svg) enables to delete all condition branches.

**Condition**: the area for configuration of conditions for particular branch. It is displayed when selecting the listed branch.

* ![Add new condition](../../images/icons/filterdata/filterdata-add_18x18.svg) enables to add a new condition into the branch. Upon pressing, its configuration window will be opened:
   * **Field** contains a list of all variables, table columns and pointer of table records supplied to input ports of the component. The selected object will be used for comparison.
   * **Aggregation** contains a list of the [aggregation](../func/aggregation-functions.md) methods applied to the table fields. The list is not available for variable fields.
   * **Condition** provides selection of the comparison method.
   * **Compared value**: the value with which the selected object will be compared.
* **AND/OR**: switch button appears between two conditions in the branch.
   * **AND**: the connected conditions will have the "true" value if both of them are true.
   * **OR**: the connected conditions will have the "true" value if at least one condition is true.
* ![**Delete all conditions**](../../images/icons/toolbar-controls/delete-all_default.svg) **Delete all conditions** enables to delete all conditions for the selected branch.

> **Note:** the condition is checked based on the atomic values, for example, "A > 1". A variable can represent such value. If a table is supplied to the input, the field will denote not only one value but the whole column. In this case, it is important to set the column to one value using the aggregation methods.
>
> **IMPORTANT**: When writing complex criteria, **AND** operator will be prioritised.
> For example, complex criterion of the following type: "A **OR** B **AND** C **OR** D **AND** E **AND** F" will be executed in the following way: "A **OR** (B **AND** C) **OR** (D **AND** E **AND** F)"

**Debug mode** ![Debug mode](../../images/icons/checkbox-states/checked_default.svg) will be used to check data correctness at the output ports regardless of conditions. The branches specified in *Run condition branch* list will be active. It includes the following components:

* **List of user branches**: the branches added by a user. It is possible to select one of them.
* **All branches** enable to activate execution of all branches, including *Otherwise* branch.
* **Otherwise** enables to activate execution of only *Otherwise* branch.
