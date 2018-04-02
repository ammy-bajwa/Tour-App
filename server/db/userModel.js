const mongoose = require('mongoose');

let User = mongoose.model('users',
    {
        name: {
            type: String, require: true, unique: true, min: 6, max: 65
        },
        email: {
            type: String, require: true, unique: true, min: 8, max: 65
        },
        password: {
            type: String, require: true, min: 5, max: 65
        }
    },
);

module.exports = { User };