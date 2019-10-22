const path = require('path');
const express = require('express');

const PORT = 3000;

// Due to recent bug in nodemon, this will make sure it restarts without errors.
process.on('uncaughtException', () => {
  process.exit(0);
});

const app = express();

const STATIC_DIR = path.join(__dirname, '../static');

app.use(express.json());
app.use(express.static(STATIC_DIR));

app.use((req, res, next) => {
  console.log(`Request to ${req.path} - Body: `, req.body);
  next();
});

app.post('/api/login', (req, res, next) => {
  const { username, password } = req.body;

  console.log('hiii')

  res.sendStatus(500);
});

app.get('*', (req, res) => res.sendFile(path.join(STATIC_DIR, './index.html')));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ err });
});

const server = app.listen(PORT, () => {
  console.log(`App now listening on https://localhost:${PORT}`);
});
