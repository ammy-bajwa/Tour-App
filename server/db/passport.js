const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

// Load user model
const User = mongoose.model('users');

module.exports = function (passport) {
  passport.use(new LocalStrategy({
    usernameField: 'userEmail',
    passwordField: 'userPassword'
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
}