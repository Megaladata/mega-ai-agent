# ![ ](../../images/icons/data-sources/file-excel-import_default.svg) Import from the Excel File

It is used for data import from the Microsoft Excel files.

### Input Ports

* ![ ](../../images/icons/app/node/ports/inputs-optional/variable_inactive.svg) [Control variables](../../workflow/variables/control-variables.md) (optional port): it is possible to set values of the wizard parameters using variables.

### Output Ports

* ![ ](../../images/icons/app/node/ports/inputs/table_inactive.svg)Imported data set

## Wizard

The wizard contains several configuration stages.

### Step 1. Import from Excel File

The following parameters are specified at the first configuration stage:

* **File storage** enables to display information on method of connection to the source file.
* **File name/URL** enables to set a path to the imported file when the connection is local, or a file name when using connection to a folder. ![ ](../../images/extjs-theme/form/open-trigger/open-trigger_default.svg) button calls the file selection dialog.
* *Data source* group of parameters
   * **Object selection**: it is requested to select one of the selection options of the Excel object containing the imported data.
      * **By number**: by the workbook sheet order number.
      * **By name**: by the workbook sheet name.
      * **Named range**: by the name of the named range created in the workbook.
   * **Whole sheet**: area of the sheet containing data for import is automatically defined.
   * **Reference style**: it is requested to select one of the identification options of the Excel worksheet cells.
      * **A1**: according to this format, the row cells are identified in Latin characters, and a column is identified in figures.
      * **R1C1**: in R[x]C[y] format where x is a cell row number, y is a cell column number.
   * **Range**: the range of the imported cells set in ` format [address of the upper left cell]:[address of the bottom right cell]`.
   * **All rows**: when selecting this option, the range of cells set in the *Range* parameter will be extended up to the last row.
* **Blank rows**: as the range of cells set according to the previous parameters can contain blank rows, it is requested to select one of options of their processing.
   * **Import**: blank rows will be imported.
   * **Exclude**: blank rows will not be imported.
   * **To first blank row**: rows will be imported up to the first blank row.
* **Title row count**: count of the upper rows of the range set by the previous parameters that will not be imported.

The table wizard part is designated for display of the source data and range of the imported cells. Value of the *Range* parameter can be set by selecting the table cells with the mouse.

### Step 2. Configure Fields

It is required to specify the following parameters at the configuration stage:

* It is required to display the following data:
   * **Result**: result of data transformation will be displayed in the table wizard part, taking into account the set parameters of fields.
   * **Raw data**: the source version of the downloaded data will be displayed in the table wizard part.

The table part of the wizard window is designated for configuration of import parameters for each data set field.

* **Row count for analysis** enables to set row count of the data which will be displayed in the table for analysis (from 1 to 200);
* ![Refresh All](../../images/icons/toolbar-controls/refresh_default.svg) **Refresh All** enables to reread the specified row count into a table, and provides automatic generation of the resulting data set.
* ![Refresh data](../../images/icons/toolbar-controls/refresh-data_default.svg) **Refresh data** only rereads the specified row count into a table.

The following settings are used to generate the resulting data set in the manual way:

* **Name**: the unique field name is assigned.
* **Caption**: the user field description is provided.
* **Data type** — [data type](../../data/datatype.md): the text field value will be transformed.
* **Data kind** — [data kind](../../data/datakind.md): it is set by a list of values:
   * Undefined
   * Continuous
   * Discrete
* **Use**: checkbox of the field inclusion into the resulting data set.
