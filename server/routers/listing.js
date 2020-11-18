
const db = require('../../db/index.js');

// Get request for all the similar homes associated with a listing
module.exports = {
  getOne: (req, res) => {
    const request = req.params.id;
    console.log('request', request);
    db.Listing.find({ id: request }, (err, data) => {
      if (err) {
        console.log('Error getting data');
        res.sendStatus(404);
      } else {
        // console.log(data[0]._doc.similar) - gets only arr of similar listings
        res.json(data[0]._doc.similar);
      }
    });
  },
};

// const express = require('express');
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