/* exported maxValue */

function maxValue(stack) {
  let max = -Infinity;
  while (stack.peek() !== undefined) {
    const index = stack.pop();
    if (index > max) {
      max = index;
    }
  }
  return max;
}
