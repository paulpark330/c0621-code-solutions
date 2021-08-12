const add = require('./add');
const read = require('./read');

const command = process.argv[2];

const note = process.argv[3];

if (command === 'read') {
  read();
}

if (command === 'add') {
  add(note);
}
