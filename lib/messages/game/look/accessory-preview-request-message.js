var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var AccessoryPreviewRequestMessage = function() {
  this.genericId = [];
};

util.inherits(AccessoryPreviewRequestMessage, BaseMessage);

AccessoryPreviewRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_AccessoryPreviewRequestMessage(output);
};

AccessoryPreviewRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AccessoryPreviewRequestMessage(input);
};

AccessoryPreviewRequestMessage.prototype.serializeAs_AccessoryPreviewRequestMessage = function(output) {
  param1.writeShort(this.genericId.length);
  var _loc2_ = 0;
  while (_loc2_ < this.genericId.length) {
    if (this.genericId[_loc2_] < 0) {
      throw new Error("Forbidden value (" + this.genericId[_loc2_] + ") on element 1 (starting at 1) of genericId.");
    } else {
      param1.writeVarShort(this.genericId[_loc2_]);
      _loc2_++;
      continue;
    }
  }
};

AccessoryPreviewRequestMessage.prototype.deserializeAs_AccessoryPreviewRequestMessage = function(input) {
  var _loc4_ = 0;
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = param1.readVarUhShort();
    if (_loc4_ < 0) {
      throw new Error("Forbidden value (" + _loc4_ + ") on elements of genericId.");
    } else {
      this.genericId.push(_loc4_);
      _loc3_++;
      continue;
    }
  }
};

AccessoryPreviewRequestMessage.prototype.getMessageId = function() {
  return 6518;
};

AccessoryPreviewRequestMessage.prototype.getClassName = function() {
  return 'AccessoryPreviewRequestMessage';
};

module.exports.id = 6518;
module.exports.class = AccessoryPreviewRequestMessage;