var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameFightTurnStartMessage = function() {
  this.id = 0;
  this.waitTime = 0;
};

util.inherits(GameFightTurnStartMessage, BaseMessage);

GameFightTurnStartMessage.prototype.serialize = function(output) {
  this.serializeAs_GameFightTurnStartMessage(output);
};

GameFightTurnStartMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightTurnStartMessage(input);
};

GameFightTurnStartMessage.prototype.serializeAs_GameFightTurnStartMessage = function(output) {
  output.writeInt(this.id);
  if (this.waitTime < 0) {
    throw (new Error((("Forbidden value (" + this.waitTime) + ") on element waitTime.")));
  };
  output.writeVarInt(this.waitTime);
};

GameFightTurnStartMessage.prototype.deserializeAs_GameFightTurnStartMessage = function(input) {
  this.id = input.readInt();
  this.waitTime = input.readVarUhInt();
  if (this.waitTime < 0) {
    throw (new Error((("Forbidden value (" + this.waitTime) + ") on element of GameFightTurnStartMessage.waitTime.")));
  };
};

GameFightTurnStartMessage.prototype.getMessageId = function() {
  return 714;
};

GameFightTurnStartMessage.prototype.getClassName = function() {
  return 'GameFightTurnStartMessage';
};

module.exports.id = 714;
module.exports.class = GameFightTurnStartMessage;