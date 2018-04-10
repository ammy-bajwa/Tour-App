var express = require('express');
const { User } = require('../db/userModel');
var router = express.Router();


router.get('/', (req, res) => {
    
    User.findOne({ 'name': 'amir' }, {
    }, (err, user) => {
        if (err) return res.json(err);
        res.json(user.tours);
    });

});

//export this router to use in our index.js
module.exports = router;

