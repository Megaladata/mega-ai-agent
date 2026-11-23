# Table Interface

The **Table** interface in port configuration wizards displays data in a table with the following columns:

* **Inputs**: Names of the fields or variables from the port's input dataset. 
* **Outputs**: Names of the fields or variables for the port's output dataset. 
* **Name**: Editable names for the fields or variables of the port's output dataset.
* [Data type](../../data/datatype.md):  Data types of the fields in the port's output dataset. This column is only visible when editing a port that accepts table data.
* **Usage type**: Usage types for the fields or variables in the port's output dataset. For more details on field usage types, refer to the [Dataset Field Parameters](../../data/datasetfieldoptions.md) section.
* **Value**: Values of the variables in the port's output dataset. This column is only visible when editing a port that accepts variables.

You can edit cells in the **Inputs** column by selecting from a list of available fields or variables of the port's input dataset. This allows you to map each output field or variable to a corresponding input field or variable.

> **Note:** The selection list excludes fields or variables that are already in the table or have an [incompatible data type](../../data/compatibility.md).

## Table toolbar commands

* ![](../../images/icons/toolbar-controls/plus_default.svg)&nbsp;**Add**: Adds a new field or variable to the list and opens a dialog to edit its features.
* ![](../../images/icons/toolbar-controls/plus_default.svg)&nbsp;**Clone**: Adds a copy of the selected field or variable and opens a dialog to edit its parameters. Cloning copies all the attribute of the field (variable), except for the value of the source dataset field (variable) related to it.
* ![](../../images/icons/toolbar-controls/edit_default.svg)&nbsp;**Edit**: Opens the edit [field parameters](../../data/datasetfieldoptions.md) dialog. You can also open this dialog by double-clicking a table row or by pressing <kbd>F2</kbd>.
* ![](../../images/icons/toolbar-controls/moveup_default.svg)&nbsp;**Move up** / ![](../../images/icons/toolbar-controls/movedown_default.svg)&nbsp;**Move down**: Changes the selected field's position in the list. The fields in the port's output table will appear from left to right in the same order as they are listed from top to bottom.
* ![](../../images/icons/toolbar-controls/sync-columns_default.svg)&nbsp;**Map columns**: Maps the list of the port's output fields or variables to the list of its input fields or variables. For more details on the mapping algorithm, see [Automapping Fields](./field-synchronization.md).
* ![](../../images/icons/toolbar-controls/auto-sync-columns_default.svg)&nbsp;**Automapping**: When this mode is enabled, the **Map columns** command runs automatically when you execute the node.
* ![](../../images/icons/toolbar-controls/auto-connect_default.svg)&nbsp;**Auto link**: Attempts to link output fields or variables with input fields or variables without changing the lists themselves (no new fields are added). Existing links remain unchanged. The algorithm tries to map unlinked output fields or variables to unlinked input ones based on these criteria, in order:  
  1. Compatible [data type](../../data/datatype.md) and matching name (case-insensitive).  
  2. Compatible [data type](../../data/datatype.md) and matching caption (case-insensitive).
   
* ![](../../images/icons/toolbar-controls/remove-all-links_default.svg)&nbsp;**Delete all links**: Deletes all existing links between input and output fields (variables).
* ![](../../images/icons/toolbar-controls/help_default.svg)&nbsp;**Show lost links**: Displays missing fields from the port's input dataset that were previously linked to existing output fields. This can occur if the input data structure changes.
* ![](../../images/icons/toolbar-controls/delete-all_default.svg)&nbsp;**Delete all**: Clears the **Outputs** list.
* ![](../../images/icons/toolbar-controls/delete_default.svg) **Delete**: This button can be found in the last table column, next to each field's usage type. It deletes the row from the **Outputs** list. This icon appears when a row is selected or when you hover your cursor over a row.

## Selecting multiple items

To configure multiple items in the table simultaneously, you can select them using these methods:

* Press and hold <kbd>CTRL</kbd> and click each item you want to select. Clicking a selected item again while holding <kbd>CTRL</kbd> deselects it.  
* Click an item, then press and hold <kbd>Shift</kbd> and click another item. This selects both items and all items between them.

You can use both methods together. For example, select a range of items using <kbd>Shift</kbd>, then press and hold <kbd>CTRL</kbd> to add or remove individual items from the selection.

**Read on:** [Service Ports](service-ports.md)
