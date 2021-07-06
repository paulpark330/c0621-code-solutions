/* exported tail */
//  New list containing all items after the first item
//  Go through every item in the list starting at the second item
//    IF the item is not the first item, put it in the new list
//  Give back the new list

function tail(array) {
  var newArr = [];
  for (let i = 1; i < array.length; i++) {
      newArr.push(array[i]);
  }
  return newArr;
}
