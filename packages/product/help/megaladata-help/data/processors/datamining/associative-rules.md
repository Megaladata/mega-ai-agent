# ![ ](../../images/icons/components/assnrules_default.svg) Association Rules

## Description

The handler detects **association rules** in the **transaction data**. To provide an example of such rule, it is observed that a consumer who buys "Bread" (*condition of rule*), will buy "Milk" as well (*consequence of rule*) with a probability of 75%. The transaction specified in this example is a sales check that contains a list of acquired goods, and each item of goods in the check is a transaction item. The **FP-Growth** algorithm is used when searching for association rules.

Alongside with analysis of the main transaction data, it is possible to take into account the supplementary one. For example, if the check is a transaction, and items are goods, the following data can be used as the supplementary one: sex of consumer, age, region, season, etc. Actually, the supplementary data is considered by the algorithm as one more transaction item, and its "supplementary" context is used only when dealing with analytical tasks. As the supplementary data is more frequently represented in the data sources as additional transaction attributes, the handler has a separate input to receive it.

To get resulting data sets, it is required to provide preliminary [training of the handler](../../workflow/training-processors.md).

### Input

* ![ ](../../images/icons/app/node/ports/inputs-optional/table_inactive.svg) — **Input data source** (data table). Optional.<br>
   The port waits for the data set with identifier columns and transaction items.
* ![ ](../../images/icons/app/node/ports/inputs-optional/table_inactive.svg) — **Supplementary data** (data table). Optional.<br>
   It accepts supplementary transaction items that can be taken into account when calculating association rules.

#### Requirements to the Received Data

%spoiler%Examples of input data sets:%spoiler%

Input data source:

| Transaction identifier | Transaction items |
| -------- | -------- |
| Check No 000001 | Bread |
| Check No 000001 | Milk |
| Check No 000001 | Butter |
| Check No 000002 | Bread |
| Check No 000003 | Bread |
| Check No 000003 | Milk |

As opposed to the table accepted by the "Input data source" port, the transaction items of the supplementary data must be located in strings but not in columns. Thus, the table structure presupposes availability of one transaction identifier field and one or more transaction items fields.

 Supplementary data:

| Transaction identifier | Sex of consumer | Age | Region | Season |
| -------- | -------- | -------- | -------- | -------- |
| Check No 000001 | m | 20-30 | Northeast| 1 |
| Check No 000002 | f | 40-50 | Southwest | 2 |
| Check No 000003 | f | 30-40 | West | 1 |

%/spoiler%

It is required to set ["Usage type" parameter](../../data/datasetfieldoptions.md) for the fields included into processing in the ports settings. The parameter can take the following values: *Unused, Transaction, Item*. Identifiers and transaction items can be represented only by [discrete](../../data/datatype.md) data.

### Output

* ![ ](../../images/icons/app/node/ports/outputs/table_inactive.svg) — **Frequent sets** (data table). The itemsets most frequently occurring in transactions (frequent itemsets).
* ![ ](../../images/icons/app/node/ports/outputs/table_inactive.svg) — **Association rules** (data table). Detected association rules and their parameters: **support**, **confidence**, **lift**.
* ![ ](../../images/icons/app/node/ports/outputs/table_inactive.svg) — **Apply rules** (data table). It contains transactions of the input data set in which the detected rules are effectively implemented.

## Wizard

It includes the following groups of parameters:

### Frequent Itemsets

It is required to determine conditions according to which *frequent object itemsets* are defined, namely, the itemsets that are the most frequently occurring in transactions. Later on, only these itemsets are used to form the rules:

* **Minimum support, %**: the minimum frequency of the itemset occurrence in transactions (the value varies from 0 to 100).
* **Exclude the items with the support exceeding the maximum one**: the items that occur too frequently in transactions and, as a rule, do not contain information on principles of combination with other items. The following parameters are set for their determination and exclusion:
   * **Maximum support, %**: the maximum frequency of the itemset occurrence in transactions (the value varies from 0 to 100).
* **Containing selected items** enables to set the supplementary data set fields that contain supplementary transaction items.
* **Exclude single sets** enables to exclude the sets from one item.
* **Maximum item count** enables to set the maximum count of items in a set (maximum itemset power).

### Association Rules

The rules meeting the following requirements are included into the resulting data set:

* **Minimum rule confidence, %** enables to exclude the least precise rules (the value varies from 0 to 100).
* **Minimum rule lift**: the lift value > 1 indirectly confirms the rule importance, as it shows the positive connection of two object itemsets (rule condition and consequence). The lift value equal or less than 1 shows absence or negative connection. Setting the minimum lift value, it is possible to exclude the least important rules.
* **Maximum number of consequences**: the maximum number of items in the set that represents the rule consequence.
