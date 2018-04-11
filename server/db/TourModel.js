const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const Tour = {
    user: {
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    note: String,
    picture:String,
    videos: String,
    date: {
        type: Date,
        default: Date.now
    }

};

let toursModel = mongoose.model('toursData', Tour);

module.exports = { toursModel };