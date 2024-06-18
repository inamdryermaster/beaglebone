const express = require('express');
const fs = require('fs');
const path = require('path');
const logger = require('./config/logger');
// const routes = require('./routes/index');

const app = express();

const port = process.env.PORT || 3000;

// Read version from file
const versionPath = path.join(__dirname, '../VERSION');
let version = 'unknown'; //dw
if (fs.existsSync(versionPath)) {
  version = fs.readFileSync(versionPath, 'utf8').trim();
}

// app.use('/', routes);
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  logger.info(`Server is listening on port ${port}`);
  logger.info(`Running latest version ${version}`);
});
