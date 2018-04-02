var express = require('express');
var router = express.Router();

//API version 1
router.use('/', require('./v1'));

module.exports = router