/* exported initial */
//  New list containing all items except the last item
//  Go through every item in the list except for the last item
//    Put item in the list
//  Give back the new list

function initial(array) {
  var newArr = [];
  for (let i = 0; i < array.length - 1; i++) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
