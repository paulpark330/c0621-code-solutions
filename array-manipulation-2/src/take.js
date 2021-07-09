/* exported take */

// EDGE CASES

//  First argument is an empty array
//  Second argument is 0
//  Count is greater than length of array

//  PSEUDOCODE

//  Storage for new array
//  IF array is empty or count is 0,
//    RETURN new array
//  Go through every item in the array until count
//    Put item in the new array
//   RETURN the new array

function take(array, count) {
  var newArr = [];
  if (array.length === 0 || count === 0) {
    return newArr;
  }
  for (let i = 0; i < count; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
