var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

MountRidingMessage.prototype.serializeAs_MountRidingMessage = function(output) {
  output.writeBoolean(this.isRiding);
};

MountRidingMessage.prototype.deserializeAs_MountRidingMessage = function(input) {
  this.isRiding = input.readBoolean();
};

MountRidingMessage.prototype.getMessageId = function() {
  return 5967;
};

MountRidingMessage.prototype.getClassName = function() {
  return 'MountRidingMessage';
};

module.exports.id = 5967;
module.exports.class = MountRidingMessage;