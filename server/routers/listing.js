var express = require('express');
var listingController = require('../../db/index.js');

var router = express.Router();

router.route('/api/listings')
  .get(function(req, res) {
    listingController.findAll((err, data) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.json(data);
        res.end();
      }
    });

  });

module.exports = router;