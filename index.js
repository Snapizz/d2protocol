var glob = require('glob'),
    path = require('path');

var d2protocol = {
  messageReceiver: require('./lib/message-receiver.js'),
  protocolTypeManager: require('./lib/protocol-type-manager.js')
};

module.exports = d2protocol;

var files = glob.sync(path.join(__dirname, 'lib/enums/**/*.js'));

files.forEach(function (file) {
  var e = require(file);
  d2protocol[path.basename(file, '.js')] = e;
});