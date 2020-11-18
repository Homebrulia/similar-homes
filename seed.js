const mongoose = require('mongoose');

const fs = require('fs');

const Listing = require('./db/index.js');

// data for each listing
const prices = ['6,000,000', '7,000,000', '8,000,000', '9,000,000', '10,000,000'];
const size_bd = [3, 4, 5, 6, 7];
const size_ba = [2, 3, 4, 5, 6];
const size_sqft = ['3,500', '4,000', '4,500', '5,000', '5,500'];
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
  similar: [
    {
      id: id,
      price: `${prices[id%5]}`,
      size_bd: `${size_bd[id%5]}`,
      size_ba: `${size_ba[id%5]}`,
      size_sqft: `${size_sqft[id%5]}`,
      address: `${Math.floor(Math.random() * 3000)} ${address[id%6]}`,
      neighborhood: `${neighborhood[id%6]}`,
      image: `https://s3-us-west-1.amazonaws.com/fec.similarhomes/FEC+pictures/${id}house.jpg`,
      favorite: false,
    },
    {
      id: (id+1),
      price: `${prices[(id+1)%5]}`,
      size_bd: `${size_bd[(id+1)%5]}`,
      size_ba: `${size_ba[(id+1)%5]}`,
      size_sqft: `${size_sqft[(id+1)%5]}`,
      address: `${Math.floor(Math.random() * 3000)} ${address[(id+1)%6]}`,
      neighborhood: `${neighborhood[(id+1)%6]}`,
      image: `https://s3-us-west-1.amazonaws.com/fec.similarhomes/FEC+pictures/${(id+1)}house.jpg`,
      favorite: false,
    },
    {
      id: (id+2),
      price: `${prices[(id+2)%5]}`,
      size_bd: `${size_bd[(id+2)%5]}`,
      size_ba: `${size_ba[(id+2)%5]}`,
      size_sqft: `${size_sqft[(id+2)%5]}`,
      address: `${Math.floor(Math.random() * 3000)} ${address[(id+2)%6]}`,
      neighborhood: `${neighborhood[(id+2)%6]}`,
      image: `https://s3-us-west-1.amazonaws.com/fec.similarhomes/FEC+pictures/${(id+2)}house.jpg`,
      favorite: false,
    },
    {
      id: (id+3),
      price: `${prices[(id+3)%5]}`,
      size_bd: `${size_bd[(id+3)%5]}`,
      size_ba: `${size_ba[(id+3)%5]}`,
      size_sqft: `${size_sqft[(id+3)%5]}`,
      address: `${Math.floor(Math.random() * 3000)} ${address[(id+3)%6]}`,
      neighborhood: `${neighborhood[(id+3)%6]}`,
      image: `https://s3-us-west-1.amazonaws.com/fec.similarhomes/FEC+pictures/${(id+3)}house.jpg`,
      favorite: false,
    },
    {
      id: (id+4),
      price: `${prices[(id+4)%5]}`,
      size_bd: `${size_bd[(id+4)%5]}`,
      size_ba: `${size_ba[(id+4)%5]}`,
      size_sqft: `${size_sqft[(id+4)%5]}`,
      address: `${Math.floor(Math.random() * 3000)} ${address[(id+4)%6]}`,
      neighborhood: `${neighborhood[(id+4)%6]}`,
      image: `https://s3-us-west-1.amazonaws.com/fec.similarhomes/FEC+pictures/${(id+4)}house.jpg`,
      favorite: false,
    },
    {
      id: (id+5),
      price: `${prices[(id+5)%5]}`,
      size_bd: `${size_bd[(id+5)%5]}`,
      size_ba: `${size_ba[(id+5)%5]}`,
      size_sqft: `${size_sqft[(id+5)%5]}`,
      address: `${Math.floor(Math.random() * 3000)} ${address[(id+5)%6]}`,
      neighborhood: `${neighborhood[(id+5)%6]}`,
      image: `https://s3-us-west-1.amazonaws.com/fec.similarhomes/FEC+pictures/${(id+5)}house.jpg`,
      favorite: false,
    },
    {
      id: (id+6),
      price: `${prices[(id+6)%5]}`,
      size_bd: `${size_bd[(id+6)%5]}`,
      size_ba: `${size_ba[(id+6)%5]}`,
      size_sqft: `${size_sqft[(id+6)%5]}`,
      address: `${Math.floor(Math.random() * 3000)} ${address[(id+6)%6]}`,
      neighborhood: `${neighborhood[(id+6)%6]}`,
      image: `https://s3-us-west-1.amazonaws.com/fec.similarhomes/FEC+pictures/${(id+6)}house.jpg`,
      favorite: false,
    },
    {
      id: (id+7),
      price: `${prices[(id+7)%5]}`,
      size_bd: `${size_bd[(id+7)%5]}`,
      size_ba: `${size_ba[(id+7)%5]}`,
      size_sqft: `${size_sqft[(id+7)%5]}`,
      address: `${Math.floor(Math.random() * 3000)} ${address[(id+7)%6]}`,
      neighborhood: `${neighborhood[(id+7)%6]}`,
      image: `https://s3-us-west-1.amazonaws.com/fec.similarhomes/FEC+pictures/${(id+7)}house.jpg`,
      favorite: false,
    },
    {
      id: (id+8),
      price: `${prices[(id+8)%5]}`,
      size_bd: `${size_bd[(id+8)%5]}`,
      size_ba: `${size_ba[(id+8)%5]}`,
      size_sqft: `${size_sqft[(id+8)%5]}`,
      address: `${Math.floor(Math.random() * 3000)} ${address[(id+8)%6]}`,
      neighborhood: `${neighborhood[(id+8)%6]}`,
      image: `https://s3-us-west-1.amazonaws.com/fec.similarhomes/FEC+pictures/${(id+8)}house.jpg`,
      favorite: false,
    },
  ],
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


  // similar: id < 89 ? [id+1, id+2, id+3, id+4, id+5, id+6, id+7, id+8, id+9, id+10, id+11, id+12] : [id-4, id-5, id-6, id-7, id-8, id-9, id-10, id-11, id-12],