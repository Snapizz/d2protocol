var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var IdentificationFailedMessage = function() {
  this.reason = 99;
};

util.inherits(IdentificationFailedMessage, BaseMessage);

IdentificationFailedMessage.prototype.serialize = function(output) {
  this.serializeAs_IdentificationFailedMessage(output);
};

IdentificationFailedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_IdentificationFailedMessage(input);
};

IdentificationFailedMessage.prototype.serializeAs_IdentificationFailedMessage = function(param1) {
  param1.writeByte(this.reason);
};

IdentificationFailedMessage.prototype.deserializeAs_IdentificationFailedMessage = function(param1) {
  this.reason = param1.readByte();
  if (this.reason < 0) {
    throw new Error("Forbidden value (" + this.reason + ") on element of IdentificationFailedMessage.reason.");
  } else {
    return;
  }
};

IdentificationFailedMessage.prototype.getMessageId = function() {
  return 20;
};

IdentificationFailedMessage.prototype.getClassName = function() {
  return 'IdentificationFailedMessage';
};

module.exports.id = 20;
module.exports.class = IdentificationFailedMessage;
module.exports.getInstance = function() {
  return new IdentificationFailedMessage();
};