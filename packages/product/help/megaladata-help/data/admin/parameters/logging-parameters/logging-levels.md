---
description: Logging actions in Megaladata. Log entry format. Logging levels. Handling errors and finding information about problems, critical errors, and failures.
---

# Logging Levels

The **Logging level** parameter controls which application actions the system records based on the required level of detail. Selecting a more detailed logging level increases both detail and memory usage.

The system does not record messages from more detailed levels than the one you select.  

|Logging level|Included levels|
|:---------|:--------|
|**Trace**|Fatal, Error, Warning, Event, Info, Debug, Trace|
|**Debug**|Fatal, Error, Warning, Event, Info, Debug|
|**Info**|Fatal, Error, Warning, Event, Info|
|**Event**|Fatal, Error, Warning, Event|
|**Warning**|Fatal, Error, Warning|
|**Error**|Fatal, Error|
|**Fatal**|Fatal|

The system uses the **Info** level by default. This level provides enough detail for basic use. Note that more detailed levels may slow down the application.  

## Logging level descriptions

|Logging level|Logged actions|
|:---------|:--------|
|**Fatal**|Select this level to log errors that cause the server to fail.|
|**Error**|Select this level to log all errors except frequent errors, such as type conversion errors in the **Calculator**.|
|**Warning**|Select this level to log warnings about configuration problems that occur when loading or copying and pasting nodes, nonexistent or extra columns during column synchronization, and **Calculator** errors. This level also logs errors that provide information about an unexpected event and messages about failed user connection attempts.|
|**Event**|Select this level to log opening, closing, and saving packages; setting package versions; and converting packages from older versions.|
|**Info**|Select this level to log opening and closing user sessions; actions with sessions and packages in **Session Manager** (such as closing packages and sessions); changing users by adding, deleting, or moving them between groups through **Administration**; adding or deleting shared folders; messages from the memory manager; and errors that occur when updating columns in the **Table** and **Statistics** visualizers.|
|**Debug**|Select this level to log node activation and deactivation and type conversion errors for `variant` variables in the **Calculator**.|
|**Trace**|Select this level to log all operations. For example: model selection when training an **ARIMAX** node.|

Use the **Trace** level primarily when debugging a process. The **Info** level provides enough detail for normal use.