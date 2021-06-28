var student = {
  firstName: 'Paul',
  lastName: 'Park',
  age: 26
};

var fullName = student.firstName + ' ' + student.lastName;

console.log(fullName);

student.livesInIrvine = true;

student.previousOccupation = 'Nurse';

console.log('value of student.livesInIrvine:', student.livesInIrvine);

console.log('value of student.previousOccupation:', student.previousOccupation);

console.log(student);

var vehicle = {
  make: 'Tesla',
  model: 'Model S',
  year: 2021
};

vehicle['color'] = 'White';

vehicle['isConvertible'] = false;

console.log('value of vehicle["color"]:', vehicle['color']);

console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);

console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Tira',
  type: 'Kitty'
};

delete pet.name;

delete pet.type;

console.log('value of pet:', pet);
