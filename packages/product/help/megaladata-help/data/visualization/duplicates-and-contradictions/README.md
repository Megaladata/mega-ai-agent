---
description: Visualization of duplicates and inconsistencies in data. Detailed guide on the visualizer's interface and operation principles.
---
# ![](./../../images/icons/components/duplicates_default.svg)&nbsp;Duplicates and Inconsistencies

This visualizer is designed to view duplicate and contradictory records of the source dataset. It is available for **Duplicates and Inconsistencies** nodes.

## Interface

After adding the visualizer to a node, the main window will open:

![Main window of the "Duplicates and Inconsistencies" visualizer](./images/1.png)

The main window has two panes:

1. **Toolbar.** The toolbar contains the following controls:
    * ![](./../../images/icons/toolbar-controls/grid-row-no_default.svg)&nbsp;**Row number**: Show/hide the sequential row number.
    * ![](./../../images/icons/toolbar-controls/rec-no_default.svg)&nbsp;**Record number**: Show/hide the record number.
    * ![](./../../images/icons/toolbar-controls/show-data-type_default.svg)&nbsp;**Data types**: Show/hide data types.
    * ![](./../../images/icons/toolbar-controls/multi-headers.svg)&nbsp;**Multiline headers**: Makes long headers wrap around to a new line.
    * ![](./../../images/icons/toolbar-controls/null-count_default.svg)&nbsp;**Show null values**: Show/hide null values.
    * ![](./../../images/icons/toolbar-controls/format_default.svg)&nbsp;**Format**: Open the [settings window]() for data display formatting.
    * ![](./../../images/icons/toolbar-controls/sort-asc_default.svg)&nbsp;**Sort**: Open the [sorting settings window]() for data by columns.
    * ![](./../../images/icons/toolbar-controls/filter_default.svg)&nbsp;**Filter**: Open the [filter settings window.]()
    * **Search**: ![](./../../images/icons/toolbar-controls/zoom_default.svg)&nbsp;Find a value entered in the search field on the left, or ![](./../../images/icons/toolbar-controls/down_default.svg)&nbsp;Open the [search settings]() window.
    * ![](./../../images/icons/toolbar-controls/export_default.svg)&nbsp;**Export**: Export the table to a file of the selected format (XLS or HTML). You can select the format in the dropdown.
    * ![](./../../images/icons/toolbar-controls/toggle-left-panel_default.svg)&nbsp;**Detailing**: Show/hide the details for a table row.

2. **Main table.** The main table provides information about duplicates and inconsistencies in the source dataset.

The main window's context menu mostly repeats the toolbar commands, providing some additional search and navigation options.

For detailed guidance on using the main table and specific commands, please read through the subsections.