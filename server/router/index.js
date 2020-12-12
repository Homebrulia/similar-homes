var express = require('express');
var router = express.Router();
var controller = require('../controller');
const path = require('path');


router.get('/listings/:id/similar', controller.getSimilar);

// legacy routes
const publicDir = path.join(__dirname, '../../client/dist');
router.use('/carousel/:id', express.static(publicDir));
router.get('*/:id/listing', controller.getOne);

module.exports = router;