const express = require('express');

// const ObjectId = require('mongodb').ObjectID;
const db = require('../../db/index.js');

// const router = express.Router();

// router.route('/api/listings')
//   .get((req, res) => {
//     db.findAll((err, data) => {
//       if (err) {
//         res.sendStatus(404);
//       } else {
//         res.json(data);
//         res.end();
//       }
//     });
//   });

// module.exports = router;

// Get request for all the similar homes associated with a listing
module.exports = {
  getOne: (req, res) => {
    const request = req.params.id;
    console.log(request);
    db.Listing.find({ id: request }, (err, data) => {
      if (err) {
        console.log('Error getting data');
        res.sendStatus(404);
      } else {
        // console.log(data);
        res.json(data);
      }
    });
  },
};
