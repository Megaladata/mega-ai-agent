---
description: Global functions and their descriptions in Megaladata's JavaScript component.
---

# ![](../../../images/icons/components/javascript_default.svg)&nbsp;Global Functions

You can use these global functions in your JS scripts.

## setTimeout

`function setTimeout(callback, delay, ...args)`

* `callback`: The function to be executed. Type: `function`.
* `delay`: The delay in milliseconds before the callback function is called. Type: `number`.
* `args`: Arguments passed to the callback function. This is an optional parameter.

The functions allows you to call a function once in a certain time interval. Returns the timeout ID.

## clearTimeout  

`function clearTimeout(timeoutID)`  

* `timeoutID`: The identifier of the timeout you want to clear. Type: `number`.

Disables a timeout set by a call to `setTimeout`.

## btoa

`function btoa(text, encoding)`  

* `text`: The string to be encoded. Type: `string`.
* `encoding`: An optional parameter that can take a single value `utf-8`, which means that the string will be encoded into Base64 in UTF-8 encoding. If the argument is not specified or set as `undefined`, the string will be encoded into Base64 in latin1 encoding. Type: `string`.

The function creates a Base64-encoded ASCII string from a "string" of binary data. Returns the encoded string.

## atob

`function atob(text, encoding)`  

* `text`: The string to be decoded. Type: `string`.
* `encoding`: An optional parameter that can take the single value `utf-8`, which means that the string was encoded in Base64 from a UTF-8 encoded string. If the argument is not specified or is `undefined`, it means that the string was encoded in Base64 from a latin1-encoded string. Type: `string`.

Decodes a string that has been encoded using Base64. Returns the decoded string.

## getLocale

`function getLocale()`

Returns the name of the current node's [locale](./../../../workflow/locale.md) in [BCP 47](https://402.ecma-international.org/#sec-language-tags) format. The function takes no arguments.

**Read on:** [JS: Enumerations](enum.md)