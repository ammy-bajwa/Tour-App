const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const cors = require('cors');
const router = express.Router();
const passport = require('passport');
const feed = require('./routes/feed.js');
const signIn = require('./routes/signin');
const signUp = require('./routes/signup');
const specificUser = require('./routes/specificuser');
const editUser = require('./routes/edituser');
const allTours = require('./routes/alltours');
const addTour = require('./routes/addtour');
const followersNew = require('./routes/followersNew');
const addFollowers = require('./routes/addFollowers');
const tour = require('./routes/tour');
const editTour = require('./routes/editTour');
const signOut = require('./routes/signout');
const multer = require('multer');
const path = require('path');
const { ensureAuthenticated } = require('./db/auth');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/myTourAppDB');




// Middlewear for multer

var upload = multer({
    storage: multer.diskStorage({

        destination: function (req, file, callback) { callback(null, './uploads'); },
        filename: function (req, file, callback) { callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)); }

    }),

    fileFilter: function (req, file, callback) {
        var ext = path.extname(file.originalname)
        if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg' && ext !== '.mp4') {
            return callback(/*res.end('Only images are allowed')*/ null, false)
        }
        callback(null, true)
    }
});

// Some Meddlewears for functionality

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
app.use(function (req, res, next) {
    res.locals.user = req.user || null;
    next();
});

//This root is diffirent for each individual user accourding to his followings

// app.use('/home', ensureAuthenticated, feed);

// //This root is for signin

// app.use('/signin', signIn);


// //This root is for singnup

// app.use('/signup', signUp);

// //This root is for signout

// app.use('/signout', signOut);

// //This root is for specific user

// app.use('/:specificUser', ensureAuthenticated, specificUser);

//This root is to add a follower for a users

// app.use('/:specificUser/addfollowers',ensureAuthenticated, addFollowers);

// //This root is to edit logged in user profile

// app.use('/:specificUser/edituser', ensureAuthenticated, editUser);

// //This root is to view all the tours of a specific user

// app.use('/:specificUser/tours', ensureAuthenticated, allTours);


//this root is to create or search followers
// app.use('/:specificUser/followers',ensureAuthenticated, followersNew);

// //This root is to add a tour for a specific user

// app.use('/:specificUser/tours/add', upload.any(), addTour);

// //This root is to view the specific tour of a specific user

// app.use('/:specificUser/tours/:tourid', ensureAuthenticated, tour);

// //This root is to edit a specific tour of a specific user

// app.use('/:specificUser/tours/:tourid/edit', ensureAuthenticated, editTour);


app.use('/', tour);


app.listen(3000);