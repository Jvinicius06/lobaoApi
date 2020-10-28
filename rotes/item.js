const multer = require('multer');
const { Lobao_item }  = require('../modelsDB/lobao_item');
const randoString = require('random-base64-string');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const { originalname } = file;
    const type = originalname.substring(originalname.lastIndexOf('.'));
    const name = randoString(25);
    cb(null, `${name}${type}`);
  },
});


const upload = multer({ storage });

module.exports = (app) => {

  app.get('/item/:id', (req, res) => {
    try {
      const { id } = req.params;
      Lobao_item.find({_id: id}, (err, doc) => {
        if (err) return new Throw(err);
        res.status(200).send(doc);
      });
    } catch (e) {
      res.status(500).send(JSON.stringify(e));
    }
  });

  app.get('/items', (req, res) => {
    try {
      Lobao_item.find({}, (err, doc) => {
        if (err) return new Throw(err);
        res.status(200).send(doc);
      });
    } catch (e) {
      res.status(500).send(JSON.stringify(e));
    }
  });

  app.delete('/item/:id', (req, res) => {
    try {
      const { id } = req.params;
      Lobao_item.deleteOne({ _id: id }, (err) => {
        if (err) throw new Error(err);
        res.status(200).send({ status: true, data: {} });
      });
    } catch (e) {
      res.status(403).send({ status: false, data: e.message });
    }
  });

  app.post('/item', upload.single('image'), (req, res) => {
    try {
      const { body } = req;
      const myBody = {
        ...body,
        marks: body.marks.split(','),
        image_path: req.file.path,
      };
      var newImage = new Lobao_item(myBody);
      newImage.save((err) => {
        if (err) throw new Error(err);
        res.status(200).send({ status: true, data: {} });
      });
    } catch (e) {
      res.status(403).send({ status: false, data: e.message });
    }
  });
}
