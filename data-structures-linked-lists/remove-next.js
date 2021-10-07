/* exported removeNext */

function removeNext(list) {
  if (list.next === null) {
    return list;
  } else {
    const temp = list.next.next;
    list.next = temp;
  }
}
