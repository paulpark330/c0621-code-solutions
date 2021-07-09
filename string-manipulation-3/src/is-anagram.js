/* exported isAnagram */

//  EDGE CASES
//  String includes space
//  Case sensitive

//  PSEUDOCODE
//  Storage for alphabetical first string
//  Convert first string to lowercase and put it in an array
//  Sort the array in alphabetical order
//  Convert the array back to a string with no space
//  Do the samething for second string
//  IF second string is same as first string,
//    Return true

function isAnagram(firstString, secondString) {
  var orderFirstString = firstString.toLowerCase().split("").sort().join("").replaceAll(" ", "");
  var orderSecondString = secondString.toLowerCase().split("").sort().join("").replaceAll(" ", "");
  if (orderSecondString === orderFirstString) {
    return true;
  } else {
    return false;
  }
}
