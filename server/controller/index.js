const db = require('../../db/index.js');

// Get request for all the similar homes associated with a listing
var getOne = (req, res) => {
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
};

module.exports.getOne = getOne;