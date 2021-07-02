/* exported getLastChar */
//  New storage for last character of the string.
//  Put the last character of the string in the new storage
//  Give back the new storage

function getLastChar(string) {
  var lastChar = '';
  lastChar = string[string.length - 1];
  return lastChar;
}
