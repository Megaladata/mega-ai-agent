# Substitution of the Values not Included into the Replacement Table

*Replace other* parameter is required for processing of the values that are not included into the *Replacement table* and that are out of the [allowable interval](./exact-match.md#primenenie-dopustimogo-intervala). Four configuration options parameter:

* Do not replace.
* With empty.
* With value.
* With regular expression.

And the row for input of the new value of the records not included into the *Replacement table*.

When *Do not replace* option is selected, the values not included into the *Replacement table* are not subject to the additional processing.

## With Empty

When *With empty* option is selected, all values not included into the *Replacement table* will be replaced with the null value `<null>`.

Let's consider the first example of [replacement by exact match](./exact-match.md):

Result of the performed replacement

|Source data value|New value|
|-:|:-|
|12|Poor|
|15|15|
|24|Satisfactory|
|35|35|
|48|Excellent|
|73|73|

When *With empty* option is selected, this table would be as follows:

|Source data value|New value|
|-:|:-|
|12|Poor|
|15|`<null>`|
|24|Satisfactory|
|35|`<null>`|
|48|Excellent|
|73|`<null>`|

## With Value

*With value* option replaces all values outside the *Replacement table* with the value entered into the row.

Let's consider the second example from [replacement by exact match](./exact-match.md#primenenie-dopustimogo-intervala):

Result of the performed replacement

|Source data value|New value|
|-:|:-|
|12|Poor|
|15|Poor|
|24|Satisfactory|
|35|Good|
|48|Excellent|
|73|73|

Having selected *With value* option and having entered into `Out of estimation range` row, the following result will be recieved:

|Source data value|New value|
|-:|:-|
|12|Poor|
|15|Poor|
|24|Satisfactory|
|35|Good|
|48|Excellent|
|73|Out of estimation range|

## With Regular Expression

If *With regular expression* option of *Replace other* parameter is selected, reserved `$1` character is used for the values not detected using the replacement table. `$1` characters will be replaced with the source value in the row that enables to set the new value.

Let's consider the example from [replacement by regular expression](./regexp-match.md):
<table>
 <tr><th align="left">Source data</th><th colspan="2">Replacement Table</th><th rowspan="2" align="left" valign="top">Replace other:</br>With regular expression</th><th align="left" valign="top">Replacement result</th></tr>


<tr><td>Bank BIC</td><th>Replace</th><th>Value</th><td>Replace bank BIC</td></tr>


<tr><td>40147О00</td><td rowspan="4" valign="top">\D</td><td Rowspan="4" valign="top">Wrong BIC</td><td rowspan="4" valign="top" align="left">BIC $1 is specified in payment order</td><td align="left">Wrong BIC</td></tr>


<tr><td>40147781</td><td align="left">BIC 40147781 is specified in payment order</td></tr>


<tr><td>40155000</td><td align="left">BIC 40155000 is specified in payment order</td></tr>


<tr><td>4017З001</td><td align="left">Wrong BIC</td></tr>
</table>