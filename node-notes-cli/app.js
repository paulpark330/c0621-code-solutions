const add = require('./add');
const read = require('./read');
const notebook = require('./data.json');

const command = process.argv[2];

const note = process.argv[3];

if (command === 'read') {
  read(notebook);
}

if (command === 'add') {
  add(notebook, note);
}
