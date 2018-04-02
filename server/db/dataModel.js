const mongoose = require('mongoose');

let UserData = mongoose.model('usersData',
    {
        img: { data: Buffer, contentType: String }

    }
);

module.exports = { UserData };