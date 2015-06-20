var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameFightTurnResumeMessage = function() {
  this.remainingTime = 0;
};

util.inherits(GameFightTurnResumeMessage, BaseMessage);

GameFightTurnResumeMessage.prototype.serialize = function(output) {
  this.serializeAs_GameFightTurnResumeMessage(output);
};

GameFightTurnResumeMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightTurnResumeMessage(input);
};

GameFightTurnResumeMessage.prototype.serializeAs_GameFightTurnResumeMessage = function(output) {
  this.serializeAs_GameFightTurnStartMessage(param1);
  if (this.remainingTime < 0) {
    throw new Error("Forbidden value (" + this.remainingTime + ") on element remainingTime.");
  } else {
    param1.writeVarInt(this.remainingTime);
    return;
  }
};

GameFightTurnResumeMessage.prototype.deserializeAs_GameFightTurnResumeMessage = function(input) {
  this.deserialize(param1);
  this.remainingTime = param1.readVarUhInt();
  if (this.remainingTime < 0) {
    throw new Error("Forbidden value (" + this.remainingTime + ") on element of GameFightTurnResumeMessage.remainingTime.");
  } else {
    return;
  }
};

GameFightTurnResumeMessage.prototype.getMessageId = function() {
  return 6307;
};

GameFightTurnResumeMessage.prototype.getClassName = function() {
  return 'GameFightTurnResumeMessage';
};

module.exports.id = 6307;
module.exports.class = GameFightTurnResumeMessage;