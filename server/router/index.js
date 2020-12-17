var express = require('express');
var router = express.Router();
var controller = require('../controller');
const path = require('path');

const publicDir = path.join(__dirname, '../../client/dist');
router.use('/listings/:id', express.static(publicDir));

router.get('/listings/:id/similar', controller.getSimilar);

router.get('/loaderio-4c3133e1f72617ccff4f69460cb15781', (req, res) => {res.send('loaderio-4c3133e1f72617ccff4f69460cb15781')});

module.exports = router;