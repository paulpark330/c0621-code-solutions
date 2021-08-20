const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const add = (accumulator, currentValue) => accumulator + currentValue;
const sum = numbers.reduce(add);
console.log(`sum: ${sum}`);

const multiply = (accumulator, currentValue) => accumulator * currentValue;
const product = numbers.reduce(multiply);
console.log(`product: ${product}`);

const transactions = (accumulator, currentValue) => {
  if (currentValue.type === 'deposit') {
    return accumulator + currentValue.amount;
  }
  if (currentValue.type === 'withdrawal') {
    return accumulator + currentValue.amount;
  }
};
const balance = (account.reduce(transactions, 0));
console.log(`balace: ${balance}`);

const combineProp = (accumulator, currentValue) => {
  return Object.assign(accumulator, currentValue);
};

const composite = traits.reduce(combineProp, {});
console.log('composite:', composite);
