/* exported reverseWords */

//  EDGE CASES

//  Case sensitive

//  PSEUDOCODE

//  Storage for words
//  Storage for letters in current word
//  Look at each letter one at a time
//    IF current letter is a space
//      Add current word to storage for words
//      Clear current word
//    ELSE
//      Add current letter to current word
//  Add final word to list
//  Give back completed list

function reverseWords(string) {
  var returnWords = "";
  var currentWord = "";
  var reversedWord = "";
  function reverseWord() {
    for (let i = currentWord.length - 1; i >= 0; i--) {
      reversedWord += currentWord[i];
    }
  }
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      reverseWord();
      returnWords += reversedWord + " ";
      reversedWord = "";
      currentWord = "";
    } else {
      currentWord += string[i];
    }
  }
  reverseWord();
  returnWords += reversedWord;
  return returnWords;
}
