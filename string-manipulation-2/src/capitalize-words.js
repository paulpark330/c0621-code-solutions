/* exported capitalizeWords */
//  Storage for new string
//  Lowercase entire string
//  Uppercase first character of string and add it to new string
//  Go through every character starting from second character
//    IF character is a space
//      Uppercase the character and add it to new string
//    ELSE otherwise
//      Add character to new string
//  Give back new string

function capitalizeWords(string) {
  var newString = '';
  string = string.toLowerCase();
  newString += string[0].toUpperCase();
  for (let i = 1; i < string.length; i++) {
    if (string[i] === ' ') {
      newString += string[i];
      newString += string[i + 1].toUpperCase();
      i -= -1
    } else {
      newString += string[i];
    }
  }
  return newString;
}
