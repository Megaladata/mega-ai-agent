# Processing

## Basic Terms

**Workflow**: sequence of actions that must be performed for data analysis. The processing workflow is a combination of data processing nodes configured by a user to solve a particular task.

The processing sequence is determined by connection of the previous workflow node output and input of the subsequent one. The node input and output are **input** and **output ports**.

![](../quick-start/readme-1.png)

*Workflow Example*

The workflow **node** performs a separate operation with data. A list of possible operations is represented by a number of ready **components**. Thus, the **component** is a prototype or template of the future workflow node. To create the workflow node that performs the required operation with data, the corresponding component must be dragged from the component panel to the workflow construction area (refer to ["The first workflow"](../quick-start/first-scenario.md)).

The workflow nodes are created from 2 types of components :

* Standard components are provided by the platform.
* [Derived components](../workflow/derived-component.md) are created and configured by a user. The derived component can be created from combination of the workflow nodes implementing the random processing logics.

Thus, a set of tools for implementation of different data processing logics is not limited by standard platform components, and it can be expanded by users.

The [supernode](./control/submodel.md) is most commonly used to create the derived component. The supernode is a special node that can include other workflow nodes. Random logics can be implemented in the Supernode. At the same time, the workflow handler can consider it as the "black box".

The supernode accepts information by means of input ports, performs processing and sends results to output ports. Input and output ports are set by a user.

Both data sets, tables, and variables, objects containing only one value can be transferred from handler to handler. The statistical table data (for example, column sum, average value, etc.) can be transformed to variables using the special handler.

In their turn, variables can be used in handlers to transform tables. As tables and variables have different structure, the ports corresponding to them cannot be connected with each other, and they are differently identified.

## Standard Components

### [Transformation](./transformation/README.md)

A set of components for the initial preparation and ordinary processing of the source data sets.

* [Grouping](./transformation/grouping.md)
* [Date and time](./transformation/trans-datatime/README.md)
* [Enrich data](./transformation/supplementation.md)
* [Replace](./transformation/substitution/README.md)
* [Calculator](./transformation/calc/README.md)
    * [Expression](../processors/transformation/calc/expression.md)
* [JS Calculator](./transformation/calc/javascript.md)
* [Cross table](./transformation/cross-table.md)
* [Union](./transformation/union.md)
* [Features of fields](./transformation/fields-parameters.md)
* [Ungroup](./transformation/ungrouping.md)
* [Collapse columns](./transformation/rollup-columns.md)
* [Lag](./transformation/sliding-window.md)
* [Join](./transformation/join/README.md)
* [Connection](./transformation/addition.md)
* [Sort](./transformation/sorting.md)
* [Row filter](./transformation/row-filter/README.md)

### [Control](./control/README.md)

The group components are designated for the workflows optimization by supernodes creation, repeated use of nodes and development of the workflow execution logics using antecedents and loops.

* [Node execution](./control/execute-node.md)
* [Supernode](./control/submodel.md)
* [Reference node](./control/unit-link.md)
* [Antecedent](./control/condition.md)
* [Loop](./control/cycle.md)

### [Research](./scrutiny/README.md)

These handlers enable to assess and/or visualize the structure and statistical data characteristics. They also enable to perform exploratory and descriptive analysis.

* [Autocorrelation](./scrutiny/autocorrelation.md)
* [Correlation analysis](./scrutiny/correlation-analysis.md)
* [Factor analysis](./scrutiny/factor-analysis.md)

### [Preprocessing](./preprocessing/README.md)

Data preprocessing for its further use in the Data Mining algorithms. Such methods as imputation, sampling, outliers elimination, etc. are applied.

* [Imputation](./preprocessing/filling-omissions.md)
* [Binning](./preprocessing/quantization.md)
* [Coarse classes](./preprocessing/fine-classes.md)
* [Partitioning](./preprocessing/separating-to-multiplicity.md)
* [Eliminate outliers](./preprocessing/editing-of-emissions.md)
* [Smoothing](./preprocessing/smoothing.md)
* [Sampling](./preprocessing/sampling.md)

### [Data Mining](./datamining/README.md)

The handlers related to this group represent the tools for implementation of different Data Mining methods: clustering, association rules, etc.

* [EM clustering](./datamining/em-clustering.md)
* [Association rules](./datamining/associative-rules.md)
* [Clustering](./datamining/clustering.md)
* [Transaction clustering](./datamining/clustering-transactions.md)
* [Logistic regression](./datamining/logistic-regression/README.md)
* [Neural network (classification)](./datamining/neural-network-classification.md)
* [Neural network (regression)](./datamining/neural-network-regression.md)
* [Self-organizing networks](./datamining/self-organizing-network.md)

### [Variables](./variables/README.md)

In Megaladata it is possible to create and use variables. The handlers related to this group enable to perform different operations with them, namely, change, creation of variables from the table, calculation of the new variables using different functions.

* [Replace (variables)](./variables/variables-replace.md)
* [Calculator (variables)](./variables/variables-calc.md)
* [Variables to table](./variables/variables-to-table.md)
* [Union (variables)](./variables/variables-union.md)
* [Table to variables](./variables/variables-from-table.md)

### [Integration](./integration/README.md)

The integration mechanisms are designated for data exchange between the third party external systems and Megaladata platform.

* [SOAP request](./integration/soap-request.md)
* [REST request](./integration/rest-request.md)
* [Program execution](./integration/exec-program.md)
* [XML Extraction](./integration/extracting-xml.md)