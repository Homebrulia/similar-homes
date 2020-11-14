const mongoose = require('mongoose');
const fs = require('fs');

mongoose.connect('mongodb://localhost:/similarhomes')

let homeSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  price: Number,
  size_bd: Number,
  size_ba: Number,
  size_sqft: Number,
  address: String,
  neighborhood: String,
  image: String,
  similar: Array,
  favorite: Boolean

})




let Listing = mongoose.model('Listing', homeSchema);

function findAll(callback) {
  Listing.find({}, (err, data) => {
    if (err) {
      console.log(err);
      callback(err);
    } else {
      callback(null, data);
    }
  });
}

// save inserts multiple stories into the db
// let save = (queryArr, callback) => {

//   Listing.insertMany(queryArr, {ordered: false}, (err, result) => {
//     if (err) {
//       callback(err, null);
//     } else {
//       callback(null, err);
//     }
//   })

// }

module.exports.Listing = Listing;
module.exports.findAll = findAll;
// module.exports.save = save;