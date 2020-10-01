const express = require('express');
const consign = require('consign');
const passport = require('passport');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');

const app = express();

app.use(session({
  secret: process.env.SECRET
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

if (process.env.NODE_ENV !== 'development') {
  app.use((req, res, next) => {
    if ((req.headers['x-forwarded-proto'] || '').endsWith('http')) {
      res.redirect(`https://${req.headers.host}${req.url}`);
    } else {
      next();
    }
  });
}

consign()
  .include('middleware')
  .then('models')
  .then('rotes')
  .into(app);

  if (process.env.NODE_ENV === 'development') {
    const { createProxyMiddleware } = require('http-proxy-middleware'); // eslint-disable-line import/no-extraneous-dependencies, global-require
    const options = {
      target: 'http://localhost:3000',
      changeOrigin: true,
      ws: true,
      pathRewrite: { '/': '/' },
      router: { localhost: 'http://localhost:3000' },
    };
    const exampleProxy = createProxyMiddleware(options);
    app.use('/', exampleProxy);
  } else {
    app.use(express.static(path.join(__dirname, 'webpack', 'dist')));

    app.use(express.static(path.join(__dirname, 'static')));
  }

module.exports = app;
