var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var CheckFileMessage = function() {
  this.filenameHash = "";
  this.type = 0;
  this.value = "";
};

util.inherits(CheckFileMessage, BaseMessage);

CheckFileMessage.prototype.serialize = function(output) {
  this.serializeAs_CheckFileMessage(output);
};

CheckFileMessage.prototype.deserialize = function(input) {
  this.deserializeAs_CheckFileMessage(input);
};

CheckFileMessage.prototype.serializeAs_CheckFileMessage = function(output) {
  param1.writeUTF(this.filenameHash);
  param1.writeByte(this.type);
  param1.writeUTF(this.value);
};

CheckFileMessage.prototype.deserializeAs_CheckFileMessage = function(input) {
  this.filenameHash = param1.readUTF();
  this.type = param1.readByte();
  if (this.type < 0) {
    throw new Error("Forbidden value (" + this.type + ") on element of CheckFileMessage.type.");
  } else {
    this.value = param1.readUTF();
    return;
  }
};

CheckFileMessage.prototype.getMessageId = function() {
  return 6156;
};

CheckFileMessage.prototype.getClassName = function() {
  return 'CheckFileMessage';
};

module.exports.id = 6156;
module.exports.class = CheckFileMessage;