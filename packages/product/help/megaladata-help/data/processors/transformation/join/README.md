---
description: Learn to combine data in Megaladata using right join (equivalent to RIGHT JOIN in SQL), left join (equivalent to LEFT JOIN in SQL), inner join (equivalent to INNER JOIN in SQL), and full join (equivalent to FULL JOIN in SQL). Output the difference between two sets.
---
# ![Join](./../../../images/icons/components/join-data_default.svg)&nbsp;Join

The **Join** node compares key fields of the main and joined datasets and builds the output dataset based on the selected algorithm. Joining datasets by key fields is equivalent to the SQL JOIN operation.

Join options:
* ![](./../../../images/icons/joindata/join-full_default.svg)&nbsp;[Full join](./cross.md)
* ![](./../../../images/icons/joindata/join-inner_default.svg)&nbsp;[Inner join](./inner.md)
* ![](./../../../images/icons/joindata/join-left_default.svg)&nbsp;[Left join](./left.md)
* ![](./../../../images/icons/joindata/join-right_default.svg)&nbsp;[Right join](./right.md)
* ![](./../../../images/icons/joindata/join-diff_default.svg)&nbsp;[Difference](./distinct.md)

Except for **Difference**, each join method corresponds to a specific type of join in SQL.

### Input

* ![Main table](./../../../images/icons/app/node/ports/inputs/table_inactive.svg)&nbsp;**Main table**: In SQL terms, this port accepts the left table data for the join—the one to which other datasets will be added.
* ![Joined table](./../../../images/icons/app/node/ports/inputs/table_inactive.svg)&nbsp;**Joined table**: Provides datasets to add to the main table. In SQL terms, this port accepts the right table data for the join.

### Output

* ![Output dataset](./../../../images/icons/app/node/ports/outputs/table_inactive.svg)&nbsp;**Output dataset**: Outputs the join result. Typically, it includes fields from the main and joined datasets.

## Configuration wizard

To configure the **Join** node, set the following parameters:
* **Operation type**: Select the operation type (join method) from the dropdown list, or set it by using an integer [control variable](./../../../workflow/variables/control-variables.md) (see [data types](./../../../data/datatype.md)):
    * `0`: Inner join
    * `1`: Left join
    * `2`: Right join
    * `3`: Full join
    * `4`: Difference
* **Field mapping**: In the central wizard area, link fields of the main and joined datasets. To do this, drag a field's name from one list and drop it onto the name of a field in the opposite list. Drag-and-drop works in any direction. The wizard will display hints (green or red) to help you select an available field (i.e., a field with the same data type). To remove a link between fields, select it and click a **Delete** button that appears in the center.
* **Case-sensitive**: Clear this checkbox to join key fields regardless of the case.By default, case-sensitivity is enabled. You can also set the value of this parameter by using a logical control variable.
* **Add joined key fields**: Select this checkbox to keep the joined table key fields in the output dataset.

> **Important:** For any join, the output dataset includes only the *key fields* of the main table.

**See also:**
* [Data Enrichment](./../enrich-data.md)
* [Column Union](./../column-union.md)
* [Union](./../union.md)