# LDAP

Use of the LDAP authentication enables to log in to the Megaladata server by means of the LDAP server.

> **Note:** Both Active Directory and OpenLDAP can be used as the LDAP server.

## Configure

The LDAP server connection settings are analyzed in [Parameters](./parameters.md#parametry-ldap) subsection of Administration section, change of *Authentication* user method is analyzed in [Users](./users.md) subsection.

## Authentication

The user name and password entered on the Megaladata home page are used for *Authentication*:

1. The current user is searched for by the specified name on the Megaladata server.
2. If the user has been found, and the "LDAP" authentication method has been set for him, or no user has been found, *Authentication* attempt is made using the LDAP server.

> **Notes:**
>
> * In this case, it is not allowed to use the empty username or empty password as such user must get the anonymous access (otherwise, the following error is shown at once: "Invalid username or password").
> * DN, UPN or domain\user formats are not supported and will cause the following error: "Invalid username or password".

*Authentication* of the user is checked in two steps:

1. Search for the account by the entered name in the Base Domain directory (and its subdirectories) matching the LDAP Filter.
   * As a rule, it is checked here that the detected record is the user record, and it is a member of the set group.
2. *Authentication* of this user with full domain name (DN) from the detected account and entered password.
   * If the SASL authentication is used, the entered username is used as login but not the full domain name.

### Auto Adding of User

If the user *Authentication* by means of LDAP is successful, and this user is not included into the list of the Megaladata server users, it is automatically created.

The entered username is used as a name, the "LDAP" authentication method is set, no roles are defined (administrator, developer, reports view, start in the service mode).

### Methods Used to Check Configuration Correctness of the LDAP Server Parameters

To check connection to the LDAP server, it is possible to perform the following actions:

If the user is not in Megaladata:

* Create user by means of the LDAP Authentication method. If the LDAP server connection parameters are incorrectly set, the error message with the name of the added user will appear. Otherwise, the information message will notify that the user has been added:

![Error adding LDAP user to Megaladata.](./ldap-checkup-1.png)

* The automatic authorization is also possible. For this purpose, it is required to enter the username and password of the account available on the LDAP server on the Megaladata home page. If the authorization is successful, connection to the LDAP server from Megaladata has been correctly set.

If the user is in Megaladata:

* It is required to enter the username and password of the account available on the LDAP server on the Megaladata home page. If the authorization is successful, connection to the LDAP server from Megaladata has been correctly set.
