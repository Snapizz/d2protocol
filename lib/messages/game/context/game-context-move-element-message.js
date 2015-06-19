var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameContextMoveElementMessage = function() {
  this.movement;
};

util.inherits(GameContextMoveElementMessage, BaseMessage);

GameContextMoveElementMessage.prototype.serialize = function(output) {
  this.serializeAs_GameContextMoveElementMessage(output);
};

GameContextMoveElementMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameContextMoveElementMessage(input);
};

GameContextMoveElementMessage.prototype.serializeAs_GameContextMoveElementMessage = function(output) {
  this.movement.serializeAs_EntityMovementInformations(output);
};

GameContextMoveElementMessage.prototype.deserializeAs_GameContextMoveElementMessage = function(input) {
  this.movement = new EntityMovementInformations();
  this.movement.deserialize(input);
};

GameContextMoveElementMessage.prototype.getMessageId = function() {
  return 253;
};

GameContextMoveElementMessage.prototype.getClassName = function() {
  return 'GameContextMoveElementMessage';
};

module.exports.id = 253;
module.exports.class = GameContextMoveElementMessage;