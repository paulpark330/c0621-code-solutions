/* exported getTail */

function getTail(list) {
  if (list.next === null) {
    return list.data;
  }
  while (list.next !== null) {
    list = list.next;
  }
  return list.data;
}
