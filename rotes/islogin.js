const path = require('path');
const passport = require('passport');

module.exports = (app) => {

  app.all('/islogin', passport.authenticate('jwt', {session: false}), (req, res) => {
    if (req.isAuthenticated()) {
      res.status(200).json({ status: true });
    } else {
      res.status(200).json({ status: false });
    }
  });
  
}
