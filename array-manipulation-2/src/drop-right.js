/* exported dropRight */

// EDGE CASES

//  First argument is an empty array
//  Second argument is greater than the amount of items in the first argument
//  Second argument is 0

//  PSEUDOCODE

//  Storage for new array
//  IF array is empty
//    Return new array
//  IF count is greater than the amount of items in array
//    Return new array
//  Go through every item in the array
//    Put item in the new array
//  Return new array

function dropRight(array, count) {
  var newArr = [];
  if (array.length === 0) {
    return newArr;
  }
  if (count >= array.length) {
    return newArr;
  }
  for (let i = 0; i < array.length - count; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
