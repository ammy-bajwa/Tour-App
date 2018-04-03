const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
var cors = require('cors');
var router = express.Router();
const passport = require('passport');
const feed = require('./routes/feed.js');
const signIn = require('./routes/signin');
const signUp = require('./routes/signup');
const specificUser = require('./routes/specificuser');
const editUser = require('./routes/edituser');
const allTours = require('./routes/alltours');
const addTour = require('./routes/addtour');
const tour = require('./routes/tour');
const editTour = require('./routes/editTour');
const { ensureAuthenticated } = require('./db/auth');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/myTourAppDB');

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

app.use('/home', ensureAuthenticated, feed);

//This root is for signin

app.use('/signin', signIn);


//This root is for singnup

app.use('/signup', signUp);

//This root is for specific user

app.use('/:specificUser', ensureAuthenticated, specificUser);

//This root is to edit logged in user profile

app.use('/:specificUser/edituser', ensureAuthenticated, editUser);

//This root is to view all the tours of a specific user

app.use('/:specificUser/tours', ensureAuthenticated, allTours);

//This root is to add a tour for a specific user

app.use('/:specificUser/tours/add', ensureAuthenticated, addTour);

//This root is to view the specific tour of a specific user

app.use('/:specificUser/tours/:tourid', ensureAuthenticated, tour);

//This root is to edit a specific tour of a specific user

app.use('/:specificUser/tours/:tourid/edit', ensureAuthenticated, editTour);




app.listen(3000);