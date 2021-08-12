const fs = require('fs');

module.exports = (notebook, input) => {
  notebook.notes[notebook.nextId] = input;
  notebook.nextId++;
  const notebookJSON = JSON.stringify(notebook, null, 2);
  fs.writeFile('./data.json', notebookJSON, 'utf8', err => {
    if (err) throw err;
  });
};
