var newRelic = require('newrelic');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

var router = require('./router');

app.use(bodyParser.json());

app.use('/', router);

const port = 8030;
app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
