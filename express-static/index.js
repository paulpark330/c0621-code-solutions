const express = require('express');
const path = require('path');

const app = express();

const pathJoin = path.join(__dirname, '/public');

const expressStatic = express.static('public');

app.use(expressStatic);

console.log('pathJoin:', pathJoin);
console.log('expressStatic:', expressStatic);

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});
