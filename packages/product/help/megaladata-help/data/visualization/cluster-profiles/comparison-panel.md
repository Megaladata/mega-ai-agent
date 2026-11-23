# ![Cluster Comparison Panel](../../images/icons/viewers/cluster-profiles/cluster-profiles/sliced_18x18/scales_default.svg) Cluster Comparison Panel

It contains the comparative information on the **clusters** selected in the [*Main table*](./main-table.md). Color coding and order of clusters matches the colors and selection order of cells in the *Main table*.

![Cluster Comparison Panel.](./images/cluster-profilies-comparison-panel.png)

The *cluster comparison panel* can be conventionally divided into two areas (refer to Figure 1):

1. **Upper panel part** contains the comparative cluster histogram. The cluster histograms and **universal set** are combined in one area. The upper panel part contains the only histogram setting added to the general histogram settings on the [*Toolbar*](./toolbar.md):
   * ![Cumulative histogram](../../images/icons/viewers/cluster-profiles/cluster-profiles/sliced_18x18/stacked-histogram_default.svg) **Cumulative histogram** displays one composite column divided into color areas matching the clusters.
2. **Lower panel part** contains the summary table of the values of *Indicators* by the selected clusters in the *Main table*.

> Note: If the *Cumulative histogram* mode is enabled and at the same time *Total* cluster cell is selected, the corresponding data will not be added to the cumulative histogram (as it matches the universal set).

&nbsp;
> Note: The *Cumulative histogram* mode can be enabled when the histograms refer to the *Absolute frequencies* or *Relative frequencies* formats. The option is disabled and is not available in *Density (PDF)* format.

There are two types of histograms:

* **Сontinuous histogram** means the solid fill under the continuous smooth curve, and it matches the same one in the table cell.
* **Discrete histogram** is a table with the following columns:
   * **№**: the unique value number.
   * **Caption**: the unique value caption.
   * **Rate**: the column with the horizontal histogram columns.
   * **Total**: the column with the number of values in the histogram columns of the universal set. It is displayed when *Show universal set in histograms* option in the *Toolbar* is enabled.
   * **Class caption**: columns with the number of values in the cluster histograms columns.

> Note: It is possible to sort all columns, with the exception of *Rate* column.
