const express = require('express');
const app = express();
const notebookData = require('./data.json');

const notebook = notebookData.notes;

const notesArr = [];
for (const key in notebook) {
  notesArr.push(notebook[key]);
}

app.get('/api/notes', (req, res) => {
  res.json(notesArr);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
