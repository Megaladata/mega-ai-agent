# ![](../../images/icons/components/sorting_default.svg) Sort

The handler sorts the input data set records. The algorithm provides serial sorting by several fields.

The following parameters are taken into account while sorting:

* **Order of sort fields**: according to the item position in the *Sort fields* list, the field sorting order changes.
* **Sort order**: the sorting order (![](../../images/icons/sorting/order-switcher-desc_default.svg) *Descending* or ![](../../images/icons/sorting/order-switcher-asc_default.svg) *Ascending*) is set for each sorted field.
* **Data case**: case sensitivity of fields while sorting is specified for the fields with ![](../../images/icons/data-types/string_default.svg)*String* or ![](../../images/icons/data-types/variant_default.svg) *Variable* data type.

The algorithm sorts the records by the first sort field according to the set order. If there are the same values, the strings that contain them are sorted by the second sort field, etc. according to the order of the sort fields.

### Input

* ![](../../images/icons/app/node/ports/inputs/table_inactive.svg) **Input data source**: the port for connection of the input data set.

### Output

* ![](../../images/icons/app/node/ports/inputs/table_inactive.svg) **Output data set**: the table with the data set sorted by the selected fields is output to the port.

## Wizard

The fields by which it is possible to perform sorting are displayed in the left list. The list complies with the input port fields.

It is possible to filter the list of fields by specifying the field name or caption in the filter area.

To configure sorting, it is required to move the required fields to the *Sort fields* list using the following methods:

* drag-and-drop method;
* double click on the field;
* by pressing *Add* ![](../../images/icons/toolbar-controls/arrow-r_default.svg) button.

Parameters of sorting configuration:

* **Order**: the field can take *Ascending* ![](../../images/icons/sorting/order-switcher-asc_default.svg) and *Descending* ![](../../images/icons/sorting/order-switcher-desc_default.svg) values;
* **Case**: to sort the string fields taking into account the case, it is required to select a checkbox in this field.

It is possible to change the fields sorting order:

* ![](../../images/icons/toolbar-controls/moveup_default.svg) **Move up** enables to move the selected *Sort field* up the list.
* ![](../../images/icons/toolbar-controls/movedown_default.svg) **Move down** enables to move the selected *Sort field* down the list.

To exclude sorting by the field, it is required to perform the following actions:

* move the record from the *Sort field* list to *Available fields*;
* double click on the field;
* ![](../../images/icons/toolbar-controls/delete_default.svg) *Delete field*.

To clear the whole list, it is required to press ![](../../images/icons/toolbar-controls/delete-all_default.svg) *Delete all...*.

> **Note**: Сharacters are compared and sorted according to the local settings of the user whose login is used to start Megaladata.
