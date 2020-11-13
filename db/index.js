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
  favorite: Boolean
})

let Listing = mongoose.model('Listing', homeSchema);

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
// module.exports.save = save;