# Configuring Locale

The *locale* (i.e., regional settings) determines the platform's language and formats such as numbers and date/time. For example, for a Megaladata server that runs on Windows, the platform uses the system's language and regional settings.

> **Note:** To see or update these Windows settings, go to: **Control Panel** > **Clock and Region** > **Region**.

In desktop Megaladata editions, the locale is automatically set to match the user's regional settings. In server editions, it will match the locale of the user currently logged in to Megaladata.

## Configuring the server/application locale

To set up or change the locale of the server or desktop Megaladata version, go to **Administration** in the main menu (the vertical pane on the left). Enter **Parameters**. By default, the **Locale** parameter is set as "unspecified", with the system's locale shown in brackets. If you set a new locale, the change will only apply after restarting your server or desktop Megaladata.

> **Note:** The application's **Quick views** (visualizers) and editors (fields with user-set values) use your browser's locale.

## Package locale

A new package automatically inherits the locale from the Megaladata desktop or server application where it is created.

To change a package's locale, go to **Packages** (via **Navigation** or the address bar), select the necessary package, and open **Properties** (on the toolbar). The change will apply after closing the package and all its depending packages that might be currently open. For a newly created package, the change will apply immediately.

> **Important note:** If you change the locale, the functioning of some nodes (e.g., [Sorting](../processors/transformation/sorting.md), or [Text File](../integration/export/txt-csv.md) export node) may change as well.

## Node locale

The locale of a derived node matches its base node's locale.

**Read on:** [References to Other Packages](reference-package.md)