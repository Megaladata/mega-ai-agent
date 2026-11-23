# ![ ](../../../images/icons/components/logregression_default.svg) Logistic Regression

## Description

**Logistic regression** is a kind of multiple regression general purpose of which is to analyze relations between several **independent variables** and **dependent variable**.

The logistic regression enables to estimate possibility of the event occurrence for a particular test person (sick/healthy person, credit repayment/default, etc).

> **Important:** Input data must never contain missing values, output data must not contain missing values during training.

## Ports

### Input

* ![](../../../images/icons/app/node/ports/inputs/table_inactive.svg) — Input data source (data table) — required port.
* ![](../../../images/icons/app/node/ports/inputs/variable_inactive.svg) —  [Control variables](../../../workflow/variables/control-variables.md) (variables) — optional port. It is possible to set values of the wizard parameters using variables.

### Outputs
* ![](../../../images/icons/app/node/ports/inputs/table_inactive.svg) — Regression output.
   The table that consists of the following fields:
   * Event|Prediction.
   * Event probabillity|Prediction.
   * Event|Actual.
   * Output data field|Prediction.
   * All fields of the source data set.
* ![](../../../images/icons/app/node/ports/inputs/table_inactive.svg) —  [Regression model coefficients](./coef-regression.md) (data table).
* ![](../../../images/icons/app/node/ports/outputs/variable_inactive.svg) —  [Summary](./report.md) (variables).

## Node Wizard

It includes the following groups of parameters:

* [Normalization](../../normalization/README.md) settings.
* [Partitioning](#partitioning).
* [Logistic regression configuring](#logistic-regression-configuring);
* [Detailed settings](#detailed-settings).

### Partitioning

The *Partitioning* page of the wizard enables to divide a set into the training and test ones:

* **Train**: the structured data set used for training of **analytical models**. Each record of the training set is a training example with the set input effect and correct output (target) result that corresponds to it.
* **Test**: the training sample subset that contains test examples, namely, the examples used not to train the model but to check its results.

Available Parameters:

* Size of training and test set in percentage terms or in rows. It can be set by means of variables.
* Method of partition to training and test sets. There are two partition methods:
   * Random method provides partitioning of records set to training and test sets.
   * Sequence: groups of sets rows (training, unused, test) are selected in a sequential order, namely, only the records that are included into the first set are selected first, then it is required to select the records that are included into the second set, etc. It is posssible to change the order of sets (*Move up*, *Move down* buttons).
* [Validation](../../validation.md) method that can take the following values:
   * No validation.
   * **K-fold cross validation** enables to select the *Method of sampling* and number of *Cross validation fold*.
   * **Monte Carlo** enables to select *Resampling iteration count* and set the size of training and **validation set**.


### Logistic Regression Configuring

A set of parameters to configure the logistic regression can be grouped in the following packs:

#### Configure Method

* Auto setup:
   * Boolean value. Enabled by default.
   * It has an impact on usage of the following packs of parameters: if it is enabled, it is possible to configure *Auto setup priority* pack, if it is disabled, it is possible to select the algorithm of **factors** selection and protection against overfitting, and it is also possible to set priorities.
* Auto setup priority:
   * It has an impact on selection of the particular method and its settings according to the Accuracy - Speed scale.
   * Integer type in the range from 0 to 4 inclusive:
      * Maximum accuracy.
      * Increased accuracy.
      * Average speed.
      * Increased speed.
      * Maximum speed.
* **Denormalize model coefficients**: denormalization is required for interpretation of results. As the model can work only with the normalized data, first, it is required to normalize data that has been sent to the model for its usage, and then denormalization must be performed to make data return the same kind it has had before normalization. It is a boolean value, enabled by default.

#### Configure Events

* Event type. It can take the following values:
   * First listed.
   * Last listed.
   * Rarer.
   * More frequent.
   * Explicitly set.
* Specified event index.
   * It is available for the event of *Explicitly set* type.
   * The integer value selected according to the list of unique values.

#### Configure Parameters

It is used if *Auto setup* checkbox is not selected, or it is set by means of variable.

* **Factor selection and protection against overfitting** - value of enumeration:
   * **Enter**: enter all set indicators into the regression model irrespective of the fact whether they have meaningful influence or not.
   * **Forward**: this method is based on the following principle: it is required to start from absence of indicators and gradually find the "best" ones that will be added to the subset.
   * **Backward**: this method is based on the following principle: it is required to start from all available indicators and exclude the "worst" ones by means of successive iterations.
   * **Stepwise**: modification of the *Forward* method, however, at each step upon entering of the new variable into the model, other variables that have already been entered into it earlier are tested for significance.
   * **Ridge** is one of the methods used for **dimension decrease**. It is used to avoid data redundancy when independent variables **correlate** with each other (**multicollinearity**) that causes instability of estimates of linear regression coefficient.
   * **LASSO** is used to avoid data redundancy as *Ridge*.
   * **Elastic-Net**: regression model with two regularizers - *L1*, *L2*. *LASSO* *L1 = 0* and *Ridge* of *L2 = 0* regression are the models that represent special cases. Both regularizers help to improve generalization and errors of test as they protect the model against overfitting in connection with data noise:
      * **L1** implements it by selecting the most important factors that have the highest impact on the result.
      * **L2** prevents from the model overfitting by forbidding disproportionately large weighted coefficients.
* Accuracy/speed priority.
   * Integer type in the range from 0 to 4 inclusive:
      * Maximum accuracy.
      * Increased accuracy.
      * Average speed.
      * Increased speed.
      * Maximum speed.
* Exact/inexact data priority.
   * Integer type in the range from 0 to 4 inclusive:
      * Accurate data.
      * Increased accuracy.
      * Average accuracy.
      * Reduced accuracy.
      * Unreliable data.
* Less/more factors priority.
   * Integer type in the range from 0 to 4 inclusive:
      * Minimum factors.
      * Less factors.
      * Average number of factors.
      * More factors.
      * Maximum factors.

The following options are available for different methods:

| **Method** | **Accuracy/speed priority** | **Exact/inexact data priority** | **Less/more factors priority** |
| :------------ | :------------: | :------------: | :------------: |
| Enter | • |   |   |
| Forward | • |   | • |
| Backward | • |   | • |
| Stepwise | • |   | • |
| Ridge | • | • |   |
| LASSO | • |   | • |
| Elastic-Net | • | • | • |

* **Use detailed settings** provides more detailed configuration of logistic regression (additional wizard page appears - pack of detailed settings). It is a boolean value, disabled by default.

> **Note:** All available parameters of the logistic regression configuration can be set by means of variables.

### Detailed Settings

They are used if the parameters configuration pack is enabled, and *Use detailed settings* checkbox is selected in it, or it can be set by means of variable.

Detailed settings are joined into the following packs of parameters:

#### Method Settings

Available Parameters:
* **Solution accuracy**: criterion of iterations stop. This setting enables to define the accuracy of definition of the error function minimum. It is a real value from 0 to 1. It is an editor with value change interval equal to 0.000001.
* **Cutoff** enables to define the calculated value of the regression equation. It is a real value from 0 to 1. It is an editor with value change interval equal to 0.1.
* **Include intercept into the model** adds the dependent variable to the model.

#### Statistics Calculation Settings

Available Parameters:

* Calculate **confidence interval**.
* % confidence interval.
* Statistics calculation mode:
   * Do not calculate.
   * For all models.
   * For the final model.

#### Regularization Settings

Available Parameters:

* **L1-regularization coefficient setup**: configuration of this parameter is possible only for *LASSO*, *Elastic-Net* algorithms.
* **L2-regularization coefficient setup**: configuration of this parameter is possible only for *Ridge*, *Elastic-Net* algorithms.

It is possible either to select auto setup of value for each of parameters, or to enter the required value in the manual way.

#### Factor Selection Settings

Available Parameters:

* **Factor selection criterion** enables to select one of the following information criteria:
   * **Likelihood ratio**.
   * **Akaike information criterion**.
   * **Akaike information criterion corrected**.
   * **Bayesian information criterion**.
   * **Hannan-Quinn information criterion**.
* **Significance threshold** in the case of factor addition.
* Significance threshold in the case of factor exception.

> **Note:** All available parameters of the detailed settings can be set by means of variables.
