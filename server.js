const express = require('express'),
  app = express();

app.get('/', (req, res) => {
  res.send('HELLO!');
});

app.listen(8080);