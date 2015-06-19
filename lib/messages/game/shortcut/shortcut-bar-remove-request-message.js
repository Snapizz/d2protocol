var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

ShortcutBarRemoveRequestMessage.prototype.serializeAs_ShortcutBarRemoveRequestMessage = function(output) {
  output.writeByte(this.barType);
  if ((((this.slot < 0)) || ((this.slot > 99)))) {
    throw (new Error((("Forbidden value (" + this.slot) + ") on element slot.")));
  };
  output.writeByte(this.slot);
};

ShortcutBarRemoveRequestMessage.prototype.deserializeAs_ShortcutBarRemoveRequestMessage = function(input) {
  this.barType = input.readByte();
  if (this.barType < 0) {
    throw (new Error((("Forbidden value (" + this.barType) + ") on element of ShortcutBarRemoveRequestMessage.barType.")));
  };
  this.slot = input.readByte();
  if ((((this.slot < 0)) || ((this.slot > 99)))) {
    throw (new Error((("Forbidden value (" + this.slot) + ") on element of ShortcutBarRemoveRequestMessage.slot.")));
  };
};

ShortcutBarRemoveRequestMessage.prototype.getMessageId = function() {
  return 6228;
};

ShortcutBarRemoveRequestMessage.prototype.getClassName = function() {
  return 'ShortcutBarRemoveRequestMessage';
};

module.exports.id = 6228;
module.exports.class = ShortcutBarRemoveRequestMessage;