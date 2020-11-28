const passport = require('passport');
const router = require('express').Router()
const bcrypt = require('bcrypt')

const { Lobao_user } = require('../../modelsDB/lobao_user');
const jwt = require("jsonwebtoken")
const secretKey = process.env.HASH
const saltRounds = 10

module.exports = (app) => {
  router.post('/', (req, res, next) => {
    passport.authenticate('local',
      { session: false },
      (err, user, info) => {
        if (err) {
          return res.status(500).json({ status: 'false', msg: err.message })
        }

        if (!user) {
          const { message } = info
          return res.status(401).json({ status: 'false', msg: message })
        }

        const { _id } = user
        const token = jwt.sign({ _id }, secretKey, { expiresIn: '1h' })

        res
          .cookie('jwt', token, {
            httpOnly: false,
            secure: false
          })
          .status(200)
          .send({ status: 'true', msg: "Succesful Login!" })
      })(req, res, next)
  })

  router.post("/register", (req, res) => {
    const { password, name, lastName, email } = req.body;

    bcrypt.hash(password, saltRounds, async (err, hash) => {
      if (err) {
        return res.status(501).json({ status: false, error: err });
      }
      await Lobao_user.create({ name, email, lastName, password: hash }, (err, newUser) => {
        if (err) {
          return res.status(400).json({ status: false, error: "Usuatio ja existe!" });
        }
        return res.status(200).json({ status: true, message: "usuario criado!" });
      })
    })
  })

  app.use('/login', router);
}
