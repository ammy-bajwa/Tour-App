const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var cors = require('cors');
const passport = require('passport');
var router = express.Router();

app.post('/login', passport.authenticate('local'),
    function(req, res) 
    { 
      // If this function gets called, authentication was successful. 
      // `req.user` contains the authenticated user. 

      res.redirect('/users/' + req.user.username); 
   });


app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/myTourAppDB');


const User = mongoose.model('users',
    {
        name: {
            type: String, require: true, unique:true
        },
        email: {
            type: String, require: true, unique:true
        },
        password: {
            type: String, require: true
        }
    },
);


//This root is diffirent for each individual user accourding to his followings
app.get('/', (req, res) => {
    res.end(" This is root / ");
});

//This root is for signup

app.post('/signup', (req, res) => {
    let user = new User({
        name: req.body.userFullName,
        email: req.body.userEmail,
        password: req.body.userPassword

    });
    user.save((err,user) => {
       if(err) throw err;
       res.json(user);
    });
    // res.end(" This is signup /signup ");
});

//This root is for signin

app.get('/signin', (req, res) => {
    res.end(" This is signin /signin ");
});

//this root is to view profile

app.get('/specificuser', (req, res) => {
    res.end(" This is specific user /specificuser ");
});

//This root is to edit logged in user profile

app.get('/specificuser/editUser', (req, res) => {
    res.end(" This is specific editUser /editUser ");
});

//This root is to view all the tours of a specific user

app.get('/specificuser/tours', (req, res) => {
    res.end(" These are all tours /tours ");
});

//This root is to add a tour for a specific user

app.get('/specificuser/tours/add', (req, res) => {
    res.end(" Here You Will Add Your Tour /tours ");
});

//This root is to view the specific tour of a specific user

app.get('/specificuser/tours/specificTour', (req, res) => {
    res.end(" This is specific specificTour /specificTour ");
});

//This root is to edit a specific tour of a specific user

app.get('/specificuser/tours/specificTour/edit', (req, res) => {
    res.end(" This is specific specificTour edit /specificTour/edit ");
});



app.listen(3000);