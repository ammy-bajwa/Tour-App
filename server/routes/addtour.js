const express = require('express');
const { User } = require('../db/userModel');
const uuid = require('uuid');
const router = express.Router();




router.post('/', (req, res) => {
    if (!req.body && !req.files) {
        res.json({ success: false });
    } else {
        User.findOne({ email: 'amir' }, (err, user) => {
            if (err) return res.json(err);
            user.tours.push({
                id:uuid(),
                title:req.body.title,
                note:req.body.note,
                picture: req.files[0].filename,
                videos: req.files[1].filename,
            });
            user.save().then((user)=>{
                res.json(user.tours);
            });
        });

    }
});

module.exports = router;
