const express = require('express');

const bodyParser = require('body-parser');

const app = express();
const port = 8030;
const mongoose = require('mongoose');
const listingRouter = require('./routers/listing.js');

mongoose.connect('mongodb://localhost:/similarhomes');

app.use(bodyParser.json());

// app.use(express.static(__dirname + '../client/dist'));
app.use(express.static('client/dist'));

// get all listings
app.get('/api/listings', listingRouter);

app.listen(8030, () => {
  console.log(`listening on http://localhost:${port}`);
});
