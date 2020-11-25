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
  async function (email, password, done) {
    await Lobao_user.findOne({ email }, (err, user) => {
      console.log("User - ", user );
      if (err) {
        return done(err)
      }

      if (!user) {
        return done(null, false, { message: 'Usuario ou Senha incorretos!'})
      }

      user.compare(password)
        .then(match => {

          if (!match) {
            return done(null, false, { message: 'Usuario ou Senha incorretos!' })
          }

          return done(null, user)
        })
        .catch((e) => {
          return done(null, false, { message: 'Erro interno!' })
        });
    })
  }
))

passport.serializeUser((user, done) => {
  done(null, user._id)
})

passport.deserializeUser(async (id, done) => {
  await Lobao_user.findById({ _id: ObjectId(id) }, (err, user) => {
    done(err, user)
  })
})

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.HASH
}

passport.use(new JwtStrategy(opts, async (payload, done) => {
  await User.findOne({ _id: payload._id }, (err, user) => {
    if (err) {
      return done(err, false)
    }
    if (!user) {
      return done(null, false)
    }
    return done(null, { id: user._id })
  })
}))

module.exports = (app) => {
    app.use(passport.initialize())
}
