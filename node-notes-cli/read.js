module.exports = notebook => {
  for (const key in notebook.notes) {
    console.log(`${key}: ${notebook.notes[key]}`);
  }
};
