module.exports = {
  messages: require('./lib/message-receiver.js')(),
  types: require('./lib/protocol-type-manager.js')(),
  enums: require('./lib/enum-manager.js')()
};
