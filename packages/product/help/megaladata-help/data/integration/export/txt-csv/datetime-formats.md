# Custom Date/Time Format

In case you need to set a custom date/time representation, use a combination of the following templates:

* Day
   * **d**: the day of the month, without a leading zero
   * **dd**: the day of the month in 2-digit format
* Day of the week
   * **ddd**: the day of the week, abbreviated ("Sun", "Mon", etc.)
   * **dddd**: the day of the week in full-name format  ("Sunday", "Monday", etc.)
* Month
   * **m**: the number of the month, without a leading zero
   * **mm**: the number of the month in two-digit format
   * **mmm**: the month name, abbreviated ("Jan", "Feb", etc.)
   * **mmmm**: the full name of the month ("January", "February", etc.)
* Year
   * **y** or **yy**: the last two digits of the year
   * **yyyy**: a four-digit representation of the year
* Hours
   * **h**: hours without a leading zero
   * **hh**: hours in two-digit format
* Minutes
   * **n**: minutes without a leading zero
   * **nn**: minutes in two-digit format
* Seconds
   * **s**: seconds without a leading zero
   * **ss**: seconds in two-digit format
* Milliseconds
   * **z**: the milliseconds without a leading zero
   * **zzz**: milliseconds in two-digit format

**Example:**

To represent `11.08.1917` in the following form: "It was **August** **17**", you would use the following formatting: "It was `mmmm` `yy`".

**Read on:** [Excel File Export Component](../excel.md)