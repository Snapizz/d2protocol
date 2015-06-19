var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ShortcutBarRemoveErrorMessage = function() {
  this.error = 0;
};

util.inherits(ShortcutBarRemoveErrorMessage, BaseMessage);

ShortcutBarRemoveErrorMessage.prototype.serialize = function(output) {
  this.serializeAs_ShortcutBarRemoveErrorMessage(output);
};

ShortcutBarRemoveErrorMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ShortcutBarRemoveErrorMessage(input);
};

ShortcutBarRemoveErrorMessage.prototype.serializeAs_ShortcutBarRemoveErrorMessage = function(output) {
  output.writeByte(this.error);
};

ShortcutBarRemoveErrorMessage.prototype.deserializeAs_ShortcutBarRemoveErrorMessage = function(input) {
  this.error = input.readByte();
  if (this.error < 0) {
    throw (new Error((("Forbidden value (" + this.error) + ") on element of ShortcutBarRemoveErrorMessage.error.")));
  };
};

ShortcutBarRemoveErrorMessage.prototype.getMessageId = function() {
  return 6222;
};

ShortcutBarRemoveErrorMessage.prototype.getClassName = function() {
  return 'ShortcutBarRemoveErrorMessage';
};

module.exports.id = 6222;
module.exports.class = ShortcutBarRemoveErrorMessage;