const path = require('path');

module.exports = (app) => {
  if (process.env.NODE_ENV !== 'development') {
    app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, '..', 'webpack', 'dist', 'index.html'));
    });
  }
}
