var fs = require('fs');
const path = require('path');
const basename  = path.basename(__filename);
const db        = {};

/*
 * initializes all models and sources them as .model-name
 */
function loadALLfiles(path, db_) {
  fs
  .readdirSync(path)
  .filter(fileName => {
    if (fileName.indexOf('.') !== 0 && (fileName.slice(-3) === '.js')) {
      if (fileName !== basename) {
        let moduleName = fileName.split('.')[0];
        let dt = require(path + '/' + moduleName);
        let ex = {};
        for( key in dt )
        db_[key] = require(path + '/' + moduleName)[key];
      }
    } else {
      loadALLfiles(__dirname + '/' + fileName, db_[fileName] = {});
    }
  });
}

loadALLfiles(__dirname, db);

module.exports = db;
