var express = require('express');
const app = express();
const mongoose = require('mongoose');
const { User } = require('../db/userModel');
var router = express.Router();


router.post('/', (req, res) => {
  
    User.findOne({ _id: req.user._id }, function (err, user) {
        if (err) return res.json(err);
        res.json(user);
      });
});

//export this router to use in our index.js
module.exports = router;

