const passport = require('passport');
const router = require('express').Router()
const bcrypt = require('bcrypt')

const { Lobao_user } = require('../../modelsDB/lobao_user');
const jwt = require("jsonwebtoken")
const secretKey = process.env.HASH
const saltRounds = 10

module.exports = (app) => {
  app.use('/login', router);

  router.post('/', (req, res, next) => {
    passport.authenticate('local',
      { session: false },
      (err, user, info) => {
        if (err || !user) {
          return res.status(400).json({
            status: 'false',
            msg: (info ? info.message : 'Login failed')
          });
        }
        req.login(user, {session: false}, (err) => {
          if (err) {
            return res.status(400).send(err);
          }
          const { _id } = user;
          const token = jwt.sign({ _id }, secretKey, { expiresIn: '1h' })

          res
            .status(200)
            .send({ status: 'true', token });
          });
      })(req, res, next)
  })

  router.post("/register", (req, res) => {
    const { password, name, lastName, email } = req.body;

    bcrypt.hash(password, saltRounds, async (err, hash) => {
      if (err) {
        return res.status(501).json({ status: false, msg: 'Erro interno' });
      }
      await Lobao_user.create({ name, email, lastName, password: hash }, (err, newUser) => {
        if (err) {
          return res.status(400).json({ status: false, msg: "Usuatio ja existe!" });
        }
        return res.status(200).json({ status: true, msg: "usuario criado!" });
      })
    })
  });
}
