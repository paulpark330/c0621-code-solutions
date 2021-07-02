/* exported countdown */
function countdown(number) {
  var newArr = [];
  while (number >= 0) {
    newArr.push(number);
    number--;
  }
  return newArr;
}
