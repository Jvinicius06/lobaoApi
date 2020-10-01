require('dotenv').config()
const app = require('./app');
const mongoose = require('mongoose');

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD,
);

const db = mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
db.then((d) => {
  console.log('MongoDB connection!!');
  const PORT = process.env.PORT;

  app.listen(PORT, () => {
    console.log(`Servidor listado na porta - ${PORT}`);
  });
});
