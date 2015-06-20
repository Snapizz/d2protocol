var d2com = require('d2com'),
  BaseMessage = require('./check-integrity-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
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

CheckIntegrityMessage.prototype.serializeAs_CheckIntegrityMessage = function(param1) {
  param1.writeVarInt(this.data.length);
  var _loc2_ = 0;
  while (_loc2_ < this.data.length) {
    param1.writeByte(this.data[_loc2_]);
    _loc2_++;
  }
};

CheckIntegrityMessage.prototype.deserializeAs_CheckIntegrityMessage = function(param1) {
  var _loc4_ = 0;
  var _loc2_ = param1.readVarInt();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = param1.readByte();
    this.data.push(_loc4_);
    _loc3_++;
  }
};

CheckIntegrityMessage.prototype.getMessageId = function() {
  return 6372;
};

CheckIntegrityMessage.prototype.getClassName = function() {
  return 'CheckIntegrityMessage';
};

module.exports.id = 6372;
module.exports.class = CheckIntegrityMessage;
module.exports.getInstance = function() {
  return new CheckIntegrityMessage();
};