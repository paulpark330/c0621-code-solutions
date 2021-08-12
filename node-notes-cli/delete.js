const fs = require('fs');

module.exports = (notebook, input) => {
  delete notebook.notes[input];
  const notebookJSON = JSON.stringify(notebook, null, 2);
  fs.writeFile('./data.json', notebookJSON, 'utf8', err => {
    if (err) throw err;
  });
};
