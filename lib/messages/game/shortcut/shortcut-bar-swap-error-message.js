var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ShortcutBarSwapErrorMessage = function() {
  this.error = 0;
};

util.inherits(ShortcutBarSwapErrorMessage, BaseMessage);

ShortcutBarSwapErrorMessage.prototype.serialize = function(output) {
  this.serializeAs_ShortcutBarSwapErrorMessage(output);
};

ShortcutBarSwapErrorMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ShortcutBarSwapErrorMessage(input);
};

ShortcutBarSwapErrorMessage.prototype.serializeAs_ShortcutBarSwapErrorMessage = function(output) {
  output.writeByte(this.error);
};

ShortcutBarSwapErrorMessage.prototype.deserializeAs_ShortcutBarSwapErrorMessage = function(input) {
  this.error = input.readByte();
  if (this.error < 0) {
    throw (new Error((("Forbidden value (" + this.error) + ") on element of ShortcutBarSwapErrorMessage.error.")));
  };
};

ShortcutBarSwapErrorMessage.prototype.getMessageId = function() {
  return 6226;
};

ShortcutBarSwapErrorMessage.prototype.getClassName = function() {
  return 'ShortcutBarSwapErrorMessage';
};

module.exports.id = 6226;
module.exports.class = ShortcutBarSwapErrorMessage;