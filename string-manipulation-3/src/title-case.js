/* exported titleCase */


//  PSEUDOCODE

//  Storage for final string
//  Storage for current word
//  Go through every character in title
//  Capitalize the first word of the title and of any subtitle
//  Capitalize all “major” words , including the second part of hyphenated major words
//  Capitalize all words of four letters or more.


function titleCase(title) {
  var finalString = "";
  var currentWord = "";
  var capCurrentWord = "";
  lowerCaseTitle = title.toLowerCase();
  function capitalize() {
    for (let i = 0; i < currentWord.length; i++) {
      if (i === 0) {
        capCurrentWord = currentWord[i].toUpperCase();
      } else {
        capCurrentWord += currentWord[i].toLowerCase();
      }
    }
  }
  function hardCode() {
    if (currentWord === 'javascript') {
      finalString += "JavaScript"
      currentWord = "";
    } else if (currentWord === 'api') {
      finalString += "API"
      currentWord = "";
    }
  }

  for (let i = 0; i < lowerCaseTitle.length; i++) {
    if (lowerCaseTitle[i] === " ") {
      hardCode();
      if (currentWord !== 'and' &&
          currentWord !== 'or' &&
          currentWord !== 'not' &&
          currentWord !== 'but' &&
          currentWord !== 'a' &&
          currentWord !== 'an' &&
          currentWord !== 'the' &&
          currentWord !== 'as' &&
          currentWord !== 'at' &&
          currentWord !== 'by' &&
          currentWord !== 'in' &&
          currentWord !== 'of' &&
          currentWord !== 'on' &&
          currentWord !== 'per' &&
          currentWord !== 'to' &&
          currentWord !== 'for') {
        capitalize();
        finalString += capCurrentWord;
        currentWord = "";
        capCurrentWord = "";
      } else if (currentWord.length < 4) {
        finalString += currentWord;
        currentWord = "";
      }
      finalString += " ";
    } else {
      currentWord += lowerCaseTitle[i];
    }
  }
  hardCode();
  if (capCurrentWord !== 'api' || capCurrentWord !== 'javascript') {
    capitalize();
    finalString += capCurrentWord;
  }
  return finalString;
}
