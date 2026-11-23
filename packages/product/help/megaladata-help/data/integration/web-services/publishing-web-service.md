# Web Service Creation and Publication

Publication and operation of the web services created in Megaladata are available if the Megaladata Integrator component is installed.

## Implementation of the Service Methods

Interaction with web service is performed using its methods. Each web service method has a particular identifier and performs the action that matches this identifier. As a rule, the method receives the input data and returns the response (but not necessarily). The action performed by the method is implemented in Megaladata by the published Workflow node, and the structure of the input data and response is defined by the input and output ports of this node. The string that consists of the node name and name of the package with the node is used as the method identifier.

Most frequently, the *[Supernode](../../processors/control/submodel.md)* is used as such node, because a user can implement the random logics in it and set the structure of the input and output data creating and configuring its ports. But, generally, any Workflow node with the settings described in *[Configure published nodes](#configure-published-nodes)* section can be such node. If the package contains several such nodes and several packages are published, the SOAP service method and REST service operation are created for each of such nodes providing that it complies with it. In the case of REST service, the REST service endpoint is created for each of the published packages.

## Configure Published Nodes

The node published as the web service method must have the following settings:

* The following *[access modifier](../../workflow/access-modifier.md)* is set: `Published`;
* The node name that is unique within the package is set in the *access modifier* selection window;
* The node must be visible from the workflow root, namely, if the node is nested (into the supernode or hierarchy of supernodes), `Public` *access modifier* must be installed for all supernodes that include it;
* The fields/variables that define the request structure and web service method response are set in the input and output ports.

> **Important:** When *[Automapping of fields](../../workflow/ports/field-synchronization.md)* is used, there might be situations in which the fields/variables in ports are defined by the automapping mechanism based on structure of the data supplied to the port. If the port link with the data source is deleted when automapping is enabled, the fields/variables that have been earlier created from the data will be deleted from the port by the automapping mechanism as the temporary ones that are relevant only to the specific data. When publishing such node, the fields/variables in the ports will not be set, correspondingly, structures of the service request/response will not be defined.
>
> Consequently, ports of the published nodes must be configured using one of the following methods:
> * It is required to disable *Automapping of fields* and set the required fields/variables (recommended) when applicable.
> * If the required fields/variables have been already created by the automapping mechanism from the data supplied to the port, it is required to edit any of the following *[parameters](../../processors/transformation/fields-parameters.md)* (*Name*, *Caption*, *Usage type*, etc.) of all required fields/variables. If the changed fields are highlighted in bold in the wizard, and they are reflected as the constant ones expected by the port.
> * Clean the list and create all required fields/variables manually.

*Usage type* parameter of the input field affects its property of obligatory specification in the service request. The fields with `Unspecified`or `Useless` *Usage type* are published as optional (they have `minOccurs="0"` attribute in WSDL of SOAP service, they are not included into *required* nodes in the request schema of REST service). The fields with other parameter values are required in the request. All fields are published as the required ones in the service response.

## Publication

When workflow nodes are set as the nodes required for publication, it is necessary to publish the package.

> **Note:** In order to minimise possible problems of connection to the web service using the external clients, it is recommended to use only the English alphabet characters, numbers and underscore character in the name of the published package.

To publish the package, it is required to click on the required package in the [navigation tree](../../interface/main-menu.md#navigation) using the right button, and select *Publish packages…* in the context menu. It will enable to open the package publication wizard with the following settings:

* **Published packages**: the list of already published packages.
* **Path to the package file** is manually specified or selected from the drop-down list of the opened packages.
* **Select namespace**: the namespace of items and attributes that provides their uniqueness in WSDL description of the service. It is required to select one of the options:
   * Use Megaladata Integrator namespace;
   * Generate unique for package (it is used by default);
   * Generate unique for each package version;
   * Custom.

The generated namespace that will be used for publication will be displayed in the wizard window.

> **Important:** To avoid the name conflict, it is required to provide uniqueness of the paired values:  `published node name`, `published package namespace`. For this purpose, it is recommended to use *Generate unique for package* or *Generate unique for each package version* option for all published packages, or to set the unique namespaces manually.

It is required to show the path to the package file, select the namespace and press *Publish* button for publication.

### Update Publication

If the settings of the input/output ports are changed (for example, the number or names of fields/variables) of the node that has been published earlier, it is required to update publication of the package which includes this node. In this regard, it is required to perform the following actions:

1. Save the package with the changed node;
2. Select this package in *Published packages* list of *Publish packages…* wizard and press *Update* button.

> **Important:** After the update, it is required to check operation of the workflow nodes that call the republished web service, and then it is recommended to reconfigure them when applicable.

### Delete Publication

Select the required package in *Published packages* list of *Publish packages…* wizard and press *Delete* button.

## Access to the Created Service

See the link below to get WSDL of the published SOAP service:

`http://<Server>/<App>/service.svc?wsdl` where `<Server>`: the Megaladata Integrator host, `<App>` is a name of the Megaladata Integrator application in IIS (it is set when installing Megaladata Integrator, when setting by default `<App>` = `mgi`).

Example: `http://localhost/mgi/service.svc?wsdl`

See the link below to get information on endpoints, operations, URL, structure of REST requests and responses:

`http://<Server>/<App>/service.svc/rest/help` where `<Server>`: the Megaladata Integrator host, `<App>` is a name of the Megaladata Integrator application in IIS (it is set when installing Megaladata Integrator, when setting by default `<App>` = `mgi`).

Example: `http://localhost/mgi/service.svc/rest/help`

To provide access to the published services from the Megaladata workflow, the [*SOAP request*](../../processors/integration/soap-request.md) and [*REST request*](../../processors/integration/rest-request.md) components are used.
