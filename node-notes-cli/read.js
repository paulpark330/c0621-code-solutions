const fs = require('fs');

module.exports = fs.readFile('./data.json', 'utf8', (err, data) => {
  if (err) throw err;
  const notebook = JSON.parse(data);
  for (const key in notebook.notes) {
    console.log(`${key}: ${notebook.notes[key]}`);
  }
});
