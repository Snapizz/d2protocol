var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var CheckIntegrityMessage = function() {
  this.data = [];
};

util.inherits(CheckIntegrityMessage, BaseMessage);

CheckIntegrityMessage.prototype.serialize = function(output) {
  this.serializeAs_CheckIntegrityMessage(output);
};

CheckIntegrityMessage.prototype.deserialize = function(input) {
  this.deserializeAs_CheckIntegrityMessage(input);
};

CheckIntegrityMessage.prototype.serializeAs_CheckIntegrityMessage = function(output) {
  output.writeShort(this.data.length);
  var _i1;
  while (_i1 < this.data.length) {
    output.writeByte(this.data[_i1]);
    _i1++;
  };
};

CheckIntegrityMessage.prototype.deserializeAs_CheckIntegrityMessage = function(input) {
  var _val1;
  var _dataLen = input.readUnsignedShort();
  var _i1;
  while (_i1 < _dataLen) {
    _val1 = input.readByte();
    this.data.push(_val1);
    _i1++;
  };
};

CheckIntegrityMessage.prototype.getMessageId = function() {
  return 6372;
};

CheckIntegrityMessage.prototype.getClassName = function() {
  return 'CheckIntegrityMessage';
};

module.exports.id = 6372;
module.exports.class = CheckIntegrityMessage;