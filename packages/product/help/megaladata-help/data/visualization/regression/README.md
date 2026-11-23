# ![Regression Report](../../images/icons/view_types/logregressreport_default.svg) Regression Report (Logistic)

*Regression report* visualizer of the [*Logistic Regression*](../../processors/datamining/logistic-regression/README.md) component displays the statistical indicators and results of the statistical tests for the regression models analysis.

This visualizer consists of three areas:

* [Model info](#model-info-area).
* [Regression coefficients](#regression-coefficients-area).
* [Model steps](#model-steps-area).

More detailed infomation how to enable this visualizer is provided in the [article](../README.md).

## Interface

### Operations

#### Model Info Area

* ![](../../images/icons/toolbar-controls/info_default.svg) **Model info**: display/hide the model info.

#### Regression Coefficients Area

* ![](../../images/icons/toolbar-controls/table-view_default.svg) **Table**: switch of display of [regression coefficients](#regression-coefficients) to the *Table* form.
* ![](../../images/icons/toolbar-controls/tree_default.svg) **Tree**: switch of display of [regression coefficients](#regression-coefficients) to the *Tree* form.
* ![](../../images/icons/toolbar-controls/zero_default.svg) **Zero values**: show/hide zero values.

#### Model Steps Area

* ![](../../images/icons/toolbar-controls/building-steps_default.svg) **Model steps**: show/hide [model steps](#model-steps).

### Visualizer Areas

#### Model Info

Model indicators are described in the table:

| Indicator | Description |
|:------------------------|:-----------------------------------------------|
| ![Logical](../../images/icons/data-types/boolean_default.svg) Constant | **Dependent variable** |
| ![Real](../../images/icons/data-types/float_default.svg) -2 Log Likelihood | -2 Logarithm of the **likelihood function** |
| ![Real](../../images/icons/data-types/float_default.svg) R2 | **Determination coefficient** |
| ![Real](../../images/icons/data-types/float_default.svg) R2 adj. | **Determination coefficient adjusted** |
| ![Real](../../images/icons/data-types/float_default.svg) Chi-square | Chi-squared test to test the hypothesis concerning the law of distribution of the random value under study |
| ![Integer](../../images/icons/data-types/integer_default.svg) Number of degrees of freedom | Number of independently varied values of **indicator** |
| ![Real](../../images/icons/data-types/float_default.svg) Significance | Degree of statistic link of the **input** (set of the input one) and **output variables** of regression model |
| ![Real](../../images/icons/data-types/float_default.svg) AIC | **Akaike information criterion** |
| ![Real](../../images/icons/data-types/float_default.svg) AICc | **Akaike information criterion corrected** |
| ![Real](../../images/icons/data-types/float_default.svg) BIC | **Bayesian information criterion** |
| ![Real](../../images/icons/data-types/float_default.svg) HQC | **Hannan-Quinn information criterion** |

#### Regression Coefficients

Coefficients are described in the table:

| Coefficient | Description |
|:--------------------|:----------|
| Coefficient | Characteristics of relation between dependent *y* and **independent variable** *x* |
| Standard error | Measure of spread of the observation data from the modeled values |
| Wald coefficient | Assessment of significance of coefficient in the case of independent variable of model |
| Significance | Degree of statistic link of the input (set of the input ones) and output variables of regression model |
| Odds ratio | Probability ratio of the fact that the event will occur to the probability of the fact that the event will not occur |
| CI lower bound | Lower bound of **confidence interval** |
| CI upper bound | Upper bound of confidence interval |
| Significance threshold | Degree of statistic link of the input (set of the input ones) and output variables of regression model |

Regression coefficients can be represented in the ![](../../images/icons/toolbar-controls/table-view_default.svg) *Table* (refer to Figure 1) or ![](../../images/icons/toolbar-controls/tree_default.svg) *Tree* form (refer to Figure 2).

![Table representation mode.](./readme-1.png)

![Tree representation mode.](./readme-2.png)

#### Model Steps

It is rational to enable the ![](../../images/icons/toolbar-controls/building-steps_default.svg) *Steps* construction area only if the algorithm that is based on the measure processing mode has been selected when configuring the Logistic Regression node in the Factor selection and protection against overfitting parameter.

![](../../images/icons/toolbar-controls/building-steps_default.svg) *Model steps* area consists of the following fields:

| Field | Description |
|:----------------|:----------------------------------------------------------------------------|
| Model | The tree of models in which the models created by the algorithm in the training process are displayed. It appears when measures are selected. Only one final model will be available in this field for the algorithms that do not support processing of measures. Clicking on the ![](../../images/icons/toolbar-controls/building-steps_default.svg) *Model steps*  area with the left mouse button, it is possible to select display of the information on the selected model (if corresponding checkbox has been selected), and also [regression coefficients](#regression-coefficients). |
| Indicator | Value of the selected indicator for the current model. |
| Field change | It displays whether the measure has been added or deleted ("+" means that the measure has been added to the model, and "-" shows that the measure has been deleted from the model). |
| Fields | Current model fields. |

There are three model types:

* **Null model**: the initial model of the algorithm operation.
* **Intermediate model**: the model created by the algorithm in the training process.
* **Final model**: the model that has been considered by the algorithm as the best one, and the further actions will not bring about the model improvement.

The indicators available for selection:

* -2 Log Likelihood;
* AIC;
* AICc;
* BIC;
* HQC.