/* exported reverseWord */
/* exported reverseWord */
//  New storage for reversed word
//  Look at each letter from the end one at a time
//    Put the letters in the new storage
//  Give back new storage

function reverseWord(word) {
  var reversedWord = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
  } return reversedWord;
}
