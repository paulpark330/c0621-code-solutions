const fs = require('fs');

const copy = process.argv[2];
const paste = process.argv[3];

fs.readFile(`./${copy}`, 'utf8', (err, data) => {
  if (err) throw err;
  fs.writeFile(paste, data, 'utf8', err => {
    if (err) throw err;
  });
});
