var express = require('express');
const { toursModel } = require('../db/TourModel');
var router = express.Router();


router.get('/', (req, res) => {
    
    toursModel.find({ user: 'amir' }, {
    }, (err, tours) => {
        if (err) return res.json(err);
        res.json(tours);
    });

});

//export this router to use in our index.js
module.exports = router;

