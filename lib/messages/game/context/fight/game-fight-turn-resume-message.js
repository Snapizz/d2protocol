var d2com = require('d2com'),
  BaseMessage = require('./game-fight-turn-start-message.js').class,
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
  this.serializeAs_GameFightTurnStartMessage(output);
  if (this.remainingTime < 0) {
    throw (new Error((("Forbidden value (" + this.remainingTime) + ") on element remainingTime.")));
  };
  output.writeVarInt(this.remainingTime);
};

GameFightTurnResumeMessage.prototype.deserializeAs_GameFightTurnResumeMessage = function(input) {
  this.deserialize(input);
  this.remainingTime = input.readVarUhInt();
  if (this.remainingTime < 0) {
    throw (new Error((("Forbidden value (" + this.remainingTime) + ") on element of GameFightTurnResumeMessage.remainingTime.")));
  };
};

GameFightTurnResumeMessage.prototype.getMessageId = function() {
  return 6307;
};

GameFightTurnResumeMessage.prototype.getClassName = function() {
  return 'GameFightTurnResumeMessage';
};

module.exports.id = 6307;
module.exports.class = GameFightTurnResumeMessage;