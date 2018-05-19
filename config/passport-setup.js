var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth20");
// var  = require("./.js");
var db = require('../models');

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  db.User.findById(id).then(user => {
    done(null, user)  
  })
})

passport.use(new GoogleStrategy({
    callbackURL: "/auth/google/callback",
    clientID: process.env.GOOGLE_CLIENT_ID || keys.google.clientID,
    // clientID: keys.google.clientID,    
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || keys.google.clientSecret
    // clientSecret: keys.google.clientSecret    
  }, (accessToken, refreshToken, profile, done) => {
    db.User.findOne({
      where: {
        googleID: profile.id
      }
    }).then( currentUser => {
      if (currentUser) {
        done(null, currentUser)
      } else {
        db.User.create({
          username: profile.displayName,
          googleID: profile.id,
          profileIMG: profile.photos[0].value
        }).then(newUser => {
          done(null, newUser)
        })
      }
    })    
  })
);