# Role-Based User Permissions

The tables below describe access rights and permissions for Megaladata users according to their assigned roles.

|Legend Key|Clarification|
|:-|:-|
|ADMIN|User with the **Administration** role|
|USER|User with the **Workflow design** role|
|VIEWER|User with the **View reports** role|
|SERVICE|User with the **Batch processing** role|
|●|Full access to **Megaladata Studio**|
|○|Available when configured in the user account|

**Access rights and permissions:**

|UI Item/User Action|ADMIN|USER|VIEWER|SERVICE|
|:-|:--:|:--:|:--:|:--:|
|[**Main Menu**](./../../interface/main-menu.md)|●|●|●||
|&nbsp;&nbsp;&nbsp;[**Megaladata**](./../../interface/main-menu.md#menu)|●|●|●||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Home](./../../interface/home-page.md)|●|●|●||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Help|●|●|●||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Ask a question](https://qa.megaladata.com/questions/)|●|●|●||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;About|●|●|●||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Close|●|●|●||
|&nbsp;&nbsp;&nbsp;[Packages](./../../interface/packages.md)||●|●||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;New||●|||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Open||●|●||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Save||●|||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Close||●|●||
|&nbsp;&nbsp;&nbsp;[Navigation](./../../interface/main-menu.md#навигация)|●|●|●||
|&nbsp;&nbsp;&nbsp;[File Storage](./../../interface/main-menu.md#файлы)|●|●|●||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Personal folder|●|●|●|●|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shared folders|○|○|○|○|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Full access|○|○|○|○|
|&nbsp;&nbsp;&nbsp;[Administration](./../README.md)|●||||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Users](./../users.md)|●||||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Shared folders](./../shared-folder.md)|●||||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Parameters](./../parameters.md)|●||||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Session Manager](./../session-manager.md)|●||||
|[Workflow page](./../../interface/workspace.md)||●|||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Components||●|||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add to workflow||●|||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Configure||●|||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Delete from workflow||●|||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Derived components](./../../workflow/derived-component.md)||●|||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Create||●|||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Use||●|||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Connections](./../../integration/connections/README.md)||●|||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Create||●|||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Configure||●|||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Use in workflow||●|||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Delete||●|||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[References](./../../workflow/reference-package.md)||●|||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Modules||●|||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add||●|||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Edit||●|||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Delete||●|||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Configure visisbility||●|||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Publish packages](./../../integration/web-services/README.md)||○|||
|[Visualizers page](./../../visualization/README.md)||●|||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Create and configure||●|||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rename||●|||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Delete||●|||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add to reports||●|||
|[Reports page](./../../report/README.md)||●|●||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Open||●|●||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add group||●|||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rename||●|||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Group||●|||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Move||●|||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Delete||●|||
|[Web services page](./../../integration/web-services/web-services-page.md)||●|||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add||○|||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Update publication||○|||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Edit||○|||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Unpublish||○|||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Refresh list||●|||
|Job Scheduler page||●|||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add||○<sup>1</sup>|||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Edit||●|||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clone||○<sup>1</sup>|||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Run||○<sup>1</sup>|||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Stop||●|||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Delete||●|||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Log||●|||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Refresh list||●|||
|[Variables page](./../../workflow/variables/README.md)||●|●||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[System variables](./../../workflow/variables/default-variables.md#system-variables) (read)||●|||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Session variables](./../../workflow/variables/default-variables.md#session-variables) (read)||●|||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Package variables](./../../workflow/variables/default-variables.md#package-variables) (read)<sup>2</sup>||●|●||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add<sup>3</sup>||●|||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Edit<sup>3</sup>||●|●||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rearrange<sup>3</sup>||●|||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Filter<sup>3</sup>||●|●||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Delete<sup>3</sup>||●|||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[User variables](./../../workflow/variables/default-variables.md#user-package-variables)||●|||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add||●|||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Edit||●|||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rearrange||●|||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Filter||●|||
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Delete||●|||
|[Processes pane](./../../interface/processes-panel.md)||●|●|&nbsp;|

<sup>1</sup> If the user has an additional **Batch processing** role.

<sup>2</sup> For the package's system variables.

<sup>3</sup> For the package's user variables.

**Read on:** [Shared Folders](../shared-folder.md)