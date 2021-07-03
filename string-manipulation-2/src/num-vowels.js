/* exported numVowels */

//  EDGE CASES

//

//  PSEUDOCODE

//  Storage for number of vowels
//  Lowercase the input
//  Make an object for vowels with vowels as key and true as values
//  Go through all the characters
//    IF the character at vowels object is true
//      Add one to number of vowels
//  RETURN number of vowels

function numVowels(string) {
  var numOfVowels = 0;
  string = string.toLowerCase();
  var vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true
  };
  for (let i = 0; i < string.length; i++) {
    if (vowels[string[i]]) {
      numOfVowels++;
    }
  } return numOfVowels;
}
