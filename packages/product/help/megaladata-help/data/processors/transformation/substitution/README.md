# ![Replace](../../../images/icons/components/replace-columns_default.svg) Replace

The handler replaces the source data set data using replacement tables. The replacement tables contain couples of the replaced and new values or regular expressions that enable to compute them. It is possible to set these tables manually in the wizard (internal) or send to the handler port (external).

Sequence of the replacement algorithm actions:

1. First of all, it is required to search and replace by the [exact match](./exact-match.md) with the values specified in the replacement table.
2. The search among the values not found by exact match is performed by [regular expressions](./regexp-match.md). Such expressions can be set in the internal replacement tables. New values are also computed using regular expressions.
3. Replacement rules are observed for the values not found at the previous steps.

### Input

* ![Input data source](../../../images/icons/app/node/ports/inputs/table_inactive.svg) **Input data source** (data table): the data set to be changed.
* ![Data set](../../../images/icons/app/node/ports/inputs/table_inactive.svg) **Joined table [N]** (data table): the data set that contains a replacement table.
* ![Add port](../../../images/icons/app/node/ports/add/add_inactive_default.svg) **Add another port.** As several replacement tables are possible, the ports required for them can be added by a user.

### Output

* ![Output data set](../../../images/icons/app/node/ports/inputs/table_inactive.svg) **Output data set** (data table). When configuring port columns mapping, it is possible to select columns replacement or addition options.

## Wizard

The wizard window consists of three areas:

1. [Replacement methods](#replacement-methods).
2. [Replacement table](#replacement-table).
3. [Additional parameters](#additional-parameters).

### Replacement Methods

Replacement method is set for each field of the source data set:

* **Do not replace**: the output data set won't be replaced.
* **Manual input**: the internal replacement table is used.
* **Replacement table** (Replacement table N): the external replacement table is used. This method is available in the settings if the external replacement table data is supplied to the input handler port.

**Replacement table N**: the name of the table accepting port.

### Replacement Table

It displays the external or internal replacement table for the selected field of the source data set.

#### Configuration of the Internal Table

To enter the new row into the replacement table, it is required to use ![Add row](../../../images/icons/toolbar-controls/plus_default.svg) button. The table can contain rows for search and replacement according to the following requirements:

* [Exact match](./exact-match.md).
* [Regular expression](./regexp-match.md) (it is applied only to the data of the string type).

> **Important:** In the case of replacement of the numeric data, it is required to consider the intervals into which this or that replaced value is included.

%spoiler%Example%spoiler%

Let's consider the following table:

| Value |
|:--------:|
| 5 |
| 10 |
| 15 |

There are the following replacement types: 1) `5 => -5`; 2) `15 => -15`.

And precision is equal to `5`.

In this case, the output table will be as follows:

| Value |
|:--------:|
| -5 |
| -15 |
| -15 |

So, there are two half-intervals: [5, 10) and [10, 15).
Thus, the bound values are included into the interval in which they are the initial ones.

%/spoiler%

When entering the replacement table manually, the following actions are available by means of the area toolbar:

* ![Import](../../../images/icons/toolbar-controls/import_default.svg) **Import** provides import of the replacement table from the text file with a particular [structure](./import-tz.md).
* ![Export](../../../images/icons/toolbar-controls/export_default.svg) **Export** provides export of the replacement table to the text file.
* ![Sort](../../../images/icons/toolbar-controls/sort-asc_default.svg) **Sort** enables to sort the table by field of the source value.
* **Change replacement type** enables to set data type of the column with new values.
* ![Edit current replacement](../../../images/icons/toolbar-controls/edit_default.svg) **Edit current replacement** enables to display the editing area of the current string of the substitution table.
* ![Get values](../../../images/icons/toolbar-controls/load-values_default.svg) **Get values** enables to load the drop-down list called by ![ ](../../../images/icons/toolbar-controls/down_default.svg) button to the *Value* field in the case of the manual input of the replacement table.

> **Note:** Replacement by exact match prevails over replacement by regular expression.

#### Configuration of the External Table

It is required to select **Usage type** for the table fields from the following options:

* ![Not used](../../../images/icons/usage-types/unspecified_default.svg) **Not used**: the replacement table field won't be used.
* ![Value](../../../images/icons/usage-types/source_default.svg) **Value**: the field contains replaced values.
* ![Replace](../../../images/icons/usage-types/replace-by_default.svg) **Replace**: the field contains new values.
* ![Info](../../../images/icons/usage-types/unspecified_default.svg) **Info**: the field contains an additional option of the new value. Additional replacement options are displayed in the resulting data set in the form of a separate column.

> **Note:** If one value can be replaced according to conditions of several replacement table rows, the first one must prevail. Thus, **table sorting can have an impact on the processing result**. This rule is not applied when using the [allowable interval](./exact-match.md#use-of-the-allowable-interval) (refer to *Precision* parameter).

### Additional Parameters

* **Replace other** contains replacement options of the values that have not been found using the replacement table.
   * **Do not replace**: no replacement is performed.
   * **With empty**: values will be replaced with Null.
   * **With value**: values will be replaced with the specified value.
   * **With regular expression**: the new value will be calculated using the [regular expression](./regexp-match.md) syntax.
* **Precision**: enables to set the [allowable interval](./exact-match.md#primenenie-dopustimogo-intervala) based on the values specified in the replacement tables for the integer and real fields. In this case, the source value will be replaced.
* **Case-sensitive strings**: the checkbox installs the case-sensitive mode of values search in the replacement tables. This mode is not used by default.
