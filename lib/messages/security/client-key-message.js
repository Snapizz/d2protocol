var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

ClientKeyMessage.prototype.serializeAs_ClientKeyMessage = function(output) {
  output.writeUTF(this.key);
};

ClientKeyMessage.prototype.deserializeAs_ClientKeyMessage = function(input) {
  this.key = input.readUTF();
};

ClientKeyMessage.prototype.getMessageId = function() {
  return 5607;
};

ClientKeyMessage.prototype.getClassName = function() {
  return 'ClientKeyMessage';
};

module.exports.id = 5607;
module.exports.class = ClientKeyMessage;