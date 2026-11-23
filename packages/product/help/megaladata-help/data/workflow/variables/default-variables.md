# Predefined Variables

Predefined variables offer information about the context in which certain Megaladata elements operate.

## System variables

| Name | Description | Value Example |
| :---- | :---- | :---- |
| `ProductEdition` | The Megaladata edition used  | `Enterprise` |
| `ProductVersion` | Version of the platform used | `7.2.5` |

> **Note:** In case of conflicting with the OS variables' names, the priority is given to the Megaladata version and edition variables.

## Package variables

Package variables are mainly used when employing [derived components](../derived-component.md). They provide details about the Megaladata package in which a derived component was created and the package where it is currently being used.

### Original package variables

These variables describe the original package of the derived component:

| Name | Description | Value Example |
| :---- | :---- | :---- |
| `PackageName` | Name of the package  | `FunctionLibrary` |
| `PackageVersion` | Version of the package | `1.0.0` |
| `PackageGuid` | Unique identifier for the package | `{D9AD3962-94A5-4CE0-8909-64D0747B0E9C}` |
| `PackageFileName` | Package file name with the path | /`user/ProjectName/scripts/FunctionLibrary.mgp` |
| `PackageFilePath` | Path to the package file | `/user/ProjectName/scripts/` |

### Usage package variables

These variables describe the package that is currently utilizing the derived component:

| Name | Description | Value Example |
| :---- | :---- | :---- |
| `DerivedPackageName` | Name of the usage package | `main` |
| `DerivedPackageVersion` | Version of the usage package | `1.0.0` |
| `DerivedPackageGuid` | Unique identifier for the usage package | `{38A56938-93B6-4981-A5DA-70053DB575EE}` |
| `DerivedPackageFileName` | Usage package file name with the path | `/user/ProjectName/scripts/main.mgp` |
| `DerivedPackageFilePath` | Path to the usage package file | `/user/ProjectName/scripts/` |

### Session variables

Session variables provide information about the current user session in Megaladata.

| Name | Description | Value Example |
| :---- | :---- | :---- |
| `UserName`| Login name of the user who opened the current workflow | `user` |
| `SessionGuid` | Unique identifier for the current Megaladata server session | `{AA037666-56F9-4B06-AE6F-AE3E2E00052F}` |
| `RequestId` | Unique identifier of the request executed via the Integrator | `{79341b90d0274ff496c2dbf5600b7ac6}` |

> **Note:** All predefined variables are of string [data type](../../data/datatype.md).

**Read on:** [Derived Components](../derived-component.md)