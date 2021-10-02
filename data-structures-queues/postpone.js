/* exported postpone */

function postpone(queue) {
  if (queue.peek() === undefined) {
    return;
  }
  const value = queue.dequeue();
  queue.enqueue(value);
}
