var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PartsListMessage = function() {
  this.parts = [];
};

util.inherits(PartsListMessage, BaseMessage);

PartsListMessage.prototype.serialize = function(output) {
  this.serializeAs_PartsListMessage(output);
};

PartsListMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartsListMessage(input);
};

PartsListMessage.prototype.serializeAs_PartsListMessage = function(output) {
  output.writeShort(this.parts.length);
  var _i1 = 0;
  while (_i1 < this.parts.length) {
    (this.parts[_i1]).serializeAs_ContentPart(output);
    _i1++;
  };
};

PartsListMessage.prototype.deserializeAs_PartsListMessage = function(input) {
  var _item1;
  var _partsLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _partsLen) {
    _item1 = new ContentPart();
    _item1.deserialize(input);
    this.parts.push(_item1);
    _i1++;
  };
};

PartsListMessage.prototype.getMessageId = function() {
  return 1502;
};

PartsListMessage.prototype.getClassName = function() {
  return 'PartsListMessage';
};

module.exports.id = 1502;
module.exports.class = PartsListMessage;