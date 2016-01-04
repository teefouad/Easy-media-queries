var resolve = require("path").resolve;

/**
 * The compass importer
 * redirects compass imports to the mixin file
 *
 * @param path
 * @param _
 * @param done
 * @returns {*}
 */
function importer(path, _, done) {
  done({
    file: resolve(__dirname + "/sass/" + path)
  });
}

module.exports = importer;