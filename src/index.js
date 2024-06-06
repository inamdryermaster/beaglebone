const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =>
  res.send('<h1>Hello World!</h1><p>Running version v.1.1</p>')
);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
