# Log Entry Format

Each line in the log file contains a message in the following format:

`yyyy-mm-ddThh:mm:ss.mss level GUID (process:thread>[user:session[:requestID]]) — message[textJSON]`,

where:

* `yyyy-mm-ddThh:mm:ss.mss`: Date and time with millisecond precision. The `T` character separates the date and time.
* `level`: Logging level
* `GUID`: Unique message identifier in lowercase without braces or hyphens
* `process`: Executable file name
* `thread`: Thread identifier
* `user`: Name of the user who started the process. This optional parameter can be absent if the logged action occurs outside a user session.
* `session`: Session identifier. This optional parameter is absent if the `user` parameter is absent.
* `requestID`: Request identifier. This optional parameter is present if an external service started the process.
* `message`: Message text
* `textJSON`: Parameters in JSON format. This part is optional.

The `textJSON` object can contain parameters in the `"key": "value"` format:

* `CLIENT_IP`: User's IP address
* `CLIENT_HOST`: User's domain name. This optional parameter is required when you use an external IP address to identify the user. It is disabled by default.
* `COLUMN_NAME`: Column name
* `COLUMN_CAPTION`: Column caption
* `COMPONENT`: Name of the server component whose parameter you changed in [**Administration**](./../../README.md): **LDAP**, [OpenID](../openid.md), **Logging**, **Python**, or [Program execution](../execution.md).
* `ERROR_MESSAGE`: Error message text
* `ELEMENT_GUID`, `ELEMENT_NAME`, `ELEMENT_ID`: Parameters that identify configuration elements
* `EXCEPTION`: Exception text
* `ExceptionClass`: Exception class
* `ExceptionType`: Exception type: `Error`, `Warning`, or `Hint`
* `HEADERS`: List of HTTP headers for the user's current browser session
* `NAME`: Name of the parameter changed in **Administration**
* `NEW_VALUE`: New value of the parameter changed in **Administration**
* `NODE_GUID`: Node GUID
* `NODE_CAPTION`: Node caption
* `Message`: Message text
* `PACKAGE_FILE`/`PACKAGE_NAME`: Parameters that identify the package
* `PROCESS_CAPTION`, `PROCESS_NAME`, `DIM_CAPTION`, `DIM_NAME`: Parameters that identify the process
* `PROP_NAME`: Account parameter name
* `PROP_VALUE`: Account parameter value
* `REASON`: Login error message text
* `ROW_NUM`, `ROW`, `LINE`: Number of the data row associated with the message. Numbering starts at 0 for `ROW_NUM` and at 1 for `ROW` and `LINE`.
* `SESSION_TYPE`, `SESSION_NAME`: Parameters that identify the session
* `Sender`: Exception sender class
* `StackTrace`: Exception call stack
* `USER_NAME`, `GROUP_NAME`: User or group name
* `VERSION`: Megaladata version

When logging to `journald`, the system records information as a parameter name and value pair.

The `journald` parameter list includes:
*   Standard fields reserved for `journald`:
    *   `MESSAGE_ID`: Required message identifier
    *   `MESSAGE`: Message text
    *   `PRIORITY`: Message priority
*   Standard fields for a Megaladata message:
    *   `USER`: User name
    *   `SESSION_ID`: Session identifier
    *   `REQUEST_ID`: Identifier of the request that produced the message. This optional parameter is present if an external service started the process.
*   Fields for a Megaladata exception message:
    *   `Exception`: Exception text
    *   `EXCEPTION_CLASS`: Exception class
    *   `STACK_TRACE`: Exception call stack
    *   `EXCEPTION_TYPE`: Exception type: `Error`, `Warning`, or `Hint`
    *   `SENDER`: Exception sender class
*   Other parameters:
    *   `COLUMN_NAME`: Field name
    *   `COLUMN_CAPTION`: Field caption
    *   `USER_NAME`: User name
    *   `GROUP_NAME`: Group name
    *   `ROW_NUM`: Number of the data row associated with the message. Numbering starts at *0*.
    *   `ERROR_MESSAGE`: Error message text
    *   `ELEMENT_GUID`, `ELEMENT_NAME`, `ELEMENT_ID`: Identifiers of configuration elements
    *   `PACKAGE_FILE`, `PACKAGE_NAME`: Identifiers of the package
    *   `SESSION_TYPE`, `SESSION_NAME`: Identifiers of the session
    *   `PROCESS_CAPTION`, `PROCESS_NAME`, `DIM_CAPTION`, `DIM_NAME`: Identifiers of the process
    *   `NODE_CAPTION`, `NODE_GUID`: Identifiers of the workflow node

%spoiler%Example of a file log entry%spoiler%

```json
2025-06-24T15:51:41.100 info 62daaab383b6e040b3e7f113bfd48cc1 (megaladatad.exe:6956>user:26) - Initialized session for user user
{"USER_NAME": "user", 
"SESSION_TYPE": "Interactive session", 
"CLIENT_IP": "127.0.0.1", 
"HEADERS": "{host=localhost:8080,connection=Upgrade,pragma=no-cache,cache-control=no-cache,\"user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 OPR/119.0.0.0\",upgrade=websocket,origin=http://localhost,sec-websocket-version=13,\"accept-encoding=gzip, deflate, br, zstd\",\"accept-language=ru,en-US;q=0.9,en;q=0.8,ru-RU;q=0.7\",sec-websocket-key=Tp7wqmeSRi9BFO60AN5kSg==,\"sec-websocket-extensions=permessage-deflate; client_max_window_bits\"}"}

2025-06-24T15:52:21.813 info 61cd3695e5dc384f99172926c3eead51 (megaladatad.exe:6956>user:26) - Closed session for user user{"USER_NAME": "user", "CLIENT_IP": "127.0.0.1"}

2025-06-24T15:52:11.706 debug 9e9522e2e3f0144584b037907fede1b8 (megaladatad.exe:12832>user:26) - Activate node "Text File" GUID={B44FB31C-DBF9-4643-A466-A856D903D59B} Package=test{"NODE_CAPTION": "Text File", "NODE_GUID": "{B44FB31C-DBF9-4643-A466-A856D903D59B}", "PACKAGE_NAME": "test"}

2025-06-18T12:09:06.020 error 9c6c3b27939a424fa9b7a12b5a1d275f (megaladata.exe:6532>user:22) - Failed to load some configuration elements

```

%/spoiler%

%spoiler%Example of a journald log entry%spoiler%

Use the standard `journalctl` command to view `journald` logs. For example, run it with the following parameters:

`sudo journalctl -xe | grep megaladata`

```json
Jun 25 10:20:11 astra megaladatad[563]: Initialized session for user user
Jun 25 10:20:16 astra megaladatad[563]: "/user/Package1.mgp" package opened in the edit mode
Jun 25 10:20:36 astra megaladatad[563]: Activating "Variables to Table" GUID={6A5BF7B5-91CB-47EA-A0BC-06F29C63B681} node
Jun 25 10:20:36 astra megaladatad[563]: Successfully activated "Variables to Table" GUID={6A5BF7B5-91CB-47EA-A0BC-06F29C63B681} node
Jun 25 10:20:58 astra megaladatad[563]: Calculating expression "Expression1" resulted in a string value, which is incompatible with the set Real data type
Jun 25 10:21:00 astra megaladatad[563]: Activating "Calculator" GUID={8A54DC3C-1B60-47B0-9F44-49C22FE5AE79} node
Jun 25 10:21:00 astra megaladatad[563]: Error activating "Calculator" node, GUID={8A54DC3C-1B60-47B0-9F44-49C22FE5AE79}
Jun 25 10:21:06 astra megaladatad[563]: "Calculator" GUID={8A54DC3C-1B60-47B0-9F44-49C22FE5AE79} node deactivated
Jun 25 10:21:08 astra megaladatad[563]: "/user/Package1.mgp" package saved
Jun 25 10:21:10 astra megaladatad[563]: "/user/Package1.mgp" package closed
Jun 25 10:21:13 astra megaladatad[563]: Closed session for user user
Jun 25 10:45:06 astra megaladatad[563]: Initialized session for admin user
Jun 25 10:50:16 astra megaladatad[563]: Server parameter "Client connection check period" changed
Jun 25 10:50:41 astra megaladatad[563]: Server component parameter Python:"Execution forbidden" changed
Jun 25 10:51:27 astra megaladatad[563]: Closed session for admin user

 ```

%/spoiler%

> **Note:** The system uses UTF-8 encoding.