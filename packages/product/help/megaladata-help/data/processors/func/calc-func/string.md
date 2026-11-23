---
description: Employ string functions such as Chr, Concat, Count, DamLevDist, Find, Format, Left, LevDist, Lower, RegExDomain, RegExEmail, RegExMatch, RegExMatchCount, RegExMatchedExp, RegExReplace, RegExReplaceAll, Repeat, Replace, Right, Space, Str, StrZero, Stuff, SubStr, Trim, Upper, and Val in your calculator formulas. Read through the descriptions of the functions and their arguments.
---
# String Functions

## Chr

`Chr(Argument)`

* **Argument**: The numeric code of a Unicode character in the range `[0, 65535]`.

The function returns the Unicode character for this code.

## Concat

`Concat(String, String [, ... String])`

* **String**: A `string` expression.

The function combines several strings into one.
The system interprets missing values as zero-length strings, that is, as `""`.

## Count

`Count(String)`

* **String**: A `string` expression.

The function returns the number of characters in the string.

## DamLevDist

`DamLevDist(String1, String2)`

* **String1**, **String2**: `string` expressions.

The function returns the [Damerau–Levenshtein distance](https://en.wikipedia.org/wiki/Damerau%E2%80%93Levenshtein_distance) for **String1** and **String2**. The Damerau–Levenshtein distance is also called the edit distance that accounts for transpositions. It measures how similar two strings are. The result is the minimum number of character deletions, insertions, substitutions, and transpositions required to transform one string into the other.

## Find

`Find(Substring, String[, MatchIndex = 1])`

* **Substring**: The substring to find.
* **String**: The string in which you need to find the substring.
* **MatchIndex**: An optional parameter specifying the index of the **Substring** occurrence in **String**. A `numeric` argument that can be positive or negative.

The function returns the position of the first character of the **Substring** in the occurrence specified by **MatchIndex**.
If **MatchIndex** is positive, the function searches *from left to right*. If **MatchIndex** is negative, the function searches *from right to left*.
If the specified occurrence does not exist, the function returns `0`.
For example:
- `Find("A", "A000A00A", 2)` returns the position of the second occurrence of the substring `"A"` from the left in the string `"A000A00A"`, that is, `5`.
- `Find("A", "A000A00A", -1)` returns the position of the first occurrence of the substring `"A"` from the right in the string `"A000A00A"`, that is, `8`.
If **MatchIndex** is `0`, the function returns `Null`.

**Substring** cannot be `null`.

## Format

`Format(Format_string, Expression [, ... Expression])`

* **Format_string**: A `string` expression of a special format.
* **Expression**: Any `string` expression.

The function returns the list of expressions in the specified format. Specify the format as follows:

`[String] %s [String] [... [[String]%s[String]]]`

where
* **String**: A `string` expression.
* `%s`: The character that the function replaces with the next **Expression** argument from the list.

## Left

`Left(String, Count_of_characters)`

* **String**: A `string` expression.
* **Count_of_characters**: Indicate how many characters to return; cannot be `null`.

The function returns the specified number of characters from the left part of the string.

## LevDist

`LevDist(String1, String2)`

* **String1**, **String2**: `string` expressions.

The function returns the [Levenshtein distance](https://en.wikipedia.org/wiki/Levenshtein_distance) for **String1** and **String2**. The Levenshtein distance is also called the edit distance. It measures how similar two strings are. The result is the minimum number of character deletions, insertions, and substitutions required to transform one string into the other.

## Lower

`Lower(Argument)`

* **Argument**: A `string` expression.

The function returns **Argument** in lowercase.

## RegExDomain

`RegExDomain(InputString [, OccurrenceNumber = 1])`

* **InputString**: The input string in which the function searches for an email address.
* **OccurrenceNumber**: The index of the web address in the input string.

The function returns the **OccurrenceNumber**-th website address from **InputString**, excluding `www`, up to and including the top-level domain.
The system uses regular expressions for the search.

**OccurrenceNumber** cannot be `null`.

## RegExEmail

`RegExEmail(InputString [, OccurrenceNumber = 1])`

* **InputString**: The input string in which the function searches for an email address.
* **OccurrenceNumber**: The index of the email address in the input string.

The function returns the **OccurrenceNumber**-th email address from **InputString**.
The system uses regular expressions for the search.

**OccurrenceNumber** cannot be `null`.

## RegExMatch

`RegExMatch(RegularExpression, String)`

* **RegularExpression**: The regular expression string.
* **String**: The input string.

The function checks whether the string matches the regular expression.
The system uses the [PCRE2 library](https://en.wikipedia.org/wiki/Perl_Compatible_Regular_Expressions). The syntax and semantics are compatible with Perl regular expressions.

## RegExMatchCount

`RegExMatchCount(RegularExpression, String)`

* **RegularExpression**: The regular expression string.
* **String**: The input string.

The function returns the number of string parts that match the regular expression.
The system uses the PCRE2 library. The syntax and semantics are compatible with Perl regular expressions.

## RegExMatchedExp

`RegExMatchedExp(RegularExpression, String [, MatchIndex = 1])`

* **RegularExpression**: The regular expression string.
* **String**: The input string.
* **MatchIndex**: The index of the part of the input string that matches the regular expression. The parameter must be in the range from 1 to `RegExMatchCount`.

The function returns the part of the string that matches the regular expression.
The system uses the PCRE2 library. The syntax and semantics are compatible with Perl regular expressions.

**MatchIndex** cannot be `null`.

## RegExMatchedNamedSubExp

`RegExMatchedNamedSubExp(RegularExpression, String, GroupName [, MatchIndex = 1])`

* **RegularExpression**: The regular expression string.
* **String**: The input string.
* **GroupName**: The name of the group defined by the metacharacters `(...)`.
* **MatchIndex**: The index of the part of the input string that matches the regular expression. The parameter must be in the range from `1` to `RegExMatchCount`.

The function returns the group of the string part that matches the regular expression.
The system numbers groups from left to right, in the order in which the opening brackets appear.
The system uses the PCRE2 library. The syntax and semantics are compatible with Perl regular expressions.

**MatchIndex** cannot be `null`.

## RegExMatchedSubExp

`RegExMatchedSubExp(RegularExpression, String, GroupIndex [, MatchIndex = 1])`

* **RegularExpression**: The regular expression string.
* **String**: The input string.
* **GroupIndex**: The index of the group defined by the metacharacters `(...)`.
* **MatchIndex**: The index of the part of the input string that matches the regular expression. The parameter must be in the range from `1` to `RegExMatchCount`.

The function returns the group of the string part that matches the regular expression.
The system numbers groups from left to right, in the order in which the opening brackets appear.
The system uses the PCRE2 library. The syntax and semantics are compatible with Perl regular expressions.

**GroupIndex** and **MatchIndex** cannot be `null`.

## RegExReplace

`RegExReplace(RegularExpression, InputString, ReplaceString [, MatchIndex = 1, ExtendedSyntax = False])`

* **RegularExpression**: The regular expression string.
* **InputString**: The input string in which the function performs the replacement.
* **ReplaceString**: The string that the function inserts in place of the part of the input string that matches the regular expression.
* **MatchIndex**: The index of the part of the input string that matches the regular expression. The parameter must be in the range from `1` to `RegExMatchCount`.
* **ExtendedSyntax**: Extended replacement syntax (for PCRE2 only).

The function returns **InputString** in which it replaces the **MatchIndex**-th occurrence of **RegularExpression** with **ReplaceString**.
The system uses the PCRE2 library. The syntax and semantics are compatible with Perl regular expressions.

**MatchIndex** and **ExtendedSyntax** cannot be `null`.

## RegExReplaceAll

`RegExReplaceAll(RegularExpression, InputString, ReplaceString [, ExtendedSyntax = False])`

* **RegularExpression**: The regular expression string.
* **InputString**: The input string in which the function performs the replacement.
* **ReplaceString**: The string that the function inserts in place of the parts of the input string that match the regular expression.
* **ExtendedSyntax**: Extended replacement syntax (for PCRE2 only).

The function returns **InputString** where every occurrence of **RegularExpression** is replaced with **ReplaceString**.
The system uses the PCRE2 library. The syntax and semantics are compatible with Perl regular expressions.

**ExtendedSyntax** cannot be `null`.

## Repeat

`Repeat(String, Count_of_repeats)`

* **String**: A `string` expression.
* **Count_of_repeats**: An `integer` expression.

The function returns a string that repeats the specified string the required number of times.

**Count_of_repeats** cannot be `null`.

## Replace

`Replace(String, Old_template, New_template [, Replace_all, Ignore_case])`

* **String**: The string in which you need to make the replacement.
* **Old_template**: The substring to replace.
* **New_template**: The string that replaces **Old_template**.
* **Replace_all**: A flag that replaces every occurrence of **Old_template** with **New_template**. A `logical` argument.
* **Ignore_case**: A flag that controls case sensitivity during replacement. A `logical` argument.

The function returns **String** in which it has replaced occurrences of **Old_template** with **New_template**.
If the **Replace all** flag is `True`, the function replaces every occurrence of **Old_template** with **New_template** in the returned string.
If the **Replace all** flag is `False`, the function replaces only the first occurrence in the returned string.
If the **Ignore case** flag is `True`, the search for the fragments to replace (**Old_template**) is case-insensitive.
If the **Ignore case** flag is `False`, the search for the fragments to replace (**Old_template**) is case-sensitive.
You can omit the last two parameters.
If you omit the **Ignore case** flag, the search for the fragments to replace is case-sensitive.
If you omit the **Replace all** flag, the function replaces only the first occurrence of the substring.
For example:
- `Replace("A000a00A", "A", "B", True, True)` returns the string `"B000B00B"`. The function replaces every occurrence of the string `"A"` with the string `"B"` and ignores character case.
- `Replace("A000a00A", "A", "B", True, False)` returns the string `"B000a00B"`.
- `Replace("A000a00A", "A", "B")` returns the string `"B000a00A"`.

**Old_template**, **New_template**, **Replace_all**, and **Ignore_case** cannot be `null`.

## Right

`Right(String, Count_of_characters)`

* **String**: A `string` expression.

The function returns the specified number of characters from the right part of the string.

**Count_of_characters** cannot be `null`.

## Space

`Space(Count_of_spaces)`

* **Count_of_spaces**: An `integer` expression.

The function returns the specified number of spaces.

## Str

`Str(Argument)`

* **Argument**: A `numeric` expression.

The function returns a locale-aware string representation of **Argument**.

## StrZero

`StrZero(Expression, Total_length)`

* **Expression**: A `numeric` expression.
* **Total_length**: The length of the resulting string.

The function adds zeros in front of the specified expression so that the length of the resulting string equals **Total_length**.

## Stuff

`Stuff(Source, Start, Length [, Inserted_string = ""])`

* **Source**: A `string` expression.
* **Inserted_string**: A `string` expression.
* **Start**: The position where the insertion starts.
* **Length**: The length of the substring to delete.

The function returns the string resulting from the following transformations:
- First, the function deletes a substring from **Source**, starting at position **Start**, with length **Length**. 
- Then, it inserts **Inserted_string** in place of the deleted substring.

**Start**, **Length**, and **Inserted_string** cannot be `null`.

## SubStr

`SubStr(Source, Start, Length)`

* **Source**: A `string` expression.
* **Start**: The start position of the substring.
* **Length**: The length of the substring.

The function returns a substring of the source string, starting at position **Start**, with length equal to **Length**.

**Start** and **Length** cannot be `null`.

## Trim

`Trim(Argument)`

* **Argument**: A `string` expression.

The function returns **Argument** without leading and trailing spaces. It removes characters with codes from 0 through 32 inclusive. If **Argument** contains only spaces, the function returns an empty string.

## TrimLeft

`TrimLeft(Argument)`

* **Argument**: A `string` expression.

The function returns **Argument** without leading spaces. It removes characters with codes from 0 through 32 inclusive. If **Argument** contains only spaces, the function returns an empty string.

## TrimRight

`TrimRight(Argument)`

* **Argument**: A `string` expression.

The function returns **Argument** without trailing spaces. It removes characters with codes from 0 through 32 inclusive. If **Argument** contains only spaces, the function returns an empty string.

## Upper

`Upper(Argument)`

* **Argument**: A `string` expression.

The function returns **Argument** in uppercase.

## Val

`Val(String)`

* **String**: A `string` expression.

The function converts the specified string to a number according to the locale.

**Read on:** [Financial Functions](financical.md)