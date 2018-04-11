var express = require('express');
const { Followers } = require('../db/followersModel');
var router = express.Router();


router.get('/', (req, res) => {
    Followers.findOneAndUpdate({ user: req.user._id },{$set:{
        followers:req.user.followersArray
    }}, (err, followersObj) => {
     res.json(followersObj)
    });

});

//export this router to use in our index.js
module.exports = router;

