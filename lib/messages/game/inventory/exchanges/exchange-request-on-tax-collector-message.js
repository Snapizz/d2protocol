var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var ExchangeRequestOnTaxCollectorMessage = function() {
  this.taxCollectorId = 0;
};

util.inherits(ExchangeRequestOnTaxCollectorMessage, BaseMessage);

ExchangeRequestOnTaxCollectorMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeRequestOnTaxCollectorMessage(output);
};

ExchangeRequestOnTaxCollectorMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeRequestOnTaxCollectorMessage(input);
};

ExchangeRequestOnTaxCollectorMessage.prototype.serializeAs_ExchangeRequestOnTaxCollectorMessage = function(param1) {
  param1.writeInt(this.taxCollectorId);
};

ExchangeRequestOnTaxCollectorMessage.prototype.deserializeAs_ExchangeRequestOnTaxCollectorMessage = function(param1) {
  this.taxCollectorId = param1.readInt();
};

ExchangeRequestOnTaxCollectorMessage.prototype.getMessageId = function() {
  return 5779;
};

ExchangeRequestOnTaxCollectorMessage.prototype.getClassName = function() {
  return 'ExchangeRequestOnTaxCollectorMessage';
};

module.exports.id = 5779;
module.exports.class = ExchangeRequestOnTaxCollectorMessage;