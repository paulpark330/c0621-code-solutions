const fsPromises = require('fs').promises;

const files = process.argv.slice(2);

async function sync() {
  for (let i = 0; i < files.length; i++) {
    const data = await fsPromises.readFile(`./${files[i]}`, 'utf8', err => {
      if (err) throw err;
    });
    console.log(data);
  }
}

sync();
