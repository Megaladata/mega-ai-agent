# ![Inner Join](../../../images/icons/joindata/join-inner_default.svg) Inner Join

Two tables are joined in the case of the inner join (SQL analogue: `INNER JOIN`). The order of tables is not important for this join method.
The resulting data set contains all rows for which mapping of the key fields of the main and joined table has been detected.

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
|Harold|2|Washington|
|Paul|1|London|
