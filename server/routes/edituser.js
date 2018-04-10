var express = require('express');
const { User } = require('../db/userModel');
var router = express.Router();


router.get('/', (req, res) => {
    if(!req.body.name && !req.body.email && !req.body.password){
        res.json({
            error:"Please Provide name , email and password"
        });
    };
    User.findOneAndUpdate({ 'name': 'amir' }, {
        $set: {
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        }
    }, (err, user) => {
        if (err) return res.json(err);
        res.json(user);
    });

});

//export this router to use in our index.js
module.exports = router;

