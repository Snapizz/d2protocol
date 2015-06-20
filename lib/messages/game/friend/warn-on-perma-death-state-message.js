var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var WarnOnPermaDeathStateMessage = function() {
  this.enable = false;
};

util.inherits(WarnOnPermaDeathStateMessage, BaseMessage);

WarnOnPermaDeathStateMessage.prototype.serialize = function(output) {
  this.serializeAs_WarnOnPermaDeathStateMessage(output);
};

WarnOnPermaDeathStateMessage.prototype.deserialize = function(input) {
  this.deserializeAs_WarnOnPermaDeathStateMessage(input);
};

WarnOnPermaDeathStateMessage.prototype.serializeAs_WarnOnPermaDeathStateMessage = function(param1) {
  param1.writeBoolean(this.enable);
};

WarnOnPermaDeathStateMessage.prototype.deserializeAs_WarnOnPermaDeathStateMessage = function(param1) {
  this.enable = param1.readBoolean();
};

WarnOnPermaDeathStateMessage.prototype.getMessageId = function() {
  return 6513;
};

WarnOnPermaDeathStateMessage.prototype.getClassName = function() {
  return 'WarnOnPermaDeathStateMessage';
};

module.exports.id = 6513;
module.exports.class = WarnOnPermaDeathStateMessage;
module.exports.getInstance = function() {
  return new WarnOnPermaDeathStateMessage();
};