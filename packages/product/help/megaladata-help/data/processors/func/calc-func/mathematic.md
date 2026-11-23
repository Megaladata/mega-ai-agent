---
description: Employ Megaladata math functions such as Abs, AbsErr, ArcCos, ArcSin, ArcTan, Cos, Exp, Factorial, Frac, Int, Ln, Log, Mod, Pi, Pow, RelErr, Round, Sign, Sin, Sqrt, and Tan in your calculator formulas. Read through the description of the functions and the arguments they use.
---
# Math Functions

## Abs

`Abs(Argument)`

* **Argument**: A `numeric` expression.

The function returns the absolute value of **Argument**.

## AbsErr

`AbsErr(Argument1, Argument2)`

* **Arguments**: Any `numeric` expressions.

The function returns the absolute error of the two arguments.

## ArcCos

`ArcCos(Value)`

* **Value**: The cosine value for which you need to find the angle.

The function returns the arccosine of **Value**: the angle in radians whose cosine equals **Value**.

## ArcSin

`ArcSin(Value)`

* **Value**: The sine value for which you need to find the angle.

The function returns the arcsine of **Value**: the angle in radians whose sine equals **Value**.

## ArcTan

`ArcTan(Value)`

* **Value**: The tangent value for which you need to find the angle.

The function returns the arctangent of **Value**: the angle in radians whose tangent equals **Value**.

## Cos

`Cos(Angle)`

* **Angle**: The angle value in radians.

The function returns the cosine of the specified **Angle**.

## CumulativeSum

`CumulativeSum("FieldName" [, "GroupFieldName"])`

* **FieldName**: The field for which you need to obtain the cumulative sum.
* **GroupFieldName**: The field that the system uses to group the data. This parameter is optional. If you specify this parameter, the function calculates cumulative sums within groups.

The function returns the cumulative sum for the field.

The arguments cannot be `null`.

Note: **FieldName** and **GroupFieldName** are `string` values. You must enclose explicitly specified **FieldName** and **GroupFieldName** values in quotation marks.
For example: `CumulativeSum("COL1", "COL2")`.

## Div

`Div(Dividend, Divisor)`

* **Dividend**: An `integer` numeric expression.
* **Divisor**: An `integer` numeric expression.

The function returns the integer division quotient of **Dividend** by **Divisor**.

If **Divisor** equals `0`, the function returns `Null` (a missing value).

## Exp

`Exp(Degree)`

* **Degree**: A `numeric` expression.

The function returns the constant `e` raised to the specified **Degree**.

## Factorial

`Factorial(Argument)`

* **Argument**: A positive `integer` numeric expression.

The function returns the factorial of **Argument**.

## Frac

`Frac(Argument)`

* **Argument**: A `numeric` expression.

The function returns the fractional part of **Argument**.

## Int

`Int(Argument)`

* **Argument**: A `numeric` expression.

The function returns the integer part of **Argument**.

## IsInfinite

`IsInfinite(Argument)`

* **Argument**: A `numeric` expression.

The function determines whether the value that you pass is an infinite number.

## Ln

`Ln(Argument)`

* **Argument**: A positive `numeric` expression.

The function returns the natural logarithm of **Argument**.

## Log

`Log(Basis, Argument)`

* **Basis**: A `numeric` expression.
* **Argument**: A positive `numeric` expression.

The function returns the logarithm of **Argument** with the specified **Basis**.

## Mod

`Mod(Dividend, Divisor)`

* **Dividend**: An `integer` numeric expression.
* **Divisor**: An `integer` numeric expression.

The function returns the remainder of the integer division of **Dividend** by **Divisor**.

## Pi

`Pi()`

The function takes no arguments. Returns the *pi* constant value `3.1415926535897932385`.

## Pow

`Pow(Argument, Degree)`

* **Argument**: A `numeric` expression.
* **Degree**: A `numeric` expression.

The function returns **Argument** raised to the specified **Degree**.

## RelErr

`RelErr(Argument1, Argument2)`

* **Arguments**: Any `numeric` expressions.

The function returns the relative error of the two arguments.

## Round

`Round(Argument1 [, Argument2 = 0])`

* **Argument1**: A `numeric` expression.
* **Argument2**: An optional parameter. The number of digits following the decimal point. An `integer`. If **Argument2** equals `0` (the default), the function rounds **Argument1** to an integer.

The function rounds a `real` number to the nearest number that has the specified number of digits following the decimal point.

## RoundDown

`RoundDown(Argument1 [, Argument2 = 0])`

* **Argument1**: A `numeric` expression.
* **Argument2**: An optional parameter. The number of digits following the decimal point. An `integer`. If **Argument2** equals `0` (the default), the function rounds **Argument1** to an integer.

The function rounds a `real` number down to a number that has the specified number of digits following the decimal point.

The resulting number always becomes smaller, even if it is negative.

%spoiler%**Examples:**%spoiler%

With negative numbers:

     RoundDown(-173.3) ⇒ -174

     RoundDown(-0.001) ⇒ -1

     RoundDown(-0.123, 2) ⇒ -0.13

With positive numbers:

    RoundDown(173.3) ⇒ 173

    RoundDown(0.001) ⇒ 0

    RoundDown(0.123, 2) ⇒ 0.12

%/spoiler%

## RoundUp

`RoundUp(Argument1 [, Argument2 = 0])`

* **Argument1**: A `numeric` expression.
* **Argument2**: An optional parameter. The number of digits following the decimal point. An `integer`. If **Argument2** equals `0` (the default), the function rounds **Argument1** to an integer.

The function rounds a `real` number up to a number that has the specified number of digits following the decimal point.

The resulting number always becomes larger, even if it is negative.

%spoiler%**Examples:**%spoiler%

With negative numbers:

    RoundUp(-173.3) ⇒ -173

    RoundUp(-0.001) ⇒ 0

    RoundUp(-0.123, 2) ⇒ -0.12

With positive numbers:

    RoundUp(173.3) ⇒ 174

    RoundUp(0.001) ⇒ 1

    RoundUp(0.123, 2) ⇒ 0.13

%/spoiler%

## Sign

`Sign(Argument)`

* **Argument**: A `numeric` expression.

The function returns the sign of **Argument**.

## Sin

`Sin(Angle)`

* **Angle**: The angle value in radians.

The function returns the sine of the specified **Angle**.

## Sqrt

`Sqrt(Argument)`

* **Argument**: A positive `numeric` expression.

The function returns the square root of **Argument**.

## Tan

`Tan(Angle)`

* **Angle**: The angle value in radians.

The function returns the tangent of the specified **Angle**.

**Read on:** [Model Functions](model.md)