const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const fs = require('fs')

const path = 'count.json'
const adapter = new FileSync(path)
const db = low(adapter)


module.exports = (app) => {
  app.get('/count', async (req, res) => {
    if (req.query.delete == 'true') {
      try {
        fs.unlinkSync(path)
        //file removed
      } catch(err) {
        console.error(err)
      }
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
