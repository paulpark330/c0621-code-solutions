const fs = require('fs');

module.exports = (notebook, note) => {
  notebook.notes[notebook.nextId] = note;
  notebook.nextId++;
  const notebookJSON = JSON.stringify(notebook, null, 2);
  fs.writeFile('./data.json', notebookJSON, 'utf8', err => {
    if (err) throw err;
  });
};
