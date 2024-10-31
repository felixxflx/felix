var express = require('express');
var router = express.Router();

const felixController = require('../controller/felix.js');

/* GET home page. */
router.get('/', felixController.felixGet);
router.post('/', felixController.felixCreate);

module.exports = router;
