/* exported flatten */

//  EDGE CASES

//  How many layers of arrays?

//  PSEUDOCODE

//  Storage for new array containing unwrapped items
//  Go through each item in the array
//    IF item is an array
//    Go through each item
//      Put item in new array
//    ELSE otherwise
//      Put item in new array
//  Return new array

function flatten(array) {
  var newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        newArr.push(array[i][j]);
      }
    } else {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
