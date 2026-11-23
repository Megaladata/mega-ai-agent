# External Ranges

This binning method is available when the external binning tables are connected. To connect them, it is required to add another port using the handler by clicking on ![ Add another port](../../../images/icons/app/node/ports/add/add_inactive_default.svg) button. The table with the data on the included ranges is connected to the appeared port.

In this case, when starting the wizard, the input range configuration window will be opened first. It will be required to provide columns mapping there. The input table must contain corresponding data. It is described in the table:

| Column name | Description | Data type | Required | Default value |
|---------------------|----------------|-------------------|------------------------|----------------------------------------|
| Bins identifier | The identifier is set by a user | Any | Yes | None |
| Range bounds data type | Data type is represented by a number | Integer | No | Automatically according to the bound |
| Bin number | Index bin number | Integer | No | Numbers are assigned starting from 0 |
| Lower bound | Lower bin bound | Integer, real | Yes | None |
| Upper bound | Upper bin bound | Integer, real | No | They will be assigned according to thе lower bound |
| Caption | Bin caption. It is set by a user | String | No | It will remain null. Then it will be possible to set using a template in the wizard. |
| Lower bound quota | 1 - the bound value is included into the bin;<br>0 - the bound value is not included into the bin | Integer, Real | No | 0 |
| Upper bound quota | 1 - the bound value is included into the bin;<br>0 - the bound value is not included into the bin | Integer, Real | No | 1 |
| Bin quota | always 0 | Integer, Real | No | 0 |
| Lower bin bound open | true if "Lower bound open" checkbox is selected;  <br>false if "Lower bound open" checkbox is not selected | Logical | No | false |
| Upper bin bound open | true if "Upper bound open" checkbox is selected; <br>false if "Upper bound open" checkbox is not selected | Logical | No | true |

> **Important:** While attempting to use the values of Lower bin bound open and Upper bin bound open fields of External ranges table simultaneously, and, correspondingly, Lower bound open, Upper bound open checkboxes of the wizard, the priority is given to the fields, namely, in this case, checkboxes will have no influence on the result.