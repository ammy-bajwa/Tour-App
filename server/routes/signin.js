var express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const { User } = require('../db/userModel');
var router = express.Router();


passport.use(new LocalStrategy({
    usernameField: 'email',
  }, (email, password, done) => {
    // Match user
    User.findOne({
      email: email
    }).then(user => {
      console.log(user);
      if (!user) {
        return done(null, false, { message: 'No User Found' });
      }
      // Match password
      if (user.password = password) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Password Incorrect' });
      }
    })
  }));

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });

router.post('/', passport.authenticate('local'),(req,res)=>{
    res.json(req.user);
});

//export this router to use in our index.js
module.exports = router;

