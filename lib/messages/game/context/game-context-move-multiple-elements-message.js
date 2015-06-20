var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

GameContextMoveMultipleElementsMessage.prototype.serializeAs_GameContextMoveMultipleElementsMessage = function(output) {
  output.writeShort(this.movements.length);
  var _i1 = 0;
  while (_i1 < this.movements.length) {
    (this.movements[_i1]).serializeAs_EntityMovementInformations(output);
    _i1++;
  };
};

GameContextMoveMultipleElementsMessage.prototype.deserializeAs_GameContextMoveMultipleElementsMessage = function(input) {
  var _item1;
  var _movementsLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _movementsLen) {
    _item1 = new EntityMovementInformations();
    _item1.deserialize(input);
    this.movements.push(_item1);
    _i1++;
  };
};

GameContextMoveMultipleElementsMessage.prototype.getMessageId = function() {
  return 254;
};

GameContextMoveMultipleElementsMessage.prototype.getClassName = function() {
  return 'GameContextMoveMultipleElementsMessage';
};

module.exports.id = 254;
module.exports.class = GameContextMoveMultipleElementsMessage;