---
description: Use Megaladata's Imputation node to fill in missing values. Explore processing methods, such as replacing missing values with the mean, median, 0, or random values. Learn how to configure the node in the wizard.
---
# ![ ](./../../images/icons/components/plausible_default.svg)&nbsp;Imputation Component

This component automatically fills missing values in datasets.
For each column in the source dataset, select the most suitable method for processing missing values. Missing values are null values.

> **Note:** The node does not process fields with the `variant` data type (see [data types](./../../data/datatype.md)).

## Ports

### Input

* ![ ](./../../images/icons/app/node/ports/inputs/table_inactive.svg)&nbsp;**Input data source**: Accepts an input dataset (a data table).

### Output

* ![ ](./../../images/icons/app/node/ports/outputs/table_inactive.svg)&nbsp;**Output dataset**: Provides the resulting dataset (a data table).

## Configuration wizard

Configure column mapping in the [table](../../workflow/ports/interface-table.md) or [links interface](../../workflow/ports/interface-links.md).

### Imputation settings

* **Source data ordered**: Tick this checkbox if you know the data is ordered. It could be a time series or another sequence ordered ascending or descending (e.g., by date or time). Use different missing data processing methods for ordered and unordered data.
* **Allowable percentage of nulls**: Enter a percentage value to set the threshold beyond which the node will not fill missing values. For example, if you set this parameter to 50, the node does not fill in fields that contain more than 50% missing values.
* **Random seed**: Specify the initial positive integer to initialise the pseudo-random number generator. The seed determines the generator's output sequence. If you reinitialise the generator with the same seed, you get the same number sequence. This parameter affects the random value replacement: When using the same input and seed, the node outputs the same results.
Use the following commands for this parameter:  
  * **Always randomize**: Always use a random seed.
  * **Generate**: Generate a new seed.
  * **Copy**: Copy the specified value to the clipboard.
* **Input fields**: View the list of fields available for processing. For each field, tick the checkbox to enable processing, and then select the method in the **Processing method** column:
  * **Replace with the previous value**: Replace detected missing values with the previous known (non-empty) value from the same column. If the dataset starts with missing values, the node leaves them empty until the first non-empty value.
  * **Replace with average**: Replace detected missing values with the column average.
  * **Replace with median**: Replace detected missing values with the column median.
  * **Replace with most frequent**: Replace detected missing values with the most probable value of the column, i.e., the *mean value of the most frequent interval*. The number of intervals varies depending on the sample size: the larger it is, the more intervals the node uses. The system employs different processing methods for [discrete and continuous](../../data/datakind.md) data:
    - **Discrete:** The node fills missing values with the most frequent value. If there are several such values, the *last* value is used.
    - **Continuous:** The node fills missing values with the mean value of the most frequent interval. If there are several such intervals, the system uses the *first* interval of those with the same maximum frequency.
  * **Replace with 0**: Replace detected missing values with `0`.
  * **Replace with random values**: Replace detected missing values with random values that the node generates in the range from the minimum to the maximum column value.
  * **Linear interpolation**: Replace detected missing values with intermediate values of a linear function that the node builds from known values (as if you drew a straight line between them).
  * **Cubic interpolation**: Replace detected missing values with intermediate values of a cubic spline (third-degree splines with a continuous first derivative) that the node builds from known values.
  * **Spline interpolation**: Replace detected missing values with intermediate values of a spline function that the node builds from known values.
  * **Leave unchanged**: Do not fill detected missing values.
  * **Delete records**: Exclude rows with detected missing values from the output dataset.
  * **Replace with set value**: Replace detected missing values with the default value `Unspecified` or with a custom value. To specify a value, click ![ ](./../../images/extjs-theme/form/open-trigger/open-trigger_default.svg)**More**.

For each field, the set of available methods depends on the following three data characteristics at the same time (see [data](./../../data/README.md)):
* ordered/unordered
* discrete/continuous
* data type

See the applicability table:

<table>
<tr><th valign=top align=center rowspan=2>Method</th><th align=center colspan=2>Unordered dataset</th><th align=center colspan=2>Ordered dataset</th></tr>
<tr><th align=center><img src=../../images/icons/data-types/discrete_default.svg>&nbsp;Discrete</th><th align=center><img src=../../images/icons/data-types/continuous_default.svg>&nbsp;Continuous</th><th align=center><img src=../../images/icons/data-types/discrete_default.svg>&nbsp;Discrete</th><th align=center><img src=../../images/icons/data-types/continuous_default.svg>&nbsp;Continuous</th></tr>

<tr><td align=left>Replace with the previous value</td><td align=center><img src=../../images/icons/data-types/boolean_default.svg> <img src=../../images/icons/data-types/datetime_default.svg> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg> <img src=../../images/icons/data-types/string_default.svg></td><td align=center><img src=../../images/icons/data-types/boolean_default.svg> <img src=../../images/icons/data-types/datetime_default.svg> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg> <img src=../../images/icons/data-types/string_default.svg><td align=center><img src=../../images/icons/data-types/boolean_default.svg> <img src=../../images/icons/data-types/datetime_default.svg> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg> <img src=../../images/icons/data-types/string_default.svg></td><td align=center><img src=../../images/icons/data-types/boolean_default.svg> <img src=../../images/icons/data-types/datetime_default.svg> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg> <img src=../../images/icons/data-types/string_default.svg></tr>

<tr><td align=left>Replace with average</td><td align=center><img src=../../images/icons/data-types/datetime_default.svg></td><td align=center> <img src=../../images/icons/data-types/datetime_default.svg> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg></td><td align=center><img src=../../images/icons/data-types/datetime_default.svg></td><td align=center><img src=../../images/icons/data-types/datetime_default.svg> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg></td></tr>

<tr><td align=left>Replace with median</td><td align=center><img src=../../images/icons/data-types/datetime_default.svg> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg></td><td align=center><img src=../../images/icons/data-types/datetime_default.svg> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg></td><td align=center><img src=../../images/icons/data-types/datetime_default.svg> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg></td><td align=center><img src=../../images/icons/data-types/datetime_default.svg> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg></td></tr>

<tr><td align=left>Replace with most frequent</td><td align=center><img src=../../images/icons/data-types/boolean_default.svg> <img src=../../images/icons/data-types/datetime_default.svg> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg> <img src=../../images/icons/data-types/string_default.svg></td><td align=center><img src=../../images/icons/data-types/datetime_default.svg> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg></td><td align=center><img src=../../images/icons/data-types/boolean_default.svg> <img src=../../images/icons/data-types/datetime_default.svg> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg> <img src=../../images/icons/data-types/string_default.svg></td><td align=center><img src=../../images/icons/data-types/datetime_default.svg> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg></td></tr>

<tr><td align=left>Replace with 0</td><td align=center>  <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg> <td align=center> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg></td><td align=center> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg> <td align=center> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg></td></tr>

<tr><td align=left>Replace with random values</td><td align=center><img src=../../images/icons/data-types/boolean_default.svg> <img src=../../images/icons/data-types/datetime_default.svg> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg> <img src=../../images/icons/data-types/string_default.svg></td><td align=center><img src=../../images/icons/data-types/datetime_default.svg> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg></td><td align=center><img src=../../images/icons/data-types/boolean_default.svg> <img src=../../images/icons/data-types/datetime_default.svg> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg> <img src=../../images/icons/data-types/string_default.svg></td><td align=center><img src=../../images/icons/data-types/datetime_default.svg> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg></td></tr>

<tr><td align=left>Linear interpolation</td><td></td><td></td><td align=center><img src=../../images/icons/data-types/datetime_default.svg> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg></td><td align=center><img src=../../images/icons/data-types/datetime_default.svg> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg></td></tr>

<tr><td align=left>Cubic interpolation</td><td></td><td></td><td align=center><img src=../../images/icons/data-types/datetime_default.svg> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg></td><td align=center><img src=../../images/icons/data-types/datetime_default.svg> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg></td></tr>

<tr><td align=left>Spline interpolation</td><td></td><td></td><td align=center><img src=../../images/icons/data-types/datetime_default.svg> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg></td><td align=center><img src=../../images/icons/data-types/datetime_default.svg> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg></td></tr>

<tr><td align=left>Leave unchanged</td><td align=center><img src=../../images/icons/data-types/boolean_default.svg> <img src=../../images/icons/data-types/datetime_default.svg> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg> <img src=../../images/icons/data-types/string_default.svg></td><td align=center><img src=../../images/icons/data-types/datetime_default.svg> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg></td><td></td><td></td></tr>

<tr><td align=left>Delete records</td><td align=center><img src=../../images/icons/data-types/boolean_default.svg> <img src=../../images/icons/data-types/datetime_default.svg> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg> <img src=../../images/icons/data-types/string_default.svg></td><td align=center><img src=../../images/icons/data-types/datetime_default.svg> <img src=../../images/icons/data-types/float_default.svg> <img src=../../images/icons/data-types/integer_default.svg></td><td align=center></td><td align=center></td></tr>

<tr><td align=left>Replace with set value</td><td align=center><img src=../../images/icons/data-types/string_default.svg></td><td></td><td align=center><img src=../../images/icons/data-types/string_default.svg></td><td></td></tr>

</table>

**Read on:** [Binning Component](https://help.megaladata.com/userguide/processors/preprocessing/quantization.html)

**See also:** [Eliminate Outliers](https://help.megaladata.com/userguide/processors/preprocessing/editing-of-emissions.html)