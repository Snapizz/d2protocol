var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var ExchangeShowVendorTaxMessage = function() {

};

util.inherits(ExchangeShowVendorTaxMessage, BaseMessage);

ExchangeShowVendorTaxMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeShowVendorTaxMessage(output);
};

ExchangeShowVendorTaxMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeShowVendorTaxMessage(input);
};

ExchangeShowVendorTaxMessage.prototype.serializeAs_ExchangeShowVendorTaxMessage = function(param1) {

};

ExchangeShowVendorTaxMessage.prototype.deserializeAs_ExchangeShowVendorTaxMessage = function(param1) {

};

ExchangeShowVendorTaxMessage.prototype.getMessageId = function() {
  return 5783;
};

ExchangeShowVendorTaxMessage.prototype.getClassName = function() {
  return 'ExchangeShowVendorTaxMessage';
};

module.exports.id = 5783;
module.exports.class = ExchangeShowVendorTaxMessage;
module.exports.getInstance = function() {
  return new ExchangeShowVendorTaxMessage();
};