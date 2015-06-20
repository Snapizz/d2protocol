var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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