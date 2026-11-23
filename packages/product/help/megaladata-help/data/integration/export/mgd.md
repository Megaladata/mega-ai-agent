# ![ ](../../images/icons/data-sources/megaladata_icons_common_data-sources_sliced_18x18_file-native-export_default.svg) Export to the MGD File

The handler exports the initial data set to the [MGD file](../../data-format/mgd-file.md). The MGD file already contains all required information on the field features (field name, caption, data type, etc.) that enables to export and import data sets with minimum settings.

It is possible to compress data using different algorithms.

> **Note:** The MGD storage format has been elaborated specially for usage with Megaladata. It provides the highest data import and export speed.

## Ports

### Input

* ![ ](../../images/icons/app/node/ports/inputs/table_inactive.svg)Data source: the data table to be exported.
* ![ ](../../images/icons/app/node/ports/inputs-optional/variable_inactive.svg) [Control variables](../../workflow/variables/control-variables.md) (optional port): it is possible to set values of the wizard parameters using variables.

## Wizard

* **File storage** enables to display information on method of connection to the destination file.
* **File name** enables to set a path to the destination file when the connection is local, or a file name when using connection to a folder. ![ ](../../images/extjs-theme/form/open-trigger/open-trigger_default.svg) button calls the file selection dialog.
* **Compression** can be applied to decrease the export file size. The following options are available:
   * None
   * [LZO](https://en.wikipedia.org/wiki/Lempel%E2%80%93Ziv%E2%80%93Oberhumer) (it is recommended and used by default)
* **Bitness** enables to display information on bitness of the MGD file: 64 or 32 bits. Bitness of the MGD file depends on bitness of the used Megaladata server.
* **Activate and Show**: clicking on this button shows in the wizard how the exported table will look like.

> **Note:** It is required to take into account that the format of data storage in the MGD files used in Megaladata differs from the format of the DDF files in the Deductor platform used earlier. That's why these files cannot be imported to Deductor 5.3 and earlier.
