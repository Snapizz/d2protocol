var d2com = require('d2com'),
  BaseMessage = require('./accessory-preview-error-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var AccessoryPreviewErrorMessage = function() {
  this.error = 0;
};

util.inherits(AccessoryPreviewErrorMessage, BaseMessage);

AccessoryPreviewErrorMessage.prototype.serialize = function(output) {
  this.serializeAs_AccessoryPreviewErrorMessage(output);
};

AccessoryPreviewErrorMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AccessoryPreviewErrorMessage(input);
};

AccessoryPreviewErrorMessage.prototype.serializeAs_AccessoryPreviewErrorMessage = function(param1) {
  param1.writeByte(this.error);
};

AccessoryPreviewErrorMessage.prototype.deserializeAs_AccessoryPreviewErrorMessage = function(param1) {
  this.error = param1.readByte();
  if (this.error < 0) {
    throw new Error("Forbidden value (" + this.error + ") on element of AccessoryPreviewErrorMessage.error.");
  } else {
    return;
  }
};

AccessoryPreviewErrorMessage.prototype.getMessageId = function() {
  return 6521;
};

AccessoryPreviewErrorMessage.prototype.getClassName = function() {
  return 'AccessoryPreviewErrorMessage';
};

module.exports.id = 6521;
module.exports.class = AccessoryPreviewErrorMessage;
module.exports.getInstance = function() {
  return new AccessoryPreviewErrorMessage();
};