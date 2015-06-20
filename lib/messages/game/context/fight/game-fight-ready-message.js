var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var GameFightReadyMessage = function() {
  this.isReady = false;
};

util.inherits(GameFightReadyMessage, BaseMessage);

GameFightReadyMessage.prototype.serialize = function(output) {
  this.serializeAs_GameFightReadyMessage(output);
};

GameFightReadyMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightReadyMessage(input);
};

GameFightReadyMessage.prototype.serializeAs_GameFightReadyMessage = function(param1) {
  param1.writeBoolean(this.isReady);
};

GameFightReadyMessage.prototype.deserializeAs_GameFightReadyMessage = function(param1) {
  this.isReady = param1.readBoolean();
};

GameFightReadyMessage.prototype.getMessageId = function() {
  return 708;
};

GameFightReadyMessage.prototype.getClassName = function() {
  return 'GameFightReadyMessage';
};

module.exports.id = 708;
module.exports.class = GameFightReadyMessage;