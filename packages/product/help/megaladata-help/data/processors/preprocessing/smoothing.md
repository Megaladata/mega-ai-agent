# ![ ](../../images/icons/components/smoothing_default.svg) Smoothing

## Description

The handler is designated for smoothing of numerical data series and selection of trend story. The Hodrick-Prescott filter or one of three wavelet types (Daubechies, Coiflet and CDF 9/7 wavelets) can be used for these purposes in it. It is possible to smooth the series with null data. In this case, the Hodrick-Prescott filter enables to insert the values that provide the maximum smoothness as far as the filter functionality is concerned instead of the null data. If **Wavelet smoothing** is used, the null data is linearly interpolated first.

%spoiler%Example%spoiler%

The chart that complies with the source data series (the Brent crude oil price movement) is shown in orange. The source data series processed with the "Smoothing" component using the Hodrick-Prescott filter with LAMBDA parameter equal to 100 is shown in blue. ![ ](./smoothing1.svg)

%/spoiler%

## Ports

### Input

* ![ ](../../images/icons/app/node/ports/inputs/table_inactive.svg) Input data source: data table.

### Output

* ![ ](../../images/icons/app/node/ports/outputs/table_inactive.svg) Output data set: the source table to which the fields with smoothed series have been added. Captions of such fields include **_smoothed** postfixes.

## Wizard

It provides a list of the numerical fields included into the input table. It is required to provide checkboxes for the fields series of which are to be smoothed. Then it is possible to set the smoothing method in the "processing method" column for each selected field:

* The Hodrick-Prescott filter has two interrelating parameters (simultaneous editing of parameters is excluded). Radio buttons switch to editing of one of them:
   * Lambda is the main filter coefficient with increase of which the series smoothing increases as well (if Lambda → ∞, the final series becomes the linear trend, and if Lambda = 0, the series matches the source series). It can take the real values in the range of [0.0625, 1026598E+8] at 0.1 intervals. 1026598E+8 value was calculated on the basis of the maximum values of the Smoothing Period.
   * The smoothing period: the real value in the range of [2, 20000] at 0.1 intervals. Default value - 39.7 (it is calculated on the basis of the default Labmba value that is equal to 1600).
* Wavelet smoothing: the wavelet type is defined by the radio button (Daubechies, Coiflet and CDF 9/7). Settings of all wavelets are identical:
   * Wavelet order defines the smoothness of the recovered data series: the lower the parameter value, the more expressed "outliers" are observed, and vice versa, the "outliers" will be smoothed when the parameter values are high. For the Daubechies wavelet this parameter can take values from 1 to 10, for the Coiflet wavelet - from 1 to 5, and this parameter is not used by CDF 9/7 wavelet.
   * Bounds extension: the method is used to eliminate distortions on the series bounds while smoothing:
      * Symmetric
      * Antisymmetric
      * Zero padding
      * Constant
      * Periodic
      * Symmetric without extreme point
      * Antisymmetric without extreme point
   * Decomposition level defines the "scale" of the filtered out details. The higher this value, the "larger" details will be filtered out in the source data. The usage of too high values of decomposition level can cause the loss of usefull information in connection with too high level of the data "coarsening". The parameter can take values from 1 to 10.
