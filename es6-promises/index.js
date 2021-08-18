const takeAChance = require('./take-a-chance');

const promiseObj = takeAChance('Paul');

promiseObj.then(value => {
  console.log(value);
});

promiseObj.catch(error => {
  console.log(error.message);
});
