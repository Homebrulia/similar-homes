let faker = require('faker');
let fs = require('fs');
var csvWriter = require('csv-write-stream')

var totalRecords = 10**2;
var listings = [];

function writeListings(totalRecords) {
  var writer = csvWriter();
  writer.pipe(fs.createWriteStream(__dirname + '/listings.csv'));

  let urls = [];
  for(var i = 1; i <= 60; i++) {
    urls.push(`https://shailee-fec-photos.s3-us-west-1.amazonaws.com/fec_photos/photo${i}.webp`);
  }

  let addresses = [];
  for(var i = 1; i <= 50; i++) {
    var address = `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.state()}`
    addresses.push(address);
  }

  var listingId = 1;
  writer.on('drain', helper);
  function helper() {
    for (; listingId <= totalRecords; listingId++) {
      var price = Math.floor(Math.random() * 100000000 + 20000000);
      var bed = Math.floor(Math.random() * 8 + 5);
      var bath = Math.floor(Math.random() * 8 + 8);
      var sqft = Math.floor(Math.random() * 30000 + 15000);

      listings.push({_key: listingId, url: urls[listingId % urls.length], price, bed, bath, sqft, address: addresses[listingId % addresses.length]});

      if (listingId === totalRecords) {
        writer.write(listings[listingId - 1], () => {
          writer.end();
          writer.removeListener('drain', helper);
        });
      } else if (!writer.write(listings[listingId - 1])) {
        return;
      }
    }
  }
  helper();
}
writeListings(totalRecords);

function writeUsers(totalRecords) {
  var writer = csvWriter({ headers: ["_key", "name"]});
  writer.pipe(fs.createWriteStream(__dirname + '/users.csv'));

  let names = [];
  for(var i = 0; i < 50; i++) {
    names.push(faker.name.findName());
  }

  var userId = 1;
  writer.on('drain', helper);
  function helper() {
    for (; userId <= totalRecords; userId++) {
      if(userId === totalRecords) {
        writer.write([userId, names[userId % names.length]], () => {
          writer.end();
          writer.removeListener('drain', helper);
        });
      } else if (!writer.write([userId, names[userId % names.length]])) {
        return;
      }
    }
  }
  helper();
}
writeUsers(totalRecords);

function writeSimilarListings(totalRecords) {
  var writer = csvWriter();
  writer.pipe(fs.createWriteStream(__dirname + '/similarListings.csv'));

  var listingId = 1;
  writer.on('drain', helper);
  function helper() {
    for (; listingId <= totalRecords; listingId++) {
      for (var i = 0; i < 12; i++) {
        var similarListingId = Math.floor(Math.random() * totalRecords + 1);
        if(listingId === totalRecords && i === 11) {
          writer.write({listing_id: listingId, similar_listing_id: JSON.stringify(listings[similarListingId - 1])}, () => {
            writer.end();
            writer.removeListener('drain', helper);
          });
        } else if (!writer.write({listing_id: listingId, similar_listing_id: JSON.stringify(listings[similarListingId - 1])})) {
          return;
        }
      }
    }
  }
  helper();
}
writeSimilarListings(totalRecords);

function writeUserFav(totalRecords) {
  var writer = csvWriter({ headers: ["user_id", "listing_id"]});
  writer.pipe(fs.createWriteStream(__dirname + '/userFav.csv'));

  var userId = 1;
  writer.on('drain', helper);
  function helper() {
    for (; userId <= totalRecords; userId++) {
      var counter = Math.floor(Math.random() * 10);
      for (var i = 0; i < counter; i++) {
        var listingId = Math.floor(Math.random() * totalRecords + 1);
        if (userId === totalRecords && i === counter - 1) {
          writer.write([userId, JSON.stringify(listings[listingId - 1])], () => {
            writer.end();
            writer.removeListener('drain', helper);
          });
        } else if (!writer.write([userId, JSON.stringify(listings[listingId - 1])])) {
          return;
        }
      }
    }
  }
  helper();
}
writeUserFav(totalRecords);