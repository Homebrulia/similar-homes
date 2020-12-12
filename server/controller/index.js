const db = require('../../db');
const pgdb = require('../../db/postgres/model');

var getSimilar = (req, res) => {
  const id = req.params.id;
  pgdb.getSimilar(id, (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(404);
    } else {
      var neighborhood = data.rows[0].address.split(',')[1].trim();
      var obj = {}
      obj.similarHomes = data.rows;
      obj.neighborhood = neighborhood;
      res.json(obj);
    }
  });
};

// Get request for all the similar homes associated with a listing
var getOne = (req, res) => {
  const request = req.params.id;
  db.Listing.find({ id: request }, (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(404);
    } else {
      // console.log(data[0]._doc.similar) - gets only arr of similar listings
      res.json(data[0]._doc.similar);
    }
  });
};

module.exports.getOne = getOne;
module.exports.getSimilar = getSimilar;