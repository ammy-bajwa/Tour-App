const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const dataSchema = {
    img: { data: Buffer, contentType: String }

};

let UserData = mongoose.model('usersData', dataSchema);

module.exports = { UserData };