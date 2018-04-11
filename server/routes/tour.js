var express = require('express');
const { toursModel } = require('../db/TourModel');
var router = express.Router();


router.get('/', (req, res) => {

    toursModel.findOne({ user:'amir' }, {
    }, (err, tour) => {
        if (err) return res.json(err);
        res.json(tour);
    });

});

//export this router to use in our index.js
module.exports = router;

