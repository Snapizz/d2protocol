var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PrismsListRegisterMessage = function() {
  this.listen = 0;
};

util.inherits(PrismsListRegisterMessage, BaseMessage);

PrismsListRegisterMessage.prototype.serialize = function(output) {
  this.serializeAs_PrismsListRegisterMessage(output);
};

PrismsListRegisterMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PrismsListRegisterMessage(input);
};

PrismsListRegisterMessage.prototype.serializeAs_PrismsListRegisterMessage = function(output) {
  param1.writeByte(this.listen);
};

PrismsListRegisterMessage.prototype.deserializeAs_PrismsListRegisterMessage = function(input) {
  this.listen = param1.readByte();
  if (this.listen < 0) {
    throw new Error("Forbidden value (" + this.listen + ") on element of PrismsListRegisterMessage.listen.");
  } else {
    return;
  }
};

PrismsListRegisterMessage.prototype.getMessageId = function() {
  return 6441;
};

PrismsListRegisterMessage.prototype.getClassName = function() {
  return 'PrismsListRegisterMessage';
};

module.exports.id = 6441;
module.exports.class = PrismsListRegisterMessage;