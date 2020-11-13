const passport = require('passport');
const deeplink = require('node-deeplink');
const { Lobao_user } = require('../../modelsDB/lobao_user');

module.exports = (app) => {
  app.get('/login/facebook', (req, res, next) => {
    const { deviceId } = req.query;
    req.session.deviceId = deviceId;
    next();
  }, passport.authenticate('facebook', { scope: ['email'] }));

  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    async (req, res, next) => {
      const { deviceId, passport } = req.session;
      console.log(`req.session - `, req.session);
      if (deviceId && passport) {
        try {
          const res = await Lobao_user.findOneAndUpdate({ _id: passport.user._id }, { deviceId });
          next();
        } catch (e) {
          res.status(404).send({menssage: 'intenal server error!'});
        }
      } else next();
    }, (req, res) => {
      var ua = req.header('user-agent');
      if(/mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile|ipad|android|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i.test(ua)) {
        res.redirect(`/deeplink`);
      } else {
        res.redirect('/');
      }
    }
  );

  app.get('/deeplink', (req, res, next) => {
    const { passport } = req.session;
    let urlDeepLink = 'lobao://login';
    if (passport) {
      const { _id } = passport.user;
      urlDeepLink += `/${_id}`
    }
    (deeplink({
      url: urlDeepLink,
      fallback: urlDeepLink,
    }))(req, res, next)
  }
  );
}
