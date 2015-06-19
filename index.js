var glob = require('glob'),
    path = require('path');

var d2protocol = {
  messageReceiver: require('./lib/message-receiver.js'),
  protocolTypeManager: require('./lib/protocol-type-manager.js')
};

module.exports = d2protocol;

glob(path.join(__dirname, 'enums/**/*.js'), function( err, files ) {
  if(err){
    throw err;
  }
  files.forEach(function (file) {
    var e = require(file);
    d2protocol[path.basename(file, '.js')] = e;
  });
});