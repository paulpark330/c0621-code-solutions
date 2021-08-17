const express = require('express');
const app = express();
const notebookData = require('./data.json');
const fs = require('fs');

const notebook = notebookData.notes;
const noteId = notebookData.nextId;

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const notesArr = [];
  for (const key in notebook) {
    notesArr.push(notebook[key]);
  }
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
    res.status(200).json(notebook[id]);
  }
});

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    const error = { error: 'content is a required field' };
    res.status(400).send(error);
  } else {
    const newNote = {
      id: noteId,
      content: req.body.content
    };
    notebookData.notes[noteId] = newNote;
    notebookData.nextId++;
    const notebookJSON = JSON.stringify(notebookData, null, 2);
    fs.writeFile('data.json', notebookJSON, 'utf8', err => {
      if (err) {
        const error = { error: 'An unexpected error occurred' };
        res.status(500).send(error);
      }
    });
    res.status(201).send(newNote);
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if (id < 1 || isNaN(id)) {
    const error = { error: 'id must be a positive integer' };
    res.status(400).send(error);
  } else if (!notebook[id]) {
    const error = { error: `cannot find note with ${id}` };
    res.status(404).send(error);
  } else {
    delete notebookData.notes[id];
    const notebookJSON = JSON.stringify(notebookData, null, 2);
    fs.writeFile('data.json', notebookJSON, 'utf8', err => {
      if (err) {
        const error = { error: 'An unexpected error occurred' };
        res.status(500).send(error);
      }
    });
    res.status(204);
  }
});

app.put('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if (id < 1 || isNaN(id)) {
    const error = { error: 'id must be a positive integer' };
    res.status(400).send(error);
  } else if (!req.body.content) {
    const error = { error: 'content is a required field' };
    res.status(400).send(error);
  } else if (!notebook[id]) {
    const error = { error: `cannot find note with ${id}` };
    res.status(404).send(error);
  } else {
    const newNote = {
      id: noteId,
      content: req.body.content
    };
    notebookData.notes[noteId] = newNote;
    const notebookJSON = JSON.stringify(notebookData, null, 2);
    fs.writeFile('data.json', notebookJSON, 'utf8', err => {
      if (err) {
        const error = { error: 'An unexpected error occurred' };
        res.status(500).send(error);
      }
    });
    res.status(200).json(newNote);
  }
});
