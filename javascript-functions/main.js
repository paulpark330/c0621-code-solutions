function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var convertMinutesToSecondsResults = convertMinutesToSeconds(5);

console.log('convertMinutesToSecondsResults:', convertMinutesToSecondsResults);

function greet(name) {
  return 'Hey, ' + name;
}

var greetResults = greet('Paul');

console.log('greetResults:', greetResults);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var getAreaResults = getArea(12, 10);

console.log('getAreaResults:', getAreaResults);

function getFirstName(person) {
  return person.firstName;
}

var getFirstNameResults = getFirstName({ firstName: 'Paul', lastName: 'Park' });

console.log('getFirstNameResults:', getFirstNameResults);

function getLastElement(array) {
  return array[array.length - 1];
}

var getLastElementResults = getLastElement(['Water', 'Earth', 'Fire', 'Air']);

console.log('getLastElementResults:', getLastElementResults);
