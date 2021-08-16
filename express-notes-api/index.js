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

app.get('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if (id < 1 || isNaN(id)) {
    const error = { error: 'id must be a positive integer' };
    res.status(400).send(error);
  } else if (!notebook[id]) {
    const error = { error: `cannot find note with ${id}` };
    res.status(404).send(error);
  } else {
    res.status(200).send(notebook[id]);
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
