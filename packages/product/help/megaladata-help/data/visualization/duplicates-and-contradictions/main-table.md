# Main Table

The visualizer's main table highlights duplicates and inconsistencies in the source dataset:

![Duplicates and inconsistencies in the main table](./images/dupes-table.png)

> **Note:** When you launch the visualizer for the first time, the **Duplicates** and **Inconsistencies** columns are hidden. To see them, click the ![](./../../images/icons/toolbar-controls/down_default.svg)&nbsp;**Show options** button next to any column's header and use the ![](./../../images/icons/grid/columns.svg)&nbsp;**Columns** command, marking the corresponding boxes.

## Color indication

The colors in the table indicate the following:
- ![](./images/duplicates-color.png)&nbsp;Duplicate record
- ![](./images/contradictions-color.png)&nbsp;Inconsistency
- ![](./images/duplicates-contradictions-color.png)&nbsp;Duplicate and inconsistency

The headers of the columns: **Duplicate**, **Duplicate group**, **Inconsistency**, and **Inconsistency group** are highlighted with the same color as the corresponding records.

The headers of the columns selected as input and output are highlighted with bold font and color indicators:
- ![](./images/input-color.png)&nbsp;green underscore for the *input* fields
- ![](./images/output-color.png)&nbsp;orange overline for the *output* fields

![Input and output highlighting](./images/input-output-highlight.png)

## Highlighting inconsistencies

When you select a row that contains an inconsistency, other inconsistencies from the same group, different from the selected one, will be framed in red (only the first difference is considered):

![Highlighting an inconsistency group](./images/inconsistency-highlight.png)

## Navigation

Navigate the table using the buttons at the bottom:
- ![](./../../images/icons/toolbar-controls/next_default.svg)&nbsp;**Move to the next page**
- ![](./../../images/icons/toolbar-controls/prev_default.svg)&nbsp;**Move to the previous page**
- ![](./../../images/icons/toolbar-controls/last_default.svg)&nbsp;**Move to the last page**
- ![](./../../images/icons/toolbar-controls/first_default.svg)&nbsp;**Move to the first page**

To move to a specific page, enter its number to the field between the navigation buttons. One page displays 1 000 000 records.

### Keyboard shortcuts
- <kbd>CTRL</kbd> + <kbd>Left</kbd>: move to the previous page
- <kbd>CTRL</kbd> + <kbd>Right</kbd>: move to the next page
- <kbd>Alt</kbd> + <kbd>1</kbd>– <kbd>Alt</kbd> + <kbd>8</kbd>: move to page number 1–8
- <kbd>CTRL</kbd> + <kbd>G</kbd>: go to a specific row (opens the window to enter the row number)
- <kbd>CTRL</kbd> + <kbd>F</kbd>: find the selected value
- <kbd>F3</kbd>: go to the next found value
- <kbd>Home</kbd>: go to the first cell in the current row
- <kbd>Alt</kbd> + <kbd>Home</kbd>: go to the first cell in the current column
- <kbd>End</kbd>: go to the last cell in the current row
- <kbd>Alt</kbd> + <kbd>End</kbd>: go to the last cell in the current column
- <kbd>CTRL</kbd> + <kbd>Up</kbd>: in **Detailing**, move the current row one position up
- <kbd>CTRL</kbd> + <kbd>Down</kbd>: in **Detailing**, move the current row one position down

## Additional info

The first two table columns are:
- **#**: Row number
- **No**: Record number (hidden by default). This may be helpful if you need to apply filters, sorting, or other operations that change record order.

Clicking the column headers automatically applies different types of sorting to the column. (The type icon appears next to the header.)

To copy a cell value, use <kbd>CTRL</kbd> + <kbd>C</kbd>.

The ![](./../../images/icons/toolbar-controls/down_default.svg)&nbsp;**Show options** button next to each column header opens a dropdown menu with additional commands:
- ![](./../../images/icons/grid/columns.svg)&nbsp;**Columns**: opens the list of columns where you can select which columns will be displayed.
- ![](./../../images/icons/grid/hmenu-lock.svg)&nbsp;**Lock**: pins the column on the left of the table
- ![](./../../images/icons/grid/hmenu-unlock.svg)&nbsp;**Unlock**: unpins the column

To rearrange columns manually, you can drag and drop their captions within the table header. 

**Read on:** [Filter](.filter.md)