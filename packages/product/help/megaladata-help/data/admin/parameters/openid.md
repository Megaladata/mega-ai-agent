# OpenID Parameters

Use these parameters to configure user authentication under the OpenID standard (available only in the **Enterprise** edition).

|Parameter|Default value|Description|
|:-|:-|:-|
| **Login button caption** | `OpenID` | Text displayed on the **Login with...** button. |
| **Client URL** | `Unspecified` | Address that receives the response during the OpenID connection. |
| **Client ID** | `Unspecified` | Unique name that identifies the user in the system. |
| **Client secret** | `Unspecified` | Key value if the provider requires it. If you do not set the key, the system does not use it. |
| **Authentication endpoint** | `Unspecified` | URL that accepts OpenID authentication requests. |
| **Token endpoint** | `Unspecified` | URL that the system uses to request the authorization token. |
| **User information endpoint** | `Unspecified` | URL that the system uses to request the username. |
| **Scope** | `openid profile` | A set of claims grouped under a common name. |
| **Retrieve username from token** | `false` | Use this parameter to specify the source of the username. Set it to `true` if your OpenID authentication provider cannot return the username from the user information, and instead passes it as a claim in the access token. An example of such a provider is ADFS (Active Directory Federation Services). |
| **Username claim** | `preferred_username` | The user login value. |
| **Full username claim** |`name`| Claim whose value the system uses for the **Full username** property on the [Users](./../../admin/users.md) page. |
| **New user role** | `None` | If you do not specify **Role list claim**, use this parameter to set the new user role. |
| **Role list claim** | `Unspecified` | The value of this claim is an array of role names in the following format: `["role1", "role2", ...]` (each value in quotation marks; comma separator). The system assigns the matching role to the user according to the **List of role names** setting. |
| **List of role names** | `No role mapping` | List of roles retrieved from the access token. The system uses it to assign user roles in the application. If the value is empty, and **Role list claim** is set, the system assigns no role to the user. |
| **Claims extracted to variables** | `No extractable claims` |  Comma-separated list of claims whose values the system passes to workflows on the **Session variables** port (see [Workflow Variables](./../../workflow/variables/workflow-variables.md#workflow-variables)). |
| **Claim of the list of shared folders** | `No folder permissions mapping` | The value of this claim is an array of names of shared directories that the user may access. The system restricts access rights to all shared directories whose names are not in the list retrieved from the token. If you leave this value empty, the system does not assign any access rights to shared folders automatically. |
| **Automatic reception of token** |`false`| When set to `true`, the system immediately redirects the user to the external login page, without requiring the user to first click **Login with OpenID** on the [login page](./../../interface/login-page.md). |
| **Update full username** |`false`| If set to `true`, the system retrieves the full username from the received access token on every user connection, and sets it in the user description. If `false`, the system retrieves the full username from the access token on the first connection and keeps it unchanged. |
| **Update user role** |`true`| The system retrieves all permissions (the user role and access to shared folders) from the token only when you add a new user. If the user has logged in before, the permissions remain unchanged. The administrator can change them manually. If this setting is enabled (default), the system updates the user rights on every connection, not only on the first one. |
| **Allow login for users without roles** |`false`| Set this to `true` to let users with no assigned roles log in. |
| **Response format**| `Fragment parameters` | The system uses this setting when building the authentication request and parsing the response after successful authentication. Two configuration modes are available. The `Query parameters` option places the OpenID provider's response parameters after `?` in the address bar. `Fragment parameters` places them after `#` instead. | 
| **Do not check server certificate** | `false` | The parameter defines whether the system must verify the server certificate. By default, the system performs the verification. |
| **Authentication testing** | **Test** button | Click the button (or press <kbd>Enter</kbd> while you are in the parameter cell) to open the external authentication page in the browser. After successful authentication, the page closes, and a window with the OpenID testing results opens on the OpenID settings page. The results include all authentication stages: from exchanging the code for a token to receiving the values of the configured claims. |
