var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var ClientUIOpenedMessage = function() {
  this.type = 0;
};

util.inherits(ClientUIOpenedMessage, BaseMessage);

ClientUIOpenedMessage.prototype.serialize = function(output) {
  this.serializeAs_ClientUIOpenedMessage(output);
};

ClientUIOpenedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ClientUIOpenedMessage(input);
};

ClientUIOpenedMessage.prototype.serializeAs_ClientUIOpenedMessage = function(param1) {
  param1.writeByte(this.type);
};

ClientUIOpenedMessage.prototype.deserializeAs_ClientUIOpenedMessage = function(param1) {
  this.type = param1.readByte();
  if (this.type < 0) {
    throw new Error("Forbidden value (" + this.type + ") on element of ClientUIOpenedMessage.type.");
  } else {
    return;
  }
};

ClientUIOpenedMessage.prototype.getMessageId = function() {
  return 6459;
};

ClientUIOpenedMessage.prototype.getClassName = function() {
  return 'ClientUIOpenedMessage';
};

module.exports.id = 6459;
module.exports.class = ClientUIOpenedMessage;
module.exports.getInstance = function() {
  return new ClientUIOpenedMessage();
};