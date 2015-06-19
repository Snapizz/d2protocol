var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ShortcutBarRefreshMessage = function() {
  this.barType = 0;
  this.shortcut;
};

util.inherits(ShortcutBarRefreshMessage, BaseMessage);

ShortcutBarRefreshMessage.prototype.serialize = function(output) {
  this.serializeAs_ShortcutBarRefreshMessage(output);
};

ShortcutBarRefreshMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ShortcutBarRefreshMessage(input);
};

ShortcutBarRefreshMessage.prototype.serializeAs_ShortcutBarRefreshMessage = function(output) {
  output.writeByte(this.barType);
  output.writeShort(this.shortcut.getTypeId());
  this.shortcut.serialize(output);
};

ShortcutBarRefreshMessage.prototype.deserializeAs_ShortcutBarRefreshMessage = function(input) {
  this.barType = input.readByte();
  if (this.barType < 0) {
    throw (new Error((("Forbidden value (" + this.barType) + ") on element of ShortcutBarRefreshMessage.barType.")));
  };
  var _id2 = input.readUnsignedShort();
  this.shortcut = ProtocolTypeManager.getInstance(Shortcut, _id2);
  this.shortcut.deserialize(input);
};

ShortcutBarRefreshMessage.prototype.getMessageId = function() {
  return 6229;
};

ShortcutBarRefreshMessage.prototype.getClassName = function() {
  return 'ShortcutBarRefreshMessage';
};

module.exports.id = 6229;
module.exports.class = ShortcutBarRefreshMessage;