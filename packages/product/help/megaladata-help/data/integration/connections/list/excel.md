# ![ ](../../../images/icons/data-sources/file-excel_default.svg)&nbsp;MS Excel Connection

Used to connect to a Microsoft Excel file as a database.

> **Note:** This component is only available for the Windows OS versions of Megaladata due to the lack of drivers for Linux OS.

## Connection parameters

To configure the connection, set up he following parameters:

* **Caption**: A user-defined name for the connection.
* **File name**: The path to the file containing the necessary data. Enter it manually or click the ![ ](./../../../images/extjs-theme/form/open-trigger/open-trigger_default.svg)&nbap;**More** button to bring up the file selection window.
* **Test**: A button to test the specified connection settings.
* **Show system tables**: If you mark this checkbox, the database's system tables available to the user will be visible in the import wizard that uses this connection.
* **Do not use DBMS client**: For Microsoft Excel, changing this parameter is not available.
* **Quote names**: If database object names (e.g., table or field names) contain spaces or reserved characters, use enclosing characters to mark the beginning and end of the name.
* **Clear pool when deactivated**: Use it to clear the pool of frequently used connections in batch processing and Megaladata Integrator packages, saved for quick recall, after the node is deactivated. This setting is disabled by default.
* **Comment**: In this form, you can leave any reference information about the connection.

## Compatibility

To connect to Microsoft Excel 2007 and newer files (*.xlsx) as a database, the system must have components with the same bitness as the Megaladata application/server:
* Microsoft Excel 2007 or higher
* [Microsoft Access Database Engine 2016 Redistributable](https://www.microsoft.com/en-us/download/details.aspx?id=54920).

ODBC driver errors are also resolved by installing these components, as they do contain this driver.

**See also:**

* [Official MS website](https://www.microsoft.com/).
* [Product documentation](https://learn.microsoft.com/en-us/microsoft-365/?view=o365-worldwide).

**Read on:** [MS SQL Connection](mssql.md)