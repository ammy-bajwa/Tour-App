var express = require('express');
const { Followers } = require('../db/followersModel');
var router = express.Router();


router.get('/', (req, res) => {
    Followers.findOne({ user: req.user._id }, (err, followersObj) => {
        if (err) throw err;
        if (followersObj) {
            res.json(followersObj.followers);
        };
        let followerArray = new Followers({
            user: req.user._id,
            //this array comes from user from front end
            followers: req.user.followersArray
        });
        followerArray.save(function (err, follower) {
            if (err) throw err;
            return res.json(follower);
        })
      

    });

});

//export this router to use in our server.js
module.exports = router;

