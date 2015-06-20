var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameContextRemoveMultipleElementsMessage = function() {
  this.id = [];
};

util.inherits(GameContextRemoveMultipleElementsMessage, BaseMessage);

GameContextRemoveMultipleElementsMessage.prototype.serialize = function(output) {
  this.serializeAs_GameContextRemoveMultipleElementsMessage(output);
};

GameContextRemoveMultipleElementsMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameContextRemoveMultipleElementsMessage(input);
};

GameContextRemoveMultipleElementsMessage.prototype.serializeAs_GameContextRemoveMultipleElementsMessage = function(output) {
  output.writeShort(this.id.length);
  var _i1 = 0;
  while (_i1 < this.id.length) {
    output.writeInt(this.id[_i1]);
    _i1++;
  };
};

GameContextRemoveMultipleElementsMessage.prototype.deserializeAs_GameContextRemoveMultipleElementsMessage = function(input) {
  var _val1 = 0;
  var _idLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _idLen) {
    _val1 = input.readInt();
    this.id.push(_val1);
    _i1++;
  };
};

GameContextRemoveMultipleElementsMessage.prototype.getMessageId = function() {
  return 252;
};

GameContextRemoveMultipleElementsMessage.prototype.getClassName = function() {
  return 'GameContextRemoveMultipleElementsMessage';
};

module.exports.id = 252;
module.exports.class = GameContextRemoveMultipleElementsMessage;