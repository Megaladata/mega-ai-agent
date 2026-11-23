# ![Right Join](../../../images/icons/joindata/join-right_default.svg) Right Join

When the join is right (SQL analogue: `RIGHT JOIN`, the joined table is right) the main and joined tables are joined by the key fields. All records of the joined table fall within the resulting data set. They are appended with the fields from the main table. If no mapping was detected by the key fields for the record from the joined table, the Null value is stated in the appended fields.
For example:

Let's consider two tables as an example. A person - the main table and joined City.

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
|Paul|1|Ottawa|
|Harold|2|Washington|
|&#60;null>|&#60;null>|London|