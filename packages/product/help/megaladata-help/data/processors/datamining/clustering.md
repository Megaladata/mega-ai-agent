# ![ ](../../images/icons/components/clusterization_default.svg) Clustering

## Description

**Clustering** means grouping of objects (observations, events) based on the data describing properties of objects. Objects inside the cluster must be similar to each other and differ from the other ones not included into other clusters.

The handler performs clustering of objects on the basis of **k-means and g-means** algorithms. The main difference of one algorithm from the other one lies in the fact whether the number of clusters is known in advance or not. If the number of clusters is known, *k-means* algorithm is used, otherwise, *g-means* algorithm is used. It enables to define this number automatically within the set interval.

![Figure Describing k-means Algorithm Operation](./clustering.svg)

Separate clusters and objects that relate to them are highlighted by color.

To get resulting data sets, it is required to provide preliminary [training of the handler](../../workflow/training-processors.md).

## Ports

### Input

* ![ ](../../images/icons/app/node/ports/inputs/table_inactive.svg) Input data source (data table).

#### Requirements to the Received Data

The field will be no longer permitted for use in the following cases:

* It is discrete and contains only one unique value.
* It is continuous and with zero variance.
* It contains null values.

### Output

* ![ ](../../images/icons/app/node/ports/outputs/table_inactive.svg) Clustering (data table).

The table that consists of the following fields:

* **Cluster number**: each object is assigned with the number of the cluster into which it is included.
* **Distance to cluster center**: the object location relative to the cluster center.
* The source data set fields (values are not changed).

* ![ ](../../images/icons/app/node/ports/outputs/table_inactive.svg) Cluster centers (data table).

**Cluster center**: the average value of the objects variables included into cluster. Result is a table the number of records of which complies with the number of clusters, namely, the data is grouped by clusters. It consists of the following fields:

* **Cluster number**: numbers of the generated clusters are listed.
* The source data set fields in the cells of which the average value of parameters has been calculated.

## Node Wizard

The wizard includes the following groups of parameters:

* Configure input columns;
* [Normalization](../normalization/README.md) settings.
* Clustering.

### Configure input columns

* Select fields for clustering:
   * It is required to set *Used* usage types for the fields that are included into clustering.
   * *Unspecified* is preserved for other fields.

### Clustering

* In the case of the set number of clusters:
   * Uncheck *Auto selection of clusters*.
   * Enter the required number of clusters (must exceed 2). By default — 3.
* In the case of auto selection of the cluster count:
   * The minimum number of clusters. By default — 1.
   * The maximum number of clusters. By default — 10.
   * Cluster splitting significance threshold (in the interval from 0.1 to 5). The higher splitting significance threshold, the more clusters will be generated while clustering.
