---
description: Integration of Megaladata with Tableau Server. Connection settings.
---
# ![ ](./../../../images/icons/data-sources/file-tableau-export_default.svg) Connecting to Tableau Server

Use this component to connect to a Tableau server.

## Connection settings

To set up the connection, specify the following settings:

* **Caption**: Enter a custom name for the connection.
* **Server address**: Enter the URI of the Tableau server.
* **Site**: Enter the name of the site where you work with the Tableau server.
* **Username**: Enter your username for the server.
* **Password**: Enter your password for the server.
* **Test**: Click to test the connection to the server.

>**Important:** This feature is only available on the Windows operating system. Before you set up the connection, place the Tableau SDK dynamic-link libraries (the `TableauExtractAPI_64` and `TableauSDK_64` folders) in the same folder as the `Megaladata.exe` file. Keep the internal folder structure (e.g., `C:\Program Files\Megaladata\Server` for a server edition, or `C:\Program Files\Megaladata\Community` for the Community edition).

**Read on:** [Set of XSD Schemas](schemes.md)