# ![Difference](../../../images/icons/joindata/join-diff_default.svg) Difference

The resulting data set contains records of the main data set for which there is no detected mapping by the key fields in the joined data set. There are only fields of the main data set in the resulting data set. There are no SQL operators analogues of this operation.

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

|Name|City Id|
|:-|-:|
|Rose|4|
