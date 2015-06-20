var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var AuthenticationTicketRefusedMessage = function() {

};

util.inherits(AuthenticationTicketRefusedMessage, BaseMessage);

AuthenticationTicketRefusedMessage.prototype.serialize = function(output) {
  this.serializeAs_AuthenticationTicketRefusedMessage(output);
};

AuthenticationTicketRefusedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AuthenticationTicketRefusedMessage(input);
};

AuthenticationTicketRefusedMessage.prototype.serializeAs_AuthenticationTicketRefusedMessage = function(param1) {

};

AuthenticationTicketRefusedMessage.prototype.deserializeAs_AuthenticationTicketRefusedMessage = function(param1) {

};

AuthenticationTicketRefusedMessage.prototype.getMessageId = function() {
  return 112;
};

AuthenticationTicketRefusedMessage.prototype.getClassName = function() {
  return 'AuthenticationTicketRefusedMessage';
};

module.exports.id = 112;
module.exports.class = AuthenticationTicketRefusedMessage;
module.exports.getInstance = function() {
  return new AuthenticationTicketRefusedMessage();
};