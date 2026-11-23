---
description: Compute new fields with the Calculator component using expressions.
---
# ![Expressions](./../../../images/icons/components/expression_default.svg)&nbsp;Expressions in Calculator

Expressions allow you to include the following elements:
* References to other fields of the input dataset (via field names) or other expressions *previously computed in the same **Calculator** node* (via expression names). To avoid errors, make sure the expression you are referencing appears higher than the current one in the expression list.
* References to variables on the input port. (Use the `Var.` prefix to access input variables.)

> **Note:** Names of fields, variables, and expressions are case-insensitive.

* Parentheses that define the order of operations
* Mathematical and relational operators
* Logical operators (`and`, `or`, `not`, or `xor`) and values (`true` (`1`) and `false` (`0`))
* Functions as described in the syntax reference (see [Function List](./../../func/calc-func/README.md))
* String expressions in double quotes (e.g., `"string expression"`)
* Integer and real numbers
* Single-line and multi-line comments

> **Note:** Mathematical operations (such as addition or subtraction) on the [`date/time`](./../../../data/datatype.md) data may produce a real number with a fractional part. By default, the result equals the number of days (integer part) and the number of hours (fractional part). For example, the subtraction operation `02.01.2020 12:00 - 01.01.2020 00:00` returns `1.5`. The node will interpret it as one full day (24 hours) and 12 hours.

## Caching

Enable [caching](./../../../workflow/caching.md) in **Calculator** expressions when you use the `Data()` function for recursive value computation.

We also recommend to use caching with functions whose result depends on the time of computation, such as `Random()`, `Today()`, and similar functions.

## Code pane toolbar

The code pane toolbar provides several commands for quick and convenient access.

- ![Preview](../../../images/icons/toolbar-controls/print-preview_disabled.svg)&nbsp;**Preview** (<kbd>F3</kbd>): Use this button to display up to *100* rows of the result table for calculation check.
   * ![Console](../../../images/icons/javascript/console.svg)&nbsp;**Console**: Open this pane at the bottom of the **Preview** window to view errors found during expression evaluation. If there are no errors, the **Console** pane remains empty.
      * Use the ![ ](../../../images/icons/toolbar-controls/up_default.svg)&nbsp;**Show** and ![ ](../../../images/icons/toolbar-controls/down_default.svg)&nbsp;**Hide** buttons on the top right to expand or collapse the **Console** pane.
- Logical operators:
   * **AND**: Logical AND
   * **OR**: Logical OR
   * **NOT**: Logical NOT
   * **XOR**: Logical XOR (exclusive OR)
- Comparison operators:
   * **=** (equal to)
   * **<>** (not equal to)
   * **<** (less than)
   * **>** (greater than)
   * **<=** (less than or equal to)
   * **>=** (greater than or equal to)
- Templates:
   * ![Real number](./../../../images/icons/toolbar-controls/type-float_default.svg)&nbsp;**Number**: Enter a real number. (The command inserts `0.0` into the expression code.)
   * ![String](./../../../images/icons/toolbar-controls/type-string_default.svg)&nbsp;**String**: Enter a string value (inserts `""`).
   * ![Date](./../../../images/icons/toolbar-controls/type-date_default.svg)&nbsp;**Date**: Enter a date (inserts `StrToDate("____-__-__", "YYYY-MM-DD")`).
   * ![Time](./../../../images/icons/toolbar-controls/type-time_default.svg)&nbsp;**Time**: Enter a time value (inserts `StrToDate("__:__:__", "HH:NN:SS")`).
- Logical values:
   * **FALSE**: Insert `False`
   * **TRUE**: Insert `True`

## Comments

The **Calculator** supports two types of comments:
* **Single-line comment:** Begin these with `//`. The comment continues to the end of the line.
* **Multi-line comment:** Begin these with `/*` and end them with `*/`. The comment includes all the characters in between.

In the code area, use <kbd>Ctrl</kbd> + <kbd>/</kbd> to comment or uncomment code.

%spoiler%Comment example:%spoiler%

```java
// Single-line comment example.

IF(IsNull(gate_one),gate_two,gate_one) // a single-line comment continues to the end of the line.

/* A multi-line comment
   includes all characters
   between slash-asterisk
   and asterisk-slash. */
```

%/spoiler%

**Read on:** [JavaScript Syntax in Calculator](javascript.md)