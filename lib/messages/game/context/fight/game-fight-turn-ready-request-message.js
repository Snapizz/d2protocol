var d2com = require('d2com'),
  BaseMessage = require('./game-fight-turn-ready-request-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var GameFightTurnReadyRequestMessage = function() {
  this.id = 0;
};

util.inherits(GameFightTurnReadyRequestMessage, BaseMessage);

GameFightTurnReadyRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_GameFightTurnReadyRequestMessage(output);
};

GameFightTurnReadyRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightTurnReadyRequestMessage(input);
};

GameFightTurnReadyRequestMessage.prototype.serializeAs_GameFightTurnReadyRequestMessage = function(param1) {
  param1.writeInt(this.id);
};

GameFightTurnReadyRequestMessage.prototype.deserializeAs_GameFightTurnReadyRequestMessage = function(param1) {
  this.id = param1.readInt();
};

GameFightTurnReadyRequestMessage.prototype.getMessageId = function() {
  return 715;
};

GameFightTurnReadyRequestMessage.prototype.getClassName = function() {
  return 'GameFightTurnReadyRequestMessage';
};

module.exports.id = 715;
module.exports.class = GameFightTurnReadyRequestMessage;
module.exports.getInstance = function() {
  return new GameFightTurnReadyRequestMessage();
};