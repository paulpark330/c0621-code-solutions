/* exported getLength */

function getLength(list) {
  let count = 1;
  if (list.next === null) {
    return count;
  }
  while (list.next !== null) {
    list = list.next;
    count++;
  }
  return count;
}
