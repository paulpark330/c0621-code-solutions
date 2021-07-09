/* exported unique */

//  PSEUDOCODE

//  New array for unique elements of array
//  Loop over array
//    IF item doesn't exist in new array,
//      Push item in new array
//  Return new array

function unique(array) {
  var newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (!newArr.includes(array[i])) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
