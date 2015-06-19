var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var StatedMapUpdateMessage = function() {
  this.statedElements = [];
};

util.inherits(StatedMapUpdateMessage, BaseMessage);

StatedMapUpdateMessage.prototype.serialize = function(output) {
  this.serializeAs_StatedMapUpdateMessage(output);
};

StatedMapUpdateMessage.prototype.deserialize = function(input) {
  this.deserializeAs_StatedMapUpdateMessage(input);
};

StatedMapUpdateMessage.prototype.serializeAs_StatedMapUpdateMessage = function(output) {
  output.writeShort(this.statedElements.length);
  var _i1;
  while (_i1 < this.statedElements.length) {
    (this.statedElements[_i1]).serializeAs_StatedElement(output);
    _i1++;
  };
};

StatedMapUpdateMessage.prototype.deserializeAs_StatedMapUpdateMessage = function(input) {
  var _item1;
  var _statedElementsLen = input.readUnsignedShort();
  var _i1;
  while (_i1 < _statedElementsLen) {
    _item1 = new StatedElement();
    _item1.deserialize(input);
    this.statedElements.push(_item1);
    _i1++;
  };
};

StatedMapUpdateMessage.prototype.getMessageId = function() {
  return 5716;
};

StatedMapUpdateMessage.prototype.getClassName = function() {
  return 'StatedMapUpdateMessage';
};

module.exports.id = 5716;
module.exports.class = StatedMapUpdateMessage;