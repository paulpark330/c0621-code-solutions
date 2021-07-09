/* exported union */

//  PSEUDOCODE

//  New union array
//  Loop over the first array
//      Push item in new array
//  Loop over the second array
//    If doesn't exist in first array
//      Push item in the new array
//  Return new array

function union(first, second) {
  var newArr = [];
  for (let i = 0; i < first.length; i++) {
    newArr.push(first[i]);
  }
  for (let i = 0; i < second.length; i++) {
    if (!first.includes(second[i])) {
      newArr.push(second[i]);
    }
  }
  return newArr;
}
