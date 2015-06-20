var d2com = require('d2com'),
  BaseMessage = require('./game-context-move-multiple-elements-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var GameContextMoveMultipleElementsMessage = function() {
  this.movements = [];
};

util.inherits(GameContextMoveMultipleElementsMessage, BaseMessage);

GameContextMoveMultipleElementsMessage.prototype.serialize = function(output) {
  this.serializeAs_GameContextMoveMultipleElementsMessage(output);
};

GameContextMoveMultipleElementsMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameContextMoveMultipleElementsMessage(input);
};

GameContextMoveMultipleElementsMessage.prototype.serializeAs_GameContextMoveMultipleElementsMessage = function(param1) {
  param1.writeShort(this.movements.length);
  var _loc2_ = 0;
  while (_loc2_ < this.movements.length) {
    (this.movements[_loc2_]).serializeAs_EntityMovementInformations(param1);
    _loc2_++;
  }
};

GameContextMoveMultipleElementsMessage.prototype.deserializeAs_GameContextMoveMultipleElementsMessage = function(param1) {
  var _loc4_ = null;
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = new EntityMovementInformations();
    _loc4_.deserialize(param1);
    this.movements.push(_loc4_);
    _loc3_++;
  }
};

GameContextMoveMultipleElementsMessage.prototype.getMessageId = function() {
  return 254;
};

GameContextMoveMultipleElementsMessage.prototype.getClassName = function() {
  return 'GameContextMoveMultipleElementsMessage';
};

module.exports.id = 254;
module.exports.class = GameContextMoveMultipleElementsMessage;
module.exports.getInstance = function() {
  return new GameContextMoveMultipleElementsMessage();
};