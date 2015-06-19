var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameFightStartMessage = function() {

};

util.inherits(GameFightStartMessage, BaseMessage);

GameFightStartMessage.prototype.serialize = function(output) {
  this.serializeAs_GameFightStartMessage(output);
};

GameFightStartMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightStartMessage(input);
};

GameFightStartMessage.prototype.serializeAs_GameFightStartMessage = function(output) {

};

GameFightStartMessage.prototype.deserializeAs_GameFightStartMessage = function(input) {

};

GameFightStartMessage.prototype.getMessageId = function() {
  return 712;
};

GameFightStartMessage.prototype.getClassName = function() {
  return 'GameFightStartMessage';
};

module.exports.id = 712;
module.exports.class = GameFightStartMessage;