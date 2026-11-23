# Web Services

Megaladata provides the tools used for integration with external web services and publication of the own ones. Consequently, the solutions created on the Megaladata base can be easily built into IT landscape of any complexity.

> **Note:** The web service tools are available only in the Server Megaladata editions.

The following Megaladata platform components are required for the web services integration and operation:

* Server is the main platform component. It completes the loading, calculation, model training, visualisation, right management and other tasks.
* Integrator: the component responsible for publication of own web services based on the packages created in Megaladata. It is used in combination with [IIS](https://en.wikipedia.org/wiki/Internet_Information_Services) creating a separate application in it.
* Adapter: optional component. It is required for interaction with non-standard web services, for example, with credit reference bureau.

## Web Services Operation

### Integration with External Web Services

The Megaladata platform provides integration with [SOAP](https://en.wikipedia.org/wiki/SOAP) or [REST](https://en.wikipedia.org/wiki/REST) services.
For this purpose, it is required to [create](../connections/README.md#nastroyka-podklyucheniya) corresponding connection:

- [SOAP Service Connection](../connections/list/soap-service.md) (SOAP service);
- [REST Service Connection](../connections/list/rest-service.md) (REST service).

Later on, the output data of the created connection is used by corresponding node designated for service calling:

- [SOAP request](../../processors/integration/soap-request.md) — SOAP request;
- [REST request](../../processors/integration/rest-request.md) — REST request.

> **Note:** Some services give response in the form of nested XML. [XML Extraction](../../processors/integration/extracting-xml.md) component is designated for its transformation to the table form. To transform the response received in the form of JSON, it is possible to use [JSON.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) construction in [Java-script](../../processors/transformation/java-script) component.

### Creation of Own Web Services

It is possible to [create own SOAP and REST services](../../integration/web-services/publishing-web-service.md). In this case, the logics of data processing of the request to the web service is implemented in the package node published as a web service. Most frequently, such node is a [supernode](../../processors/control/submodel.md), as it is possible to implement the random processing logics in it. The input supernode [ports](../../workflow/ports/README.md) set the service request structure, whereas the output ones set the response structure.

> **Note:** It is possible to publish several supernodes (nodes) in different packages. A separate method of SOAP service and URL REST service is created for each of them.
