const express = require('express');
const app = express();
const fs = require('fs');
const { toursModel } = require('../db/tourModel');
const router = express.Router();




router.post('/', (req, res) => {
    if (!req.body && !req.files) {
        res.json({ success: false });
    } else {
        var c;
        toursModel.findOne({}, function (err, data) {
            var newTour = new toursModel({

                user: 'amir',
                picture: req.files[0].filename,
                videos: req.files[1].filename,
            });

            newTour.save(function (err, tour) {
                if (err)
                    console.log(err);
                else
                    res.json(tour);

            });

        }).sort({ _id: -1 }).limit(1);

    }
});

module.exports = router;


