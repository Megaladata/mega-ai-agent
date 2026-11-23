---
description: Explore the Table to Variables component in Megaladata. Learn about available fields, selected fields, and aggregation functions. Master the configuration wizard and see how the output dataset looks.
---
# ![Table to Variables](./../../images/icons/components/datatovariables_default.svg)&nbsp;Table to Variables Component

Use this component to convert tabular data into variables. The component creates a variable from the data in each table field. As a variable can have only one value, the component applies different [aggregation functions](./../func/aggregation-functions.md) to the field.

## Ports

### Input

* ![Input data source](./../../images/icons/app/node/ports/inputs/table_inactive.svg)&nbsp;**Input data source**: Accepts a data table.

### Output

* ![Output variables](./../../images/icons/app/node/ports/outputs/variable_inactive.svg)&nbsp;**Output variables**: Provides a list of variables that the component creates from the input data source by applying aggregation functions to field data.

## Configuration wizard

The first page of the wizard consists of two panes:
* **Available fields**: Shows the input dataset fields.
* **Selected fields**: Shows the result variables.

> **Note:** The wizard supports dragging fields between the panes.

### Available fields

To add a field to the **Selected fields** list on the right, do one of the following:
* Click the ![Move to Variables](./../../images/icons/dataset-operations/dsa-factor_default.svg)&nbsp;**Move to variables** button.
* Click **Move to variables** in the field's context menu.
* Or press <kbd>Alt</kbd> + <kbd>S</kbd>.

### Selected fields

When you add a field to the **Selected fields** list, the system assigns it a default aggregation function:
* **Sum** for numeric fields
* **Only** for all other fields

Use the mouse to manage selected fields. Drag fields within the list to change their positions. Move fields to the **Available fields** list to exclude them. Double-click a field to open the **Aggregation options** window.

You can also use the toolbar buttons to perform the same actions:
* ![Move up](./../../images/icons/toolbar-controls/moveup_default.svg)&nbsp;**Move up**: Move the selected item up the list.
* ![Move down](./../../images/icons/toolbar-controls/movedown_default.svg)&nbsp;**Move down**: Move the selected item down the list.
* ![Edit](./../../images/icons/toolbar-controls/edit_default.svg)&nbsp;**Edit**: Open the window for selecting available aggregation options for the selected field.
* ![Delete](./../../images/icons/toolbar-controls/delete_default.svg)&nbsp;**Delete**: Return the selected item to the **Available fields** list.
* ![Delete all](./../../images/icons/toolbar-controls/delete-all_default.svg)&nbsp;**Delete all**: Move all items back to the **Available fields** list.

The context menu provides the same actions:
* ![Move up](./../../images/icons/toolbar-controls/moveup_default.svg)&nbsp;**Move up**: Move selected fields up the list.
* ![Move down](./../../images/icons/toolbar-controls/movedown_default.svg)&nbsp;**Move down**: Move selected fields down the list.
* ![Edit](./../../images/icons/toolbar-controls/edit_default.svg)&nbsp;**Edit**: Open the window for selecting available aggregation options for the selected fields.
* ![Delete selected](./../../images/icons/toolbar-controls/delete_default.svg)&nbsp;**Delete selected**: Move selected fields back to the **Available fields** list.

You can also use these keyboard shortcuts for the same commands:
* <kbd>Ctrl</kbd> + <kbd>Up</kbd>: **Move up**
* <kbd>Ctrl</kbd> + <kbd>Down</kbd>: **Move down**
* <kbd>F2</kbd>: **Edit**
* <kbd>Delete</kbd>: **Delete selected**

## Output dataset

The output dataset contains variables that the component creates from fields using the selected aggregation functions. Each aggregation option produces a separate output variable.

The system determines variable names, captions, and values as follows:
* **Name**: If you have selected only one function, the variable name matches the field name. If you have selected multiple functions, the system adds a suffix to the name, indicating the corresponding function.
* **Caption**: To create the variable caption, the node combines the field name and the aggregation function name.
* **Value**: The node calculates the variable value from the field values using the selected aggregation function.

**Read on:** [Data Tree Processing](../data-trees/README.md)