var express = require('express');
const app = express();
const mongoose = require('mongoose');
const { User } = require('../db/userModel');
var router = express.Router();


router.get('/', (req, res) => {
    res.end(" This is specific user /specificuser ");
});

//export this router to use in our index.js
module.exports = router;

