const mongoose = require('mongoose');

const fs = require('fs');

const Listing = require('./db/index.js');

// data for each listing
const prices = [6000000, 7000000, 8000000, 9000000, 10000000];
const size_bd = [3, 4, 5, 6, 7];
const size_ba = [2, 3, 4, 5, 6];
const size_sqft = [2000, 3000, 4000, 5000, 6000];
const address = ['Presidio Ter', 'Sea Cliff Ave', 'Glenbrook Ave', 'Marina Blvd', 'Scott St', 'Filbert St'];
const neighborhood = ['Pacific Heights, San Francisco, CA', 'Bernal Heights, San Francisco, CA', 'Noe Valley, San Francisco, CA', 'Castro, San Francisco, CA', 'Seacliff, San Francisco, CA', 'Clarendon Heights, San Francisco, CA'];

// clear existing
Listing.Listing.remove({}, (err) => {
  if (err) {
    console.error('error clearing db', err);
  } else {
    console.log('db cleared successfully');
  }
});

const listingArr = [];

const createListing = (id) => ({
  id: id,
  price: `${prices[id%5]}`,
  size_bd: `${size_bd[id%5]}`,
  size_ba: `${size_ba[id%5]}`,
  size_sqft: `${size_sqft[id%5]}`,
  address: `${Math.floor(Math.random() * 3000)} ${address[id%6]}`,
  neighborhood: `${neighborhood[id%6]}`,
  image: `https://s3-us-west-1.amazonaws.com/fec.similarhomes/FEC+pictures/${id}house.jpg`,
  similar: id < 89 ? [id+1, id+2, id+3, id+4, id+5, id+6, id+7, id+8, id+9, id+10, id+11, id+12] : [id-4, id-5, id-6, id-7, id-8, id-9, id-10, id-11, id-12],
  favorite: false,
});

const seedData = (entries) => {
  let created = 1;

  while (created <= entries) {
    listingArr.push(createListing(created));
    // console.log('listing arr', listingArr);
    created += 1;
  }

  Listing.Listing.insertMany(listingArr, { ordered: false }, (err) => {
    if (err) {
      console.error('MONGO ERR', err);
    } else {
      console.log('seeded db');
    }
  });
};

seedData(100);
