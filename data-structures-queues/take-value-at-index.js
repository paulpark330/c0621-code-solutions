/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) {
    return;
  }
  while (index > 0) {
    const current = queue.dequeue();
    queue.enqueue(current);
    index--;
  }
  return queue.dequeue();
}
