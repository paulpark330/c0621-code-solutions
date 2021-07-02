/* exported filterOutStrings */
function filterOutStrings(values) {
  var newArr = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      newArr.push(values[i]);
    }
  }
  return newArr;
}

// New storage for all of the items in the list except strings.
// Look at each item one at a item
//    IF the item is not string
//      Put the item in the new storage
// Give back the new storage
