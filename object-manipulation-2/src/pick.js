/* exported pick */

//  EDGE CASES

//  Undefined value in keys array

//  PSEUDCODE

//  Storage for new object
//  Go through properties of source
//    Go through items of keys
//      IF item is key of property and is not undefined
//        Put the property in new object
//  Return new object

function pick(source, keys) {
  var newObj = {};
  for (var prop in source) {
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] === prop && source[prop] !== undefined) {
        newObj[prop] = source[prop];
      }
    }
  }
  return newObj;
}
