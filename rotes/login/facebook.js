const passport = require('passport');
const deeplink = require('node-deeplink');

module.exports = (app) => {
  app.get('/login/facebook', passport.authenticate('facebook', { scope: ['email'] }));

  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    (req, res) => {
      console.log('/auth/facebook/callback - ', req.sessionID);

      var ua = req.header('user-agent');
      // Check the user-agent string to identyfy the device.
      if(/mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile|ipad|android|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i.test(ua)) {
        console.log('Redirect Mobile');
        res.redirect(`lobao://lobao/`);
      } else {
        console.log('Redirect Page');
        res.redirect('/');
      }
    }
  )
  // app.get('/deeplink', (req, res) => {
  //   res.redirect(`/open?key=${req.url}`);
  //
  // })

  app.get('/deeplink', deeplink({
      url: 'lobao://lobao',
      fallback: 'lobao://lobao',
      // android_package_name: 'com.floriculturalobao',
    })
  );
}
