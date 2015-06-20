var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var IgnoredListMessage = function() {
  this.ignoredList = [];
};

util.inherits(IgnoredListMessage, BaseMessage);

IgnoredListMessage.prototype.serialize = function(output) {
  this.serializeAs_IgnoredListMessage(output);
};

IgnoredListMessage.prototype.deserialize = function(input) {
  this.deserializeAs_IgnoredListMessage(input);
};

IgnoredListMessage.prototype.serializeAs_IgnoredListMessage = function(output) {
  param1.writeShort(this.ignoredList.length);
  var _loc2_ = 0;
  while (_loc2_ < this.ignoredList.length) {
    param1.writeShort((this.ignoredList[_loc2_]).getTypeId());
    (this.ignoredList[_loc2_]).serialize(param1);
    _loc2_++;
  }
};

IgnoredListMessage.prototype.deserializeAs_IgnoredListMessage = function(input) {
  var _loc4_ = 0;
  var _loc5_ = null;
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = param1.readUnsignedShort();
    _loc5_ = ProtocolTypeManager.getInstance(IgnoredInformations, _loc4_);
    _loc5_.deserialize(param1);
    this.ignoredList.push(_loc5_);
    _loc3_++;
  }
};

IgnoredListMessage.prototype.getMessageId = function() {
  return 5674;
};

IgnoredListMessage.prototype.getClassName = function() {
  return 'IgnoredListMessage';
};

module.exports.id = 5674;
module.exports.class = IgnoredListMessage;