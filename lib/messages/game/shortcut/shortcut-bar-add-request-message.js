var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var Shortcut = require('../../../types/game/shortcut/shortcut.js');

var ShortcutBarAddRequestMessage = function() {
  this.barType = 0;
  this.shortcut = new Shortcut();
};

util.inherits(ShortcutBarAddRequestMessage, BaseMessage);

ShortcutBarAddRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_ShortcutBarAddRequestMessage(output);
};

ShortcutBarAddRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ShortcutBarAddRequestMessage(input);
};

ShortcutBarAddRequestMessage.prototype.serializeAs_ShortcutBarAddRequestMessage = function(param1) {
  param1.writeByte(this.barType);
  param1.writeShort(this.shortcut.getTypeId());
  this.shortcut.serialize(param1);
};

ShortcutBarAddRequestMessage.prototype.deserializeAs_ShortcutBarAddRequestMessage = function(param1) {
  this.barType = param1.readByte();
  if (this.barType < 0) {
    throw new Error("Forbidden value (" + this.barType + ") on element of ShortcutBarAddRequestMessage.barType.");
  } else {
    var _loc2_ = param1.readUnsignedShort();
    this.shortcut = ProtocolTypeManager.getInstance(Shortcut, _loc2_);
    this.shortcut.deserialize(param1);
    return;
  }
};

ShortcutBarAddRequestMessage.prototype.getMessageId = function() {
  return 6225;
};

ShortcutBarAddRequestMessage.prototype.getClassName = function() {
  return 'ShortcutBarAddRequestMessage';
};

module.exports.id = 6225;
module.exports.class = ShortcutBarAddRequestMessage;