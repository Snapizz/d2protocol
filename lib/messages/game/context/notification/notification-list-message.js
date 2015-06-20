var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var NotificationListMessage = function() {
  this.flags = [];
};

util.inherits(NotificationListMessage, BaseMessage);

NotificationListMessage.prototype.serialize = function(output) {
  this.serializeAs_NotificationListMessage(output);
};

NotificationListMessage.prototype.deserialize = function(input) {
  this.deserializeAs_NotificationListMessage(input);
};

NotificationListMessage.prototype.serializeAs_NotificationListMessage = function(param1) {
  param1.writeShort(this.flags.length);
  var _loc2_ = 0;
  while (_loc2_ < this.flags.length) {
    param1.writeVarInt(this.flags[_loc2_]);
    _loc2_++;
  }
};

NotificationListMessage.prototype.deserializeAs_NotificationListMessage = function(param1) {
  var _loc4_ = 0;
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = param1.readVarInt();
    this.flags.push(_loc4_);
    _loc3_++;
  }
};

NotificationListMessage.prototype.getMessageId = function() {
  return 6087;
};

NotificationListMessage.prototype.getClassName = function() {
  return 'NotificationListMessage';
};

module.exports.id = 6087;
module.exports.class = NotificationListMessage;