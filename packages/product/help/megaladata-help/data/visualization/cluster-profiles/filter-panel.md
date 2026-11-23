# ![Filtration Panel](../../images/icons/toolbar-controls/filter_default.svg) Filtration Panel

It contains filtration settings of the main table (refer to Figure 1).

![Filtration panel.](./images/cluster-profilies-filter-panel.png)

Settings of the filtered values range:

* **Cluster size** shows the row count of the source data set included into the cluster. It sets the range from 0 to the row count in the source data set.
* **Field importance**: measure of the field influence on inclusion of the field into any cluster. It sets the range from 0 to 100%.
* **Cell importance**: measure of the cell influence on inclusion of the cell into any cluster. It sets the range from 0 to 100%.

Apart from the range settings, the checkbox is also available:

**Hide unused fields**: hide the fields unused in clustering (their importance is not defined).

> Note: The cells that have not passed filtering refer to the changed style in the table. Usage of filter can hide column/row if all constituents of its cell have not passed filtering.
