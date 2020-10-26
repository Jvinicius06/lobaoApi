const passport = require('passport');
const FacebookStrategy = require('passport-facebook')

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
  function(accessToken, refreshToken, profile, cb) {
    // console.log({accessToken, refreshToken, profile, cb})
    // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
    cb(null, {accessToken, refreshToken, profile});
  }
));
}
