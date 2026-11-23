# How to Find Your Megaladata Version

This guide explains how to find the version number for your Megaladata installation. The methods differ slightly between personal and server editions.

> **Version format:** Version numbers typically appear as *X.X.X (version.major.minor)* or *X.X.X.Y (version.major.minor.build)*.

## For personal editions (Community and Personal)

You can find the version using either the Megaladata interface or Windows tools.

### Using the Megaladata interface

1. Start Megaladata  
2. Click the **Megaladata** icon in the top-left corner
3. Select the **About** option  
4. A window will open displaying the version information (e.g., Version: 7.2.6)

### Using Windows tools

There are several ways to find a software version in Windows:

* **File Explorer (hover):**
  1. Open File Explorer and navigate to the Megaladata installation folder (typically `C:\Program Files\Megaladata\Community\megaladata.exe`).  
  2. Hover your mouse cursor over the application file (e.g., `Megaladata.exe`).  
  3. A tooltip will appear showing file details, including the the file version (e.g., 7.2.2.32302). The first three digits indicate your product version.  
* **File Explorer \> Properties:**
  1. Navigate to the application file (e.g., `C:\\Program Files\\Megaladata\\Community\\megaladata.exe`).  
  2. Right-click the file and select **Properties**.  
  3. Go to the **Details** tab.  
  4. Look for the **Product version** or **File version**.  
* **Control Panel:**
  1. Open the Windows **Control Panel** and select **Programs \> Programs and Features**.  
  2. Find **Megaladata** in the list of installed programs.  
  3. Find the version number in the **Product version** field below.
* **Settings:**
  1. Open Windows **Settings** and go to **Apps \> Installed apps**.
  2. Find **Megaladata** in the list of installed programs.
  3. The product version is typically displayed in the X.X.X format below the application name.

## For server editions (Team, Standard, or Enterprise)

### Using the Megaladata web interface

* **Before login:**
  1. Open the Megaladata home page in your web browser.  
  2. The version number (e.g., Megaladata 7.2.5) is displayed in the bottom-left corner of the login screen. 
* **After login:**
  1. Log in to Megaladata.  
  2. Click the **Megaladata** icon (usually top-left).  
  3. Select **About**.  
  4. A window will open displaying the version information.

### Using server OS tools

* You can use the same Windows tools described for personal editions (**File Explorer**—hover, **File Properties**, **Programs and Features**, or **Installed Apps**) directly on the server where Megaladata is installed.  

> **Important note:** You typically need administrator privileges or specific permissions to access the server's file system remotely or directly. The default application path on the server is usually `C:\\Program Files\\Megaladata\\Server\\megaladatad.exe`.

**Read on:** [Workflow Design](../workflow/README.md)