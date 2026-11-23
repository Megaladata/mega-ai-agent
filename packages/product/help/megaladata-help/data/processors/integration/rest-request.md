---
description: Learn to use the REST Request component in Megaladata. Send GET, PUT, DELETE, PATCH, and POST requests to an external REST service.
---
# ![REST Request](./../../images/icons/data-sources/web-rest-client_default.svg)&nbsp;REST Request

Use the **REST Request** component to interact with an external [REST](https://en.wikipedia.org/wiki/REST) service. Send `GET`, `PUT`, `DELETE`, `PATCH`, and `POST` requests and receive responses. The system sends one REST service request for each row of the input dataset.

> **Note:** The input dataset—a table with request parameters—is optional. If you do not provide it, the **REST Request** node sends a single request without parameters.

The node's output ports provide:
- A table of service responses
- Additional data about the result of each request

For `GET` and `DELETE` requests, each input dataset row must contain request parameters. For `PUT`, `PATCH`, and `POST` requests, each row must contain the [HTTP request body](https://en.wikipedia.org/wiki/HTTP#Body). When configuring the node, you can set any number of [HTTP request headers](https://en.wikipedia.org/wiki/HTTP#Headers).

To work with a REST service, first configure a [REST Service connection](./../../integration/connections/list/rest-service.md). In its settings, select the HTTP request method and define the request parameter list. The **REST Request** node checks the response type. If the received response does not match the **Allowable response content-type** parameter of the connection, the node's output datasets return error messages.

## Ports

### Input

* ![Connection to REST service](./../../images/icons/app/node/ports/inputs/link_inactive.svg)&nbsp;**Connection to REST service**: Required port. Provide a connection to a **REST Service** component.
* ![Control variables](./../../images/icons/app/node/ports/inputs-optional/variable_inactive.svg)&nbsp;[**Control variables**](./../../workflow/variables/control-variables.md): Optional port
* ![Request data source](./../../images/icons/app/node/ports/inputs-optional/table_inactive.svg)&nbsp;**Request data source**: Optional port. Provide a table with request parameters.

### Output

* ![Service response](./../../images/icons/app/node/ports/outputs/table_inactive.svg)&nbsp;**Service response**: This port outputs a table with service responses.
* ![Additional data](./../../images/icons/app/node/ports/outputs/table_inactive.svg)&nbsp;**Additional data**: This port outputs a table with request execution results, error codes and descriptions, and HTTP status codes.

## Configuration wizard

The service call configuration includes the following steps (wizard pages).

### Configure request

- **URL request parameters**: This list (on the right) shows the parameters that the REST service accepts, while the list on the left shows the input dataset fields. Link fields to URL request parameters in one of these ways:
    * **Drag-and-drop**: Drag the field caption from the left field list to the URL request parameter.
    * **Related fields**: Select the required URL request parameter in the right table, then select the input dataset field caption from the drop-down list in the **Related fields** column.
    * ![](./../../images/icons/toolbar-controls/auto-connect_default.svg)&nbsp;**Auto link all**: Use this button to auto-link input fields and URL request parameters based on captions and data types of the input dataset fields and parameters.

    > **Note:**
    > * To delete a field-object link, select the needed caption and click the ![](./../../images/icons/link-grid/remove-link_hover.svg)&nbsp;**Delete** button that appears on the link.
    >
    > * To delete all links, use the ![](./../../images/icons/toolbar-controls/remove-all-links_default.svg)&nbsp;**Delete all links** button.
    >
    > * You cannot select fields that are already linked to parameters as the request body. The field that you select as the request body does not appear in the URL parameters table.

    For `PUT`, `PATCH`, and `POST` requests, link the input table field to the predefined `request` parameter that receives the HTTP request body.

- **Specify time zone**: Define whether the system specifies [time zone](https://en.wikipedia.org/wiki/Time_zone) information according to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) when it sends `date/time` request parameters. Select one of the following:
    - **Do not specify**
    - **Always specify**

### Customize headers

In this step, set HTTP request header names and values.

### Additional parameters

- **Provide description of error codes**: Display descriptions of errors that occur when the node sends the request or receives and parses the service response.

    > **Note:** When HTTP status codes are *>= 400*, the system sets **Error code** to `6` (`HTTP client error`) and outputs the corresponding **Error description** message.

- **Wait between requests (ms)**: Set the minimum interval between consecutive REST requests, in milliseconds.
- **Repeat requests after an error**: Define how many times the system should automatically repeat the request if an error occurs.
- **Wait after failed request (ms)**: Set the wait timeout after each failed attempt to run the request (in milliseconds). You can only use this parameter if **Repeat requests after an error** is enabled (not `0`).

    > **Note:** **Wait between requests (ms)**, **Repeat requests after an error**, and **Wait after failed request (ms)** let you handle errors caused by exceeding the allowed number of requests per unit of time and by service overload. The system sends repeated requests if:
    >
    > * A network error occurs
    > * The server returns status `408` (*Request timeout*)
    > * The server returns status `429` (*Too many requests*)
    > * The server returns any `5xx` error

- **Overall timeout (s)**: Set the maximum allowed time for the entire request (in seconds).
- **Save request text in folder**: Enable this to write all sent requests to a dedicated file storage folder.
- **Simulate request with response in a file**: When you select this checkbox, the node does not send an actual request to the service. Instead, it uses the contents of the specified file as the service response.

### Node description

In this wizard step, set the node caption generation mode:
- **Auto-caption**: Use this to automatically generate the caption based on the file name.
- **Custom caption**: Set the caption of your choice. (Enter any text description.) The system cannot automatically change your custom captions. A refresh icon appears next to the input field if the current caption differs from the default component caption. Click the icon to restore the default component caption if needed.

You can change the caption generation mode in the node configuration wizard (use the drop-down list) or in the node caption context menu in the workflow (right-click the node caption).

A copied or cloned node retains the caption generation mode of the original node. If the source node uses automatic caption generation, copied and cloned nodes do not receive an index.

**Read on:** [SOAP Request Component](soap-request.md)