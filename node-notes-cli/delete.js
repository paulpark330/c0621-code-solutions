const fs = require('fs');

module.exports = (notebook, input) => {
  for (const key in notebook.notes) {
    if (key === input) {
      delete notebook.notes[key];
      const notebookJSON = JSON.stringify(notebook, null, 2);
      fs.writeFile('./data.json', notebookJSON, 'utf8', err => {
        if (err) throw err;
      });
    }
  }
};
