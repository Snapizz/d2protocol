var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var NotificationByServerMessage = function() {
  this.id = 0;
  this.parameters = [];
  this.forceOpen = false;
};

util.inherits(NotificationByServerMessage, BaseMessage);

NotificationByServerMessage.prototype.serialize = function(output) {
  this.serializeAs_NotificationByServerMessage(output);
};

NotificationByServerMessage.prototype.deserialize = function(input) {
  this.deserializeAs_NotificationByServerMessage(input);
};

NotificationByServerMessage.prototype.serializeAs_NotificationByServerMessage = function(output) {
  if (this.id < 0) {
    throw new Error("Forbidden value (" + this.id + ") on element id.");
  } else {
    param1.writeVarShort(this.id);
    param1.writeShort(this.parameters.length);
    var _loc2_ = 0;
    while (_loc2_ < this.parameters.length) {
      param1.writeUTF(this.parameters[_loc2_]);
      _loc2_++;
    }
    param1.writeBoolean(this.forceOpen);
    return;
  }
};

NotificationByServerMessage.prototype.deserializeAs_NotificationByServerMessage = function(input) {
  var _loc4_ = null;
  this.id = param1.readVarUhShort();
  if (this.id < 0) {
    throw new Error("Forbidden value (" + this.id + ") on element of NotificationByServerMessage.id.");
  } else {
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
      _loc4_ = param1.readUTF();
      this.parameters.push(_loc4_);
      _loc3_++;
    }
    this.forceOpen = param1.readBoolean();
    return;
  }
};

NotificationByServerMessage.prototype.getMessageId = function() {
  return 6103;
};

NotificationByServerMessage.prototype.getClassName = function() {
  return 'NotificationByServerMessage';
};

module.exports.id = 6103;
module.exports.class = NotificationByServerMessage;