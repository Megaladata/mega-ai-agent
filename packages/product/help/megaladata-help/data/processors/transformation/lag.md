---
description: Learn how to use the Lag (sliding window) method in Megaladata for data preprocessing. Configure neural networks for forecasting.
---
# ![Lag](./../../images/icons/components/sliding-window_default.svg)&nbsp;Lag Component

Use the [lag (sliding window) method](https://lazyprogrammer.me/what-is-the-sliding-window-method-in-time-series-analysis/) for data preprocessing in forecast tasks when you need to provide several adjacent samples of the source dataset to an analyzer (for example, a neural network). The **Lag** node selects a continuous segment of data and shifts it across the entire source dataset.

As a result, you get a dataset where one field contains the value corresponding to the current sample (it has the same name as in the source dataset). The system places fields with values shifted into the past and into the future (relative to the current sample) to the left and to the right of it, respectively.

Lag processing has two parameters:
* **Depth period**: The number of samples in the past
* **Forecast horizon**: The number of samples in the future

For the lag boundary positions (all past and future samples at the beginning and the end of the source sample), the system generates incomplete records (empty values). Note that you can include or exclude such incomplete records from the result sample if required.

%spoiler%Example:%spoiler%

Consider the following source dataset:

| Date | Sales, pcs. |
| :--- | -----------: |
| 01.09.2011 | 45 |
| 01.10.2011 | 82 |
| 01.11.2011 | 120 |
| 01.12.2011 | 192 |
| 01.01.2012 | 229 |
| 01.02.2012 | 161 |

For the `Sales, pcs.` field, we set the **Depth period** parameter to `2` and the **Forecast horizon** parameter to `1`. Depending on the **Incomplete records processing method** setting, we can get different result tables.

In this example, we select the parameter value **Leave incomplete records** and get the following result table:

| Date | Sales, pcs.[-2] | Sales, pcs.[-1] | Sales, pcs. | Sales, pcs.[+1] |
| :--- | ---------------: | ---------------: | -----------: | ---------------: |
| | | | | 45 |
| 01.09.2011 | | | 45 | 82 |
| 01.10.2011 | | 45 | 82 | 120 |
| 01.11.2011 | 45 | 82 | 120 | 192 |
| 01.12.2011 | 82 | 120 | 192 | 229 |
| 01.01.2012 | 120 | 192 | 229 | 161 |
| 01.02.2012 | 192 | 229 | 161 | |
| | 229 | 161 | | |
| | 161 | | |&nbsp;|

%/spoiler%

## Ports

### Input

* ![Input data source](./../../images/icons/app/node/ports/inputs/table_inactive.svg)&nbsp;**Input data source**: Connect the input dataset to this port.

### Output

* ![Output data source](./../../images/icons/app/node/ports/inputs/table_inactive.svg)&nbsp;**Output dataset**: This port provides a dataset with lagged fields added.

## Configuration wizard

The configuration wizard shows a list of input table fields. Set the following parameters for each field:
* **Depth period**: Set the number of values from the previous records for which the system should create new fields in the output dataset.
* **Forecast horizon**: Set the number of values from the subsequent records for which the system should create new fields in the output dataset.

In the **Incomplete records processing method** setting, select one of the following:
* **Leave incomplete records**: Keep all records added by the node.
* **Delete added incomplete records**: Make the system remove incomplete records added by the node, keeping incomplete records from the source dataset.
* **Delete all incomplete records**: Delete both incomplete records added by the node and the records with `null` values in the added fields.

The following output tables use the example data above to illustrate the operation of different **Incomplete records processing method** settings.

Result table when **Leave incomplete records** is selected:

| Date | Sales, pcs.[-2] | Sales, pcs.[-1] | Sales, pcs. | Sales, pcs.[+1] |
| :--- | ---------------: | ---------------: | -----------: | ---------------: |
| | | | | 45 |
| 01.09.2011 | | | 45 | 82 |
| 01.10.2011 | | 45 | 82 | 120 |
| 01.11.2011 | 45 | 82 | 120 | 192 |
| 01.12.2011 | 82 | 120 | 192 | 229 |
| 01.01.2012 | 120 | 192 | 229 | 161 |
| 01.02.2012 | 192 | 229 | 161 | |
| | 229 | 161 | | |
| | 161 | | |&nbsp;|

Result table when **Delete added incomplete records** is selected:

| Date | Sales, pcs.[-2] | Sales, pcs.[-1] | Sales, pcs. | Sales, pcs.[+1] |
| :--- | ---------------: | ---------------: | -----------: | ---------------: |
| 01.09.2011 | | | 45 | 82 |
| 01.10.2011 | | 45 | 82 | 120 |
| 01.11.2011 | 45 | 82 | 120 | 192 |
| 01.12.2011 | 82 | 120 | 192 | 229 |
| 01.01.2012 | 120 | 192 | 229 | 161 |
| 01.02.2012 | 192 | 229 | 161 |&nbsp;|

Result table when **Delete all incomplete records** is selected:

| Date | Sales, pcs.[-2] | Sales, pcs.[-1] | Sales, pcs. | Sales, pcs.[+1] |
| :--- | ---------------: | ---------------: | -----------: | ---------------: |
| 01.11.2011 | 45 | 82 | 120 | 192 |
| 01.12.2011 | 82 | 120 | 192 | 229 |
| 01.01.2012 | 120 | 192 | 229 | 161 |

**Read on:** [Join Component](./join/README.md)