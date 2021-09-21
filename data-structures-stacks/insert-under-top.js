/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  const firstItem = stack.pop();
  if (firstItem === undefined) {
    return undefined;
  }
  stack.push(value);
  stack.push(firstItem);
}
