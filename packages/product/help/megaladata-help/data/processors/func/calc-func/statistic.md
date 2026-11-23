---
description: Employ statistical functions such as Avg, DChi2, FChi2, InvChi2, Max, Min, PChi2, StdDev, Sum, and SumSq in your calculator formulas. See the description of the functions and their arguments.
---
# Statistical Functions

## Avg

`Avg(Argument1, Argument2 ...)`

* **Arguments**: Any `numeric` expressions.

The function returns the arithmetic mean of the arguments.

## DChi2

`DChi2(Degrees_of_freedom, Argument)`

* **Degrees_of_freedom**: The number of degrees of freedom.
* **Argument**: The value for which you need to calculate the distribution density.

The function is the density function of the [chi-squared gamma distribution](https://en.wikipedia.org/wiki/Chi-squared_distribution).

## FChi2

`FChi2(Degrees_of_freedom, Argument)`

* **Degrees_of_freedom**: The number of degrees of freedom.
* **Argument**: The value for which you need to calculate the distribution density.

The function is the integral function of the [gamma distribution](https://en.wikipedia.org/wiki/Gamma_distribution), equal to `1 - the one-sided probability of the chi-square distribution`, with *n* degrees of freedom.

## InvChi2

`InvChi2(Degrees_of_freedom, Probability)`

* **Degrees_of_freedom**: The number of degrees of freedom.
* **Probability**: The probability associated with the gamma distribution.

The function returns the inverse gamma distribution for the integral function equal to `1 - the one-sided probability of the chi-square distribution`. If `p=FChi2(N, X)`, then `InvChi2(N, P)=X`.

## Max

`Max(Argument1, Argument2, ...)`

* **Arguments 1–...**: `numeric` expressions.

The function returns the maximum of the arguments.

## Min

`Min(Argument1, Argument2, ...)`

* **Arguments 1–...**: `numeric` expressions.

The function returns the minimum of the arguments.

## PChi2

`PChi2(Degrees_of_freedom, Argument)`

* **Degrees_of_freedom**: The number of degrees of freedom.
* **Argument**: The value for which you need to calculate the distribution density.

The function returns the one-sided probability of the chi-square distribution.

## Stat

`Stat("FieldName", "Type")`

* **FieldName**: The field for which you need to obtain the indicator value.
* **Type**: The statistical indicator that you need to obtain.

The function returns the value of one of the statistical indicators.

The arguments cannot be `null`.

**Input data requirements:**

| Statistical indicator type | Indicator value | Data kind | Data type |
| -------------------------- | --------------- | --------- | --------- |
| `Min` | Minimum value | ![](./../../../images/icons/data-types/continuous_default.svg)&nbsp;Continuous, ![](./../../../images/icons/data-types/discrete_default.svg)&nbsp;Discrete | ![](./../../../images/icons/data-types/float_default.svg)&nbsp;`Real`, ![](./../../../images/icons/data-types/integer_default.svg)&nbsp;`Integer` |
| `Max` | Maximum value | ![](./../../../images/icons/data-types/continuous_default.svg)&nbsp;Continuous, ![](./../../../images/icons/data-types/discrete_default.svg)&nbsp;Discrete | ![](./../../../images/icons/data-types/float_default.svg)&nbsp;`Real`, ![](./../../../images/icons/data-types/integer_default.svg)&nbsp;`Integer` |
| `Mode` | Most frequently occurring value | ![](./../../../images/icons/data-types/discrete_default.svg)&nbsp;Discrete | ![](./../../../images/icons/data-types/float_default.svg)&nbsp;`Real`, ![](./../../../images/icons/data-types/integer_default.svg)&nbsp;`Integer`, ![](./../../../images/icons/data-types/string_default.svg)&nbsp;`String`, ![](./../../../images/icons/data-types/boolean_default.svg)&nbsp;`Logical`, ![](./../../../images/icons/data-types/datetime_default.svg)&nbsp;`Date/Time` |
| `Avg` | Average value | ![](./../../../images/icons/data-types/continuous_default.svg)&nbsp;Continuous, ![](./../../../images/icons/data-types/discrete_default.svg)&nbsp;Discrete | ![](./../../../images/icons/data-types/float_default.svg)&nbsp;`Real`, ![](./../../../images/icons/data-types/integer_default.svg)&nbsp;`Integer` |
| `StdDev` | Standard deviation | ![](./../../../images/icons/data-types/continuous_default.svg)&nbsp;Continuous, ![](./../../../images/icons/data-types/discrete_default.svg)&nbsp;Discrete | ![](./../../../images/icons/data-types/float_default.svg)&nbsp;`Real`, ![](./../../../images/icons/data-types/integer_default.svg)&nbsp;`Integer` |
| `Sum` | Sum of values | ![](./../../../images/icons/data-types/continuous_default.svg)&nbsp;Continuous, ![](./../../../images/icons/data-types/discrete_default.svg)&nbsp;Discrete | ![](./../../../images/icons/data-types/float_default.svg)&nbsp;`Real`, ![](./../../../images/icons/data-types/integer_default.svg)&nbsp;`Integer` |
| `SumSq` | Sum of square values | ![](./../../../images/icons/data-types/continuous_default.svg)&nbsp;Continuous, ![](./../../../images/icons/data-types/discrete_default.svg)&nbsp;Discrete | ![](./../../../images/icons/data-types/float_default.svg)&nbsp;`Real`, ![](./../../../images/icons/data-types/integer_default.svg)&nbsp;`Integer` |
| `Count` | Count of values | ![](./../../../images/icons/data-types/continuous_default.svg)&nbsp;Continuous, ![](./../../../images/icons/data-types/discrete_default.svg)&nbsp;Discrete | ![](./../../../images/icons/data-types/float_default.svg)&nbsp;`Real`, ![](./../../../images/icons/data-types/integer_default.svg)&nbsp;`Integer`, ![](./../../../images/icons/data-types/string_default.svg)&nbsp;`String`, ![](./../../../images/icons/data-types/boolean_default.svg)&nbsp;`Logical`, ![](./../../../images/icons/data-types/datetime_default.svg)&nbsp;`Date/Time` |
| `UniqueCount` | Count of unique values | ![](./../../../images/icons/data-types/discrete_default.svg)&nbsp;Discrete | ![](./../../../images/icons/data-types/float_default.svg)&nbsp;`Real`, ![](./../../../images/icons/data-types/integer_default.svg)&nbsp;`Integer`, ![](./../../../images/icons/data-types/string_default.svg)&nbsp;`String`, ![](./../../../images/icons/data-types/boolean_default.svg)&nbsp;`Logical`, ![](./../../../images/icons/data-types/datetime_default.svg)&nbsp;`Date/Time` |
| `NullCount` | Count of null values | ![](./../../../images/icons/data-types/continuous_default.svg)&nbsp;Continuous, ![](./../../../images/icons/data-types/discrete_default.svg)&nbsp;Discrete | ![](./../../../images/icons/data-types/float_default.svg)&nbsp;`Real`, ![](./../../../images/icons/data-types/integer_default.svg)&nbsp;`Integer`, ![](./../../../images/icons/data-types/string_default.svg)&nbsp;`String`, ![](./../../../images/icons/data-types/boolean_default.svg)&nbsp;`Logical`, ![](./../../../images/icons/data-types/datetime_default.svg)&nbsp;`Date/Time` |

> **Note:** The function performs the calculation on the fields provided on the input of the [Calculator](../../transformation/calc/README.md) node. This calculation does not include columns computed within the same **Calculator** node.

## StdDev

`StdDev(Argument1, Argument2 ...)`

* **Arguments**: Any `numeric` expressions.

The function returns the [standard deviation](https://en.wikipedia.org/wiki/Standard_deviation) of the arguments based on the unbiased variance.

## Sum

`Sum(Argument1, Argument2 ...)`

* **Arguments**: Any `numeric` expressions.

The function returns the sum of the arguments.

## SumSq

`SumSq(Argument1, Argument2 ...)`

* **Arguments**: Any `numeric` expressions.

The function returns the sum of the squares of the arguments.

**Read on:** [String Functions](string.md)