# Toolbar

It contains the following control elements:

* ![Filtration](../../images/icons/toolbar-controls/filter_default.svg) **Filtration**: show/hide [*Filtration panel*](./filter-panel.md).
* ![Detailing](../../images/icons/toolbar-controls/show-fast-viewer_default.svg) **Detailing**: show/hide [*Detailing panel*](./details.md).
* **Detailing method**: switch the *Detailing* display options. When pressing the button, the cyclic change of the *Detailing* methods is performed, and the *Detailing* method can be switched in the drop-down menu when pressing ![Open](../../images/icons/toolbar-controls/down_default.svg) button. *Detailing* methods:
   * ![Table](../../images/icons/cube/detailing/browse_default.svg) Table.
   * ![Form](../../images/icons/cube/detailing/form_default.svg) Form.
   * ![Statistics](../../images/icons/cube/detailing/stat_default.svg) Statistics.
* **Indicator**: switch the display options of *Indicators*. When pressing the button, the cyclic change of *Indicators* is performed, and also *Indicator* can be switched in the drop-down menu when pressing ![Open](../../images/icons/toolbar-controls/down_default.svg) button. List of *Indicators*:
   * ![Importance](../../images/icons/viewers/cluster-profiles/cluster-profiles/sliced_18x18/importance_default.svg) Importance.
   * ![ Histogram](../../images/icons/viewers/cluster-profiles/cluster-profiles/sliced_18x18/histogram_default.svg)  Histogram.
   * ![Minimum](../../images/icons/toolbar-controls/min_default.svg) Minimum.
   * ![Maximum](../../images/icons/toolbar-controls/max_default.svg) Maximum.
   * ![Average](../../images/icons/toolbar-controls/avg_default.svg) Average.
   * ![Sum](../../images/icons/toolbar-controls/sum_default.svg) Sum.
   * ![Standard deviation](../../images/icons/toolbar-controls/stddev_default.svg) **Standard deviation**.
   * ![Range](../../images/icons/viewers/cluster-profiles/cluster-profiles/sliced_18x18/range_default.svg) Range.
   * ![Null count](../../images/icons/toolbar-controls/null-count_default.svg) Null count.
   * ![Values](../../images/icons/toolbar-controls/count_default.svg) Values.
   * ![Count of unique values](../../images/icons/toolbar-controls/unique-count_default.svg) Count of unique values.
   * ![Cluster center](../../images/icons/viewers/cluster-profiles/cluster-profiles/sliced_18x18/cluster-center_default.svg) Cluster center.
* ![Importance by color](../../images/icons/viewers/cluster-profiles/cluster-profiles/sliced_18x18/heatmap_default.svg) **Importance by color**: show/hide importance as the heat map. This option is reset and becomes inactive when *Histogram* indicator is selected.
* ![Show null column in histograms ](../../images/icons/toolbar-controls/null-count_default.svg) **Show null column in histograms**: show/hide *null* column. The column visibility with null data is changed in the [*Main table*](./main-table.md) and *Cluster comparison panel* histograms.
* ![Show "Other" column in histograms](../../images/icons/viewers/cluster-profiles/cluster-profiles/sliced_18x18/residue-count_default.svg) **Show "Other" column in histograms**: show/hide *Other* column. In the discrete histograms of the *Main table* visibility of *Other* column is changed.
* ![Show universal set in histograms](../../images/icons/toolbar-controls/sum_default.svg) **Show universal set in histograms**: show/hide the **universal set**.
* **Histogram scaling**: switch the histogram scaling mode. When pressing the button, the cyclic change of histogram scaling modes is performed. It is also possible to switch the mode in the drop-down menu when pressing ![Open](../../images/icons/toolbar-controls/down_default.svg) button. List of the Scaling Modes:
   * ![Absolute frequencies](../../images/icons/viewers/cluster-profiles/histogram/sliced_18x18/size-scale_default.svg) **Absolute frequencies**: the columns display the real number of values. The universal set columns are always higher or equal to the cluster columns.
   * ![Relative frequencies](../../images/icons/viewers/cluster-profiles/histogram/sliced_18x18/bar-scale_default.svg) **Relative frequencies**: the universal set columns are equal and stretched to the cell height. Cluster columns have the following height: `Number of values in the column/Number of values in the universal set column`.
   * ![Density (PDF)](../../images/icons/viewers/cluster-profiles/histogram/sliced_18x18/no-scale_default.svg) **Density (PDF)**: histograms of **cluster** and universal set are not connected with each other and have the same area. Histograms in the table cell or in the comparison tab are normalized by the height of the highest column.
* **Cluster position in table**: switch cluster position in the table. When pressing the button, the cyclic change of cluster positions in the table is performed. And it is also possible to change cluster position in the table in the drop-down menu when pressing ![Open](../../images/icons/toolbar-controls/down_default.svg) button. The following positions of clusters are possible:
   * ![Clusters in rows](../../images/icons/toolbar-controls/rows_default.svg) Clusters in rows.
   * ![Clusters in columns](../../images/icons/toolbar-controls/columns_default.svg) Clusters in columns.
