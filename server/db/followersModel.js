const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const followersSchema = {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    followers:Array

};


let Followers = mongoose.model('usersFollowers', followersSchema);


module.exports = { Followers };