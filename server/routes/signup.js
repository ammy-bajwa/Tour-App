var express = require('express');
const app = express();
const mongoose = require('mongoose');
const { User } = require('../db/userModel');
const { Followers } = require('../db/followersModel');
var router = express.Router();


router.post('/', (req, res) => {
    let user = new User({ 'name': req.body.userFullName, 'email': req.body.userEmail, 'password': req.body.userPassword });
    user.save((err, user) => {
        if (err) throw res.json(err);
    });
  
});

//export this router to use in our index.js
module.exports = router;

