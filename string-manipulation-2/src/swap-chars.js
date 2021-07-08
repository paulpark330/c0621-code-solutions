/* exported swapChars */

//  EDGE CASES

//  Does the first argument have to be less than the second argument?

//  PSEUDOCODE

//  Put argument in a new string
//  Put firstIndex and secondIndex in a new array
//  Go through every characer
//    IF i is firstIndex,
//      Put second item from the new array in new string
//    ELSE IF i is secondIndex,
//      Put first item from the new array in new string
//    ELSE otherwise,
//      Put the character in the new string
//    RETURN new string

function swapChars(firstIndex, secondIndex, string) {
  var newString = '';
  var newArr = [string[firstIndex], string[secondIndex]];
  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newString += newArr[1];
    } else if (i === secondIndex) {
      newString += newArr[0];
    } else {
      newString += string[i];
    }
  }
  return newString;
}
