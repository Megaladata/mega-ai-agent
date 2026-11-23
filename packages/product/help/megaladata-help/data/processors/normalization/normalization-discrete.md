# Normalization of Discrete Data

* **Indicator**: the encoded string length is equal to n-1 where n is a count of unique values. A separate column is assigned to each unique field value, with the exception of the reference category. Value 1 is recorded in it, whereas all other string values are equal to 0. The reference category is encoded using the string that consists of zeros.
* **Indicator (without reference category)**: the encoded string length is equal to n. The reference value is not used.
* **Deviation** means the same as the "Indicator", but the reference category is encoded using the string that consists of -1.
* **Simple** means the same as the "Indicator", but value -1/n is used instead of 0, and value 1-1/n is used instead of 1.
* **Difference**: the unique values are ordered, then each unique value is compared with the next one according to the following table:

| Unique values | Contrast 1 | Contrast 2 | Contrast 3 |
| :--------------------- | :------------ | :------------ | :------------ |
|  | **U1 vs. U2** | **U2 vs. U3** | **U3 vs. U4** |
| U1 | (n-1)/n | (n-2)/n | (n-3)/n |
| U2 | -1/n | (n-2)/n | (n-3)n |
| U3 | -1/n | (n-2)/n | (n-3)/n |
| U4 | -1/n | -2/n | -3/n |

* **Backward difference**: the unique values are ordered, then each unique value is compared with the previous one according to the following table:

| Unique values | Contrast 1 | Contrast 2 | Contrast 3 |
| :--------------------- | :------------ | :------------ | :------------ |
|  | **U1 vs. U2** | **U2 vs. U3** | **U3 vs. U4** |
| U1 | -(n-1)/n | -(n-2)/n | -(n-3)/n |
| U2 | 1/n | -(n-2)/n | -(n-3)n |
| U3 | 1/n | 2/n | -(n-3)/n |
| U4 | 1/n | 2/n | 3/n |

* **Helmert**: the unique values are ordered, then each unique value is compared with the average value from the subsequent values according to the following table:

| Unique values | Contrast 1 | Contrast 2 | Contrast 3 |
| :--------------------- | :------------ | :------------ | :------------ |
|  | **U1 vs. U2, U3 and U4** | **U2 vs. U3 and U4** | **U3 vs. U4** |
| U1 | (n-1)/n | 0 | 0 |
| U2 | -1/n | (n-2)/n | 0 |
| U3 | -1/n | -1/(n-1) | (n-3)/n |
| U4 | -1/n | -1/(n-1) | -1/(n-2) |

* **Reverse Helmert**: the unique values are ordered, then each unique value is compared with the average value from the previous values according to the following table:

| Unique values | Contrast 1 | Contrast 2 | Contrast 3 |
| :--------------------- | :------------ | :------------ | :------------ |
|  | **U2 vs. U1** | **U3 vs. U1 and U2** | **U4 vs. U1, U2 and U3** |
| U1 | -1/(n-2) | -1/(n-1) | -1/n |
| U2 | (n-2)/n | -1/(n-1) | -1/n |
| U3 | 0 | (n-2)/n) | -1/n |
| U4 | 0 | 0 | (n-1)/n |

* **Unique value index**: each unique value is replaced with the unique value index.

## Reference Value

The reference value is used in some normalizers of discrete data. The reference value is selected from the unique values table. There are several options to set the reference value:

* First listed.
* Last listed.
* Rarer.
* More frequent.
* Explicitly set.