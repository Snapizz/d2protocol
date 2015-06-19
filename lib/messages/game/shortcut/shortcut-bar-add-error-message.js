var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ShortcutBarAddErrorMessage = function() {
  this.error = 0;
};

util.inherits(ShortcutBarAddErrorMessage, BaseMessage);

ShortcutBarAddErrorMessage.prototype.serialize = function(output) {
  this.serializeAs_ShortcutBarAddErrorMessage(output);
};

ShortcutBarAddErrorMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ShortcutBarAddErrorMessage(input);
};

ShortcutBarAddErrorMessage.prototype.serializeAs_ShortcutBarAddErrorMessage = function(output) {
  output.writeByte(this.error);
};

ShortcutBarAddErrorMessage.prototype.deserializeAs_ShortcutBarAddErrorMessage = function(input) {
  this.error = input.readByte();
  if (this.error < 0) {
    throw (new Error((("Forbidden value (" + this.error) + ") on element of ShortcutBarAddErrorMessage.error.")));
  };
};

ShortcutBarAddErrorMessage.prototype.getMessageId = function() {
  return 6227;
};

ShortcutBarAddErrorMessage.prototype.getClassName = function() {
  return 'ShortcutBarAddErrorMessage';
};

module.exports.id = 6227;
module.exports.class = ShortcutBarAddErrorMessage;