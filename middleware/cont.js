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
    res.status(200).send(db.read());
  });

  app.use(async (req, res, next) => {
    await db.update('count', n => typeof n === 'number' ? n + 1 : 1)
            .write()
    let pp = req.path.replace(/\./g, '_');
    pp = pp.replace(/\//g, '.');
    await db.update(`path${pp}`, n => typeof n === 'number' ? n + 1 : 1)
            .write()
    next();
  });


}
