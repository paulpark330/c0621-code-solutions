const add = require('./add');
const read = require('./read');
const remove = require('./delete');
const notebook = require('./data.json');

const command = process.argv[2];
const input = process.argv[3];

if (command === 'read') {
  read(notebook);
}

if (command === 'add') {
  add(notebook, input);
}

if (command === 'delete') {
  remove(notebook, input);
}
