# ![Union](../../images/icons/components/union_default.svg) Union

The source data set is appended with the records of the joined data sets by means of the Union handler. The union is an analogue of the `UNION` operation in SQL.

%spoiler%Example:%spoiler%

Source table:

|Full name|Year of birth|
|:-|:-|
|Anderson|1982|
|Baker|1963|
|Boucher|1984|
|Cameron|1965|

Joined table:

|Full name|Year of birth|Labor participation coefficient|Cluster|
|:-|:-|:-|-:|
|Clark|1972|\> 0.8|1|
|Davis|1956|\> 0.8|1|
|Evans|1978|0.5 - 0.8|2|
|Adams|1979|0.5 - 0.8|2|
|Allen|1980|0.2 - 0.5|3|
|Bell|1983|< 0.2|4|

Resulting table:

|Full name|Year of birth|Labor participation coefficient|Cluster|
|:-|:-|:-|-:|
|Anderson|1982|null|null|
|Baker|1963|null|null|
|Boucher|1984|null|null|
|Cameron|1965|null|null|
|Clark|1972|\> 0.8|1|
|Davis|1956|\> 0.8|1|
|Evans|1978|0.5 - 0.8|2|
|Adams|1979|0.5 - 0.8|2|
|Allen|1980|0.2 - 0.5|3|
|Bell|1983|< 0.2|4|

%/spoiler%

### Input

* ![Main table](../../images/icons/app/node/ports/inputs/table_inactive.svg) **Main table** is the first table participating in the union.
* ![Joined table](../../images/icons/app/node/ports/inputs/table_inactive.svg) **Joined table** is the second table participating in the union. All subsequent tables are added by means of *Add another port*.
* ![Add port](../../images/icons/toolbar-controls/plus-native_default.svg) **Add another port** enables to create new ports for the subsequent joined tables that will be automatically numbered.

### Output

* ![Output data set](../../images/icons/app/node/ports/inputs/table_inactive.svg) **Output data set**: the table that contains fields of all tables supplied to the input ports, with the exception of the joined tables fields selected as the mapped ones. The selected fields are united and joined to the data set according to the set mapping. The fields without mapping append the data set. Prefixes can be optionally added to the captions of the appended fields.

## Wizard

It is required to map the fields of the main and joined tables. The data of the mapped fields is joined into one field in the resulting data set. This field is given the *Name* and *Caption* of the main table field. The data of the fields that are not mapped are placed into separate columns of the resulting data set that can be checked using prefixes.

Mapping is possible only for the fields with the same data type. When the wizard is initially opened, the fields with the same name and data type are automatically mapped. Manual setting is performed using the following control elements:

* **Mapping configuration area**: the table in which the *Main table* fields are in the left part, and *Connected tables* selected with checkboxes and drop-down lists are in the right part. *Connected tables* are shown as follows: *Connected table*, *Connected table 2* ... *Connected table N*.
   * **Checkbox**: the fields involved into mapping are selected with a checkbox in these columns of *Connected tables*.
   * **Drop-down lists of fields** are in each row of the mapping table. The list enables to select the field of the joined table that will be mapped to the main table field. The ![Filter](../../images/icons/filter-switcher/filterswitch-on_default.svg) switch enables to change the method of fields representation: complete list or only the fields that have not been selected yet.
* **Use prefixes**: it is applied if it is required to select not mapped columns of the joined tables. For such columns, it is possible to set the following prefixes in the resulting data set:
   * **Name prefix**: the prefix added to the name of the table fields that are not mapped is specified in this field. Composition of the name prefix conforms to the rules of [Features of data set fields](../../data/datasetfieldoptions.md).
   * **Caption prefix**: the prefix added to the caption of the table fields that are not mapped is specified in this field. It is named according to *Features of data set fields*.


It is possible to sort the table fields in the union configuration area. For this purpose, it is required to click on the table header (Main table or Joined table). It is possible to sort the records in the same manner by the field index in the table (No).
