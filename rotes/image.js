const path = require('path');

module.exports = (app) => {
  app.get('/imagem/:imagPath', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'uploads', req.params.imagPath));
  });
}
