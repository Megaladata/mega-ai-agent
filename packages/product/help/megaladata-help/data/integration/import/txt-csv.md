# ![ ](../../images/icons/data-sources/file-txt-import_default.svg) Import from the Text File

It is used for data import from the text files with separators. The text file with separators is a standard text file the data columns of which are separated with separating characters of the same type, for example, tab characters, commas, semicolumns, etc.

### Input

* ![ ](../../images/icons/app/node/ports/inputs-optional/variable_inactive.svg) [Control variables](../../workflow/variables/control-variables.md) (optional port): it is possible to set values of the wizard parameters using variables.

### Output

* ![ ](../../images/icons/app/node/ports/inputs/table_inactive.svg) Data set (data table).

## Wizard

The wizard contains several configuration stages.

### Step 1. Import from the Text File

The following parameters are specified at the first configuration stage:

* **File storage** enables to display information on method of connection to the source file.
* **File name/URL**: the path to the file that contains required data.
* **Codepage**: the encoding used for storage of text in a file.
* **First line title**: the checkbox that enables to determine that captions of the fields of the created data set are present in the first line of the imported text.
* **Skip rows**: count of the rows from the text beginning that cannot be imported.

### Step 2. Configure Import Formats

The following parameters are specified at the configuration stage:

* Separators:
   * **Text qualifier**: the character that frames cell values of the downloaded data set. The text following this character and preceding its subsequent occurrence is imported as one value even if the text contains a separating character.
   * **Decimal separator**: the character that separates fractional and integer parts of numeric expressions.
   * **Date separator**: the character that separates date components.
   * **Time separator**: the character that separates time components.
* Literals:
   * **True**: the text that represents the logical *True* value.
   * **False**: the text that represents the logical *False* value.
   * **Null**: the text that represents the *Null* value.
* Formats:
   * **Date format**: the parameter enables to set the date format used in the imported text.

### Step 3. Import Parameters with Separators

It is required to specify the following parameters at the configuration stage:

* **Column delimiter**: the character separating data of adjacent columns.
* **Treat consecutive delimiters as one**: checkbox selection enables to treat several consecutive column delimiters as one.
* It is required to display the following data:
   * **Result**: result of data transformation will be displayed in the table wizard part, taking into account the set parameters of fields.
   * **Raw data**: the source (text) version of downloaded data will be displayed in the table wizard part.

The table part of the wizard window is designated for configuration of import parameters for each data set field.

* **Row count for analysis** enables to set row count of a data set used for data type analysis. The maximum row count to be displayed is 200.
* ![Refresh all](../../images/icons/toolbar-controls/refresh_default.svg) **Refresh all** only rereads the specified row count into a table, and provides automatic generation of the resulting data set.
* ![Refresh data](../../images/icons/toolbar-controls/refresh-data_default.svg) **Refresh data** only rereads the specified row count into a table.

The following settings are used to generate the resulting data set in the manual way:

* **Name**: the unique field name is assigned.
* **Caption**: the user field description is provided.
* **Data type** — [data type](../../data/datatype.md): the text field value will be transformed.
* **Data kind** — [data kind](../../data/datakind.md): it is set by a list of values:
   * Continuous
   * Discrete
   * Undefined
* **Use**: checkbox of the field inclusion into the resulting data set.
