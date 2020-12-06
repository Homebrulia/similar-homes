let faker = require('faker');
let fs = require('fs');
var csvWriter = require('csv-write-stream')

var totalRecords = 100;

function writeListings(totalRecords) {
  var writer = csvWriter({ headers: ["id", "url", "price", "bed", "bath", "sqft", "address"]});
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
  function helper() {
    for (; listingId <= totalRecords; listingId++) {
      var price = Math.floor(Math.random() * 100000000 + 20000000);
      var bed = Math.floor(Math.random() * 8 + 5);
      var bath = Math.floor(Math.random() * 8 + 8);
      var sqft = Math.floor(Math.random() * 30000 + 15000);
      if (!writer.write([listingId, urls[listingId % urls.length], price, bed, bath, sqft, addresses[listingId % addresses.length]])) {
        writer.once('drain', helper);
      }
    }
    writer.end();
  }
  helper();
}
writeListings(totalRecords);

function writeUsers(totalRecords) {
  var writer = csvWriter({ headers: ["id", "name"]});
  writer.pipe(fs.createWriteStream(__dirname + '/users.csv'));

  let names = [];
  for(var i = 0; i < 50; i++) {
    names.push(faker.name.findName());
  }

  var userId = 1;
  function helper() {
    for (; userId <= totalRecords; userId++) {
      if (!writer.write([userId, names[userId % names.length]])) {
        writer.once('drain', helper);
      }
    }
    writer.end();
  }
  helper();
}
writeUsers(totalRecords);

