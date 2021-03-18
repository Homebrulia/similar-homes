const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream')

const totalRecords = 10**7;

function writeListings(totalRecords) {
  const writer = csvWriter({separator: '^', headers: ["id", "url", "price", "bed", "bath", "sqft", "address"]});
  writer.pipe(fs.createWriteStream(__dirname + '/listings.csv'));

  const urls = [];
  for(let i = 1; i <= 60; i++) {
    urls.push(`https://shailee-fec-photos.s3-us-west-1.amazonaws.com/fec_photos/photo${i}.webp`);
  }

  const addresses = [];
  for(let i = 1; i <= 50; i++) {
    const address = `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.state()}`
    addresses.push(address);
  }

  let listingId = 1;
  writer.on('drain', helper);
  function helper() {
    for (; listingId <= totalRecords; listingId++) {
      const price = Math.floor(Math.random() * 100000000 + 20000000);
      const bed = Math.floor(Math.random() * 8 + 5);
      const bath = Math.floor(Math.random() * 8 + 8);
      const sqft = Math.floor(Math.random() * 30000 + 15000);
      if (listingId === totalRecords) {
        writer.write([listingId, urls[listingId % urls.length], price, bed, bath, sqft, addresses[listingId % addresses.length]], () => {
          writer.end();
          writer.removeListener('drain', helper);
        });
      } else if (!writer.write([listingId, urls[listingId % urls.length], price, bed, bath, sqft, addresses[listingId % addresses.length]])) {
        listingId++;
        return;
      }
    }
  }
  helper();
}
writeListings(totalRecords);


function writeUsers(totalRecords) {
  const writer = csvWriter({separator: '^', headers: ["id", "name"]});
  writer.pipe(fs.createWriteStream(__dirname + '/users.csv'));

  const names = [];
  for(let i = 0; i < 50; i++) {
    names.push(faker.name.findName());
  }

  let userId = 1;
  writer.on('drain', helper);
  function helper() {
    for (; userId <= totalRecords; userId++) {
      if(userId === totalRecords) {
        writer.write([userId, names[userId % names.length]], () => {
          writer.end();
          writer.removeListener('drain', helper);
        });
      } else if (!writer.write([userId, names[userId % names.length]])) {
        userId++;
        return;
      }
    }
  }
  helper();
}
writeUsers(totalRecords);

function writeSimilarListings(totalRecords) {
  const writer = csvWriter({separator: '^', headers: ["listing_id", "similar_listing_id"]});
  writer.pipe(fs.createWriteStream(__dirname + '/similarListings.csv'));

  let listingId = 1;
  writer.on('drain', helper);
  function helper() {
    for (; listingId <= totalRecords; listingId++) {
      for (let i = 0; i < 12; i++) {
        const similarListingId = Math.floor(Math.random() * totalRecords + 1);
        if(listingId === totalRecords && i === 11) {
          writer.write([listingId, similarListingId], () => {
            writer.end();
            writer.removeListener('drain', helper);
          });
        } else if (!writer.write([listingId, similarListingId])) {
          listingId++;
          return;
        }
      }
    }
  }
  helper();
}
writeSimilarListings(totalRecords);

function writeUserFav(totalRecords) {
  const writer = csvWriter({separator: '^', headers: ["user_id", "listing_id"]});
  writer.pipe(fs.createWriteStream(__dirname + '/userFav.csv'));

  let userId = 1;
  writer.on('drain', helper);
  function helper() {
    for (; userId <= totalRecords; userId++) {
      const counter = Math.floor(Math.random() * 10);
      for (let i = 0; i < counter; i++) {
        const listingId = Math.floor(Math.random() * totalRecords + 1);
        if (userId === totalRecords && i === counter - 1) {
          writer.write([userId, listingId], () => {
            writer.end();
            writer.removeListener('drain', helper);
          });
        } else if (!writer.write([userId, listingId])) {
          userId++;
          return;
        }
      }
    }
  }
  helper();
}
writeUserFav(totalRecords);