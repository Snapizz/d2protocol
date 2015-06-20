var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var EnabledChannelsMessage = function() {
  this.channels = [];
  this.disallowed = [];
};

util.inherits(EnabledChannelsMessage, BaseMessage);

EnabledChannelsMessage.prototype.serialize = function(output) {
  this.serializeAs_EnabledChannelsMessage(output);
};

EnabledChannelsMessage.prototype.deserialize = function(input) {
  this.deserializeAs_EnabledChannelsMessage(input);
};

EnabledChannelsMessage.prototype.serializeAs_EnabledChannelsMessage = function(param1) {
  param1.writeShort(this.channels.length);
  var _loc2_ = 0;
  while (_loc2_ < this.channels.length) {
    param1.writeByte(this.channels[_loc2_]);
    _loc2_++;
  }
  param1.writeShort(this.disallowed.length);
  var _loc3_ = 0;
  while (_loc3_ < this.disallowed.length) {
    param1.writeByte(this.disallowed[_loc3_]);
    _loc3_++;
  }
};

EnabledChannelsMessage.prototype.deserializeAs_EnabledChannelsMessage = function(param1) {
  var _loc6_ = 0;
  var _loc7_ = 0;
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc6_ = param1.readByte();
    if (_loc6_ < 0) {
      throw new Error("Forbidden value (" + _loc6_ + ") on elements of channels.");
    } else {
      this.channels.push(_loc6_);
      _loc3_++;
      continue;
    }
  }
  var _loc4_ = param1.readUnsignedShort();
  var _loc5_ = 0;
  while (_loc5_ < _loc4_) {
    _loc7_ = param1.readByte();
    if (_loc7_ < 0) {
      throw new Error("Forbidden value (" + _loc7_ + ") on elements of disallowed.");
    } else {
      this.disallowed.push(_loc7_);
      _loc5_++;
      continue;
    }
  }
};

EnabledChannelsMessage.prototype.getMessageId = function() {
  return 892;
};

EnabledChannelsMessage.prototype.getClassName = function() {
  return 'EnabledChannelsMessage';
};

module.exports.id = 892;
module.exports.class = EnabledChannelsMessage;
module.exports.getInstance = function() {
  return new EnabledChannelsMessage();
};