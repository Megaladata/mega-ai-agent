# ![ ](../../../images/icons/data-sources/db-msaccess_default.svg)&nbsp;MS&nbsp;Access Connection

Used to connect to a Microsoft Access database.

> **Note:** The component is only available for Windows versions of Megaladata due to the lack of drivers for the Linux OS.

## Connection parameters

When configuring the connection, set the following parameters:

* **Caption**: Set a name for the connection.
* **File name**: Specify the path to the DB file with the required data. You can enter it manually or click the ![ ](./../../../images/extjs-theme/form/open-trigger/open-trigger_default.svg)&nbsp;**More** button to open the file selection window.
* **Test**: Use this button to test the above connection settings.

>**Note:** If the **Login prompt** option (see below) is active, a login and password will be requested when testing the connection.

* **Username**: This is not used when connecting to Microsoft Access.
* **Password**: Specify the password set by the DB user.
* **Login prompt**: When this checkbox is marked, the password entered in the configuration wizard will not be saved. It will be requested once upon the first activation of a [Database import](../../import/database.md) or [Database export](../../export/database.md) node, and will not be requested again until the [connection](../README.md) node is deactivated. The login/password input dialog has a timeout of 60 seconds.

> **Note:** When working in batch mode or launching the package via the Scheduler or the Megaladata Integrator, if the **Login prompt** is enabled, the platform will attempt to connect without password. (The logs will indicate that the password was not used.)

* **Show system tables**: When this checkbox is selected, the system tables of the DB that are accessible to the user become visible in the import wizard that uses this connection.
* **Quote names**: If database object names (e.g., table names, field names) contain spaces or reserved characters, enable this checkbox to use quotes marking the beginning and end of the name.
* **Do not use DBMS client**: This parameter is not available for Microsoft Access.
* **Comment**: In this form, you can leave any reference information about the connection.

 > **Note:** To connect to the database, you need to install Microsoft Office or the [Microsoft Access Database Engine](https://www.microsoft.com/en-us/download/details.aspx?id=54920) of the same bitness as the Megaladata application/server.

## Compatibility

The connection is available for MS Access versions 95, 97, 2000, 2003, 2007, 2010, 2013, 2016, and 2019.

**See also:**

* [Official Microsoft website](https://www.microsoft.com/)
* [Product Documentation](https://learn.microsoft.com/en-us/office/client-developer/access/access-home)

**Read on:** [Connecting to MS Excel](excel.md)
