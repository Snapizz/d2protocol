var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var AuthenticationTicketMessage = function() {
  this.lang = "";
  this.ticket = "";
};

util.inherits(AuthenticationTicketMessage, BaseMessage);

AuthenticationTicketMessage.prototype.serialize = function(output) {
  this.serializeAs_AuthenticationTicketMessage(output);
};

AuthenticationTicketMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AuthenticationTicketMessage(input);
};

AuthenticationTicketMessage.prototype.serializeAs_AuthenticationTicketMessage = function(output) {
  output.writeUTF(this.lang);
  output.writeUTF(this.ticket);
};

AuthenticationTicketMessage.prototype.deserializeAs_AuthenticationTicketMessage = function(input) {
  this.lang = input.readUTF();
  this.ticket = input.readUTF();
};

AuthenticationTicketMessage.prototype.getMessageId = function() {
  return 110;
};

AuthenticationTicketMessage.prototype.getClassName = function() {
  return 'AuthenticationTicketMessage';
};

module.exports.id = 110;
module.exports.class = AuthenticationTicketMessage;