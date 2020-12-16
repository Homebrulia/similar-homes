var express = require('express');
var router = express.Router();
var controller = require('../controller');
const path = require('path');

const publicDir = path.join(__dirname, '../../client/dist');
router.use('/listings/:id', express.static(publicDir));

router.get('/listings/:id/similar', controller.getSimilar);

module.exports = router;