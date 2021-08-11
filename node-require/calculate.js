const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const operator = process.argv[3];
const numOne = parseInt(process.argv[2]);
const numTwo = parseInt(process.argv[4]);

if (operator === 'plus') {
  const result = add(numOne, numTwo);
  console.log(`result: ${result}`);
}

if (operator === 'minus') {
  const result = subtract(numOne, numTwo);
  console.log(`result: ${result}`);
}

if (operator === 'times') {
  const result = multiply(numOne, numTwo);
  console.log(`result: ${result}`);
}

if (operator === 'over') {
  const result = divide(numOne, numTwo);
  console.log(`result: ${result}`);
}
