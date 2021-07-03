/* exported getValues */
//  New list of object's property keys
//  Go through every property
//    Put the value in the new list
//  Give back the new list

function getValues(object) {
  var newArr = [];
  for (var key in object) {
    newArr.push(object[key]);
  }
  return newArr;
}
