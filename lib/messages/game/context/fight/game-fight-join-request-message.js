var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var GameFightJoinRequestMessage = function() {
  this.fighterId = 0;
  this.fightId = 0;
};

util.inherits(GameFightJoinRequestMessage, BaseMessage);

GameFightJoinRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_GameFightJoinRequestMessage(output);
};

GameFightJoinRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightJoinRequestMessage(input);
};

GameFightJoinRequestMessage.prototype.serializeAs_GameFightJoinRequestMessage = function(param1) {
  param1.writeInt(this.fighterId);
  param1.writeInt(this.fightId);
};

GameFightJoinRequestMessage.prototype.deserializeAs_GameFightJoinRequestMessage = function(param1) {
  this.fighterId = param1.readInt();
  this.fightId = param1.readInt();
};

GameFightJoinRequestMessage.prototype.getMessageId = function() {
  return 701;
};

GameFightJoinRequestMessage.prototype.getClassName = function() {
  return 'GameFightJoinRequestMessage';
};

module.exports.id = 701;
module.exports.class = GameFightJoinRequestMessage;
module.exports.getInstance = function() {
  return new GameFightJoinRequestMessage();
};