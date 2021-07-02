/* exported oddOrEven */
function oddOrEven(numbers) {
  var newArr = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      newArr.push('even');
    } else if (numbers[i] % 2 === 1) {
      newArr.push('odd');
    }
  } return newArr;
}
