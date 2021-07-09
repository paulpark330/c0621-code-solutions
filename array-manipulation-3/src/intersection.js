/* exported intersection */

//  PSEUDOCODE

//  New intersection array
//  Loop over the first array
//    IF item exist in the second array
//      Push item in new array
//  Loop over the second array
//    If item exist in the first array and doesn't exist in new array
//      Push item in the new array
//  Return new array

function intersection(first, second) {
  var newArr = [];
  for (let i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      newArr.push(first[i]);
    }
  }
  for (let i = 0; i < second.length; i++) {
    if (first.includes(second[i]) && !newArr.includes(second[i])) {
      newArr.push(second[i]);
    }
  }
  return newArr;
}
