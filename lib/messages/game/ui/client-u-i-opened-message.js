var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

ClientUIOpenedMessage.prototype.serializeAs_ClientUIOpenedMessage = function(output) {
  output.writeByte(this.type);
};

ClientUIOpenedMessage.prototype.deserializeAs_ClientUIOpenedMessage = function(input) {
  this.type = input.readByte();
  if (this.type < 0) {
    throw (new Error((("Forbidden value (" + this.type) + ") on element of ClientUIOpenedMessage.type.")));
  };
};

ClientUIOpenedMessage.prototype.getMessageId = function() {
  return 6459;
};

ClientUIOpenedMessage.prototype.getClassName = function() {
  return 'ClientUIOpenedMessage';
};

module.exports.id = 6459;
module.exports.class = ClientUIOpenedMessage;