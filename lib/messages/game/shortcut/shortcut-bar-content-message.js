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
  param1.writeByte(this.barType);
  param1.writeShort(this.shortcuts.length);
  var _loc2_ = 0;
  while (_loc2_ < this.shortcuts.length) {
    param1.writeShort((this.shortcuts[_loc2_]).getTypeId());
    (this.shortcuts[_loc2_]).serialize(param1);
    _loc2_++;
  }
};

ShortcutBarContentMessage.prototype.deserializeAs_ShortcutBarContentMessage = function(input) {
  var _loc4_ = 0;
  var _loc5_ = null;
  this.barType = param1.readByte();
  if (this.barType < 0) {
    throw new Error("Forbidden value (" + this.barType + ") on element of ShortcutBarContentMessage.barType.");
  } else {
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
      _loc4_ = param1.readUnsignedShort();
      _loc5_ = ProtocolTypeManager.getInstance(Shortcut, _loc4_);
      _loc5_.deserialize(param1);
      this.shortcuts.push(_loc5_);
      _loc3_++;
    }
    return;
  }
};

ShortcutBarContentMessage.prototype.getMessageId = function() {
  return 6231;
};

ShortcutBarContentMessage.prototype.getClassName = function() {
  return 'ShortcutBarContentMessage';
};

module.exports.id = 6231;
module.exports.class = ShortcutBarContentMessage;