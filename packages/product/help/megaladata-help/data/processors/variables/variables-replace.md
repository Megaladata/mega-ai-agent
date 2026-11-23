# ![Replace (Variables)](../../images/icons/components/replace-variables_default.svg) Replace (Variables)

The handler replaces the input variables using replacement tables. The replacement tables contain couples of the replaced and new values or regular expressions that enable to compute them.

Sequence of the replacement algorithm actions:

1. First of all, replacement and search are performed by [exact match](../transformation/substitution/exact-match.md#zamena-po-tochnomu-sovpadeniyu) with the values specified in the replacement table.
1. The search among the values not found by exact match is performed by [regular expressions](../transformation/substitution/regexp-match.md). Such expressions will be set in the replacement tables. New values are also computed using regular expressions.
1. Replacement rules are observed for the values not found at the previous steps.

## Ports

### Input

* ![Input variables](../../images/icons/app/node/ports/inputs-optional/variable_inactive.svg) **Input variables**: the variables to be changed.

### Output

* ![Output variables](../../images/icons/app/node/ports/outputs/variable_inactive.svg) **Output variables**: the variables after processing.

## Wizard

The wizard window consists of three areas.

### List of Replacements

It displays the input variables and replacement method for each variable:

* **Do not replace**: no replacement is performed.
* **Manual input**: it is required to use the replacement table.

### Replacement Table

The area displays the replacement table for the selected variable.

To enter the new row to the replacement table, it is required to use ![add](../../images/icons/toolbar-controls/plus_default.svg) button. The table can contain rows for search and replacement according to the following requirements:

* **exact match**;
* **regular expression**.

When entering the replacement table, the following actions are available by means of the area toolbar:

* ![Import](../../images/icons/toolbar-controls/import_default.svg) **Import** enables to read the replacement table from the specified [text file of the set format](../transformation/substitution/import-tz.md). The imported data will replace the data that have already been in the table. Further changes of the replacement table or file will not have an impact on each other.
* ![Export](../../images/icons/toolbar-controls/export_default.svg) **Export** enables to save the replacement table in the specified text file.
* ![Sort](../../images/icons/toolbar-controls/sort-asc_default.svg) **Sort** enables to sort the table by field of the source value.
* **Change replacement type** enables to change [data type](../../data/datatype.md) of the variable after performed replacement. For example, it is possible to replace the real variable with the integer or string one. In this case, if replacement is not performed, the type will not be changed (with the exception / apart from replacement of the real number with the integer one).
* ![Edit current replacement](../../images/icons/toolbar-controls/edit_default.svg) **Edit** enables to display the editing area of the current string of the substitution table.
* ![Get values](../../images/icons/toolbar-controls/load-values_default.svg) **Get values** is not available for variables.

### Additional Parameters

* **Replace other** contains replacement options of the values that have not been found using the replacement table:
   * **Do not replace**: no replacement is performed.
   * **With empty**: values will be replaced with "NULL".
   * **With value**: values will be replaced with the specified value.
   * **With regular expression**: the new value will be calculated using the [regular expression syntax](../transformation/substitution/regexp-match.md).

* **Precision**: enables to set the allowable interval based on the values specified in the replacement tables for the integer and real fields. In this case, the source value will be replaced. [Use of the Allowable Interval](../transformation/substitution/exact-match.md#primenenie-dopustimogo-intervala).
* **Case-sensitive strings**: the checkbox installs the case-sensitive mode of values search in the replacement tables. This mode is disabled by default.
