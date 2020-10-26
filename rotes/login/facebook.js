const passport = require('passport');

module.exports = (app) => {
  app.get('/login/facebook', passport.authenticate('facebook', { scope: ['email'] }));

  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    (req, res) => {
      var ua = req.header('user-agent');
      // Check the user-agent string to identyfy the device.
      if(/mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile|ipad|android|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i.test(ua)) {
        console.log('Redirect Mobile');
        res.redirect(`app://lobao/login/1823981236712893y12367128`);
      } else {
        console.log('Redirect Page');
        res.redirect('/');
      }
    }
  )
}
