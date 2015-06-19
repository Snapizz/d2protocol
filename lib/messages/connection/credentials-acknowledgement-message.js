var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var CredentialsAcknowledgementMessage = function() {

};

util.inherits(CredentialsAcknowledgementMessage, BaseMessage);

CredentialsAcknowledgementMessage.prototype.serialize = function(output) {
  this.serializeAs_CredentialsAcknowledgementMessage(output);
};

CredentialsAcknowledgementMessage.prototype.deserialize = function(input) {
  this.deserializeAs_CredentialsAcknowledgementMessage(input);
};

CredentialsAcknowledgementMessage.prototype.serializeAs_CredentialsAcknowledgementMessage = function(output) {

};

CredentialsAcknowledgementMessage.prototype.deserializeAs_CredentialsAcknowledgementMessage = function(input) {

};

CredentialsAcknowledgementMessage.prototype.getMessageId = function() {
  return 6314;
};

CredentialsAcknowledgementMessage.prototype.getClassName = function() {
  return 'CredentialsAcknowledgementMessage';
};

module.exports.id = 6314;
module.exports.class = CredentialsAcknowledgementMessage;