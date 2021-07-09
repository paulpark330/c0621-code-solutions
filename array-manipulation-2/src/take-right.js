/* exported takeRight */

// EDGE CASES

//  First argument is an empty array
//  Second argument is 0
//  Count is greater than length of array

//  PSEUDOCODE

//  Storage for new array
//  IF array is empty or count is 0,
//    RETURN new array
//  Go through every item in the array starting from count
//    Put item in the new array
//      RETURN the new array

function takeRight(array, count) {
  var newArr = [];
  if (array.length === 0 || count === 0) {
    return newArr;
  }
  for (let i = array.length - count; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
