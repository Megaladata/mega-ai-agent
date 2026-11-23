# ![Features of Fields](../../images/icons/components/reform-data-source_default.svg) Features of Fields

The node enables to change the following features of the data set fields:

* Name
* Caption
* Data type
* Data kind
* Designation

The detailed information on the fields features is provided in [Features of data set field](../../data/datasetfieldoptions.md)

> **Important:** The node does not impose restrictions when changing the field data type. As far as possible, when transforming, information completeness is preserved but in some cases, type change can cause loss of information. A user must consider this fact when taking decision on transformation of the data type.
>
> ---
>
> **Important:** There are peculiarities observed when changing the field type from the *"String"* to the *"Logical"* one: in the general case, the strings that are transformed to the logical data type are selected from the current locale. These strings are as follows for the Russian locale: "TRUE" that are transformed to the logical `TRUE` ones, and "FALSE" that are transforned to the logical `FALSE` ones. If it is possible to set the string to the number (for example, "0" or "7"), it is set in the following way: "0" — to logical `FALSE`, and all the rest — to logical `TRUE`. In all other cases: "ANY STRING" is set to `null`, including "" (empty string).

The node enables to [cache](../../workflow/caching.md) the whole data set, or its separate fields.

### Input

* ![Input data source](../../images/icons/app/node/ports/inputs/table_inactive.svg) **Input data source**: the port for connection of the input data set.

### Output

* ![Output data set](../../images/icons/app/node/ports/inputs/table_inactive.svg) **Output data set**: the port with changed field features.

## Wizard

* **Cache**: caching parameters of the output data set. The following options are available:
   * **Disabled** means that caching will not be performed. It is used by default.
   * **On activation**: on the node activation, the whole data set will be cached.
   * **While handling**: only those output data set fields will be cached data of which are requested by the subsequent workflow nodes or visualizer.
   * **Selected fields**: caching parameters are separately set for each field.
* **List of fields features**: fields features of data set are represented in the table form. Double click on the selected field calls the dialog to edit its features. The dialog enables not only to edit the [standard field features](../../data/datasetfieldoptions.md) but also to set the caching parameter. This option is available if the *Selected fields* caching mode is set for the whole node. The following options are available:
   * **Disabled** means that caching will not be performed. It is used by default.
   * **On activation**: on the node activation, the data set field will be cached.
   * **While handling**: the field will be cached in the case of the first request of its data by the subsequent workflow nodes or visualizer.
