const
  express = require('express')
  app = express();

app.use(express.static('./../dist/'));

app.all('/', (req, res) => {
  res.sendFile('./../dist/index.html');
});

app.listen(81);
