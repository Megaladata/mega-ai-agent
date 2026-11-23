---
description: Eliminate Outliers component in Megaladata. Set the ranges using standard deviation or interquartile range. Distinguish outliers and extreme values.
---
# ![ ](./../../images/icons/components/e-lim-out-lier_default.svg)&nbsp;Eliminate Outliers Component

The **Eliminate Outliers** component automatically corrects outliers and extreme values in your datasets. Define criteria for each field by specifying the allowable [standard deviation](https://en.wikipedia.org/wiki/Standard_deviation) or interquartile range. 

*Outliers* deviate significantly from the mean. *Extreme values* deviate so far from typical data that they no longer align with the logic of the processes or phenomena you are studying.

## Ports

### Input

* ![ ](./../../images/icons/app/node/ports/inputs/table_inactive.svg)&nbsp;**Input data source:** The data table you want to process.

### Output

* ![ ](./../../images/icons/app/node/ports/outputs/table_inactive.svg)&nbsp;**Output dataset:** The processed data table.
* ![ ](./../../images/icons/app/node/ports/outputs/table_inactive.svg)&nbsp;**Outliers:** A table containing rows where the component detected outliers.
* ![ ](./../../images/icons/app/node/ports/outputs/table_inactive.svg)&nbsp;**Extremes:** A table containing rows where the component detected extreme values.

## Configuration wizard

* **Source data ordered**: Check this box if your numeric series follows a specific order (e.g., sorted by date or time). This setting affects specific processing methods but does not change how the system handles logical or string fields.
* **Input fields**: Select fields for processing from this list. Enable the checkbox for a field and click it to configure its specific processing method.
* **Determination of outliers and extreme values**: Choose one of two identification methods:
  * **Standard deviation**: Best for data that follows a normal distribution. The system flags values that deviate from the mean by more than your specified number of standard deviations. You can set different thresholds for outliers and extreme values.
  * **Interquartile width**: This method calculates the distance between the 1st and 3rd quartiles. The system treats values as anomalies if they deviate from the median by more than your specified interquartile width. Use this for non-normal distributions (see [Interquartile width](https://en.wikipedia.org/wiki/Interquartile_range)).

Apply these processing methods to both outliers and extreme values:
* **Leave unchanged**: Keep the values as they are.
* **Delete records**: Remove rows containing anomalies from the dataset.
* **Replace with average**: Replace anomalies with the column's mean value.
* **Replace with median**: Replace anomalies with the column's median value.
* **Replace with most frequent**: Replace anomalies with the most common value. The system uses the mean value from the most likely interval, adjusting the number of intervals based on your sample size.
* **Replace with set value**: Enter a specific manual value to replace anomalies.
* **Limit**: Replace anomalies with the nearest boundary value of the threshold.

The available methods for each field depend on three characteristics (see [data](./../../data/README.md)):
* Data type
* Ordered/unordered
* Discrete/continuous

The following table shows the applicability of different methods depending on these data properties: 

<table>
<tr><th rowspan=2 align=center>Method</th><th colspan=2 align=center>Unordered dataset</th><th colspan=2 align=center>Ordered dataset</th></tr>
<tr><th align=center><img src=../../images/icons/data-types/discrete_default.svg> Discrete</th><th align=center><img src=../../images/icons/data-types/continuous_default.svg> Continuous</th><th align=center><img src=../../images/icons/data-types/discrete_default.svg> Discrete</th><th align=center><img src=../../images/icons/data-types/continuous_default.svg> Continuous</th></tr>
<tr><td align=left>Leave unchanged</td><td align=center><img src=../../images/icons/data-types/boolean_default.svg> <img src=../../images/icons/data-types/datetime_default.svg> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg> <img src=../../images/icons/data-types/string_default.svg></td><td align=center><img src=../../images/icons/data-types/datetime_default.svg> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg></td><td align=center><img src=../../images/icons/data-types/boolean_default.svg> <img src=../../images/icons/data-types/datetime_default.svg> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg> <img src=../../images/icons/data-types/string_default.svg></td><td align=center><img src=../../images/icons/data-types/datetime_default.svg> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg></td></tr>
<tr><td align=left>Delete records</td><td align=center><img src=../../images/icons/data-types/boolean_default.svg> <img src=../../images/icons/data-types/datetime_default.svg> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg> <img src=../../images/icons/data-types/string_default.svg></td> <td align=center><img src=../../images/icons/data-types/datetime_default.svg> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg></td><td></td> <td></td></tr>
<tr><td align=left>Replace with average</td><td align=center><img src=../../images/icons/data-types/datetime_default.svg></td><td align=center><img src=../../images/icons/data-types/datetime_default.svg> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg></td><td align=center><img src=../../images/icons/data-types/datetime_default.svg></td><td align=center><img src=../../images/icons/data-types/datetime_default.svg> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg></td></tr>
<tr><td align=left>Replace with median</td><td align=center><img src=../../images/icons/data-types/datetime_default.svg> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg></td><td align=center><img src=../../images/icons/data-types/datetime_default.svg> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg></td><td align=center><img src=../../images/icons/data-types/datetime_default.svg> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg></td><td align=center><img src=../../images/icons/data-types/datetime_default.svg> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg></td></tr>
<tr><td align=left>Replace with most frequent</td><td align=center><img src=../../images/icons/data-types/boolean_default.svg> <img src=../../images/icons/data-types/datetime_default.svg> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg> <img src=../../images/icons/data-types/string_default.svg></td><td align=center><img src=../../images/icons/data-types/datetime_default.svg> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg></td><td align=center><img src=../../images/icons/data-types/boolean_default.svg> <img src=../../images/icons/data-types/datetime_default.svg> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg> <img src=../../images/icons/data-types/string_default.svg></td><td align=center><img src=../../images/icons/data-types/datetime_default.svg> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg></td></tr>
<tr><td align=left>Replace with set value</td><td align=center><img src=../../images/icons/data-types/boolean_default.svg> <img src=../../images/icons/data-types/datetime_default.svg> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg> <img src=../../images/icons/data-types/string_default.svg></td><td align=center><img src=../../images/icons/data-types/datetime_default.svg> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg></td><td align=center><img src=../../images/icons/data-types/boolean_default.svg> <img src=../../images/icons/data-types/datetime_default.svg> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg> <img src=../../images/icons/data-types/string_default.svg></td><td align=center></td></tr>
<tr><td align=left>Limit</td><td align=center><img src=../../images/icons/data-types/boolean_default.svg> <img src=../../images/icons/data-types/datetime_default.svg> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg> <img src=../../images/icons/data-types/string_default.svg></td><td align=center><img src=../../images/icons/data-types/datetime_default.svg> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg></td><td align=center><img src=../../images/icons/data-types/boolean_default.svg> <img src=../../images/icons/data-types/datetime_default.svg> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg> <img src=../../images/icons/data-types/string_default.svg></td><td align=center><img src=../../images/icons/data-types/datetime_default.svg> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg></td></tr>
</table>

**Read on:** [Smoothing Component](smoothing.md)

**See also:**
* [Imputation](../preprocessing/filling-omissions.md)
* [Outliers](https://en.wikipedia.org/wiki/Outlier)