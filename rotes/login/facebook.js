const passport = require('passport');
const deeplink = require('node-deeplink');
const { Lobao_user } = require('../../modelsDB/lobao_user');
const jwt = require("jsonwebtoken")

const secretKey = process.env.HASH

module.exports = (app) => {
  app.get('/login/facebook', passport.authenticate('facebook', { scope: ['email'] }));

  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/login' }), (req, res) => {
      var ua = req.header('user-agent');
      if(/mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile|ipad|android|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i.test(ua)) {
        const { passport } = req.session;
        if (passport) {
          const { _id } = passport.user;
          const token = jwt.sign({ _id }, secretKey, { expiresIn: '30d' })
         return res.redirect(`/deeplink/${token}`);
        }
        res.redirect(`/deeplink`);
      } else {
        res.redirect('/deeplink');
      }
    }
  );

  app.get(['/deeplink/:token', '/deeplink'], (req, res, next) => {
    // const { passport } = req.session;
    let urlDeepLink = 'lobao://token';
    if ('token' in req.params) {
      const { token } = req.params;
      urlDeepLink += `/${token}`;
    }
    (deeplink({
      url: urlDeepLink,
      fallback: urlDeepLink,
    }))(req, res, next)
  }
  );
}
