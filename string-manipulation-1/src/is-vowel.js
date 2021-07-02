/* exported isVowel */
//  IF character is a e i o u A E I O U,
//    RETURN true
//  ELSE RETURN false
//

function isVowel(char) {
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
      char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
    return true;
  } else {
    return false;
  }
}
