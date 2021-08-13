/* exported titleCase */

//  PSEUDOCODE

//  First character of every word except conjuctions
//  Hyphen counts as a space
//  If the word is 'javascript' or 'api' return 'JavaScript' or 'API'
//  If there is a colon, treat the next word like the first word
//  Loop over the string and check conditions
//  Split the string by spaces

function titleCase(title) {
  var words = title.toLowerCase().split(' ');

  var minorWords = {
    and: true,
    or: true,
    nor: true,
    but: true,
    a: true,
    an: true,
    the: true,
    as: true,
    at: true,
    by: true,
    for: true,
    in: true,
    of: true,
    on: true,
    per: true,
    to: true
  };

  for (let i = 0; i < words.length; i++) {
    var word = words[i];
    if (word[word.length - 1] === ':') {
      var capWord = words[i + 1][0].toUpperCase() + words[i + 1].slice(1);
      words[i + 1] = capWord;
    }
    if (i === 0 || !minorWords[word]) {
      capWord = word[0].toUpperCase() + word.slice(1);
      words[i] = capWord;
    }
  }

  var finalString = words.join(' ');
  var hyphenString = '';

  for (let i = 0; i < finalString.length; i++) {
    if (finalString[i] === '-') {
      hyphenString += finalString[i];
      hyphenString += finalString[i + 1].toUpperCase();
      i++;
    } else {
      hyphenString += finalString[i];
    }
  }
  return hyphenString.replace('Javascript', 'JavaScript').replace('Api', 'API');
}
