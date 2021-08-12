const fs = require('fs');

module.exports = note => {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) throw err;
    const notebook = JSON.parse(data);
    notebook.notes[notebook.nextId] = note;
    notebook.nextId++;
    const notebookJSON = JSON.stringify(notebook);
    fs.writeFile('./data.json', notebookJSON, 'utf8', err => {
      if (err) throw err;
    });
  });
};
