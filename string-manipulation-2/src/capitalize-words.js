/* exported capitalizeWords */

//  EDGE CASES

//  Last character is a space
//  First character is a space
//  Multiple consecutive spaces
//  Argument is an empty string

//  PSEUDOCODE

//  Storage for new string
//  Lowercase entire string
//  IF the argument is not true
//    RETURN empty string
//  Uppercase first character of string and add it to new string
//  Go through every character starting from second character
//    IF character before the current character is a space
//      Uppercase the character and add it to new string
//    ELSE otherwise
//      Add character to new string
//  Give back new string

function capitalizeWords(string) {
  var newString = '';
  string = string.toLowerCase();
  if (!string) {
    return '';
  }
  newString += string[0].toUpperCase();
  for (let i = 1; i < string.length; i++) {
    if (string[i - 1] === ' ') {
      newString += string[i].toUpperCase();
    } else {
      newString += string[i];
    }
  }
  return newString;
}
