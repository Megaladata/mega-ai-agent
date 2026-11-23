# ![](../../images/icons/components/data-to-xml_default.svg) XML Generation

The component is designated for the table transformation to XML.

> **Important**: For the node operation, it is required to pre-create [connection to the XSD schema](../../integration/connections/list/schemes.md) and connect it with *Connect to XSD schema source* input port. The connection is performed similar to [connection to DB](../../quick-start/database.md).

## Ports

### Input

* ![](../../images/icons/app/node/ports/inputs/link_inactive.svg) Connect to XSD schema source (required port) allows for connection to [Connection to set of the XSD schemas](../../integration/connections/list/schemes.md) node.
* ![](../../images/icons/app/node/ports/inputs/table_inactive.svg) Data source: the data set to be transformed.
* ![](../../images/icons/app/node/ports/inputs-optional/variable_inactive.svg) [Control variables](../../workflow/variables/control-variables.md) (optional port): it is possible to set values of the wizard parameters using the port variables. To display the port, it is required to select the following item in the context menu of the node: *Show control variables port*.

### Output

* ![](../../images/icons/app/node/ports/inputs/table_inactive.svg) Output data set: the table that contains resulting XML and their identifiers (ID).

## Wizard

### Step 1. Fields Mapping for XML Generation

* **Connection**: the state of connection to the XSD schema.
* **Root element**: selection of the XSD schema root element the structure of which enables to describe the resulting XML.
* **Object linking**: lists of the input table fields and items of the resulting XML schema are represented. It is required to establish the links between the table fields and XML schema items. It can be done in several ways:
   * *Drag-and-drop* method: drag the field caption from the left list of the fields to the XML schema item. Types of the table field data and linked item must coincide.
   * It is necessary to select the required item of the XML schema in the right table and select the input table field caption from the drop-down list in the *Related fields* column. The drop-down list filter in ![](../../images/icons/filter-switcher/filterswitch-on_default.svg) state displays only the fields that have not been connected with items yet, and it displays all fields for selection in ![](../../images/icons/filter-switcher/filterswitch-off_default.svg) state.
   * Use ![](../../images/icons/toolbar-controls/auto-connect_default.svg) *Auto Link All* button. It providies auto linking based on values of captions and types of fields data of the input table and XML schema items.

> **Note**: If the link between the field and object has been incorrectly established, it can be deleted. In order to do that, it is required to select the caption and press ![](../../images/icons/link-grid/remove-link_hover.svg) button in the line. If all links are to be deleted, ![](../../images/icons/toolbar-controls/remove-all-links_default.svg) *Delete all links* button is used.

* **Specify time zone** defines whether the [time zone](https://en.wikipedia.org/wiki/Time_zone) information is specified according to [ISO_8601](https://en.wikipedia.org/wiki/ISO_8601) in the XML items that contain the date and/or time. Possible values:
   * Do not specify.
   * Do not specify for date: do not specify the time zone for the [date](https://www.w3.org/TR/xmlschema-2/#date) type items.
   * Specify always.

### Step 2. XML Generation Parameters

* **XML Document Identification**: selection of one of the options used to fill XML with the input table data:
   * **The whole data set (it is used by default)**: all records of the input table will be included into the resulting XML. In this case, the output data set contains the only record.
   * **By rows**: XML will be generated for each input table record. In this case, the output data set contains the same number of records as the input table does. *ID* output column contains the integer value of the record number.
   * **By identifier**: the output table records are grouped by the given identifier. XML will be generated for each group of records. In this case, the output data set contains the number of records that is equal to the count of unique identifier values. When this setting is selected, *ID* output column contains the identifier values.

> **Note**: If the input data set is empty, the row count is equal to zero at the output with any settings of *XML Document Identification*.

* **Configure Formatting**: the area includes the following checkboxes:
   * **Add indents and line breaks**: each item is located in the separate row in the resulting XML. Indents are set according to the hierarchy of items.
   * **Escape tabs and line breaks in attributes**: replacement of tab characters in attributes of the resulting XML to*`&#x9;`* and line feed character to *`&#xA;`*
   * **Escape single and double quotes**: replacement of single quotes in the resulting XML to *`&apos;`* and double quotes to *`&quot;`*.