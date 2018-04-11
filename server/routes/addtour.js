const express = require('express');
const { User } = require('../db/userModel');
const { toursModel } = require('../db/TourModel');
const router = express.Router();



router.post('/', (req, res) => {
    if (!req.body && !req.files) {
        res.json({ success: false });
    } else {
        var newTour = new toursModel(
            {
                user: req.user._id,
                title: req.body.title,
                note: req.body.note,
                picture: req.files[0].filename,
                videos: req.files[1].filename
            }
        );

        newTour.save(function (err, tour) {
            if (err)
                console.log(err);
            else
                res.json(tour);

        }
        );

    }
});

module.exports = router;
