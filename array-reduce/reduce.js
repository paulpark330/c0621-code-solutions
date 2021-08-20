function reduce(array, reducer, initialValue) {
  if (typeof initialValue === 'undefined') {
    let accumulator = array[0];
    for (let i = 0; i < array.length - 1; i++) {
      accumulator = reducer(accumulator, array[i + 1]);
    }
    return accumulator;
  } else {
    let accumulator = initialValue;
    for (let i = 0; i < array.length; i++) {
      accumulator = reducer(accumulator, array[i]);
    }
    return accumulator;
  }
}
