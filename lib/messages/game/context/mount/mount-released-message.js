var d2com = require('d2com'),
  BaseMessage = require('./mount-released-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var MountReleasedMessage = function() {
  this.mountId = 0;
};

util.inherits(MountReleasedMessage, BaseMessage);

MountReleasedMessage.prototype.serialize = function(output) {
  this.serializeAs_MountReleasedMessage(output);
};

MountReleasedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_MountReleasedMessage(input);
};

MountReleasedMessage.prototype.serializeAs_MountReleasedMessage = function(param1) {
  param1.writeVarInt(this.mountId);
};

MountReleasedMessage.prototype.deserializeAs_MountReleasedMessage = function(param1) {
  this.mountId = param1.readVarInt();
};

MountReleasedMessage.prototype.getMessageId = function() {
  return 6308;
};

MountReleasedMessage.prototype.getClassName = function() {
  return 'MountReleasedMessage';
};

module.exports.id = 6308;
module.exports.class = MountReleasedMessage;
module.exports.getInstance = function() {
  return new MountReleasedMessage();
};