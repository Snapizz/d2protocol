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
  output.writeUTF(this.filenameHash);
  output.writeByte(this.type);
  output.writeUTF(this.value);
};

CheckFileMessage.prototype.deserializeAs_CheckFileMessage = function(input) {
  this.filenameHash = input.readUTF();
  this.type = input.readByte();
  if (this.type < 0) {
    throw (new Error((("Forbidden value (" + this.type) + ") on element of CheckFileMessage.type.")));
  };
  this.value = input.readUTF();
};

CheckFileMessage.prototype.getMessageId = function() {
  return 6156;
};

CheckFileMessage.prototype.getClassName = function() {
  return 'CheckFileMessage';
};

module.exports.id = 6156;
module.exports.class = CheckFileMessage;