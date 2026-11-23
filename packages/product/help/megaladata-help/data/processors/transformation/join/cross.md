# ![Full Join](../../../images/icons/joindata/join-full_default.svg) Full Join

## Cross Join (SQL Analogue: `CROSS JOIN`)

When the join is full (`CROSS JOIN`), the cross join (or Cartesian product) is performed. Each row of one table is joined with each row of the second table providing all possible combinations of rows of two tables.
In the case of such join, the order of tables (left, right) is not important, and it is not required to map the key fields.

For example:

Let's consider two tables as an example. Main table — A person, joined — A city.

Main table:

|Name|City Id|
|:-|-:|
|Andry|1|
|Harold|2|
|Paul|1|
|Rose|4|

Joined table:

|Id|City|
|-:|:-|
|1|Ottawa|
|2|Washington|
|3|London|

![Link](./merge.svg)

Resulting table:

|Name|City Id|City|
|:-|-:|:-|
|Andry|1|Ottawa|
|Andry|1|Washington|
|Andry|1|London|
|Harold|2|Ottawa|
|Harold|2|Washington|
|Harold|2|London|
|Paul|1|Ottawa|
|Paul|1|Washington|
|Paul|1|London|
|Rose|4|Ottawa|
|Rose|4|Washington|
|Rose|4|London|

## Full Join (SQL Analogue: `FULL JOIN`)

When the join is full (`FULL JOIN`), the full external join of two data sets is performed. The following records are added to the resulting data set:

1. Inner join (`INNER JOIN`) of the first and second tables.
2. Records of the first table that were not included into the inner join during step 1. For such records, the `NULL` values are appended to the fields matching the second table.
3. Records of the second table that were not included into the inner join during step 1. For such records, the `NULL` values are appended to the fields matching the first table.

Mapping of the key fields is required for such join.

For example:

Let's consider two tables as an example. Main table — A person, joined — A city.

Main table:

|Name|City Id|
|:-|-:|
|Andry|1|
|Harold|2|
|Paul|1|
|Rose|4|

Joined table:

|Id|City|
|-:|:-|
|1|Ottawa|
|2|Washington|
|3|London|

![Link](./merge.svg)

Resulting table:

|Name|City Id|City|
|:-|-:|:-|
|Andry|1|Ottawa|
|Harold|2|Washington|
|Paul|1|Ottawa|
|Rose|4|&#60;null>|
|&#60;null>||London|

> **Important:** To use `FULL JOIN` when selecting *Full join* method of join, it is required to map the key fields of the joined data sets in the wizard. If there is no mapping, the `CROSS JOIN` algorithm of join is used. When selecting this join method, the resulting sample volume can get higher very rapidly.

Only the key fields of the main table can be included into the resulting data set for any join (`JOIN`). To include the key fields of the joined table into the resulting data set, it is required to select the following checkbox: *Add joined key fields*. If the checkbox is selected, the resulting table specified in the previous example will be as follows:

|Name|City Id|City|Id|
|:-|-:|:-|:-|
|Andry|1|Ottawa|1|
|Harold|2|Washington|2|
|Paul|1|Ottawa|1|
|Rose|4|&#60;null>||
|&#60;null>||London|3|
