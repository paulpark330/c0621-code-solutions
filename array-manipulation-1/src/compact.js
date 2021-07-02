/* exported compact */
//  New list containing all truthy items
//  Go through every item in the list
//    IF item is truthy, put in the new list
//  Give back the new list

function compact(array) {
  var newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (Boolean(array[i]) === true) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
