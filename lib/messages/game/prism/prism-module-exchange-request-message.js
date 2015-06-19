var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PrismModuleExchangeRequestMessage = function() {

};

util.inherits(PrismModuleExchangeRequestMessage, BaseMessage);

PrismModuleExchangeRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_PrismModuleExchangeRequestMessage(output);
};

PrismModuleExchangeRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PrismModuleExchangeRequestMessage(input);
};

PrismModuleExchangeRequestMessage.prototype.serializeAs_PrismModuleExchangeRequestMessage = function(output) {

};

PrismModuleExchangeRequestMessage.prototype.deserializeAs_PrismModuleExchangeRequestMessage = function(input) {

};

PrismModuleExchangeRequestMessage.prototype.getMessageId = function() {
  return 6531;
};

PrismModuleExchangeRequestMessage.prototype.getClassName = function() {
  return 'PrismModuleExchangeRequestMessage';
};

module.exports.id = 6531;
module.exports.class = PrismModuleExchangeRequestMessage;