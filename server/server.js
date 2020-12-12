require('newrelic');
const express = require('express');

const bodyParser = require('body-parser');

const path = require('path');

const app = express();
const port = 8030;
const mongoose = require('mongoose');
const listingRouter = require('./routers/listing.js');

mongoose.connect('mongodb://localhost:/similarhomes');

const publicDir = path.join(__dirname, '../client/dist');

app.use(bodyParser.json());

app.use('/carousel/:id', express.static(publicDir));

// get all similar listings when given a specific id
app.get('*/:id/listing', listingRouter.getOne);

app.listen(8030, () => {
  console.log(`listening on http://localhost:${port}`);
});
