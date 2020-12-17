var express = require('express');
var router = express.Router();
var controller = require('../controller');
const path = require('path');

const publicDir = path.join(__dirname, '../../client/dist');
router.use('/listings/:id', express.static(publicDir));

router.get('/listings/:id/similar', controller.getSimilar);

router.get('/loaderio-25354d69204a7fec2f13f8bfce9299df', (req, res) => {res.send('loaderio-25354d69204a7fec2f13f8bfce9299df')});

module.exports = router;