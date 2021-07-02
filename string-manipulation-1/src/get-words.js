/* exported getWords */
//  Storage for words
//  Storage for letters in current word
//  IF there are no words
//    Give back empty list
//  Look at each letter one at a time
//    IF current letter is a space
//      Add current word to storage for words
//      Clear current word
//    ELSE
//      Add current letter to current word
//  Add final word to list
//  Give back completed list

function getWords(string) {
  var returnWords = [];
  var currentWord = '';
  if (string === '') {
    return returnWords;
  }
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      returnWords.push(currentWord);
      currentWord = '';
    } else {
      currentWord += (string[i]);
    }
  }
  returnWords.push(currentWord);
  return returnWords;
}
