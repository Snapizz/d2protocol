var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var ExchangeStartOkCraftMessage = function() {

};

util.inherits(ExchangeStartOkCraftMessage, BaseMessage);

ExchangeStartOkCraftMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeStartOkCraftMessage(output);
};

ExchangeStartOkCraftMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeStartOkCraftMessage(input);
};

ExchangeStartOkCraftMessage.prototype.serializeAs_ExchangeStartOkCraftMessage = function(param1) {

};

ExchangeStartOkCraftMessage.prototype.deserializeAs_ExchangeStartOkCraftMessage = function(param1) {

};

ExchangeStartOkCraftMessage.prototype.getMessageId = function() {
  return 5813;
};

ExchangeStartOkCraftMessage.prototype.getClassName = function() {
  return 'ExchangeStartOkCraftMessage';
};

module.exports.id = 5813;
module.exports.class = ExchangeStartOkCraftMessage;