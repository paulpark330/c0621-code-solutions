/* exported isPalindromic */

//  EDGE CASES
//  String includes space

//  PSEUDOCODE

//  Storage for newString
//  Storage for inverseString
//  Go through each character
//    IF character is not a space
//      Put it in newString
//  Go through each character in newString from the end
//    Put character in inverseString
//  IF newString is same as inverseString
//    Return true

function isPalindromic(string) {
  var newString = '';
  var inverseString = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      newString += string[i];
    }
  }
  for (let i = newString.length - 1; i >= 0; i--) {
    inverseString += newString[i];
  }
  if (newString === inverseString) {
    return true;
  } else if (newString !== inverseString) {
    return false;
  }
}
