/* exported zip */

//  PSEUDOCODE

//  New array containing an array of pairs from two arguments
//  Loop through the first argument
//    Loop through the second argument
//      IF both indices are the same
//        New array for the pairs
//        Put both items from first and second to the pair array
//        Put pair array in new array
//  Return new array

function zip(first, second) {
  var newArr = [];
  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < second.length; j++) {
      if (i === j) {
        var pairArr = [];
        pairArr.push(first[i], second[i]);
        newArr.push(pairArr);
      }
    }
  }
  return newArr;
}
