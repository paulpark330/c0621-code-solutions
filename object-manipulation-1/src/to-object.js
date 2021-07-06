/* exported toObject */
//  New object with property consisting of the key and value from the list
//  Take the first item in the list and make it a key and the second item in the list and make it a value of the first item
//  Give back the new object

function toObject(keyValuePair) {
  var newObject = {};
  newObject[keyValuePair[0]] = keyValuePair[1];
  return newObject;
}
