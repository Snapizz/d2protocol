var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var GameFightLeaveMessage = function() {
  this.charId = 0;
};

util.inherits(GameFightLeaveMessage, BaseMessage);

GameFightLeaveMessage.prototype.serialize = function(output) {
  this.serializeAs_GameFightLeaveMessage(output);
};

GameFightLeaveMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightLeaveMessage(input);
};

GameFightLeaveMessage.prototype.serializeAs_GameFightLeaveMessage = function(param1) {
  param1.writeInt(this.charId);
};

GameFightLeaveMessage.prototype.deserializeAs_GameFightLeaveMessage = function(param1) {
  this.charId = param1.readInt();
};

GameFightLeaveMessage.prototype.getMessageId = function() {
  return 721;
};

GameFightLeaveMessage.prototype.getClassName = function() {
  return 'GameFightLeaveMessage';
};

module.exports.id = 721;
module.exports.class = GameFightLeaveMessage;
module.exports.getInstance = function() {
  return new GameFightLeaveMessage();
};