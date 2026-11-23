# ![ ](../../images/icons/components/binning_default.svg) Binning

## Description

The handler bins values range of the selected fields of the source data set to the final bin count. Different algorithms can be used for binning (refer to binning methods further), and [external tables](./quantization/outdoor-ranges.md) with the set binning ranges can be used. Binning is used for the following data types: integer, real and date/time (refer to [data types](../../data/datatype.md)).

### Input

* ![ ](../../images/icons/app/node/ports/inputs/table_inactive.svg) Input data source (data table).
* ![ ](../../images/icons/app/node/ports/add/add_inactive_default.svg) Add another port. External binning ranges (data table).

### Output

* ![ ](../../images/icons/app/node/ports/outputs/table_inactive.svg) Output data set (data table). [Description of structure](./quantization/calculated-columns.md) of resulting data set.
* ![ ](../../images/icons/app/node/ports/outputs/table_inactive.svg) Binning ranges (data table). [Description of structure](./quantization/ranges-quantization.md) of range table.

## Wizard

The wizard consists of two main areas: area of binning parameters configuration and area of binning results display. Both areas are organized in the table form. Login status row is located below them.

### Area of Binning Parameters Configuration

The area is represented in the table form. Three buttons are located over the fields:

* ![ ](../../images/icons/toolbar-controls/edit_default.svg) Edit: when pressing, it enables to edit the binning parameters for the selected field.
* ![ ](../../images/icons/toolbar-controls/dec-decimal-places-count_default.svg) Decrease decimal: each button pressing decreases bitness of bin bounds by one decimal place.
* ![ ](../../images/icons/toolbar-controls/inc-decimal-places-count_default.svg) Increase decimal: each button pressing increases bitness of bin bounds by one decimal place.

The area table consists of several columns:

* **Field**: contains the initial data set fields to which the binning procedure can be applied. The following field types are used: integer, real, date/time.
* **Method**: the field is represented by the drop-down list to select a binning method:
   * Width: a user can select the bin width and count of bins is automatically calculated as ratio of upper and lower bounds difference and the set width. The following parameters can be set by selecting corresponding checkboxes:
      * Upper bound — upper bound of the highest bin.
      * Lower bound — lower bound of the highest bin.
   * Count: count of bins is selected and the width is automatically calculated as ratio of upper and lower bounds difference and the set count of bins. Upper and lower bounds can be also set for this method.
   * Tile: a user selects count of bins and the component enables to set bin ranges in such a way that provides approximately the same number of values in each bin. There are several methods to process matching values:
      * Add to next: moves the values of matching observations to the next (higher) separation bin.
      * Keep in current: keeps the values of matching observations in the current (lower) separation bin. This method can cause creation of less number of bins in total.
      * Assign randomly: types of bin bounds will be randomly assigned. It is possible to include the same values into this or that bin in a random manner.
      * Leave as is: bounds of all bins will be related to **>=** type, and matching values can be in different bins.
      * Assign optimal: the equal number of values in bins is provided not only by selecting bin ranges, but also by selecting types of bounds for each bin (**>** or **>=**).
   * **SD coefficients**: bins values to bins according to the selected range expressed in the quantity of **σ** (SD).
   * [External ranges.](./quantization/outdoor-ranges.md)

      It is possible to select *Round limits* checkbox for all binning methods.
* **Auto**: the checkbox selected in this field secures auto setup of binning parameters for the selected method.
* **Bins**: count of bins to which the field values will be binned.
* **Minimum**: the minimum value of the quantized field is displayed.
* **Maximum**: the maximum value of the quantized field is displayed.

Later on, ![ ](../../images/icons/toolbar-controls/refresh_default.svg)"calculate bins" button is located in each row, and ![ ](../../images/icons/toolbar-controls/refresh_default.svg)"calculate all bins" button is located in the table head. Their pressing enables to recalculate binning parameters (count of bins, minimum, maximum) taking into account changed methods and/or configuration of parameters. This functionality is available only for "Input activated" state.

### Area of Binning Results Display

The binning results that can be edited are displayed in this area.  
Several control elements are located over the table fields:

* ![ ](../../images/icons/checkbox-states/checked_default.svg) **Lower bound open**: removes the lower bound.
* ![ ](../../images/icons/checkbox-states/checked_default.svg) **Upper bound open**: removes the upper bound.
* ![ ](../../images/icons/toolbar-controls/invert-bound-type_default.svg) **Invert type**: changes the bound type.
* ![ ](../../images/icons/toolbar-controls/calculate-barchart_default.svg): recalculates the histogram according to the new parameters.
* **Template**: this field is used to configure a template to display bin caption. It is possible to create a user template in it, or select one of ready templates by pressing ![ ](../../images/icons/toolbar-controls/down_default.svg). To apply the template, it is required to press ![ ](../../images/icons/toolbar-controls/apply_default.svg) button.
* **Example**: by pressing this button, it is possible to open the table of symbols used to create a template.

The table with the binning results received for the selected field is located under control elements. It contains the following fields:

* **No** — bin number;
* **Lower** — lower bin bound;
* **Type** — bound type;
* **Upper** — upper bin bound;
* **Caption** — bin caption (it can be set using a template);
* **Volume** enables to display the volume of values included into the bin (it is displayed in the form of a histogram).
