# Aggregation Functions

**Aggregation functions** are statistical functions that are used with a set of values. They return one value that is characteristic of such set.

The following aggregation functions are listed in the table below:

|Aggregation kind|![](../../images/icons/data-types/string_default.svg)|![](../../images/icons/data-types/integer_default.svg)|![](../../images/icons/data-types/float_default.svg)|![](../../images/icons/data-types/boolean_default.svg)|![](../../images/icons/data-types/datetime_default.svg)|![](../../images/icons/data-types/variant_default.svg)|Comment|
|:-|:-:|:-:|:-:|:-:|:-:|:-:|:-|
|![](../../images/icons/aggregations/factor-sum_default.svg) Sum||**•**|**•**||||It sums up values of all cells in the column.
|![](../../images/icons/aggregations/factor-count_default.svg) Count|**•**|**•**|**•**|**•**|**•**|**•**|It displays total number of records in the data set, including null records and records without a value (*`<null>`*).|
|![](../../images/icons/aggregations/factor-min_default.svg) Minimum|**•**|**•**|**•**|**•**|**•**|**•**|It shows the minimum value by column. The null records are not included into the aggregation, with the exception of ![](../../images/icons/data-types/string_default.svg) String type where the null record is the minimum one. Records with *`<null>`* are not included into the aggregation.|
|![](../../images/icons/aggregations/factor-max_default.svg) Maximum|**•**|**•**|**•**|**•**|**•**|**•**|It shows the maximum value by column. For ![](../../images/icons/data-types/string_default.svg) String type the order to maximum is as follows: "Null value → Characters → Digits → the lowercase Latin alphabet → the uppercase Latin alphabet.|
|![](../../images/icons/aggregations/factor-avg_default.svg) Average||**•**|**•**||||It shows the average value of all column cells. The fields that are not empty and *`<null>`* are included into calculations.|
|![](../../images/icons/aggregations/factor-median_default.svg) Median||**•**|**•**||||It shows the median value by column. The fields that are included into the aggregation are as for the Average aggregation.|
|![](../../images/icons/aggregations/factor-stddev_default.svg) Standard deviation||**•**|**•**||||It shows the mean-square deviation by column. The fields that are included into the aggregation are as for the Average aggregation.|
|![](../../images/icons/aggregations/factor-unique-count_default.svg) Count of unique|**•**|**•**|**•**|**•**|**•**|**•**|It displays the count of unique record values. The records with the null value, with *`<null>`* value or the value that does not match the data type are not taken into account in the calculation process. With the exception of ![](../../images/icons/data-types/string_default.svg) String data type where only the records with *`<null>`* value are not taken into account.|
|![](../../images/icons/aggregations/factor-null-count_default.svg) Null count|**•**|**•**|**•**|**•**|**•**|**•**|It displays the number of records with the null values, *`<null>`* value or the values that do not match the data type. With the exception of ![](../../images/icons/data-types/string_default.svg) String data type where the records with *`<null>`* value are considered to be null.|
|![](../../images/icons/aggregations/factor-stat-first_default.svg) The first|**•**|**•**|**•**|**•**|**•**|**•**|It shows the value of the first record in the data set.|
|![](../../images/icons/aggregations/factor-stat-last_default.svg) The last|&nbsp;&nbsp;**•**&nbsp;&nbsp;|&nbsp;&nbsp;**•**&nbsp;&nbsp;|&nbsp;&nbsp;**•**&nbsp;&nbsp;|&nbsp;&nbsp;**•**&nbsp;&nbsp;|&nbsp;&nbsp;**•**&nbsp;&nbsp;|&nbsp;&nbsp;**•**&nbsp;&nbsp;|It shows the value of the last record in the data set.|


> **Note: The Variable** Data type ![](../../images/icons/data-types/variant_default.svg) follows the aggregation method of the data type that has been selected in the wizard before.
