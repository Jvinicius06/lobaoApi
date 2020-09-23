const express = require('express');
const consign = require('consign');
const passport = require('passport');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'static')));

app.use(session({
  secret: process.env.SECRET
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());



consign()
  .include('middleware')
  .then('models')
  .then('rotes')
  .into(app);



module.exports = app;
