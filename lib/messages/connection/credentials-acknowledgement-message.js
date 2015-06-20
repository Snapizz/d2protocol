var d2com = require('d2com'),
  BaseMessage = require('./credentials-acknowledgement-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
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

CredentialsAcknowledgementMessage.prototype.serializeAs_CredentialsAcknowledgementMessage = function(param1) {

};

CredentialsAcknowledgementMessage.prototype.deserializeAs_CredentialsAcknowledgementMessage = function(param1) {

};

CredentialsAcknowledgementMessage.prototype.getMessageId = function() {
  return 6314;
};

CredentialsAcknowledgementMessage.prototype.getClassName = function() {
  return 'CredentialsAcknowledgementMessage';
};

module.exports.id = 6314;
module.exports.class = CredentialsAcknowledgementMessage;
module.exports.getInstance = function() {
  return new CredentialsAcknowledgementMessage();
};