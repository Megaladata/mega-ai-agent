# ![](../../images/icons/toolbar-controls/sort-asc_default.svg) Configure Sorting

Data sorting in the [Table](./README.md) visualizer is performed according to the rules described in the [Sorting](../../processors/transformation/sorting.md) node.

## Configuration Window

The fields used for sorting and the columns with the visibility disabled in the Table are displayed in the left list.

It is possible to filter the list of fields by specifying the field caption in the filter area.

To configure sorting, it is required to move the necessary fields to *Sort fields* list. It can be done as follows:

* by drag-and-drop method;
* by double click on the field with the left mouse button;
* by calling the drop-down menu using the right mouse button and pressing ![](../../images/icons/toolbar-controls/plus_default.svg) *Add* button;
* by pressing ![](../../images/icons/toolbar-controls/arrow-r_default.svg) *Add* button.

Parameters of sorting configuration are set in two adjacent columns:

* **Order**: the sorting type switch is displayed in the cells of this field. It can take *Ascending* ![Ascending](../../images/icons/sorting/order-switcher-asc_default.svg) and *Descending* ![Descending](../../images/icons/sorting/order-switcher-desc_default.svg) order.
* **Case-sensitive**: in the cells of this field on condition that the sorted values ![String type](../../images/icons/data-types/string_default.svg)*String* or ![Variant type](../../images/icons/data-types/variant_default.svg)*Variant* types, the checkbox is displayed. When the checkbox is selected, the case-sensitive field is sorted.

It is required to perform the following actions to exclude from the list of sorted fields:

* to drag the record from *Sort fields* list to *Available fields*;
* to press ![](../../images/icons/toolbar-controls/delete_default.svg) required field in column ![](../../images/icons/toolbar-controls/delete-all_default.svg) button;
* to call the drop-down menu by pressing the right mouse button and pressing ![](../../images/icons/toolbar-controls/delete_default.svg) *Delete* button.

To clear the whole list, it is required to press ![](../../images/icons/toolbar-controls/delete-all_default.svg) icon near the column with the same name by calling the drop-down menu, select ![](../../images/icons/toolbar-controls/delete-all_default.svg) *Delete all...*.

To change the sorting order, the navigational buttons are located above the table of sorted fields:

* ![](../../images/icons/toolbar-controls/moveup_default.svg) **Move up** enables to move the selected field up in the order list.
* ![](../../images/icons/toolbar-controls/movedown_default.svg) **Move down** enables to move the selected field down in the order list.

It is also possible to move the field by selecting the required field and calling the drop-down menu. Then press ![](../../images/icons/toolbar-controls/moveup_default.svg) *Move up* or ![](../../images/icons/toolbar-controls/movedown_default.svg) *Move down* depending on the required action.

When all settings are selected, it is required to press *Sort* to enable sorting in the table.

> **Note**: Comparison and sorting of characters are performed according to the local settings of the user that started the Megaladata server.
