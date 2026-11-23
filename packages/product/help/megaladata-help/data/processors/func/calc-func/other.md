# Other Functions

## CRC32

**CRC32(String)**

* String: the string for which CRC32 value is calculated.

Function returns the number - CRC32 value calculated on the basis of the given string.
Calculations are performed with the String characters sequence using UTF-8 encoding.

## CreateGUID

**CreateGUID([Format = "B", UpperCase = True])**

* Format - method of GUID string representation ("N", "D", "B", "P").
* UpperCase - argument of the logical type defining the character case of hexadecimal digits.

Function returns GUID string representation in the specified format:
"N" - 32 digits;
"D" - 32 hyphenated digits;
"B" - 32 hyphenated digits and digits in curved brackets;
"P" - 32 hyphenated digits and digits in round brackets.
If the format is not specified, use of "B" format is required. By default, hexadecimal digits are written in uppercase.
As GUID will be generated each time when getting the expression value, for example, when viewing result in the tabular form or executing data export, it is generally recommended to activate this option if there is "Cache" expression parameter.

## Data

**Data("ColumnName",RowNumber)**

* ColumnName - return value column name.
* RowNumber - return value row number.

Function returns the ColumnName field value taken from the RowNumber row.
When using this function, it is required to select "Cache the calculated expression values" checkbox in the "Expression parameters" window.

## DisplayName

**DisplayName(["Name"])**

* FieldName - name of field, variable or expression.

Function returns the caption (display name) according to the field name, variable or expression.
If the function is called without arguments, it returns the caption of the current calculated expression.

## MD5

**MD5(String)**

* String: the string for which MD5 value is calculated.

Function returns HEX value MD5 calculated on the basis of the given string.
Calculations are performed with the String characters sequence using UTF-8 encoding.

## Null

**Null()**

* Arguments are absent.

Function returns the null value.

## Random

**Random()**

* Arguments are absent.

Returns pseudorandom evenly distributed number larger or equal to 0 and less than 1.
As a random number will be generated each time when getting the expression value, for example, when viewing result in the tabular form or executing data export, it is generally recommended to activate this option if there is "Cache" expression parameter.

## RowCount

**RowCount()**

* Arguments are absent.

Function returns the row count in the data source.

## RowNum

**RowNum()**

* Arguments are absent.

Function returns the current record number of the data source.

## SHA1

**SHA1(String)**

* String: the string for which SHA1 value is calculated.

Function returns HEX value SHA1 calculated on the basis of the given string.
Calculations are performed with the String characters sequence using UTF-8 encoding.
