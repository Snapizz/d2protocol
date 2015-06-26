var glob = require( 'glob' ),
    path = require( 'path' );

var EnumManager = module.exports = function () {
  var enums = {};
  var files = glob.sync(path.join(__dirname, 'enums/**/*.js'));
  files.forEach(function (file) {
    var e = require(file);
    var e_name = file.split('/').pop().replace('.js','');
    enums[e_name] = e;
  });
  enums['protocol-constants-enum'] = require('./protocol-constants-enum.js');
  enums['metadata'] = require('./metadata.js');

  return enums;
}
