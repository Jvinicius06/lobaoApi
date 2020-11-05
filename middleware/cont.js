const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('count.json')
const db = low(adapter)


module.exports = (app) => {
  app.get('/count', async (req, res) => {
    if (req.query.delete == 'true') {
      await db.update('count', n => 0)
      .write()
    }
    res.status(200).send(db.value());
  });
  
  app.use(async (req, res, next) => {
    await db.update('count', n => n + 1)
            .write()
    next();
  });


}
