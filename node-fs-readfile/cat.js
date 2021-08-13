const fs = require('fs');

const files = process.argv.slice(2);

let counter = 0;

const filesObj = {};

let strFinal = '';

for (let i = 0; i < files.length; i++) {
  fs.readFile(`./${files[i]}`, 'utf8', (err, data) => {
    if (err) throw err;
    filesObj[files[i]] = data;
    counter++;
    if (counter === files.length) {
      for (let j = 0; j < files.length; j++) {
        if (j !== files.length - 1) {
          strFinal += filesObj[files[j]] + '\n';
        } else {
          strFinal += filesObj[files[j]];
        }
      }
      console.log(strFinal);
    }
  });
}
