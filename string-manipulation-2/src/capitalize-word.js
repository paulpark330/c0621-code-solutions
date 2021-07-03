/* exported capitalizeWord */
//  Storage for new string
//  Lowercase parameter
//  IF the lowercased string is 'javascript'
//    Put 'JavaScript' in new string
//  ELSE
//    Make first letter uppercase and combine that with rest of the word and put it in new string
//  Give back new string

function capitalizeWord(word) {
  var newString = '';
  word = word.toLowerCase();
  if (word === 'javascript') {
    newString = 'JavaScript';
  } else {
    newString = word[0].toUpperCase() + word.slice(1);
  }
  return newString;
}
