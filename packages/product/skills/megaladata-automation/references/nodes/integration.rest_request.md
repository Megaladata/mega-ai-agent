# REST request (`integration.rest_request`)

<!-- mode: request -->
## Error-code descriptions

`produce_error_descriptions:false` removes ErrorDesc from port 1;
RequestID, ErrorCode, and HttpStatusCode (integer) remain. true brings it back;
omitting it keeps the current value. Readback is the observed flag. Export port 1 itself.

## Simulation

Deliver the file; use its server path:
`simulation:{enabled:true,file_path:"/own-folder/response.json"}`.
Pass connection, query_parameters:[], inputs:[], finish:"execute".
GET without a table: one response. The same node: change the file;
enabled:false turns it off, and omitting simulation keeps it.
Readback is enabled/file_path from the UI.

## Method and body

dock_node_apply: target.type integration.rest_request, mode request, finish execute.
connection: name/base_url/method; different methods need different connection names.
POST/PUT/PATCH: request_content_type application/json, text/plain, or application/xml;
body_field is an observed string field of input 0.
Body: the original UTF-8, without URL-encoding; body_field cannot also be linked to query.
DELETE forbids body_field/request_content_type. inputs: the source, including when
query_parameters:[]; one request per row. Query and Body are compatible; only query is encoded.
Raw responses: import → REST → export 0 (RequestID, Response), without JSON parsing
or adding the method. Port 1 is statuses; RequestID on both is the zero-based row index.
Read, export, and save the package.
parameters:{} on an existing node keeps the settings.

## Headers

headers:[{name:"X-Lab-Cycle",value:"first"}] replaces the whole list;
omitting it keeps the list, and [] clears it. Names are unique (case-insensitive);
CR/LF and secrets are forbidden.
value:{variable:"Cycle"}: a string variable that is not NULL, through
variable_inputs:[{kind:"variables",input:0,source,output}].
Execute the source, and the name comes after mapping; the Var input is not inputs[0] Body.
Cycle comes from variables.user or variables.calculator. Change only Cycle, then rerun the same REST:
parameters:{}, inputs:[], variable_inputs:[], mappings:[], finish execute.
The binding reads Cycle without editing the request; do not substitute a literal.
A literal: the same REST, the previous connection/query_parameters/body_field/inputs,
the new headers, finish execute. httpbin: Response.headers["X-Lab-Cycle"], body Response.data.
Join the response, the original RequestId, and port1.HttpStatusCode by the rule below;
export the second result and save the package.

## GET and responses

connection.response_content_type: application/json, text/html, text/plain, */* is
an allowed response MIME type. Response is a string; the request Content-Type may have charset=UTF-8.
GET without query: query_parameters:[], inputs:[], finish execute; no table and no URL encoder.
Query: string or integer (±9007199254740991); no real/boolean. Bind integer
limit/skip from variables.to_table directly; the handler URL-encodes the query. Body: string only.
Keep JSON types: httpbin args.limit/skip echo as strings even with integer inputs;
no coercion unless requested.
Status and errors: read.ports:[1] is HttpStatusCode/ErrorCode/ErrorDesc; port 0 is the body and parsing.
200 is not the body; limit select, limit/skip according to the API, without gzip.
An empty Response: port 1; ErrorCode ≠ 0 → REST_RESPONSE_BODY_MISSING:
"response body was not received: repeat the request or reduce the response (select, limit/skip)".
An empty result is not success; repeat only when asked.
A table: Calculator → Collapse → Cross-table.
A tree: only when asked, or for flat records without nested containers.

## Joining and finishing

When the relation is 1:1, the source order is kept, and RequestID[i]=i on both ports,
use one transform.col_union_data (Column union) instead of Join plus Attach:
inputs 0=response, 1=status, 2=source row;
parameters:{col_union:{row_count:"maximum",padding:"null"}}. Take names from the context; do not guess suffixes.
In the parse, compare RequestID; fields, order, and types follow the task.
Without a proved 1:1 or the same result, use Join on RequestID.
When every required Export and Save is confirmed, give the final answer immediately.
file_artifacts confirms the CSV; do not glob or walk folders.
<!-- /mode -->
