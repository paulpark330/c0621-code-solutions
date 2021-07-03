/* exported truncate */
//  Storage for new string
//  Put the shortened version of string, plus ellipsis in the new string
//  Give back new string

function truncate(length, string) {
  var newString = string.slice(0, length) + '...';
  return newString;
}
