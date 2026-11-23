# Replacement by Exact Match

The *Value* field of the replacement table contains the values to be replaced. The algorithm searches for exact match of the source data with the values of this field. If such match is found, it is replaced with the value of the *Replace* field.

The algorithm logics example:

<table>
<thead>
<tr><th>The source data value</th><th colspan="2">Values of the replacement table rows</th><th>Match</th><th>New value</th></tr>
</thead>
<tbody>
<tr><td> </td><th><br>"Replace" field</th><th><br>"Value field"</th><td> </td><td> </td></tr>
<tr><td rowspan="5" valign="top" align="right">48</td><td align="right">12</td><td align="left">Poor</td><td>No</td><td rowspan="5" valign="top" align="left">Excellent</td></tr>
<tr><td align="right">24</td><td align="left">Satisfactory</td><td>No</td></tr>
<tr><td align="right">36</td><td align="left">Good</td><td>No</td></tr>
<tr><td align="right">48</td><td align="left">Excellent</td><td>Yes</td></tr>
<tr><td align="right">60</td><td align="left">Perfect</td><td>No</td></tr>
</tbody>
</table>

Data use example:

Replacement Table

|Replacement|Value|
|-:|:-|
|12|Poor|
|24|Satisfactory|
|36|Good|
|48|Excellent|
|60|Perfect|

Result of the performed replacement

|Source data value|New value|
|-:|:-|
|12|Poor|
|15|15|
|24|Satisfactory|
|35|35|
|48|Excellent|
|73|73|

As shown in the table of comparison of the source data with the final one, all data not included into the *Replacement table* is not replaced and it is shown in the source form. The values not included into the *Replacement table* are processed according to the specified *Precision* and [Replace other](./other-match.md) parameter.

## Use of the Allowable Interval

It is possible to specify the allowable search interval when searching for real and integer data. *Precision* parameter is required for its configuration. Intervals are calculated as follows: `from <Replace field value>-<Precision> to <Replace field value>+<Precision>`. If several matches are found taking into account the interval, the closest match to the source one will be used.

The algorithm logics example with interval use:

<table>
<thead>
<tr><th>The source data value</th><th colspan="2">Values of the replacement table rows </th><th>Allowable interval</th><th>Match interval</th><th>Match</th><th>The closest to source</th><th>New value</th></tr>
</thead>
<tbody>
<tr><th></th><th><br>"Replace" field</th><th><br>"Value field"</th><th></th><th></th><th></th><th></th><th></th></tr>
<tr><td rowspan="5" valign="top" align="right">50</td><td align="right">12</td><td>Poor</td><td rowspan="5" valign="top" align="right">20</td><td>from -8 to 32</td><td>No</td><td>No</td><td rowspan="5" valign="top" align="center">Excellent</td></tr>
<tr><td align="right">24</td><td>Satisfactory</td></td><td> from 4 to 44</td><td>No</td><td>No</td></tr>
<tr><td align="right">36</td><td>Good</td></td><td>from 16 to 56</td><td>Yes</td><td>No</td></tr>
<tr><td align="right">48</td><td>Excellent</td></td><td>from 28 to 68</td><td>Yes</td><td>Yes</td></tr>
<tr><td align="right">60</td><td>Perfect</td></td><td>from 40 to 80</td><td>Yes</td><td>No</td></tr>
</tbody>
</table>

Data use example:

Replacement Table

|Replacement|Value|
|-:|:-|
|12|Poor|
|24|Satisfactory|
|36|Good|
|48|Excellent|
|60|Perfect|

*Precision* is equal to `12`.

Result of the performed replacement

|Source data value|New value|
|-:|:-|
|12|Poor|
|15|Poor|
|24|Satisfactory|
|35|Good|
|48|Excellent|
|73|73|

The values included neither into the *Replacement table*, nor into *Allowable intervals*, are processed according to the configured parameter - [Replace other](./other-match.md).