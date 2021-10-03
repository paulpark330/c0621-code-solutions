/* exported swapFront */

function swapFront(list) {
  if (list.next === null) {
    return list;
  } else {
    const first = list.data;
    const second = list.next.data;
    list.data = second;
    list.next.data = first;
    return list;
  }
}
