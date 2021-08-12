const fs = require('fs');

module.exports = (notebook, input, newNote) => {
  for (const key in notebook.notes) {
    if (key === input) {
      notebook.notes[key] = newNote;
      const notebookJSON = JSON.stringify(notebook, null, 2);
      fs.writeFile('./data.json', notebookJSON, 'utf8', err => {
        if (err) throw err;
      });
    }
  }
};
