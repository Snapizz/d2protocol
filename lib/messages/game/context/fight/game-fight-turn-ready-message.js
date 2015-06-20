var d2com = require('d2com'),
  BaseMessage = require('./game-fight-turn-ready-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var GameFightTurnReadyMessage = function() {
  this.isReady = false;
};

util.inherits(GameFightTurnReadyMessage, BaseMessage);

GameFightTurnReadyMessage.prototype.serialize = function(output) {
  this.serializeAs_GameFightTurnReadyMessage(output);
};

GameFightTurnReadyMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightTurnReadyMessage(input);
};

GameFightTurnReadyMessage.prototype.serializeAs_GameFightTurnReadyMessage = function(param1) {
  param1.writeBoolean(this.isReady);
};

GameFightTurnReadyMessage.prototype.deserializeAs_GameFightTurnReadyMessage = function(param1) {
  this.isReady = param1.readBoolean();
};

GameFightTurnReadyMessage.prototype.getMessageId = function() {
  return 716;
};

GameFightTurnReadyMessage.prototype.getClassName = function() {
  return 'GameFightTurnReadyMessage';
};

module.exports.id = 716;
module.exports.class = GameFightTurnReadyMessage;
module.exports.getInstance = function() {
  return new GameFightTurnReadyMessage();
};