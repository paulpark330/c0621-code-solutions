/* exported chunk */

//  EDGE CASES

//  Remainder is more than 0
//  Second argument is greater than length of first argument
//  Empty array for first argument
//  Empty value in the first argument

//  PSEUDOCODE

//  Storage for new array
//  Storage for sub array
//  IF array is empty,
//    Return new array
//  Go through every item in the array
//    Put the item inside sub array
//    IF sub array has size amount of items,
//      Put sub array inside new array
//      Clear sub array
//    ELSE IF the item is lasts in the array,
//      Put sub array inside new array
//      Clear sub array
//    Return new array

function chunk(array, size) {
  var newArr = [];
  var subArr = [];
  if (array.length === 0) {
    return newArr;
  }
  for (let i = 0; i < array.length; i++) {
    subArr.push(array[i]);
    if (subArr.length === size) {
      newArr.push(subArr);
      subArr = [];
    } else if (i === array.length - 1) {
      newArr.push(subArr);
      subArr = [];
    }
  }
  return newArr;
}
