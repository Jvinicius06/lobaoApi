const path = require('path');

module.exports = (app) => {
  app.get('/imagem/:imagPath', (req, res) => {
    // console.log();
    res.sendFile(path.join(__dirname, '..', 'uploads', req.params.imagPath));
  });
}