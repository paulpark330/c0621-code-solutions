/* exported ransomCase */
//  Storage for new string
//  Go through every character
//    IF the character place is an odd number
//      Put the lowercased character in the new string
//    ELSE otherwise
//      Put the uppercased character in the new string
//  Give back the new string

function ransomCase(string) {
  var newString = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 1) {
      newString += string[i].toUpperCase();
    } else {
      newString += string[i].toLowerCase();
    }
  }
  return newString;
}
