# ![Cross Table](../../images/icons/components/cross-tab_default.svg) Cross Table

The handler creates the pivot table based on the source data set. When creating the table, the following criteria are met:

* A part of fields of the source data set is unchanged forming the **strings** of the pivot table.
* The values of cells of the other fields groups form the **columns** of the pivot table defining their headers.
* Data of the third group of fields is used for calculation of **measures** — [aggregated values](../func/aggregation-functions.md) at the intersection of strings and columns of the pivot table.

%spoiler%Example:%spoiler%

Source table:

| Date | Goods | Volume of sales |
| :------- | :------- | -------: |
| 05.02.2017 | Wallpaper | 2000 |
| 05.02.2017 | Grout | 300 |
| 07.02.2017 | Wallpaper | 2000 |
| 07.02.2017 | Sealer | 750 |
| 07.02.2017 | Primer | 400 |
| 10.02.2017 | Primer | 400 |
| 10.02.2017 | Wallpaper | 3000 |
| 11.02.2017 | Sealer | 250 |

Let's transform the source table with the following parameters: columns - *Goods*, strings - *Date*, measures - *Volume of sales*. Let's select the *Sum* aggregation function by the *Volume of sales* field.

Output data set:

| Date | Sealer | Primer | Grout | Wallpaper |
| :------- | -------: | -------: | -------: | -------: |
| 05.02.2017 |  | | 300 | 2000 |
| 07.02.2017 | 750 | 400 | | 2000 |
| 10.02.2017 |  | 400 | | 3000 |
| 11.02.2017 | 250 |  | | |


Upon processing, the values of the *Goods* field were transferred to headers of the new columns, the values of the *Date* field were left in the strings, the values of the *Volume of sales* field were summed by dates.

%/spoiler%

### Input

* ![Input data source](../../images/icons/app/node/ports/inputs/table_inactive.svg) **Input data source**: the port for connection of the input data set.

### Output

* ![Output data source](../../images/icons/app/node/ports/inputs/table_inactive.svg) **Output data set**: the table with processed data is output to the port.

## Wizard

The wizard window is divided into two areas: available fields (to the left) and selected fields (to the right).

* **Available fields** contain the input data set fields.
* **Selected fields** are divided into groups.
   * ![Columns](../../images/icons/dataset-operations/dsa-columns_default.svg) Columns.
   * ![Strings](../../images/icons/dataset-operations/dsa-rows_default.svg) Strings.
   * ![Measures](../../images/icons/dataset-operations/dsa-factor_default.svg) Measures.

The *Available fields* area always contains the *Count* synthetic field apart from the input data set fields, it can be added only to the *Measures* group. It will be calculated how many times each combination of columns and strings occurs in the source data set.

### Columns

The values of these fields will be the columns headers. The fields included into this group must relate to the discrete [data kind](../../data/datakind.md).

When using the cross table, new values can appear in the fields by which the columns were generated. The handler provides two approaches to solve this problem:

* **Sliding unique values** enable to create columns from the unique field (fields) values. When changing the source data set values, the whole structure of the resulting table will be fully reconstructed taking into account the new unique values. It is also possible to set the minimum number of the fields values from which the columns will be created. But in this case, the column with the remaining values will be left in the resulting table.

%spoiler%Example:%spoiler%

Input table:

| Point of sale | Goods | Amount of sales |
|:--------------|:-----:|:--------------|
| Construction market | Wallpaper | 170 |
| Construction market | Tiles | 400 |

Cross table with the following column: Goods<br>
The minimum number of the unique values is set for the column = 4<br>
With string: Point of sale<br>
Measure: Amount of sales (Amount).<br>

Resulting table

| Point of sale | Wallpaper | Tiles | 3 | 4 |
|:--------------|:-----:|:-----:|---:|---:|
| Construction-market | 170 | 400 | | |

If one more item of goods was added to the input data set

| Point of sale | Goods | Amount of sales |
|:--------------|:-----:|:--------------|
| Construction-market| Wallpaper | 170 |
| Construction-market| Tiles | 400 |
| Construction-market| Sealer | 135 |

And the cross table settings are unchanged, the resulting data set will be as follows:

| Point of sale | Wallpaper | Tiles | Sealer | 4 |
|:--------------|:-----:|:-----:|:--------:|---|
| Construction-market | 170 | 400 | 135 | |

%/spoiler%

* **Group of values**: if the new values appear in the source field from the moment of the last node configuration, in this case, with the enabled *Other* checkbox, measures for such values will be aggregated in the *Other* column. The enabled *Null* checkbox displays the field data with null values in the output data set. Measures for them will be aggregated in the *Null values* column.

The lower wizard part includes the *General Columns Settings* area that has the following parameters:

* **Field caption parts separator**: it is required to select the character to separate the new fields captions when selecting several fields in the columns.
   * . (Dot).
   * | (horizontal line).
   * ->.
   * Space.
* **Sliding unique values**: the checkbox selection enables to create columns from the unique field (fields) values again. When changing the source data set values, the whole structure of the resulting table will be fully reconstructed taking into account the new values.
* **Value number limit** is used to limit the maximum count of columns in the output data set. The first n generated fields are selected if the set number of values exceeds the number of the unique values in the columns, the fictitious columns are not added.

Using ![Up](../../images/icons/toolbar-controls/moveup_default.svg) and ![Down](../../images/icons/toolbar-controls/movedown_default.svg) buttons, it is possible to change the order of fields in the group. The order of fields location has an impact on the resulting table structure.

%spoiler%Example:%spoiler%

Source table:

|Point of sale|Goods|Amount of sale|Date|
|:-|:-|-:|:-|
|Construction-market|Wallpaper|170|10.04.2012|
|Construction-market|Tiles|400|10.04.2012|
|Construction-market|Sealer|135|10.04.2012|
|Trade stand|Wallpaper|240|11.04.2012|
|Trade stand|Tiles|80|11.04.2012|
|Trade stand|Sealer|40|12.04.2012|
|Construction-market|Wallpaper|130|12.04.2012|
|Trade stand|Wallpaper|130|12.04.2012|
|Trade stand|Tiles|20|12.04.2012|
|Trade stand|Wallpaper|230|13.04.2012|
|Construction-market|Sealer|65|13.04.2012|
|Trade stand|Sealer|260|13.04.2012|

*Cross table* with the following order of columns: *Goods*, *Point of sale*.  Measure: *Amount of sales (Amount)*. And the following parameter: *Field caption parts separator*: `.`

|Sealer.Trade stand|Sealer.Construction-market|Wallpaper.Trade stand|Wallpaper.Construction-market|Tiles.Trade stand|Tiles.Construction market|
|-:|-:|-:|-:|-:|-:|
|300|200|600|300|100|400|

*Cross table* with the following order of columns: *Point of sale*, *Goods*. Measure: *Amount of sales (Amount)*. And the following parameter: *Field caption parts separator*: `.`

|Trade stand.Sealer|Trade stand.Wallpaper|Trade stand.Tiles|Construction-market.Sealer|Construction-market.Wallpaper|Construction-market.Tiles|
|-:|-:|-:|-:|-:|-:|
|300|600|100|200|300|400|

%/spoiler%

### Strings

The cross table rows will be generated from the fields values. The similar field (fields) values will be grouped in the same manner as it is organized in the [Grouping](../../processors/transformation/grouping.md) handler.

The fields order in this group has an impact on data sorting in the resulting table by these fields.

%spoiler%Example:%spoiler%

Source table:

|Point of sale|Goods|Amount of sale|Date|
|:-|:-|-:|:-|
|Construction-market|Wallpaper|170|10.04.2012|
|Construction-market|Tiles|400|10.04.2012|
|Construction-market|Sealer|135|10.04.2012|
|Trade stand|Wallpaper|240|11.04.2012|
|Trade stand|Tiles|80|11.04.2012|
|Trade stand|Sealer|40|12.04.2012|
|Construction-market|Wallpaper|130|12.04.2012|
|Trade stand|Wallpaper|130|12.04.2012|
|Trade stand|Tiles|20|12.04.2012|
|Trade stand|Wallpaper|230|13.04.2012|
|Construction-market|Sealer|65|13.04.2012|
|Trade stand|Sealer|260|13.04.2012|

*Cross table* with the following order of strings: *Point of sale*, *Date*. Measure: *Amount of sales (Amount)*.

|Point of sale|Date|Amount of sale|
|:-|:-|-:|
|Trade stand|11.04.2012|320|
|Trade stand|12.04.2012|190|
|Trade stand|13.04.2012|490|
|Construction-market|10.04.2012|705|
|Construction-market|12.04.2012|130|
|Construction-market|13.04.2012|65|

%/spoiler%

### Measures

The fields data in this group are processed according to the [aggregation functions](../func/aggregation-functions.md). The obtained values are displayed at the intersection of columns and strings. By default, the *Sum* function is selected for all numerical types, whereas for others - *Count*.

To select other aggregation functions, it is required to double click on the field. When selecting several function options, each of them will be calculated in a separate column.

The order of fields does not matter in the *Measures* group.
