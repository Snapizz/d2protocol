var d2com = require('d2com'),
  BaseMessage = require('./trust-status-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var TrustStatusMessage = function() {
  this.trusted = false;
};

util.inherits(TrustStatusMessage, BaseMessage);

TrustStatusMessage.prototype.serialize = function(output) {
  this.serializeAs_TrustStatusMessage(output);
};

TrustStatusMessage.prototype.deserialize = function(input) {
  this.deserializeAs_TrustStatusMessage(input);
};

TrustStatusMessage.prototype.serializeAs_TrustStatusMessage = function(param1) {
  param1.writeBoolean(this.trusted);
};

TrustStatusMessage.prototype.deserializeAs_TrustStatusMessage = function(param1) {
  this.trusted = param1.readBoolean();
};

TrustStatusMessage.prototype.getMessageId = function() {
  return 6267;
};

TrustStatusMessage.prototype.getClassName = function() {
  return 'TrustStatusMessage';
};

module.exports.id = 6267;
module.exports.class = TrustStatusMessage;
module.exports.getInstance = function() {
  return new TrustStatusMessage();
};