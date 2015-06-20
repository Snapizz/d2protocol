var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');

var GameServerInformations = require('../../types/connection/game-server-informations.js').class;

var ServerStatusUpdateMessage = function() {
  this.server = new GameServerInformations();
};

util.inherits(ServerStatusUpdateMessage, BaseMessage);

ServerStatusUpdateMessage.prototype.serialize = function(output) {
  this.serializeAs_ServerStatusUpdateMessage(output);
};

ServerStatusUpdateMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ServerStatusUpdateMessage(input);
};

ServerStatusUpdateMessage.prototype.serializeAs_ServerStatusUpdateMessage = function(param1) {
  this.server.serializeAs_GameServerInformations(param1);
};

ServerStatusUpdateMessage.prototype.deserializeAs_ServerStatusUpdateMessage = function(param1) {
  this.server = new GameServerInformations();
  this.server.deserialize(param1);
};

ServerStatusUpdateMessage.prototype.getMessageId = function() {
  return 50;
};

ServerStatusUpdateMessage.prototype.getClassName = function() {
  return 'ServerStatusUpdateMessage';
};

module.exports.id = 50;
module.exports.class = ServerStatusUpdateMessage;
module.exports.getInstance = function() {
  return new ServerStatusUpdateMessage();
};