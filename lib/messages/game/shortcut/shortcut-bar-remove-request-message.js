var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var ShortcutBarRemoveRequestMessage = function() {
  this.barType = 0;
  this.slot = 0;
};

util.inherits(ShortcutBarRemoveRequestMessage, BaseMessage);

ShortcutBarRemoveRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_ShortcutBarRemoveRequestMessage(output);
};

ShortcutBarRemoveRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ShortcutBarRemoveRequestMessage(input);
};

ShortcutBarRemoveRequestMessage.prototype.serializeAs_ShortcutBarRemoveRequestMessage = function(param1) {
  param1.writeByte(this.barType);
  if (this.slot < 0 || this.slot > 99) {
    throw new Error("Forbidden value (" + this.slot + ") on element slot.");
  } else {
    param1.writeByte(this.slot);
    return;
  }
};

ShortcutBarRemoveRequestMessage.prototype.deserializeAs_ShortcutBarRemoveRequestMessage = function(param1) {
  this.barType = param1.readByte();
  if (this.barType < 0) {
    throw new Error("Forbidden value (" + this.barType + ") on element of ShortcutBarRemoveRequestMessage.barType.");
  } else {
    this.slot = param1.readByte();
    if (this.slot < 0 || this.slot > 99) {
      throw new Error("Forbidden value (" + this.slot + ") on element of ShortcutBarRemoveRequestMessage.slot.");
    } else {
      return;
    }
  }
};

ShortcutBarRemoveRequestMessage.prototype.getMessageId = function() {
  return 6228;
};

ShortcutBarRemoveRequestMessage.prototype.getClassName = function() {
  return 'ShortcutBarRemoveRequestMessage';
};

module.exports.id = 6228;
module.exports.class = ShortcutBarRemoveRequestMessage;
module.exports.getInstance = function() {
  return new ShortcutBarRemoveRequestMessage();
};