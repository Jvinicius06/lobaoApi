const passport = require('passport');
const FacebookStrategy = require('passport-facebook')
const request = require('request');
const { Lobao_user } = require('../modelsDB/lobao_user');
const password = require('secure-random-password');

const jwt = require("jsonwebtoken")

const secretKey = process.env.HASH

passport.use(new FacebookStrategy({
  clientID: process.env.FACE_CLIENT_ID,
  clientSecret: process.env.FACE_SECRT,
  callbackURL: process.env.FACE_REDIRECT,
},
(accessToken, refreshToken, profile, cb) => {
  const { id } = profile;
  const randpss = password.randomPassword();
  request(`https://graph.facebook.com/v8.0/${id}?fields=email`, {
    'auth': {
      'bearer': accessToken
    }
  }, async (error, response, body) => {
      if (error) {
        return cb(error, null)
      }
      try {
        const bb = JSON.parse(body);
        const { email } = bb;
        const res = await Lobao_user.findOneAndUpdate({
          $or: [{'facebookId': id}, {'email': email}]
        }, {
            email,
            facebookId: id,
            randomPass: randpss,
            name: profile.displayName
          }, {
            new: true,
            upsert: true,
          });
        console.log(res._doc);
        cb(null, {...res._doc});
        } catch (e) {
          return cb(e.menssage, false)
      }
    });
  }
));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

module.exports = (app) => {
  app.use(passport.initialize());
  app.use(passport.session());
}
