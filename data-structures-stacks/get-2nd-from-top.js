/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const firstItem = stack.pop();
  if (firstItem === undefined) {
    return undefined;
  }
  const secondItem = stack.peek();
  stack.push(firstItem);
  return secondItem;
}
