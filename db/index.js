const mongoose = require('mongoose');
// const fs = require('fs');

mongoose.connect('mongodb://localhost:/similarhomes');

const homeSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  similar: [
    {
      id: Number,
      price: String,
      size_bd: Number,
      size_ba: Number,
      size_sqft: String,
      address: String,
      neighborhood: String,
      image: String,
      favorite: Boolean,
    },
    {
      id: Number,
      price: String,
      size_bd: Number,
      size_ba: Number,
      size_sqft: String,
      address: String,
      neighborhood: String,
      image: String,
      favorite: Boolean,
    },
    {
      id: Number,
      price: String,
      size_bd: Number,
      size_ba: Number,
      size_sqft: String,
      address: String,
      neighborhood: String,
      image: String,
      favorite: Boolean,
    },
    {
      id: Number,
      price: String,
      size_bd: Number,
      size_ba: Number,
      size_sqft: String,
      address: String,
      neighborhood: String,
      image: String,
      favorite: Boolean,
    },
    {
      id: Number,
      price: String,
      size_bd: Number,
      size_ba: Number,
      size_sqft: String,
      address: String,
      neighborhood: String,
      image: String,
      favorite: Boolean,
    },
    {
      id: Number,
      price: String,
      size_bd: Number,
      size_ba: Number,
      size_sqft: String,
      address: String,
      neighborhood: String,
      image: String,
      favorite: Boolean,
    },
    {
      id: Number,
      price: String,
      size_bd: Number,
      size_ba: Number,
      size_sqft: String,
      address: String,
      neighborhood: String,
      image: String,
      favorite: Boolean,
    },
    {
      id: Number,
      price: String,
      size_bd: Number,
      size_ba: Number,
      size_sqft: String,
      address: String,
      neighborhood: String,
      image: String,
      favorite: Boolean,
    },
    {
      id: Number,
      price: String,
      size_bd: Number,
      size_ba: Number,
      size_sqft: String,
      address: String,
      neighborhood: String,
      image: String,
      favorite: Boolean,
    },
  ],
});

const Listing = mongoose.model('Listing', homeSchema);

// function findAll(callback) {
//   Listing.find({}, (err, data) => {
//     if (err) {
//       // console.log(err);
//       callback(err);
//     } else {
//       callback(null, data);
//     }
//   });
// }

// save inserts multiple into the db
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
// module.exports.findAll = findAll;
// module.exports.find = find;
// module.exports.save = save;
