/* exported getKeys */
//  New list of object's property keys
//  Go through every property
//    Put the key in the new list
//  Give back the new list

function getKeys(object) {
  var newArr = [];
  for (var key in object) {
    newArr.push(key);
  }
  return newArr;
}
