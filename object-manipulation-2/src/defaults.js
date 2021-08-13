/* exported defaults */

//  PSEUDOCODE

//  Go through every property in source
//    IF property in target is not in target
//        Add property from source to target

function defaults(target, source) {
  for (var prop in source) {
    if (prop in target === false) {
      target[prop] = source[prop];
    }
  }
}
