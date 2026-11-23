---
description: Learn about the correct replacement file structure for the Megaladata Replace component.
---
# Replacement File Structure

The text file you import to provide the replacement table must meet the following specifics:
- The text must include data for two columns:
  - Column 1: the value to replace
  - Column 2: the new value
- The column text must be separated with a tab character.
- The column headers will be ignored.
- The file must be encoded in UTF-8.

%spoiler%Example:%spoiler%

Replacement file:

```
Average score	New average score
4.99	5
4.99	4.69
4.97	4.51
4.92	4.49
4.91	4.47
4.88	4.40
4.85	4.35
4.84	4.30
4.84	4.25
4.79	4.20
```

> **Note:** The decimal separator depends on the locale. For English, the default separator is the decimal point (`.`).

%/spoiler%

Note that the system interprets a single question mark `?` as `<null>` (null value). Take this into account if your data contains `<null>` values that you need to replace with other values, or if you need to replace some values with `<null>`.

**Read on:** [Replace Other Values](other-match.md)