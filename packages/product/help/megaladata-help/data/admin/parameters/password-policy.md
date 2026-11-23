---
description: Learn to set up password policy and requirements in Megaladata Enterprise.
---

# Password Policy

Setting up a password policy is only available in the [Enterprise edition](./../../compare-editions.md#enterprise). Use the parameters in this group to define password requirements for a local account. 

> **Important:** Regardless of the password policy, all passwords must meet the following restrictions:
> - Maximum length: `1024` characters
> - The first and last character cannot be a space.

|Parameter|Default value|Description|
|:-|:-|:-|
|**Policy preset**|`None`|Select the predefined password restrictions from the following options: **None**, **Simple**, **Standard**, **Strong**, **Complete**, and **Custom**.|
|**Minimum password length**|`Unspecified`|Set the minimum number of characters in the password.|
|**Maximum password length**|`Unspecified`|Set the maximum number of characters in the password.|
|**Count of digits**|`Unspecified`|Set the minimum number of digits in the password.|
|**Count of lowercase letters**|`Unspecified`|Set the minimum number of lowercase letters in the password.|
|**Count of uppercase letters**|`Unspecified`|Set the minimum number of uppercase letters in the password.|
|**Count of special characters**|`Unspecified`|Set the minimum number of special characters in the password.|

## Policy preset details

Here is a short description of the available **Policy preset** values:
* **None**: All parameters receive the **Unspecified** value. The system does not apply password restrictions.
* **Simple**: The password must have at least 8 characters.
* **Standard**: The password must have at least 8 characters, 1 digit, 1 lowercase letter, and 1 uppercase letter.
* **Strong**: The password must have at least 10 characters, 1 digit, 1 lowercase letter, 1 uppercase letter, and 1 special character. You can use the following special characters: `!"@$%&/({[]})+-*=?'~#_.,;:<>^\|`.
* **Complete**: The password must have at least 14 characters, 1 digit, 1 lowercase letter, 1 uppercase letter, and 1 special character.
* **Custom**: Add any requirements. The system automatically sets this value when you change any other password policy parameter.

If you attempt to set a password that does not comply with the password policy, the system displays an error message that lists the password restrictions.

> **Note:** Changing password policy restrictions does not affect existing passwords.

**Read on:** [Logging Parameters](.logging.md)