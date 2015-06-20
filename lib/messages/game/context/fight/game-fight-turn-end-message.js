var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var GameFightTurnEndMessage = function() {
  this.id = 0;
};

util.inherits(GameFightTurnEndMessage, BaseMessage);

GameFightTurnEndMessage.prototype.serialize = function(output) {
  this.serializeAs_GameFightTurnEndMessage(output);
};

GameFightTurnEndMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightTurnEndMessage(input);
};

GameFightTurnEndMessage.prototype.serializeAs_GameFightTurnEndMessage = function(param1) {
  param1.writeInt(this.id);
};

GameFightTurnEndMessage.prototype.deserializeAs_GameFightTurnEndMessage = function(param1) {
  this.id = param1.readInt();
};

GameFightTurnEndMessage.prototype.getMessageId = function() {
  return 719;
};

GameFightTurnEndMessage.prototype.getClassName = function() {
  return 'GameFightTurnEndMessage';
};

module.exports.id = 719;
module.exports.class = GameFightTurnEndMessage;
module.exports.getInstance = function() {
  return new GameFightTurnEndMessage();
};