function map(array, transform) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(transform(array[i]));
  }
  return newArr;
}
