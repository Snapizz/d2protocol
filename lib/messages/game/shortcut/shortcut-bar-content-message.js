var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ShortcutBarContentMessage = function() {
  this.barType = 0;
  this.shortcuts = [];
};

util.inherits(ShortcutBarContentMessage, BaseMessage);

ShortcutBarContentMessage.prototype.serialize = function(output) {
  this.serializeAs_ShortcutBarContentMessage(output);
};

ShortcutBarContentMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ShortcutBarContentMessage(input);
};

ShortcutBarContentMessage.prototype.serializeAs_ShortcutBarContentMessage = function(output) {
  output.writeByte(this.barType);
  output.writeShort(this.shortcuts.length);
  var _i2;
  while (_i2 < this.shortcuts.length) {
    output.writeShort((this.shortcuts[_i2]).getTypeId());
    (this.shortcuts[_i2]).serialize(output);
    _i2++;
  };
};

ShortcutBarContentMessage.prototype.deserializeAs_ShortcutBarContentMessage = function(input) {
  var _id2;
  var _item2;
  this.barType = input.readByte();
  if (this.barType < 0) {
    throw (new Error((("Forbidden value (" + this.barType) + ") on element of ShortcutBarContentMessage.barType.")));
  };
  var _shortcutsLen = input.readUnsignedShort();
  var _i2;
  while (_i2 < _shortcutsLen) {
    _id2 = input.readUnsignedShort();
    _item2 = ProtocolTypeManager.getInstance(Shortcut, _id2);
    _item2.deserialize(input);
    this.shortcuts.push(_item2);
    _i2++;
  };
};

ShortcutBarContentMessage.prototype.getMessageId = function() {
  return 6231;
};

ShortcutBarContentMessage.prototype.getClassName = function() {
  return 'ShortcutBarContentMessage';
};

module.exports.id = 6231;
module.exports.class = ShortcutBarContentMessage;