var express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { User } = require('../db/userModel');
var router = express.Router();




router.get('/', (req, res) => {

    User.findOne({ 'email': req.body.userEmail, 'password': req.body.userPassword }, (err, user) => {
        if (err) throw err;
        if (!user) {
            res.send('User Not Found');
        }
        console.log(user);
        res.json(user);
    }
    )
});

//export this router to use in our index.js
module.exports = router;

