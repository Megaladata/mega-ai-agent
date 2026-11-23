
# Links Interface

In Megaladata, the **Links** interface is a page/window in port configuration wizards that allows you to map data fields or variables between the input and output datasets of a port.

* The **Inputs** list shows the fields (or variables) from the dataset the port accepts.  
* The **Outputs** list shows the fields (or variables) that the port will output after transformation or mapping.

You need to map the relevant fields from the **Inputs** list to the corresponding fields in the **Outputs** list.

## Mapping fields

1. In the **Inputs** list (left side), click the field you want to map.  
2. Drag the selected input field over to the corresponding field in the **Outputs** list (right side).  
3. Release the mouse button. A graphical link appears, connecting the mapped fields.

To delete a specific link, click the ![](../../images/icons/link-grid/remove-link_hover.svg)&nbsp;**Delete** button on that link's line.

> **Important note:** You can only map fields that have [compatible data types](../../data/compatibility.md).

## Outputs of an input port

The content displayed in the **Outputs** list depends on the type of data the input port accepts:

* **Table data:** If the port accepts table data, the **Outputs** list shows usage types of the port's output fields, that is, how the node's algorithm will process them.  
* **Variables:** If the port accepts variables, the **Outputs** list shows the current variable values.

## Inputs list toolbar

The toolbar above the **Inputs** list provides these commands:

* ![](../../images/icons/toolbar-controls/get-column-list_default.svg)&nbsp;**Get list**: Downloads the input fields list if it's currently empty (for example, when importing data from a database using a custom SQL query).
  > This command is only available when configuring an output port.

* ![](../../images/icons/toolbar-controls/create-out-column_default.svg)&nbsp;**Create output**: Creates a field in the **Outputs** list with the same name and type as the selected input field and automatically maps them.  
* ![](../../images/icons/toolbar-controls/create-out-columns_default.svg)&nbsp;**Create outputs for all inputs**: Creates matching fields in the **Outputs** list for all fields currently in the **Inputs** list and automatically maps them.  
* **Derived columns creation type**: This button appears only if the component's algorithm calculates new fields based on the source fields (for example, the [Replace](../../processors/transformation/substitution/README.md) component). It determines how these new, derived fields are handled in the output:  
  * ![](../../images/icons/toolbar-controls/tune_default.svg) **By default**: The behavior (**Add** or **Replace**) depends on the specific component.  
  * ![](../../images/icons/toolbar-controls/plus_default.svg) **Add**: Adds the newly calculated fields to the output dataset alongside the original fields used in the calculation.  
  * ![](../../images/icons/toolbar-controls/edit_default.svg) **Replace**: Replaces the original fields used in the calculation with the newly calculated fields in the output dataset.

## Output list toolbar

The toolbar above the **Outputs** list provides these commands:

* ![](../../images/icons/toolbar-controls/plus_default.svg)&nbsp;**Add**: Adds a new, unmapped field to the **Outputs** list and opens the [field parameters](../../data/datasetfieldoptions.md) dialog for configuration.
* ![](../../images/icons/toolbar-controls/clone_default.svg)&nbsp;**Clone**: Adds a copy of the selected field and opens the field parameters dialog.
* ![](../../images/icons/toolbar-controls/edit_default.svg)&nbsp;**Edit**: Opens the field properties dialog for the currently selected field in the **Outputs** list. You can also open this dialog by double-clicking the field.  
* ![](../../images/icons/toolbar-controls/moveup_default.svg)&nbsp;**Move up** / ![](../../images/icons/toolbar-controls/movedown_default.svg)&nbsp;**Move down**: Changes the vertical position of the selected field in the **Outputs** list. The top-to-bottom order in this list determines the left-to-right column order in the port's output table.  
* ![](../../images/icons/toolbar-controls/sync-columns_default.svg)&nbsp;**Map columns**: Automatically attempts to map fields of the **Outputs** and **Inputs** lists based on name and data type compatibility.(See [Automapping Fields](./field-synchronization.md) for more details.)
* ![](../../images/icons/toolbar-controls/auto-sync-columns_default.svg)&nbsp;**Automapping**: Clicking this buttom runs the **Map columns** action automatically whenever the node is executed.  
*![](../../images/icons/toolbar-controls/delete-all_default.svg)&nbsp;**Delete all**: Removes all fields from the **Outputs** list.
* There is also a ![](../../images/icons/toolbar-controls/delete_default.svg)&nbsp;**Delete** option for each separate field in the list; it appears next to the its usage type when you hover over the field. This button deletes the currently selected field from the **Outputs** list.

## Additional wizard commands

These commands often appear below or between the lists:

* ![](../../images/icons/toolbar-controls/auto-connect_default.svg)&nbsp;**Auto link**: Attempts to create links between currently unlinked fields in the **Inputs** and **Outputs** lists.  
  * This command *does not* add or remove any fields from the lists.  
  * Existing links are *not* changed.  
  * The algorithm matches unlinked fields based on these criteria, in order:  
    1. Compatible [data type](../../data/compatibility.md) AND matching name (case-insensitive).  
    2. Compatible data type AND matching caption (case-insensitive).  
* ![](../../images/icons/toolbar-controls/remove-all-links_default.svg)&nbsp;**Delete all links**: Removes all existing mapping links between the **Inputs** and **Outputs** lists.  
* ![](../../images/icons/toolbar-controls/order-links_default.svg)&nbsp;**Rearrange links**: Rearranges the fields vertically within their lists to minimize visual clutter from crossing link lines.  
* ![](../../images/icons/toolbar-controls/help_default.svg)&nbsp;**Show lost links**: Highlights fields in the **Outputs** list that were previously mapped to input fields, but those corresponding input fields are no longer present in the input dataset (this can happen if the upstream data structure changes).

## Selecting multiple fields

To select multiple fields simultaneously in either the **Inputs** or **Outputs** list:

* <kbd>Ctrl</kbd> + click: Hold the <kbd>Ctrl</kbd> key and click individual fields you want to select or deselect.  
* <kbd>Shift</kbd> + click: Click the first field in a desired range, hold the <kbd>Shift</kbd> key, and then click the last field in the range. All fields between (and including) the first and last clicked fields will be selected.

You can combine these methods. For example, select a block of fields using <kbd>Shift</kbd> + click, then hold <kbd>Ctrl</kbd> while clicking to add or remove individual fields from that selection.

**Read on:** [Table Interface](interface-table.md)

