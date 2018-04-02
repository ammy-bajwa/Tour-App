const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var cors = require('cors');
var router = express.Router();
const feed = require('./routes/feed.js');
const signIn = require('./routes/signin');
const signUp = require('./routes/signup');
const specificUser = require('./routes/specificuser');
const editUser = require('./routes/edituser');
const allTours = require('./routes/alltours');
const addTour = require('./routes/addtour');
const tour = require('./routes/tour');
const editTour = require('./routes/editTour');

mongoose.connect('mongodb://localhost:27017/myTourAppDB');



app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));



//This root is diffirent for each individual user accourding to his followings

app.use('/', feed);

//This root is for signin

app.use('/signin', signIn);


//This root is for singnup

app.use('/signup', signUp);

//This root is for specific user

app.use('/:specificUser', specificUser);

//This root is to edit logged in user profile

app.use('/:specificUser/edituser', editUser);

//This root is to view all the tours of a specific user

app.use('/:specificUser/tours', allTours);

//This root is to add a tour for a specific user

app.use('/:specificUser/tours/add', addTour);

//This root is to view the specific tour of a specific user

app.use('/:specificUser/tours/:tourid', tour);

//This root is to edit a specific tour of a specific user

app.use('/:specificUser/tours/:tourid/edit', editTour);











app.listen(3000);