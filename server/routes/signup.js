var express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { User } = require('../db/userModel');
var router = express.Router();


router.post('/', (req, res) => {
    let user = new User({ 'name': req.body.userFullName, 'email': req.body.userEmail, 'password': req.body.userPassword });
    user.save((err, user) => {
        if (err) throw res.json(err);
        res.json(user);
    });
});

//export this router to use in our index.js
module.exports = router;

