---
description: Learn more about scheduled start specifics, such as handling very short intervals or daylight saving time changes.
---

# Date and Time Handling Specifics

In some cases, the exact start time of a scheduled job may vary. For example, if the CPU has a heavy load, jobs may start slightly later. If you set a very short start interval, for example, less than one second, the scheduler may skip some scheduled starts.

When setting up jobs, specify the start time according to the [Megaladata Server](../../components-platform.md#server) time zone.

## Hour change

The system accounts for daylight saving time changes in countries or regions that use them. For example, if you set the start interval as `1 hour`, the job may run 23 or 25 times in a day because of a clock change. If the start interval is `1 day`, the day of the clock change may last 23 or 25 hours.

Here is how the system handles cases when the scheduled start time coincides with the clock change:
- If the scheduled start falls on the "skipped" hour, the scheduler starts the job at the time of the clock change. For example, if you schedule the start for `02:30:00` and the clock changes from 02:00:00 to 03:00:00, the scheduler starts the job at **03:00:00**.
- If you schedule a start for the "duplicated" hour during the change from daylight saving time to standard time, the scheduler starts the job only once, before the clock change.

## Handling non-existing days

Sometimes, the schedule may happen to include days that do not exist, for example, "February 30". Consider these situations:
- If you schedule the first start for `January 30` and the start interval is `1 month`, the next start will occur on **February 28, then March 30**, and so on.
- If the start interval is `1 day` and you set only the 30th day in the **Days of the month** filter, the scheduler **does not start** the job in February.

**Read on:** [File Storage](../../location_user_files.md)