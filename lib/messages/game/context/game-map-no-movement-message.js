var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var GameMapNoMovementMessage = function() {

};

util.inherits(GameMapNoMovementMessage, BaseMessage);

GameMapNoMovementMessage.prototype.serialize = function(output) {
  this.serializeAs_GameMapNoMovementMessage(output);
};

GameMapNoMovementMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameMapNoMovementMessage(input);
};

GameMapNoMovementMessage.prototype.serializeAs_GameMapNoMovementMessage = function(param1) {

};

GameMapNoMovementMessage.prototype.deserializeAs_GameMapNoMovementMessage = function(param1) {

};

GameMapNoMovementMessage.prototype.getMessageId = function() {
  return 954;
};

GameMapNoMovementMessage.prototype.getClassName = function() {
  return 'GameMapNoMovementMessage';
};

module.exports.id = 954;
module.exports.class = GameMapNoMovementMessage;