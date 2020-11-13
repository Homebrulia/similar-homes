const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8030;
const mongoose = require('mongoose');
const listingRouter = require('./routers/listing.js');


mongoose.connect('mongodb://localhost:/similarhomes');

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../public'));

app.get('/api/listings', listingRouter);

app.listen(8030, function() {
  console.log(`listening on http://localhost:${port}`);
});

//get all listings
