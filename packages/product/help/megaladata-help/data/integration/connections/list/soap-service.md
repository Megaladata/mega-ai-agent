# ![ ](../../../images/icons/data-sources/web-soap_default.svg)&nbsp;SOAP Service Connection

Megaldata provides the capability to connect to an external SOAP service and import the data received from it for further processing and analysis.

## Connection parameters

To configure the connection, set the following parameters:

* **Authentication type**: A dropdown list with authentication options.
    * **Not required**: When this item is selected, Megaladata does not perform authentication when connecting to the service.
    * **Username and password**: Select if the SOAP service requires authentication by username/password.
    * **OAuth token**: Select when connecting to a SOAP service via the [OAuth](https://en.wikipedia.org/wiki/OAuth) protocol.
    * **Client certificate from storage**: Select for authentication via SSL using a certificate.
    * **Client certificate files**: Select if authentication by a client certificate is required. With this authentication type, you need to select the required certificate and private key in the file storage and specify the private key password.
* **Username**: This field becomes active when you select the **Username and password** option. Enter the username you created during registration with the SOAP service.
* **Password**: This field becomes active when you select the **Username and password** option. Enter the password you created when registered with the SOAP service.
* **OAuth token**: To use this method, select the **OAuth token** type and paste your token here. The OAuth protocol allows the application to connect securely to another service on your behalf, like when you sign in using a social media account.
* **Certificate store**: This dropdown appears when you select **Client certificate from storage**. First, choose a store from the list, then select your authentication certificate from the table below.
* **User certificate**: This field becomes active when you select the **Client certificate files** option. Enter the full path to the user certificate file in the file storage required to connect to the SOAP service.
* **Private key**: This field becomes active when **Client certificate files** is selected. Enter the full path to the private key file (in the file storage) used for the SOAP service connection.
* **Private key password**: This field is enabled when using **Client certificate files**. If your private key file is password-protected, enter the password to decrypt it here.
* **WSDL source**: Enter the URL or the local file path to the WSDL file. This file provides the description of the web service.
* **Enable reserve WSDL source**: Check this box to use a backup WSDL source if the primary one fails. This will activate the **Reserve WSDL source** field below.
    * **Reserve WSDL source**: Provide a backup URL or file path for the WSDL file. This source will be used automatically if the primary WSDL is unavailable or contains errors.
* **Transform WSDL description using XSLT**: Checking this box allows you to make changes to the received WSDL file using an XSLT transformation.
    * **XSLT path**: In this field, specify the URL or location (in the file storage) of the XSLT file.
* **Connection timeout (ms)**: The maximum time to wait for a response from the server (in milliseconds). If exceeded, the request will be aborted with an error status.
* **Data exchange timeout (ms)**: The maximum time to wait for receiving data from the server (in milliseconds). If exceeded, the request will be aborted with an error status.
* **Ignore SSL certificate errors**: When connecting via SSL, the server certificate verification may sometimes fail. If this box is marked, the system will ignore unverified certificate errors; otherwise, the connection will not be established.

## Authentication for executing the request

* **Authentication is the same as for WSDL**: When this box is checked, the system uses the same authentication parameters as when obtaining the WSDL. If the authentication for executing the request is different from the authentication for obtaining the WSDL, uncheck this box and configure the necessary parameters. The options works similar as the **Authentication type** settings in the **Connection Parameters** section.

## Node description

* **Caption**: A user-defined name of the connection.
* **Comment**: Use this form to add any reference information about the connection.

**Read on:** [Connecting to Tableau]()