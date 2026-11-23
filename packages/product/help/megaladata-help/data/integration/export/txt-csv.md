# ![ ](../../images/icons/data-sources/file-txt-export_default.svg) Export to the Text File

It is designated for export of the data set to the text file. It is possible to configure transformation of the data set to the text form defining different methods of representation of columns (with delimiters/fixed width), formats of data types, delimiters, etc.

### Input

* ![ ](../../images/icons/app/node/ports/inputs/table_inactive.svg) Data source: the data table to be exported.
* ![ ](../../images/icons/app/node/ports/inputs-optional/variable_inactive.svg) [Control variables](../../workflow/variables/control-variables.md) (optional port): it is possible to set values of the wizard parameters using variables.

## Wizard

The component is configured in two steps:

### Step 1. Configuration of the Export Formats

* **File storage** enables to display information on method of connection to the destination file.
* **File name/URL** enables to set a path to the destination file when the connection is local, or a file name when using connection to a folder. ![ ](../../images/extjs-theme/form/open-trigger/open-trigger_default.svg) button calls the file selection dialog.
* *Separators* group of parameters:
   * **Text qualifier**: the character that frames cell data of the data set. The following characters can be used as text qualifiers:
      * Double quote (")
      * Single quote (')
      * Back quote (`)

      Double quote (") is used by default.

   * **Decimal separator**: the character that separates fractional and integer parts of numeric expressions. Dot (.) or comma (,) can be used as delimiters.

   * **Date separator**: the character that separates date components. Available delimiters:
      * Dot (.)
      * Slash (/)
      * Back slash (&#92;)

   * **Time separator**: the character that separates time components. Colon (:) or dot (.) can be used as delimiters.

      [Local settings](../../workflow/local-settings.md) are used as default values in the following parameters: *Decimal separator*, *Date separator* and *Time separator*.

* *Literals* group of parameters:
   * **True**: the text that represents the logical TRUE value. The *True* row is used by default. There are the following available values: *True, True, Yes*.
   * **False**: the text that represents the logical False value. The *False* row is used by default. There are the following available values: *False, False, No*.
   * **Null**: the text that represents the Null value. The question mark *?* is used by default. There are the following available values: *?, null, NULL*.

* *Formats* group of parameters:
   * **Date format**: the format of the date representation:
      * dd/mm/yyyy
      * mm/dd/yyyy
      * yyyy/mm/dd
      * dd/mm/yy
      * mm/dd/yy
      * yy/mm/dd

      There are the following abbreviations in all formats: dd — day of the month in the form of 2 digits, mm — number of the month in the form of 2 digits, yy — year in the form of 2 digits, yyyy - year in the form of 4 digits.

   * **Time format**: the format of the time representation:
      * h:mm
      * hh:mm
      * h:mm:ss
      * hh:mm:ss

      There are the following abbreviations in all formats: h — hours without leading zero, hh — hours in the form of 2 digits, mm — minutes in the form of 2 digits, ss — seconds in the form of 2 digits.

      When filling in these parameters, it is possible to use the listed format options, or to set the [user format](./txt-csv/datetime-formats.md).

### Step 2. Export to the Text File

* **Login status**: login status row - *Data source*.
* *Columns View* group of parameters:
   * **Data format** enables to select one of the following options:
      * **With separators**: this option means values of fields in the source file that are separated by the character set by the *Column delimiter* parameter. The value of this parameter is selected from the list:
         * Tab character
         * Semicolumn
         * Space
         * Comma
         * Dot
      * **Fixed width**: fields in the source file have the set width.
* **Codepage**: the encoding used for storage of text. There are the following available options:
   * ANSI/Windows(0);
   * ASCII/MS DOS(1);
   * Cyrillic (1251);
   * West European (1252);
   * UTF-8 (65001);
   * UTF-16 LE (1200);
   * UTF-16 BE (1201).

* **Header Row** enables to select the method used for setting of columns name in the exported file:
   * Captions of columns (fields): captions of fields will be used as headers of columns.
   * Names of columns (fields): names of fields will be used as headers of columns.
   * No header row: columns will be exported without headers.
