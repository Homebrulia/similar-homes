const express = require('express');

const listingController = require('../../db/index.js');

const router = express.Router();

router.route('/api/listings')
  .get((req, res) => {
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
