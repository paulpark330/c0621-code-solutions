/* exported tail */
//  New list containing all items after the first item
//  Go through every item in the list
//    IF the item is not the first item, put it in the new list
//  Give back the new list

function tail(array) {
  var newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (i !== 0) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
