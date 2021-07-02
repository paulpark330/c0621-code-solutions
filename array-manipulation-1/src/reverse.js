/* exported reverse */
//  New list containing all the items in reverse order
//  Go through every item in the list in reverse order
//    Put item in the new list
//  Give back new list

function reverse(array) {
  var newArr = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArr.push(array[i]);
  }
  return newArr;
}
