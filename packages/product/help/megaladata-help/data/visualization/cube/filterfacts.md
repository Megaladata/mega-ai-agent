# ![Filter Measures](../../images/icons/cube/cases/case-filter_default.svg) Filter Measures

It provides for filtration of the measure values for dimension.

## Interface

The dimensions used in the cube are located in the left part of the opened window. In this case, the following default value is set - *(Filter disabled)*.

The measures used in the cube and aggregations applied to them are listed in the right part of the window.

For the filtration purposes, it is required to select necessary dimension in the left part of the window. Then the list of the measures used in the cube and their [aggregation](../../processors/func/aggregation-functions.md) type will become active. Then it is required to select the measure by which filtration will be performed, then it is required to set filtering criterion and its value (values). To apply filtration, it is required to press *Filter* button.

> **Note:** When filtering is used, ![Measures](../../images/icons/toolbar-controls/sum_default.svg) Measures button will become orange.

To disable filtration, it is required to select *(Filter disabled)* in the dimensions list and press *Filter* button.

## Filtering Criteria

Explanations of some set filtration criteria are provided below.

* **first N**: the dimension values are sorted in the measure descending order and the first N dimension values are selected. For example, it is possible to select the first 10 top-selling goods or 5 most "successful" days of the month.

* **last N**: the dimension values are sorted in the measure descending order and the last N values are selected. For example, 10 least popular goods.
* **part of total**: the dimension values are sorted in the measure descending order. Then only as much first dimension values are selected, as the set part of the total sum will be received in total. For example, it is possible to select the clients that generate 80% of profit or the goods sale of which constitutes 50% of the total volume.

* **within the range**: the selection result will be values of the dimensions for which value of the corresponding measure is within the set range.

* **out of the range**: the selection result will be values of the dimensions for which value of the corresponding measure is not available in the set range.
