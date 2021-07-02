/* exported capitalize */
//  New storage for original word with first character uppercased and the rest of its characters lowercased.
//  Look at each character one at a time
//    IF the character is in the beginning of the word
//      Uppercase the character and put it in the new storage
//    ELSE lowercase the character and put it in the new storage
//  Give back the new storage

function capitalize(word) {
  var newString = '';
  for (let i = 0; i < word.length; i++) {
    if (i === 0) {
      newString = word[i].toUpperCase();
    } else {
      newString += word[i].toLowerCase();
    }
  } return newString;
}
