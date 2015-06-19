var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var KrosmasterInventoryMessage = function() {
  this.figures = [];
};

util.inherits(KrosmasterInventoryMessage, BaseMessage);

KrosmasterInventoryMessage.prototype.serialize = function(output) {
  this.serializeAs_KrosmasterInventoryMessage(output);
};

KrosmasterInventoryMessage.prototype.deserialize = function(input) {
  this.deserializeAs_KrosmasterInventoryMessage(input);
};

KrosmasterInventoryMessage.prototype.serializeAs_KrosmasterInventoryMessage = function(output) {
  output.writeShort(this.figures.length);
  var _i1;
  while (_i1 < this.figures.length) {
    (this.figures[_i1]).serializeAs_KrosmasterFigure(output);
    _i1++;
  };
};

KrosmasterInventoryMessage.prototype.deserializeAs_KrosmasterInventoryMessage = function(input) {
  var _item1;
  var _figuresLen = input.readUnsignedShort();
  var _i1;
  while (_i1 < _figuresLen) {
    _item1 = new KrosmasterFigure();
    _item1.deserialize(input);
    this.figures.push(_item1);
    _i1++;
  };
};

KrosmasterInventoryMessage.prototype.getMessageId = function() {
  return 6350;
};

KrosmasterInventoryMessage.prototype.getClassName = function() {
  return 'KrosmasterInventoryMessage';
};

module.exports.id = 6350;
module.exports.class = KrosmasterInventoryMessage;