# ![ ](../../images/icons/components/coarseclasses_default.svg) Coarse Classes

## Description

The Coarse Classes handler enables to solve the following problems:

* Conversion of the continuous and discrete input fields used for training of the models related to the **binary classification** by means of the binning based on totality-of-evidence approach or **WoE analysis** (weights of evidence, WoE). In the result, each source indicator value is replaced with the caption of the binning range with which this value complies. Usage of such conversion results for the binary classification models training (for example, **logistic regression**) enables to improve their accuracy and resilience to the input data change.
* Reduction of data dimensionality by excluding the indicators with low significance, by decreasing variety of indicator values.
* Null data recovery when null data forms a separate binning range caption, or it is joined with the nearest one that is close by the WoE coefficient value.
* The struggle against outliers and extreme values is based on formation of the binning range captions during discretization of the continuous field or union of rare unique values into one category that enables to solve the problem of extreme values and outliers.
* Simplification of description of the objects under study.

The Coarse Classes handler operation result is conversion of the input columns into a sequence of bins that are called coarse classes, each of which is assigned with a particular caption. Besides, the significance level can be calculated for each input column (none, very low, low, mean, high and very high) according to which it is possible to select variables to the binary classification models.

### Input

* ![ ](../../images/icons/app/node/ports/inputs/table_inactive.svg) Input data source (data table).
* ![ ](../../images/icons/app/node/ports/add/add_inactive_default.svg) Add another port. External binning ranges (data table).

### Output

* ![ ](../../images/icons/app/node/ports/outputs/table_inactive.svg) Output data set (data table).

%spoiler%Data structure:%spoiler%

* ![ ](../../images/icons/data-types/none_default.svg) **The source data set fields** (values are not changed).
* ![ ](../../images/icons/data-types/integer_default.svg) **«<Column caption> Class number» field**: the coarse class identifier, integer (starting from 0): a column is always created.
* ![ ](../../images/icons/data-types/string_default.svg) **«<Column caption> Caption» field**: the automatically received caption of the coarse class (numeric limits if it is a continuous variable, or enumeration of unique values with «;» if it is a discrete variable).
* ![ ](../../images/icons/data-types/float_default.svg) **«<Column caption> Significance» Field.**

%/spoiler%

* ![ ](../../images/icons/app/node/ports/inputs/table_inactive.svg) Class parameters (data table).

%spoiler%Data structure:%spoiler%

* ![ ](../../images/icons/data-types/integer_default.svg) **Group**: the number of the group to which the table record relates. Each group of records is associated with an indicator (field) of the source data set that is the input one for the Coarse Classes node. The number of the group records meets the number of the coarse classes of the source column.
* ![ ](../../images/icons/data-types/string_default.svg) **Identifier**: the column name under which it will be processed in the data set. The column count is equal to the input fields number of the Coarse Classes node.
* ![ ](../../images/icons/data-types/string_default.svg) **Column caption**: the mnemonic symbol of the input column under which it will be visible for a user in the database or data warehouse. The name under which this column is visible in the source data set is set by default.
* ![ ](../../images/icons/data-types/integer_default.svg) **Class number**: the index number assigned to the class while its formation in the Coarse Classes node.
* ![ ](../../images/icons/data-types/string_default.svg) **Unique value** displays unique values for the discrete fields.
* ![ ](../../images/icons/data-types/string_default.svg) **Class caption**: the class identifier assigned to it while its formation in the Coarse Classes node. The class caption of the numeric columns consists of the upper and lower class bounds (only the lower bound is specified for the null class with "from..." preposition, the upper bound is specified for the class with the maximum number with "to..." preposition). For categorical fields: if each class is generated for a separate category, it is required to specify this category as a caption. If the class includes several categories, it is required to list all categories included into the class in the caption.
* ![ ](../../images/icons/data-types/integer_default.svg) **Events count**: count of the observations in the class for which the output value is an event.
* ![ ](../../images/icons/data-types/integer_default.svg) **Non-events count**: count of the observations in the class for which the output value is a non-event.
* ![ ](../../images/icons/data-types/variant_default.svg) **Lower bound**: a number is used to denote the lower bin bound for the numeric indicators. The lower bound is denoted by two categories for categorical indicators, namely, the upper category of the previous class and the lower category of the current class.
* ![ ](../../images/icons/data-types/variant_default.svg) **Upper bound**: a number is used to denote the upper bin bound for the numeric indicators. The upper bound is denoted by two categories for categorical indicators, namely, the lower category of the next class and the upper category of the current class.
* ![ ](../../images/icons/data-types/float_default.svg) **Weight of evidence**: the **WoE coefficient** for each class.
* ![ ](../../images/icons/data-types/float_default.svg) **Information value**: the values of information **values IV** calculated for each input column are specified. The sum of quotients of information values for each class provides the total information value of the indicator by which its significance is defined.
* ![ ](../../images/icons/data-types/float_default.svg) **Class rate**: the ratio of observations number in the class to the total count of observations.
* ![ ](../../images/icons/data-types/boolean_default.svg) **Upper bin bound open**.
* ![ ](../../images/icons/data-types/boolean_default.svg) **Prequantization** shows whether prequantization has been used in the process of the coarse classes generation.

%/spoiler%

* ![ ](../../images/icons/app/node/ports/inputs/table_inactive.svg) Column Significance (Data Table).

%spoiler%Data structure:%spoiler%

* ![ ](../../images/icons/data-types/string_default.svg) **Column name**: the column identifier under which it will be processed in the data set. The column count is equal to the input fields number of the Coarse Classes node.
* ![ ](../../images/icons/data-types/string_default.svg) **Column caption**: the mnemonic symbol of the input column under which it will be visible for a user in the database or data warehouse. The name under which this column is visible in the source data set is set by default.
* ![ ](../../images/icons/data-types/integer_default.svg) **Events count**: count of the events included into this class.
* ![ ](../../images/icons/data-types/integer_default.svg) **Non-events count**: count of the non-events included into this class.
* ![ ](../../images/icons/data-types/integer_default.svg) **Total**: the total number of observations in the class.
* ![ ](../../images/icons/data-types/float_default.svg) **Information value**: the values of information **values IV** calculated for each input column are specified.
* ![ ](../../images/icons/data-types/string_default.svg) **Column Significance**: the significance level of the input column defined according to the information value. It can take the following values: none, very low, low, mean, high and very high.

%/spoiler%

## Wizard

The wizard includes the following steps:

* **[Configure External Binning](./fine-classes/configuring-an-external-partition.md)** appears if *External binning ranges* port is set. It enables to configure parameters of the preconfigured external binning.

* **[Configure Column Usage Types](./fine-classes/configure-column-assignments.md)**: it enables to set the column usage type, configuration of the input and output fields, external binning and algorithm settings to generate the coarse classes of the input fields.

* **[Configure Coarse Classes](./fine-classes/configuring-the-finite-classes.md)** enables to view the fine classes and results of the coarse classes generation. It is designated for the manual correction of bounds (or sets) of the generated coarse classes to achieve the best results.
