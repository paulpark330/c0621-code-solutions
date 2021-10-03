/* exported removeTail */

function removeTail(list) {
  if (list.next === null) {
    return list;
  } else {
    while (list.next !== null) {
      list = list.next;
      if (list.next.next === null) {
        list.next = null;
      }
    }
  }
}
