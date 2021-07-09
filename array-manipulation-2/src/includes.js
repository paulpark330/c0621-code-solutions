/* exported includes */

// EDGE CASES

//  First argument is an empty array
//  Second argument does not exist
//  Will the first argument contain the same values for each item in the array?

//  PSEUDOCODE
//  IF array is empty,
//    Return false
//  Go through every item in the array
//    IF item is same as value,
//      Return true;
//    ELSE otherwise,
//      Return false;

function includes(array, value) {
  if (array.length === 0) {
    return false;
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  } return false;
}
