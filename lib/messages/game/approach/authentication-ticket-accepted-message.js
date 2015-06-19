var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var AuthenticationTicketAcceptedMessage = function() {

};

util.inherits(AuthenticationTicketAcceptedMessage, BaseMessage);

AuthenticationTicketAcceptedMessage.prototype.serialize = function(output) {
  this.serializeAs_AuthenticationTicketAcceptedMessage(output);
};

AuthenticationTicketAcceptedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AuthenticationTicketAcceptedMessage(input);
};

AuthenticationTicketAcceptedMessage.prototype.serializeAs_AuthenticationTicketAcceptedMessage = function(output) {

};

AuthenticationTicketAcceptedMessage.prototype.deserializeAs_AuthenticationTicketAcceptedMessage = function(input) {

};

AuthenticationTicketAcceptedMessage.prototype.getMessageId = function() {
  return 111;
};

AuthenticationTicketAcceptedMessage.prototype.getClassName = function() {
  return 'AuthenticationTicketAcceptedMessage';
};

module.exports.id = 111;
module.exports.class = AuthenticationTicketAcceptedMessage;