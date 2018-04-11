const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const followersSchema = {
    user: { type: String, required:true },
    followers:Array

};


let Followers = mongoose.model('usersFollowers', followersSchema);


module.exports = { Followers };