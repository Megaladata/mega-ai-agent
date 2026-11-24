# Excel file (`exports.excel`)

<!-- mode: xlsx -->
To export Excel, choose `dock_node_apply`, `target.type:"exports.excel"`,
`mode:"xlsx"`, one table input 0, and `parameters.excel_export`:
`destination` is an `.xlsx` in the selected export directory; `sheet_name` is the sheet name;
`header:"none"|"names"|"labels"`; `overwrite:"reject"` for a new workbook.
A new node requires the path, sheet, header, and overwrite. Instead of a literal
path or sheet you can set `bindings:{destination:{variable:"ExcelPath"},
sheet_name:{variable:"SheetName"}}` inside `excel_export`; omit the bound literals.
The source is an executed Variable Calculator with the strings ExcelPath and SheetName.
Connect `variable_inputs:[{source:<its ref>,output:0,input:0,kind:"variables"}]`.
After changing only the values, execute the same Calculator, then the same Export
with `parameters:{}`: the saved bindings take the new path and sheet values.
Do not create a second Export and do not substitute literals for the variables.
For a numeric display that does not round the stored numbers, set
`number_format:"numeric",decimal_count:2,divide_thousands:true` — the style `#,##0.00`.
This is an exporter setting: do not round the source table with Calculator or JS.
Other choices: `number_format:"general"`, 0…30 decimal places, thousands separator false.
`overwrite:"replace"` is allowed only with the user's explicit consent to replace
the whole workbook: every previous sheet is deleted. Append and replacing one sheet are unavailable.
`finish:"execute"`, `read:{ports:[],sample_rows:0,require_exact_numbers:false}`
return `output.file_artifacts`: the workbook export receipt. XLSX is binary:
do not open it with a text `read`. Check the data through the source output port,
and the export through the receipt (destination, bytes, sha256). Tell the user
the `destination` in Megaladata storage; the local runtime cache is not a
Download link. Keep the types and order
of the source rows and fields. Omitted settings of an existing node are kept;
an omitted overwrite means reject. `done` saves the settings without exporting,
`close` cancels the draft. Save the package separately.

<!-- /mode -->

<!-- mode: xls -->
XLS is unavailable; use XLSX.
<!-- /mode -->
