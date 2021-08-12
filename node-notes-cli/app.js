const read = require('./read');

const command = process.argv[3];

if (command === 'read') {
  read();
}
