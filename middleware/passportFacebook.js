const passport = require('passport');
const FacebookStrategy = require('passport-facebook')
const request = require('request');
const { Lobao_user } = require('../modelsDB/lobao_user');
const jwt = require("jsonwebtoken")

const secretKey = process.env.HASH

module.exports = () => {

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  passport.use(new FacebookStrategy({
    clientID: process.env.FACE_CLIENT_ID,
    clientSecret: process.env.FACE_SECRT,
    callbackURL: process.env.FACE_REDIRECT,
  },
  (accessToken, refreshToken, profile, cb) => {
    console.log({accessToken, refreshToken, profile, cb})
    const { id } = profile;
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
          console.log('JSON - ', bb);
          const { email } = bb;
          const res = await Lobao_user.findOneAndUpdate({email}, {
              email,
              facebookId: id,
              name: profile.displayName
            }, {
              new: true,
              upsert: true,
            });
          const ss = res;
          cb(null, {...ss._doc});

          } catch (e) {
            return cb(e.menssage, null)
        }
      });
  }
));
}
