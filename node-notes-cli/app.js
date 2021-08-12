const add = require('./add');
const read = require('./read');
const remove = require('./delete');
const update = require('./update');
const notebook = require('./data.json');

const command = process.argv[2];
const input = process.argv[3];
const newNote = process.argv[4];

if (command === 'read') {
  read(notebook);
}

if (command === 'add') {
  add(notebook, input);
}

if (command === 'delete') {
  remove(notebook, input);
}

if (command === 'update') {
  update(notebook, input, newNote);
}
