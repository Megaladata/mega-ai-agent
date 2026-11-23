---
description: Use left join to join data in Megaladata (similar to the LEFT JOIN operation in SQL).
---
# ![Left join](./../../../images/icons/joindata/join-left_default.svg)&nbsp;Left join

A left join links the main and joined tables by key fields similarly to the  `LEFT JOIN` SQL operation. The *main table* is the SQL 'left table'. The resulting dataset includes all rows from the main table, to which the system adds corresponding fields from the joined table. If the system finds no matching key fields for a row in the main table, it fills the added fields with `NULL`.

Example:

Consider the following tables:

- Main table: **Person**

|Name|City Id|
|:-|-:|
|John|1|
|Michael|2|
|William|1|
|David|4|

- Joined table: **City**

|Id|City|
|-:|:-|
|1|New York|
|2|Los Angeles|
|3|Chicago|

![Join](./merge.svg)

After left join, the resulting table will look like this:

|Name|City Id|City|
|:-|-:|:-|
|John|1|New York|
|Michael|2|Los Angeles|
|William|1|New York|
|David|4|&#60;null>|

**Read on:** [Right Join](right.md)