/* exported invert */

//  PSEUDOCODE

//  Storage for new object
//  Go through each property
//    Make new property for new object
//    Source value as key and source key as value
//  Return new object

function invert(source) {
  var newObj = {};
  for (var prop in source) {
    newObj[source[prop]] = prop;
  }
  return newObj;
}
