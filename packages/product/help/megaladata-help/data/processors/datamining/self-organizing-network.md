---
description: Explore the Self-Organizing Network component in Megaladata, employing methods like Kohonen networks and neural gas. Use this component to analyze clusters and identify clusters of input vectors that share common properties.
---
# ![ ](./../../images/icons/components/sonn_default.svg)&nbsp;Self-Organizing Network Component

Self-organizing networks identify [clusters](https://en.wikipedia.org/wiki/Cluster_analysis) (groups) of input vectors that share certain properties. This is why these networks work well for cluster analysis.

Self-organizing networks include [Kohonen networks](https://en.wikipedia.org/wiki/Self-organizing_map)—a type of self-organizing feature maps. A Kohonen network consists of nodes that form clusters. Nodes located close to each other represent similar objects, while distant nodes represent dissimilar objects.

[Neural gas](https://en.wikipedia.org/wiki/Neural_gas) is another type of self-organizing network. The neural gas algorithm adaptively clusters input data. It partitions the space into clusters and determines the required number of clusters based on the properties of the data.

Train the [node](./../../workflow/training-processors.md) before obtaining the output datasets.

## Ports

### Input

* ![ ](./../../images/icons/app/node/ports/inputs/table_inactive.svg)&nbsp;**Input data source** (data table): Required port.

**Input data requirements:**

You cannot use a field if:
* It is discrete and contains only one unique value
* It is continuous and has zero variance
* It contains missing values

### Output

* ![ ](./../../images/icons/app/node/ports/outputs/table_inactive.svg)&nbsp;**Clustering**. A table that contains the following fields:
  * **Cluster number**: Contains the number of the cluster to which each object belongs. A cluster consists of network nodes.
  * **Node number**: Contains the number of the network node to which each object belongs. The nodes form clusters (see the **Cluster number** field).
  * **Distance to node**: Contains the Euclidean distance to the nearest node which owns the object.
  * All fields from the source dataset, regardless of their usage type.

* ![ ](./../../images/icons/app/node/ports/outputs/table_inactive.svg)&nbsp;**Coordinates of nodes**.
A table that contains the following fields:
  * **Node number**: Lists the numbers of generated nodes.
  * **Cluster number**: Lists the numbers of generated clusters.
  * Fields from the source dataset for which you selected **Used** as the **Usage type**. The field cells contain the network node weights.

## Configuration wizard

### Configure input columns

On the first wizard page, select the fields for clustering:
  * Set **Usage type** to **Used** for fields that participate in clustering.
  * Leave **Usage type** as **Unspecified** for all other fields.

### Normalization settings

On this page, configure the necessary [normalization](./../normalization/README.md) settings for the selected fields.

### Self-organizing neural network

On the **Self-organizing neural network** wizard page, configure the following parameters:
* **Self-organizing network type**: Select one of the two options:
  - **Kohonen network**
  - **Neural gas** (in this case, the subsequent section will be disabled).
* **Network Parameters**: Set up these parameters for the Kohonen network:
  * **Network topology**: Select from:
    - 1D
    - 2D rectangular
    - 2D hexagonal
    - 3D
  * **Network size X**: Enter *an integer from 2 to 100* for any network topology. The default value is `3`.
  * **Network size Y**: Enter an *an integer from 2 to 100* for the **2D rectangular**, **2D hexagonal**, or **3D** topology. The default value is `3`.
  * **Network size Z**: Enter an *an integer from 2 to 100* for the **3D** topology. The default value is `3`.
* **Random seed**: Enter a positive integer to initialize the pseudorandom number generator. The initial value fully determines the generator sequence. Reinitialize the generator with the same value to produce the same sequence again. You can always reproduce the node training result by supplying the same data and setting the same random seed. For this parameter, you can also use the following commands from the drop-down list:
  * **Always randomize**: Enable this checkbox to always use a random initial value.
  * **Generate**: Select this to generate a new initial value.
  * **Copy**: Copy the specified value to the clipboard.

  **Read on:** [ARIMAX Component](arimax.md)