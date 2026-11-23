# ![Calculated Measure](../../images/icons/cube/cases/case-calc_default.svg) Calculated Measure

It enables to add one's own measure to the cube. It is calculated on the basis of the dimensions and measures used in the Cube and filtration area.

It is required to set the following parameters:

* **Name**: the identifier that can be used in formulas of other calculated measures.
* **Caption**: the row under which the measure will be visible in the cube and chart.
* **Data type**: the data type of the calculated expression.
* **Aggregation caption**: the sign for the calculated expression.

The configuration window of the calculated measure is represented on Figure 1, and it is conventionally divided into 3 areas.

![Configuration window of the calculated measure](./cube-calculating-fact.png)

## 1. The Expression Entry Area

The expression calculation formula is set in the entry area. It is possible to insert references to dimensions, measures and syntactic constructions of functions into the expression code by double clicking on them in the corresponding areas or by manual writing.

The expression formula can contain the following components:

* references to the used cube dimensions and measures in the form of dimensions and measures names;
* aggregation options of dimensions and measures;
* brackets defining the order of operations execution;
* characters of mathematical operations and relations;
* logical operations (AND, OR, NOT, XOR) and values (TRUE or FALSE);
* functions according to the syntactic description (List of functions);
* string expressions in quotation marks ("string expression");
* integer and real numbers;
* single-line and multi-line comments.

The single-line comment starts from `//` (two slashes) characters, and it continues until the end of the string. The multi-line comment is represented by all characters included between `/*` (slash-asterisk) and `*/` (asterisk-slash).

> **Important:** If the calculated measure expression is incorrect, all its cells consist of missing values. It is also not allowed to use the recursive calls to measures in the expression.

## 2. List of Dimensions and Measures

The area contains the list of dimensions and measures that can be used in the calculated measures.

Double click on the position of the dimensions and measures tree enables to enter the dimension or measure name with the selected aggregation function to the expression entry area. The same actions can be done by manual writing the dimension or measure name in the entry area.

The new measure is created on the basis of the existing measures and dimensions using some functions and derived variables from dimensions values:

* **Value** (*Dimension name.Value*): dimension value. It is possible to omit the dimension function name. In this case, the Value function will be used by default, namely, *Dimension name* = *Dimension name.Value*.
* **Count** (*Dimension name.Count*): count of the unique values of dimensions.
* **Total** (*Dimension name.IsTotal*): check whether the dimension value is total. The variable is used with *IF()/IFF()* functions for modification of the calculated measure values in the total cells.
* **Null** (*Dimension name.IsNull*): check whether the dimension value is the null value.

And on methods of measures aggregation:

* **Sum** (*Measure name.Sum* ): the sum of all measures values.
* **Count** (*Measure name.Count* ): the count of all measures values.
* **Average** (*Measure name.Avg* ): the average value of all measures values.
* **Minimum** (*Measure name.Min* ): the least value from all measures values.
* **Maximum** (*Measure name.Max* ): the highest value from all measures values.
* **Standard deviation** (*Measure name.StdDev* ): the standard deviation of measures values.
* **Sum of squares** (*Measure name.SumSq* ): the sum of squares of all measures values.
* **Count of unique** (*Measure name.UniqueCount* ): count of the unique measure values.
* **Null count** (*Measure name.NullCount* ): count of the null values of measure.
* **First** (*Measure name.First* ): the first measure value in the list.
* **Last** (*Measure name.Last* ): the last measure value in the list.

Access is provided to the total values for each dimension **Total** (*Measure name.Sum.Total.Dimension name*) in each of the aggregation methods.

> **Note:** Only used measures and dimensions will be available in the list. The dimensions that have not been transferred to rows, columns or filtration area will not be available in the list.

## 3. List of Functions

The area contains the name, input arguments and description of the [functions available for use](../../processors/func/calc-func/README.md).

It is possible to filter by the function category and name.

Double click on the position of the selected function enables to enter its syntax to the expression code area. The same operations can be done by dragging function from the list to the code area (Drag-and-Drop).
