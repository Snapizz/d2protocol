var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameFightTurnStartPlayingMessage = function() {

};

util.inherits(GameFightTurnStartPlayingMessage, BaseMessage);

GameFightTurnStartPlayingMessage.prototype.serialize = function(output) {
  this.serializeAs_GameFightTurnStartPlayingMessage(output);
};

GameFightTurnStartPlayingMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightTurnStartPlayingMessage(input);
};

GameFightTurnStartPlayingMessage.prototype.serializeAs_GameFightTurnStartPlayingMessage = function(output) {

};

GameFightTurnStartPlayingMessage.prototype.deserializeAs_GameFightTurnStartPlayingMessage = function(input) {

};

GameFightTurnStartPlayingMessage.prototype.getMessageId = function() {
  return 6465;
};

GameFightTurnStartPlayingMessage.prototype.getClassName = function() {
  return 'GameFightTurnStartPlayingMessage';
};

module.exports.id = 6465;
module.exports.class = GameFightTurnStartPlayingMessage;