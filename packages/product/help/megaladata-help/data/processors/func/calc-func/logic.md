# Logical Functions

## Decode

**Decode(Expression, Value1, Result1 [, Value2, Result2]... [, Default\_value= ""])**

* Expression - the expression value of which is alternately compared with the values of the ValueN arguments.
* ValueN - the expression value of which is compared with the Expression argument.
* ResultN - the expression of the string type that is returned if the Expression = ValueN.
* Default\_value - the expression of the string type the result of which is returned if the Expression is equal to none of the ValuesN (if it is not stated then it is equal to "").

Implements IF - THEN - ELSE feature and the function result is related to the string type.
All ResultN expressions are calculated before the Expression and ValueN comparison.

## DecodeF

**DecodeF(Expression, Error, Value1, Result1 [, Value2, Result2]... [, Default\_value = 0])**

* Expression - any numeric expression value of which is used for comparison.
* Error - the numeric expression, comparison error.
* ValueN - the numeric expression value of which is compared with the Expression argument.
* ResultN - the value that is returned if |ValueN - ExpressionN| <= Error.
* Default value - the numeric expression the result of which is returned if none of the ValuesN is equal to the Expression (by default 0).

Implements IF - THEN - ELSE feature and the function result as all its arguments are related to the numeric or Date/Time type.
All ResultN expressions are calculated before the Expression and ValueN comparison.

## DecodeN

**DecodeN(Expression, Value1, Result1 [, Value2, Result2]... [, Default\_value = 0])**

* Expression - the expression value of which is alternately compared with the values of the ValueN arguments.
* ValueN - the expression value of which is compared with the Expression argument.
* ResultN - the expression of the numeric or Date/Time type that is returned if the Expression = ValueN.
* Default\_value - the expression of the numeric or Date/Time type the result of which is returned, if the Expression is equal to none of the ValuesN (if it is not stated then it is equal to 0).

Implements IF - THEN - ELSE feature and the function result is related to the numeric or Date/Time type.
All ResultN expressions are calculated before the Expression and ValueN comparison.

## DecodeS

**DecodeS(Expression, Value1, Result1 [, Value2, Result2]... [, Default\_value = ""])**

* Expression - the expression value of which is alternately compared with the values of the ValueN arguments.
* ValueN - the expression value of which is compared with the Expression argument.
* ResultN - the expression of the string type that is returned if the Expression = ValueN.
* Default\_value - the expression of the string type the result of which is returned if the Expression is equal to none of the ValuesN (if it is not stated then it is equal to "").

Implements IF - THEN - ELSE feature and the function result is related to the string type.
All ResultN expressions are calculated before the Expression and ValueN comparison.

## DecodeV

**DecodeV(Expression, Value, Result [, Value, Result]... [, Default\_value = Null])**

* Expression - the expression value of which is alternately compared with the values of the Value arguments.
* Value - the expression value of which is compared with the Expression argument.
* Result - the expression that is returned if the Expression = the Value.
* Default\_value - the expression, the result of which is returned if the Expression is equal to none of the Values (if it is not stated then it is equal to Null).

Implements IF - THEN - ELSE feature.
All Result expressions are calculated before the Expression and Values comparison.

## IF

**IF(Antecedent, Value1, Value2)**

* Antecedent - logical expression.
* Value1.
* Value2 - expressions of any types.

Returns Value1 if the Antecedent is true or Value2 if it is false. The function result has the variant type.

## IFF

**IFF(Antecedent, Value1, Value2)**

* Antecedent - logical expression.
* Value1.
* Value2 - numeric expressions or expressions of the Date/time type.

Returns Value1 if the Antecedent is true or Value2 if it is false.

## IN

**IN(Value, Element1, Element2, ..., ElementN)**

* Value - value of the target element.
* Element1.
* Element2.
* ElementN - values of the list items.

Function returns the TRUE value of the logical type if the Value is in the list, otherwise the result is FALSE.

## IsNull

**IsNull(Argument)**

* Argument - any expression.

Checks whether the Argument is null. Returns the logical value.

## NVL

**NVL(Expression [, Default\_value = ""])**

* Expression - any string or numeric expression.
* Default\_value - optional parameter, string or numeric expression value of which is returned if the Expression is equal to Null.

Returns the Expression value if it is not equal to Null, and Default\_value otherwise.
