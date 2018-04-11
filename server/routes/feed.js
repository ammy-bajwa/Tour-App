var express = require('express');
const { toursModel } = require('../db/TourModel');
var router = express.Router();


router.get('/', (req, res) => {

    toursModel.find({ title: 'lahore' }, (err, allTours) => {
        let pictures = allTours.map((tour)=>{
            return tour.picture;
        });
        res.json(pictures);
    })

});

//export this router to use in our index.js
module.exports = router;

