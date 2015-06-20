var d2com = require('d2com'),
  BaseMessage = require('./exchange-mount-stable-error-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var ExchangeMountStableErrorMessage = function() {

};

util.inherits(ExchangeMountStableErrorMessage, BaseMessage);

ExchangeMountStableErrorMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeMountStableErrorMessage(output);
};

ExchangeMountStableErrorMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeMountStableErrorMessage(input);
};

ExchangeMountStableErrorMessage.prototype.serializeAs_ExchangeMountStableErrorMessage = function(param1) {

};

ExchangeMountStableErrorMessage.prototype.deserializeAs_ExchangeMountStableErrorMessage = function(param1) {

};

ExchangeMountStableErrorMessage.prototype.getMessageId = function() {
  return 5981;
};

ExchangeMountStableErrorMessage.prototype.getClassName = function() {
  return 'ExchangeMountStableErrorMessage';
};

module.exports.id = 5981;
module.exports.class = ExchangeMountStableErrorMessage;
module.exports.getInstance = function() {
  return new ExchangeMountStableErrorMessage();
};