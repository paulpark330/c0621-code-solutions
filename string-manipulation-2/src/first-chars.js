/* exported firstChars */

//  EDGE CASES

//  Empty string
//  First argument value is greater than the length property of the second value

// PSEUDOCODE

//  Storage for new string value returned from function
//  IF second argument is falsy
//    Return empty string
//  IF first argument value is greater than the length property of the second value
//    Return argument
//  Store length amount of characters in new string
//  Return new string

function firstChars(length, string) {
  var newString = '';
  if (!string) {
    return '';
  }
  if (length > string.length) {
    return string;
  }
  newString = string.slice(0, length);
  return newString;
}
