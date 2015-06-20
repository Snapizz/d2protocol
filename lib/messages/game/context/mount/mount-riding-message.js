var d2com = require('d2com'),
  BaseMessage = require('./mount-riding-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var MountRidingMessage = function() {
  this.isRiding = false;
};

util.inherits(MountRidingMessage, BaseMessage);

MountRidingMessage.prototype.serialize = function(output) {
  this.serializeAs_MountRidingMessage(output);
};

MountRidingMessage.prototype.deserialize = function(input) {
  this.deserializeAs_MountRidingMessage(input);
};

MountRidingMessage.prototype.serializeAs_MountRidingMessage = function(param1) {
  param1.writeBoolean(this.isRiding);
};

MountRidingMessage.prototype.deserializeAs_MountRidingMessage = function(param1) {
  this.isRiding = param1.readBoolean();
};

MountRidingMessage.prototype.getMessageId = function() {
  return 5967;
};

MountRidingMessage.prototype.getClassName = function() {
  return 'MountRidingMessage';
};

module.exports.id = 5967;
module.exports.class = MountRidingMessage;
module.exports.getInstance = function() {
  return new MountRidingMessage();
};