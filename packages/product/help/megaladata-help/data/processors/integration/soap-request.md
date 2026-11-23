# ![ ](../../images/icons/data-sources/web-soap-client_default.svg) SOAP Request

The component enables to interact with the external [SOAP service](https://en.wikipedia.org/wiki/SOAP). It sends requests to it and receives responses. It is possible to send several consequent requests generated from the input table rows with the request parameters to SOAP service. Tables with the service responses, returned errors and additional data is generated in the output ports of the handler. The service XML responses are transformed to the table view.

The SOAP services description, WSDL 1.1 specification and SOAP protocols, versions 1.1 and 1.2 are supported.

It is required to provide the configured [Connection to SOAP service](../../integration/connections/list/soap-service.md) to work with SOAP service.

## Ports

### Input Ports

* ![ ](../../images/icons/app/node/ports/inputs/link_inactive.svg) — Connection to SOAP Service (connection to *SOAP Service Connection* component);
* ![ ](../../images/icons/app/node/ports/inputs-optional/table_inactive.svg) — Request data source (table with the request parameters), optional;
* ![ ](../../images/icons/app/node/ports/inputs-optional/variable_inactive.svg) — Control variables (variables), optional.

### Output Ports

* ![ ](../../images/icons/app/node/ports/outputs/table_inactive.svg) — Output data set (table with the SOAP service responses);
* ![ ](../../images/icons/app/node/ports/outputs/table_inactive.svg) — Exceptions (WSDL fault);
* ![ ](../../images/icons/app/node/ports/outputs/table_inactive.svg) — Additional data (table) contains description of errors and SOAP responses of the service.

## Wizard

Before setup start, it is required to provide connection with the SOAP service connection node. Setup includes several steps.

### Selection of the request method

The radio button is used to select one of the methods (operations) provided by SOAP service.

### Configure Request

The request parameters are set at this stage. The list of the input data set fields is located on the left. The list of the parameters accepted by SOAP service is located on the right. It is required to establish the links between fields and parameters for provide further setup. It can be done in several ways:

* *Drag-and-drop* method: drag the field caption from the left list of the fields to the item of the request parameters list.
* It is necessary to select the required request parameter in the right table and select the field caption from the input data set from the drop-down list in the *Related fields* column.
* Use ![ ](../../images/icons/toolbar-controls/auto-connect_default.svg) *Auto Link All* button. It providies auto linking of the input fields and request parameters based on values of captions and types of fields data of the input data set and parameters.

> **Note**: If the link between the field and object has been incorrectly established, it can be deleted. In order to do that, it is required to select the caption and press ![ ](../../images/icons/link-grid/remove-link_hover.svg) button in the line. If all links are to be deleted, ![ ](../../images/icons/toolbar-controls/remove-all-links_default.svg) *Delete all links* button is used.

* **Specify time zone** defines whether the [time zone](https://en.wikipedia.org/wiki/Time_zone) information is specified according to [ISO_8601](https://en.wikipedia.org/wiki/ISO_8601) when request parameters of the `Date/Time` type are transferred. Possible values:
   * Do not specify.
   * Do not specify for date: do not specify the time zone for the SOAP request items related to the [Date](https://www.w3.org/TR/xmlschema-2/#date) type.
   * Specify always.

### Configure Service Response

It is required to select parameters of the SOAP service response that will be included into the resulting table in the form of separate columns.

### Configure Exception Handled

Attributes of the errors that are to be displayed in the output data set of the *Exceptions* port are selected at this stage.

### Custom User Headers

Names and values of [headers of HTTP requests](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields) to the service are set at this stage.

### Additional Parameters

* Request Identification.
   * **One request per input request row**: each row of the input table contains parameters of one request to the service.
   * **Request identifier - input data set field**: each request is generated from several input table rows with matching identifier. It is required to select the identifier field from the list of the input data set fields.

> **Note**: As the input data set with the request parameters is optional, when it is not provided, the SOAP service call node will send the only SOAP request without parameters.

* Response Processing.
   * **Default time zone**: the *Date/Time* type values are transformed when processing the server response according to the following algorithm:
      * If the time zone is specified for the value, it is transformed to the current time zone of the Megaladata server.
      * If the time zone is not specified for the value, the following conditions are met:
         * If *Default time zone* is specified, the value is transformed to the current time zone of the Megaladata server based on the assumption that it has the time zone specified in the *Default time zone* parameter.
         * If *Default time zone* is not specified, the value is not changed.
   * **Repeat single values**: when this checkbox is selected, the information in the parent element is displayed for each child XML element of the service response (for example, attributes, child elements with maxOccurs=1). Otherwise, this information is displayed only for the first child element.
   * **Check for strict XSD validation**: when this checkbox is selected, XML is validated for strict compliance with the XSD schema stated in WSDL of the web service. Otherwise, the web service response is checked in the simplified accelerated mode. And most checks are performed only for the XML elements that have been selected for displaying in the resulting data set. The simplified check procedure is performed faster, however, it does not secure correct data extraction from XML of the service response if there are undetected validation errors.
   * **Generate composite field captions**: the field caption used to display XML elements of the service response contains the full path of their location in the hierarchic XML structure.
* Additional.
   * **Provide description of error codes** enables to display description of the errors that occurred while request sending, receipt and parsing of the service response.
   * **Produce "raw" server response**: to show SOAP message of the service response in the output data set of the *Additional data* port.
* Debug.
   * **Save Request Text to Disk**: all requests sent to the service are written to the specified folder in the file storage.
   * **Simulate request with response in a file**: when this checkbox is selected, no actual request is sent to the service, and the content of the specified file is displayed as the service response.
