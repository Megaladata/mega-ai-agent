# ![Ungroup](../../images/icons/components/ungroup-data_default.svg) Ungroup

The component performs the action inverse to [aggregation by sum](../func/aggregation-functions.md) used in [Grouping](./grouping.md). To define the groups by which the inverse aggregation of numeric field will be performed, it is required to use the reference table from which the groups as such will be taken and percentage distribution of the numeric field values between them will be considered.

The main use area of ungrouping is detailing of the forecast data according to the available one. For example, if there is data on the effected sales amount for particular goods, this data can be used for ungrouping by the goods listed in the table with the forecast made only for groups of goods.

%spoiler%Example:%spoiler%

Let us consider the sales amount forecast made for two groups of goods, and we need to define the sales amounts for separate goods according to this forecast.

Ungrouped data:

| Group of goods | Amount of sales. |
| :------------- | ----------------------: |
| Goods for summer cottage | 42,00 |
| Household goods | 5,00 |

Data on the sales amount in the previous period will be used as reference data.

Data for calculation of quotas:

| Group of goods | Name of goods | Amount of sales. |
| :------------- | :-------------- | ----------------------: |
| Goods for summer cottage | Rattan chair | 16,00 |
| Goods for summer cottage | Square-point shovel | 23,50 |
| Household goods | Painted sugar bowl | 5,70 |
| Household goods | Glass jug | 4,20 |
| Goods for summer cottage | Steel vacuum flask | 7,60 |
| Goods for summer cottage | Seeds of red tulips | 5,30 |
| Goods for summer cottage | Fire starter fluid | 6,20 |
| Household goods | Pink sparkling water | 1,60 |
| Household goods | Baby soap | 2,90 |

When configuring the ungrouping node, let's select *With calculation of quotas for total sample* method, set rounding up to one decimal place and *Proportional* balance method. Let's link the following fields in the area of the field usage type configuration: `Group of goods` of both tables, `Amount of sales` field from the ungroupable table will have the *Ungroupable* usage type, and `Name of goods` and `Amount of sales` fields from the reference table will have the following usage types: *Field with names* and *Field with quotas* correspondingly.

Ungroup output:

| Group of goods | Name of goods | Amount of group sales. | Amount of group sales| Ungrouped value |
| :------------- | :-------------- | -----------------------------: | -----------------------------------------: | -------------------------: |
| Goods for summer cottage | Rattan chair | 42,00 | 42,00 | 11,50 |
| Goods for summer cottage | Square-point shovel | 42,00 | 42,00 | 16,90 |
| Goods for summer cottage | Steel vacuum flask | 42,00 | 42,00 | 5,40 |
| Goods for summer cottage | Seeds of red tulips | 42,00 | 42,00 | 3,80 |
| Goods for summer cottage | Fire starter fluid | 42,00 | 42,00 | 4,40 |
| Household goods | Painted sugar bowl | 5,00 | 5,00 | 1,90 |
| Household goods | Glass jug | 5,00 | 5,00 | 1,50 |
| Household goods | Pink sparkling water | 5,00 | 5,00 | 0,60 |
| Household goods | Baby soap | 5,00 | 5,00 | 1,00 |

* **Amount of group sales.** — amount of sales of the particular group.
* **Amount of group sales.**: the values obtained when rounding is used are shown in this field.
* **Ungrouped value**: detailing of the goods sales measured in thous. is shown in this example.

%/spoiler%

## Ports

### Input

* ![Ungrouped data](../../images/icons/app/node/ports/inputs/table_inactive.svg) **Ungrouped data**: the table that contains ungrouping field.
* ![Data for calculation of quotas](../../images/icons/app/node/ports/inputs/table_inactive.svg) **Data for calculation of quotas**: the table from which the values of ungrouping quotas are calculated.

### Output

* ![Ungroup output](../../images/icons/app/node/ports/inputs/table_inactive.svg) **Ungroup output**: the source table after processing. The following fields are added to it:
   * **Field caption|Rounded**: the field contains rounded ungrouped values (when rounding is used).
   * **Ungrouped value**: the field contains the values ungrouped according to the *Ungrouping method*.

If *Ungrouping method is used: Given time variations and seasonality of the reference data* is used, the following fields are also added to this table:

* **Upper bound 95% CI**: the upper bound of 95% **confidence interval**.
* **Lower bound 95% CI**: the lower bound of 95% confidence interval.
* **Trend value**: the trend value in this point for this position.
* **Seasonal index value**: the index describing **seasonality** of this point and this position.
* **Value type code** can take values from 0 to 6 according to the ungrouping results.
* **Value type** contains clarifications concerning each value type code, etc.
   * **0**: the value that is normally ungrouped.
   * **1**: the ungrouped value that was initially set as the fixed one but fixation was removed by the algorithm.
   * **2**: the value fixed by a user.
   * **3**: the value fixed by a user but inconsistent with the reference sample.
   * **4**: the value fixed by the algorithm in the calculation process.
   * **5**: the erroneous value.
   * **6** is excluded from processing.
* ![Model quality indicators and seasonal indexes](../../images/icons/app/node/ports/inputs/table_inactive.svg) **Model quality indicators and seasonal indexes**: the reference table that is drawn up only when using the following method: *Given time variations and seasonality of the reference data*. It contains fields.
   * **Ungrouping quality indicator** takes the values from 0 (very poor quality, it is not recommended to rely on the results) to 1 (the "ideal" quality, the reference sample does not contain noise, and ungrouped values fully conform to the forecast).
   * **Seasonal index (1, 2, 3, ...)**: the number of fields with seasonal indexes is specified in the wizard.

## Wizard

* **Ungrouping method**: one of three ungrouping methods is selected in the drop-down list.
   * **By given quotas**: the method is applied when the quotas for ungrouping have already been provided in the reference table. Typically, the sum of quotas must be equal to one but this condition is not compulsory.
   * **With calculation of quotas for total sample**: percentage of quotas for ungrouping will be the same as for the field values of the reference table selected for calculation of quotas.
   * **Given time variations and seasonality of the reference data**: it is applied for ungrouping of the data time series.
* **Rounding format**: the format used for rounding is specified.
   * **Not round**: the data is not rounded when processing.
   * **Round to a multiple of a whole**: rounding of ungrouped values to the numbers multiple to the set integer.
   * **Round to the required decimal precision**: rounding of ungrouped values to the specified number of digits following the decimal point.
* **Balance method**: the difference between the rounded ungrouped value and actual sum of the rounded ungrouped values is calculated. Then the difference is distributed between all ungrouped values according to the selected balance method.
   * **Not balance**: the difference is not distributed.
   * **All latest**: it is required to add to the latest ungrouped value.
   * **Proportionally**: the difference is distributed by the parts proportional to the size of ungrouped values.
   * **Evenly**: the difference is evenly distributed between ungrouped values.
* **Area of the field usage type configuration** represents two tables. The first one contains a list of the ugrouped data fields, the second one contains a list of the data fields for calculation of quotas. The following options of the fields usage types are possible:
   * ![Group](../../images/icons/usage-types/group_default.svg) **Group**: such usage type is automatically set when linking the group fields. It is required to link the group fields that are the same for both tables. For this purpose, it is sufficient to drag the field caption from one table to the corresponding field caption from another table if the link established in such a manner is erroneous, it can be deleted by pressing ![Delete](../../images/icons/link-grid/remove-link_hover.svg) button that is located on it.
   * ![Ungroupable](../../images/icons/usage-types/value_default.svg) **Ungroupable**: the usage type is assigned to the table field of ungrouped data to which ungrouping will be applied.
   * ![Field with names](../../images/icons/usage-types/active_default.svg) **Field with names**: it is assigned to the reference table field that contains the names by which ungrouping will be performed.
   * ![Field with quotas](../../images/icons/usage-types/source_default.svg) **Field with quotas**: it is assigned to the reference table field that contains quotas or values for calculation of quotas.
   * ![Ordinal field](../../images/icons/usage-types/transaction_default.svg) **Ordinal field**: this usage type is available only for the fields of the *Date/time* type when using *Given time variations and seasonality of the reference data* method.

**Configure Data Order**: this wizard step is added when using *Given time variations and seasonality of the reference data* method with the following settings:

* Seasonality.
   * **Seasonality period**: selection of the seasonality period length if *No seasonality* option is set, forecast configuration options by the count of time series points will be opened, and configuration by the period count will be locked.
   * **Number of calculated seasonal indexes**: a field will be added for each index to the output port table *Model quality indicators and seasonal indexes*.
* Ungrouped Series.
   * **Point density of rare goods**: the coefficient can take the values from 0.01 to 1. The higher coefficient, the more positions will be identified by the algorithm as too rare, and they will be excluded from the forecast.
   * **Absent periods for position termination**: if any position is absent in the series for the specified number of periods, it will be excluded from the forecast.
   * **Absent data points for position termination**: if any position is absent in the series for the specified number of points, it will be excluded from the forecast.
   * **Presence periods for the new position**: the positions occurring not more frequently than the specified number of periods will be considered to be new.
* Depth period.
   * **Maximum number of seasonality periods**: to make a forecast, it is required to use the specified number of the last periods of reference data, if  `0` value is set, all periods will be used.
   * **Maximum number of points in each series**: to make a forecast, it is required to use the specified number of the last series points of reference data, if `0`value is set, all points will be used.
