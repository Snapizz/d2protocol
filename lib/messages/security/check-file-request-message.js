var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

CheckFileRequestMessage.prototype.serializeAs_CheckFileRequestMessage = function(output) {
  output.writeUTF(this.filename);
  output.writeByte(this.type);
};

CheckFileRequestMessage.prototype.deserializeAs_CheckFileRequestMessage = function(input) {
  this.filename = input.readUTF();
  this.type = input.readByte();
  if (this.type < 0) {
    throw (new Error((("Forbidden value (" + this.type) + ") on element of CheckFileRequestMessage.type.")));
  };
};

CheckFileRequestMessage.prototype.getMessageId = function() {
  return 6154;
};

CheckFileRequestMessage.prototype.getClassName = function() {
  return 'CheckFileRequestMessage';
};

module.exports.id = 6154;
module.exports.class = CheckFileRequestMessage;