var fs = require("fs");
var resolve = require("path").resolve;

/**
 * The importer
 * redirects imports to the mixin file
 *
 * @param path
 * @param prev
 * @param done
 * @returns {*}
 */
function importer(path, prev, done) {
  try {
    var stat = fs.lstatSync(__dirname + "/sass/" + path + ".scss");
    
    if (stat.isFile()) {
      done({
        file: resolve(__dirname + "/sass/" + path)
      });
    }
  } catch (e) {
    return done(null);
  }
}

module.exports = importer;