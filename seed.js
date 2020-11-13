const mongoose = require('mongoose');
const fs = require('fs');
const Listing = require('./db/index.js');

const images = ['https://s3-us-west-1.amazonaws.com/fec.similarhomes/FEC+pictures/1house.jpg', 'https://s3-us-west-1.amazonaws.com/fec.similarhomes/FEC+pictures/2house.jpg', 'https://s3-us-west-1.amazonaws.com/fec.similarhomes/FEC+pictures/3house.jpg'];
const prices = [6000000, 7000000, 8000000, 9000000, 10000000];
const size_bd = [3, 4, 5, 6, 7];
const size_ba = [2, 3, 4, 5, 6];
const size_sqft = [2000, 3000, 4000, 5000, 6000];
const address = ['17 Presidio Ter', '224 Sea Cliff Ave'];
const neighborhood = ['Pacific Heights, San Francisco, CA', 'Bernal Heights, San Francisco, CA']

Listing.Listing.remove({}, (err) => {
  if (err) {
    console.error('error clearing db', err)
  } else {
    console.log('db cleared successfully')
  }
})

let listingArr = [];

let createListing = (id) => {
  return {
    id : id,
    price : `${prices[id%5]}`,
    size_bd : `${size_bd[id%5]}`,
    size_ba : `${size_ba[id%5]}`,
    size_sqft : `${size_sqft[id%5]}`,
    address : `${address[id%2]}`,
    neighborhood : `${neighborhood[id%2]}`,
    image : `${images[id % 3]}`,
    favorite : false
  }
}

seedData = (entries) => {
  let created = 1;

  while (created <= entries) {
    listingArr.push(createListing(created));
    created++;
  }

  Listing.Listing.insertMany(listingArr, {ordered: false}, (err, result) => {
    if (err) {
      console.error('MONGO ERR', err)
    } else {
      console.log('seeded db')
    }
  })
}

seedData(2);

// function createRecord(images, prices, size_bd, size_ba, size_sqft, address, neighborhood, id) {
//   let home = {};
//   home.id = `${id}`;
//   price = `${prices[id%5]}`;
//   size_bd = `${size_bd[id%5]}`;
//   size_ba = `${size_ba[id%5]}`;
//   size_sqft = `${size_sqft[id%5]}`;
//   address = `${address[id%2]}`;
//   neighborhood =
//   // dataStr =+ `${id}`;
//   // dataStr =+ `${images[id % 3]}`;
//   // dataStr =+ `${prices[id%5]}`;
//   // dataStr =+ `${size_bd[id%5]}`;
//   // dataStr =+ `${size_ba[id%5]}`;
//   // dataStr =+ `${size_sqft[id%5]}`;
//   // dataStr =+ `${address[id%2]}`;
//   // dataStr =+ `${neighborhood[id%2]}`;
//   // dataStr += `\n`;
//   // console.log(dataStr);

//   return home;
// }

// function seedData(entries) {
//   let created = 1;
//   let fileText = {};
//   while (created <= entries) {
//     fileText = createRecord(images, prices, size_bd, size_ba, size_sqft, address, neighborhood, created);
//     created++;
//   }

//   return new Promise((resolve, reject) => {
//     fs.writeFile('data.txt', fileText, (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })

// }

// seedData(10)
//   .then(() => { console.log('data successfully seeded') })
//   .catch(() => { console.log('there is an error boooo') })