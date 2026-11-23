# Parameters of Binning Ranges

This table contains information on the output binning ranges. The [external ranges](./outdoor-ranges.md) table will have the same structure. The values of all columns are stated in the table:

| Column name | Output ranges |
| ------- | ------- |
| Bins identifier | It is assigned by the column name by which binning was calculated |
| Range bounds data type | 0 - undefined; <br> 1 – logical; <br>  2 - date/time; <br> 3 – real; <br> 4 – integer; <br>  5 – string; <br> 6 – variable. |
| Bin number | Index bin number |
| Lower bound | Lower bin bound |
| Upper bound | Upper bin bound |
| Caption | It is set using a template in the wizard |
| Lower bound quota | 1 - the bound value is included into the bin; <br> 0 - the bound value is not included into the bin. |
| Upper bound quota | 1 - the bound value is included into the bin; <br> 0 - the bound value is not included into the bin. |
| Bin quota | Always 0 |
| Lower bin bound open | true if "Lower bound open" checkbox is selected; <br> false if "Lower bound open" checkbox is not selected. |
| Upper bin bound open | true if "Upper bound open" checkbox is selected; <br> false if "Upper bound open" checkbox is not selected. |

-------

**Important:** If the "Tile" binning method is used with the Ties processing type "Leave as is", information on the number of the values included into this bin will be shown in Lower bound quota, Upper bound quota and Bin quota columns.
