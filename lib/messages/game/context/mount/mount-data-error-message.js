var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var MountDataErrorMessage = function() {
  this.reason = 0;
};

util.inherits(MountDataErrorMessage, BaseMessage);

MountDataErrorMessage.prototype.serialize = function(output) {
  this.serializeAs_MountDataErrorMessage(output);
};

MountDataErrorMessage.prototype.deserialize = function(input) {
  this.deserializeAs_MountDataErrorMessage(input);
};

MountDataErrorMessage.prototype.serializeAs_MountDataErrorMessage = function(param1) {
  param1.writeByte(this.reason);
};

MountDataErrorMessage.prototype.deserializeAs_MountDataErrorMessage = function(param1) {
  this.reason = param1.readByte();
  if (this.reason < 0) {
    throw new Error("Forbidden value (" + this.reason + ") on element of MountDataErrorMessage.reason.");
  } else {
    return;
  }
};

MountDataErrorMessage.prototype.getMessageId = function() {
  return 6172;
};

MountDataErrorMessage.prototype.getClassName = function() {
  return 'MountDataErrorMessage';
};

module.exports.id = 6172;
module.exports.class = MountDataErrorMessage;
module.exports.getInstance = function() {
  return new MountDataErrorMessage();
};