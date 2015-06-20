var d2com = require('d2com'),
  BaseMessage = require('./check-file-request-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var CheckFileRequestMessage = function() {
  this.filename = "";
  this.type = 0;
};

util.inherits(CheckFileRequestMessage, BaseMessage);

CheckFileRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_CheckFileRequestMessage(output);
};

CheckFileRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_CheckFileRequestMessage(input);
};

CheckFileRequestMessage.prototype.serializeAs_CheckFileRequestMessage = function(param1) {
  param1.writeUTF(this.filename);
  param1.writeByte(this.type);
};

CheckFileRequestMessage.prototype.deserializeAs_CheckFileRequestMessage = function(param1) {
  this.filename = param1.readUTF();
  this.type = param1.readByte();
  if (this.type < 0) {
    throw new Error("Forbidden value (" + this.type + ") on element of CheckFileRequestMessage.type.");
  } else {
    return;
  }
};

CheckFileRequestMessage.prototype.getMessageId = function() {
  return 6154;
};

CheckFileRequestMessage.prototype.getClassName = function() {
  return 'CheckFileRequestMessage';
};

module.exports.id = 6154;
module.exports.class = CheckFileRequestMessage;
module.exports.getInstance = function() {
  return new CheckFileRequestMessage();
};