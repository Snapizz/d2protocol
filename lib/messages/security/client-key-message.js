var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var ClientKeyMessage = function() {
  this.key = "";
};

util.inherits(ClientKeyMessage, BaseMessage);

ClientKeyMessage.prototype.serialize = function(output) {
  this.serializeAs_ClientKeyMessage(output);
};

ClientKeyMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ClientKeyMessage(input);
};

ClientKeyMessage.prototype.serializeAs_ClientKeyMessage = function(param1) {
  param1.writeUTF(this.key);
};

ClientKeyMessage.prototype.deserializeAs_ClientKeyMessage = function(param1) {
  this.key = param1.readUTF();
};

ClientKeyMessage.prototype.getMessageId = function() {
  return 5607;
};

ClientKeyMessage.prototype.getClassName = function() {
  return 'ClientKeyMessage';
};

module.exports.id = 5607;
module.exports.class = ClientKeyMessage;
module.exports.getInstance = function() {
  return new ClientKeyMessage();
};