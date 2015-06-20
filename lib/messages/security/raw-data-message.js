var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var RawDataMessage = function() {
  this.content;
};

util.inherits(RawDataMessage, BaseMessage);

RawDataMessage.prototype.serialize = function(output) {
  this.serializeAs_RawDataMessage(output);
};

RawDataMessage.prototype.deserialize = function(input) {
  this.deserializeAs_RawDataMessage(input);
};

RawDataMessage.prototype.serializeAs_RawDataMessage = function(output) {
  output.writeShort(this.content.length);
  var _i1 = 0;
  while (_i1 < this.content.length) {
    output.writeByte(this.content[_i1]);
    _i1++;
  };
};

RawDataMessage.prototype.deserializeAs_RawDataMessage = function(input) {
  var _contentLen = input.readUnsignedShort();
  input.readBytes(this.content, 0, _contentLen);
};

RawDataMessage.prototype.getMessageId = function() {
  return 6253;
};

RawDataMessage.prototype.getClassName = function() {
  return 'RawDataMessage';
};

module.exports.id = 6253;
module.exports.class = RawDataMessage;