var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
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

AuthenticationTicketAcceptedMessage.prototype.serializeAs_AuthenticationTicketAcceptedMessage = function(param1) {

};

AuthenticationTicketAcceptedMessage.prototype.deserializeAs_AuthenticationTicketAcceptedMessage = function(param1) {

};

AuthenticationTicketAcceptedMessage.prototype.getMessageId = function() {
  return 111;
};

AuthenticationTicketAcceptedMessage.prototype.getClassName = function() {
  return 'AuthenticationTicketAcceptedMessage';
};

module.exports.id = 111;
module.exports.class = AuthenticationTicketAcceptedMessage;
module.exports.getInstance = function() {
  return new AuthenticationTicketAcceptedMessage();
};