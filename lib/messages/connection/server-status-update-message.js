var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ServerStatusUpdateMessage = function() {
  this.server;
};

util.inherits(ServerStatusUpdateMessage, BaseMessage);

ServerStatusUpdateMessage.prototype.serialize = function(output) {
  this.serializeAs_ServerStatusUpdateMessage(output);
};

ServerStatusUpdateMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ServerStatusUpdateMessage(input);
};

ServerStatusUpdateMessage.prototype.serializeAs_ServerStatusUpdateMessage = function(output) {
  this.server.serializeAs_GameServerInformations(output);
};

ServerStatusUpdateMessage.prototype.deserializeAs_ServerStatusUpdateMessage = function(input) {
  this.server = new GameServerInformations();
  this.server.deserialize(input);
};

ServerStatusUpdateMessage.prototype.getMessageId = function() {
  return 50;
};

ServerStatusUpdateMessage.prototype.getClassName = function() {
  return 'ServerStatusUpdateMessage';
};

module.exports.id = 50;
module.exports.class = ServerStatusUpdateMessage;