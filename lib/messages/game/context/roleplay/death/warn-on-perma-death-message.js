var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var WarnOnPermaDeathMessage = function() {
  this.enable = false;
};

util.inherits(WarnOnPermaDeathMessage, BaseMessage);

WarnOnPermaDeathMessage.prototype.serialize = function(output) {
  this.serializeAs_WarnOnPermaDeathMessage(output);
};

WarnOnPermaDeathMessage.prototype.deserialize = function(input) {
  this.deserializeAs_WarnOnPermaDeathMessage(input);
};

WarnOnPermaDeathMessage.prototype.serializeAs_WarnOnPermaDeathMessage = function(output) {
  param1.writeBoolean(this.enable);
};

WarnOnPermaDeathMessage.prototype.deserializeAs_WarnOnPermaDeathMessage = function(input) {
  this.enable = param1.readBoolean();
};

WarnOnPermaDeathMessage.prototype.getMessageId = function() {
  return 6512;
};

WarnOnPermaDeathMessage.prototype.getClassName = function() {
  return 'WarnOnPermaDeathMessage';
};

module.exports.id = 6512;
module.exports.class = WarnOnPermaDeathMessage;