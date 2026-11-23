---
description: Replace values in Megaladata using regular expressions (Perl regex).
---

# Replacement by Regular Expressions

You can configure the **Replace** node to use *regular expressions* for searching specified character sequences. The algorithm checks each value of the source dataset column for a match and, if found, replaces it with the new value. This option is only available for `string` columns.

A regular expression is a pattern for searching character sequences. Define it using a rule language based on a subset of Perl [regular expressions](https://en.wikipedia.org/wiki/Regular_expression).

The system processes values that do not appear in the replacement table following the **[Replace other](./other-match.md)** parameter.

%spoiler%**Example**%spoiler%

| #   | SKU     |
| --- | ------- |
| 1   | 0100597 |
| 2   | 0100598 |
| 3   | 0102341 |
| 4   | 0102342 |
| 5   | 0102392 |
| 6   | 0102478 |
| 7   | 0102491 |
| 8   | 0102492 |
| 9   | 0102493 |
| 10  | 0102548 |

Let's process this dataset with the **Replace** node using the following settings:

![Setting up replacement using a regular expression](reg-ex-settings1.png)

The regular expression `^0102` matches all records starting with `0102`.

Let's set the **Replace other** parameter to **Do not replace**. This produces the following dataset:

| #   | SKU Replace | SKU Replaced |
| --- | ----------- | ------------ |
| 1   | 0100597     | false        |
| 2   | 0100598     | false        |
| 3   | Valid       | true         |
| 4   | Valid       | true         |
| 5   | Valid       | true         |
| 6   | Valid       | true         |
| 7   | Valid       | true         |
| 8   | Valid       | true         |
| 9   | Valid       | true         |
| 10  | Valid       | true         |

Now let's change the **Replace other** setting, selecting the **With value** option and specifying **Invalid** as the value.

![Replace other: example settings](reg-ex-settings2.png)

This produces the following dataset:

| #   | SKU Replace | SKU Replaced |
| --- | ----------- | ------------ |
| 1   | Invalid     | true         |
| 2   | Invalid     | true         |
| 3   | Valid       | true         |
| 4   | Valid       | true         |
| 5   | Valid       | true         |
| 6   | Valid       | true         |
| 7   | Valid       | true         |
| 8   | Valid       | true         |
| 9   | Valid       | true         |
| 10  | Valid       | true         |

%/spoiler%

**Read on:** [Replacement File Structure](import-tz.md)