/* exported initial */
//  New list containing all items except the last item
//  Go through every item in the list
//    IF the item is not the last item, put it in the list
//  Give back the new list

function initial(array) {
  var newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (i !== array.length - 1) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
