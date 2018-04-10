const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const userSchema = {
    name: {
        type: String, require: true, unique: true, min: 6, max: 65
    },
    email: {
        type: String, require: true, unique: true, min: 8, max: 65
    },
    password: {
        type: String, require: true, min: 5, max: 65
    },
    // followers: {
    //     type: Schema.Types.ObjectId, ref: 'Tours'
    // },
    date: {
        type: Date,
        default: Date.now
    }
};

let User = mongoose.model('users', userSchema);

module.exports = { User };