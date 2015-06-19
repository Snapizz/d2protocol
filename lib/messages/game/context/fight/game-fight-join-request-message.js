var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

GameFightJoinRequestMessage.prototype.serializeAs_GameFightJoinRequestMessage = function(output) {
  output.writeInt(this.fighterId);
  output.writeInt(this.fightId);
};

GameFightJoinRequestMessage.prototype.deserializeAs_GameFightJoinRequestMessage = function(input) {
  this.fighterId = input.readInt();
  this.fightId = input.readInt();
};

GameFightJoinRequestMessage.prototype.getMessageId = function() {
  return 701;
};

GameFightJoinRequestMessage.prototype.getClassName = function() {
  return 'GameFightJoinRequestMessage';
};

module.exports.id = 701;
module.exports.class = GameFightJoinRequestMessage;