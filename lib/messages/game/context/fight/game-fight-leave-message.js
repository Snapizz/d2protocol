var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

GameFightLeaveMessage.prototype.serializeAs_GameFightLeaveMessage = function(output) {
  param1.writeInt(this.charId);
};

GameFightLeaveMessage.prototype.deserializeAs_GameFightLeaveMessage = function(input) {
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