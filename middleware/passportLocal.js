const { Strategy } = require('passport-local');
const passportLocal = require('passport');
const passportJwt = require('passport');

const LocalStrategy = require('passport-local').Strategy
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const { Lobao_user } = require('../modelsDB/lobao_user');


const authFields = {
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true,
};

passportLocal.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
 (email, password, done) => {
    Lobao_user.findOne({ email }, (err, user) => {
      if (err) {
        return done(err, false, { msg: 'Erro Interno!'})
      }

      if (!user) {
        return done(null, false, { msg: 'Usuario ou Senha incorretos!'})
      }

      user.compare(password)
        .then(match => {

          if (!match) {
            return done(null, false, { msg: 'Usuario ou Senha incorretos!' })
          }

          return done(null, user)
        })
        .catch((e) => {
          return done(e, false, { msg: 'Erro interno!' })
        });
    })
  }
));

passportLocal.serializeUser((user, done) => {
  done(null, user._id)
});

passportLocal.deserializeUser((id, done) => {
  Lobao_user.findById({ _id: ObjectId(id) }, (err, user) => {
    if (err) {
      done(null, false, { error: err });
    } else {
      done(null, user);
    }
  });
});

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.HASH
}

passportLocal.use(new JwtStrategy(opts, (payload, done) => {
  Lobao_user.findOne({ _id: payload._id }, (err, user) => {
    if (err) {
      return done(null, false, {status: false, msg: err})
    }
    if (!user) {
      return done(null, false, {status: false, msg: 'Session not found!'})
    }
    return done(null, { status: true, user })
  })
}))

module.exports = (app) => {
  app.use(passportLocal.initialize());
  app.use(passportLocal.session());
}
