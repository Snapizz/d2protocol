var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ShortcutBarAddRequestMessage = function() {
  this.barType = 0;
  this.shortcut;
};

util.inherits(ShortcutBarAddRequestMessage, BaseMessage);

ShortcutBarAddRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_ShortcutBarAddRequestMessage(output);
};

ShortcutBarAddRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ShortcutBarAddRequestMessage(input);
};

ShortcutBarAddRequestMessage.prototype.serializeAs_ShortcutBarAddRequestMessage = function(output) {
  output.writeByte(this.barType);
  output.writeShort(this.shortcut.getTypeId());
  this.shortcut.serialize(output);
};

ShortcutBarAddRequestMessage.prototype.deserializeAs_ShortcutBarAddRequestMessage = function(input) {
  this.barType = input.readByte();
  if (this.barType < 0) {
    throw (new Error((("Forbidden value (" + this.barType) + ") on element of ShortcutBarAddRequestMessage.barType.")));
  };
  var _id2 = input.readUnsignedShort();
  this.shortcut = ProtocolTypeManager.getInstance(Shortcut, _id2);
  this.shortcut.deserialize(input);
};

ShortcutBarAddRequestMessage.prototype.getMessageId = function() {
  return 6225;
};

ShortcutBarAddRequestMessage.prototype.getClassName = function() {
  return 'ShortcutBarAddRequestMessage';
};

module.exports.id = 6225;
module.exports.class = ShortcutBarAddRequestMessage;