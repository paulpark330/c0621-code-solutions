/* exported defaults */

//  EDGE CASES

//

//  PSEUDOCODE

//  Go through every property in target
//    Go through every property in source
//      IF property is not already defined in target
//        Add property from source to target


function defaults(target, source) {
  for (var prop in source) {
    if (prop in target === false) {
      target[prop] = source[prop]
    }
  }
}
