const passport = require('passport');
const FacebookStrategy = require('passport-facebook')

module.exports = () => {
  passport.use(new FacebookStrategy({
    clientID: process.env.FACE_CLIENT_ID,
    clientSecret: process.env.FACE_SECRT,
    callbackURL: "http://localhost/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log({accessToken, refreshToken, profile, cb})
    // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
    cb(profile);
  }
));
}
