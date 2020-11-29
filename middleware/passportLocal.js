const { Strategy } = require('passport-local');
const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const { Lobao_user } = require('../modelsDB/lobao_user');


const authFields = {
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true,
};

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
 (email, password, done) => {
    Lobao_user.findOne({ email }, (err, user) => {
      console.log("User - ", user );
      if (err) {
        return done(null, false, { msg: 'Erro Interno!'})
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
          return done(null, false, { msg: 'Erro interno!' })
        });
    })
  }
))

passport.serializeUser((user, done) => {
  done(null, user._id)
});

passport.deserializeUser((id, done) => {
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

passport.use(new JwtStrategy(opts, (payload, done) => {
  User.findOne({ _id: payload._id }, (err, user) => {
    if (err) {
      return done(null, false, {status: false, msg: err})
    }
    if (!user) {
      return done(null, false)
    }
    return done(null, { status: true, id: user._id })
  })
}))

module.exports = (app) => {}
