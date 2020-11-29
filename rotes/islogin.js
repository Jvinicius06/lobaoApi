const path = require('path');

module.exports = (app) => {
  app.all('/islogin', (req, res) => {
    const { user } = req;
    console.log(user);
    if (typeof user !== 'undefined') {
      res.status(200).json({ status: true });
    } else {
      res.status(200).json({ status: false });
    }
  });
}
