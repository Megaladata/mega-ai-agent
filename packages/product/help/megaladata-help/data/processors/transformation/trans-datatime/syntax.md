---
description: How to set a custom date and time format in Megaladata.
---

# Date/Time Formatting Syntax

When setting a custom date/time format, you can combine your text with pre-defined markers:
* **Day**
   * `%d`: day of the month with a leading zero
   * `%j`: day of the month
   * `%z`: the number of the day in the year
   * `%q`: the number of the day in the quarter
   * `%N`: the number of the day in the week
   * `%D`: week day, abbreviated
   * `%l`: week day, full
* **Week**
   * `%W`: the number of the week in the year
   * `%e`: the number of the week in the quarter
   * `%w`: the number of the week in the month
* **Month**
   * `%M`: month, abbreviated
   * `%F`: month, full
   * `%m`: the number of the month with a leading zero
   * `%n`: the number of the month
* **Quarter**
   * `%Q`: the number of the quarter
* **Year**
   * `%Y`: year, 4 digits
   * `%y`: year, 2 digits
* **Hours**
   * `%g`: hours, in 12-hour format
   * `%G`: hours, in 24-hour format
   * `%h`: hours, in 12-hour format with a leading zero
   * `%H`: hours, in 24-hour format
* **Minutes**
   * `%i`: minutes with a leading zero
* **Seconds**
   * `%s`: seconds with a leading zero
* **Milliseconds**
   * `%u`: milliseconds with a leading zero
* **Date**
   * `%L`: date, long
   * `%S`: date, short
* **Time**
   * `%T`: time, long
   * `%t`: time, short

%spoiler%Example:%spoiler%

To transform `11.08.2017 13:50` into `custom text Aug, more text 2017, 13`, use the following formatting string:

`"custom text %M, more text %Y, %G"`

%/spoiler%

**Read on:** [Enrich Data Component](../supplementation.md)