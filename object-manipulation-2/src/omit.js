/* exported omit */

//  EDGE CASES

//  Undefined value in keys array

//  PSEUDCODE

//  Storage for new object
//  Go through every propery in source
//    Storage for indicator that propery has been found
//    Go through every item in keys
//      IF property is same as item in keys
//        Indicate found
//        Get out of the loop
//    If not found after the for loop
//      Make a new property in new object
//  Return new object

function omit(source, keys) {
  var newObj = {};
  for (var prop in source) {
    let found = false;
    for (let i = 0; i < keys.length; i++) {
      if (prop === keys[i]) {
        found = true;
        break;
      }
    }
    if (!found) {
      newObj[prop] = source[prop];
    }
  }
  return newObj;
}
