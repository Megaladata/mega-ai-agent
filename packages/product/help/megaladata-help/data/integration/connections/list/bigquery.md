---
description: Integration of Megaladata with the BigQuery cloud database. Connection parameters. BigQuery parameters. Operational limitations.
---

# ![](./../../../images/icons/data-sources/db-bigquery_default.svg) BigQuery Connection

Used to connect to the BigQuery cloud database. Requires the [Simba ODBC Driver for Google BigQuery](https://cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers). The driver's bitness must match the application's bitness.

## Connection parameters

To configure the connection, set the following:

* **Caption**: Contains the user-defined name of the connection.
* **Connection string**: A string in the format `projectId[:datasetId]` that you enter manually. The `projectId` parameter is the unique identifier of your project, and `datasetId` is the unique name of the dataset (optional parameter).
* **Test**: Use this button to test the specified connection settings.

### BigQuery parameters

* **Service account email**: The email of the Google service account.
* **Path to private key**: Path to the private key file in JSON or PKCS#12 format.
* **System Certificate Store**: When this option is enabled, the Simba driver verifies the server by checking its certificate against the Windows trusted root certificate store.
* **CA Certificate**: Path to the root certificate file. Used if a third-party certificate needs to be specified.
* **Connect to Google Drive**: When enabled, allows you to query Google Drive resources, including CSV, JSON, Avro, and Google Sheets files.

### Other settings

* **Show system tables**: This parameter is unavailable as the Simba driver does not currently implement this functionality.
* **Do not use DBMS client**: This parameter is unavailable, as the Simba driver is always used to connect to BigQuery.
* **Quote names**: Enable this to automatically enclose database object names (like tables and fields) in quotes. This is required if names contain spaces or reserved characters.
* **Clear pool when deactivated**: Clears the pool of cached resources, such as Megaladata Integrator packages frequently used for batch processing, after the node is deactivated. This parameter is disabled by default.
* **Comment**: Use this field to add any notes or reference information about the connection.

## Limitations when working with BigQuery

* Export from Google Sheets is not supported (a limitation of the Simba driver).
* The response size from BigQuery is limited to 10 MB (a REST API limitation).
* Transactions are not supported (a BigQuery limitation).
* System tables are not supported (a limitation of the Simba driver).
* Updating (`UPDATE`) existing records in a table is not supported (due to its slow performance).

> **Notes:**
>
> * Import of tables from BigQuery is available for the following data types: `string`, `integer`, `float`, `numeric`, `boolean`, `timestamp`, `date`, `time`, and `datetime`.
> * Export to BigQuery is available for the following data types: `string`, `integer`, `float`, `boolean`, and `timestamp`.
> * BigQuery supports special `geography` and `record` data types, which may not be compatible with standard SQL tools and are not supported for import/export in Megaladata.
> * When exporting to a `timestamp` field, the format `YYYY-MM-DD HH:MM:SS` is used; the time zone is not considered.
> * To import data from Google Sheets, the BigQuery service account must be explicitely granted read access to the sheet.

**Read on:** [ClickHouse Connection](clickhouse.md)