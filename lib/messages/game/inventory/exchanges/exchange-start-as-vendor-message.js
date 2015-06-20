var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var ExchangeStartAsVendorMessage = function() {

};

util.inherits(ExchangeStartAsVendorMessage, BaseMessage);

ExchangeStartAsVendorMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeStartAsVendorMessage(output);
};

ExchangeStartAsVendorMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeStartAsVendorMessage(input);
};

ExchangeStartAsVendorMessage.prototype.serializeAs_ExchangeStartAsVendorMessage = function(param1) {

};

ExchangeStartAsVendorMessage.prototype.deserializeAs_ExchangeStartAsVendorMessage = function(param1) {

};

ExchangeStartAsVendorMessage.prototype.getMessageId = function() {
  return 5775;
};

ExchangeStartAsVendorMessage.prototype.getClassName = function() {
  return 'ExchangeStartAsVendorMessage';
};

module.exports.id = 5775;
module.exports.class = ExchangeStartAsVendorMessage;