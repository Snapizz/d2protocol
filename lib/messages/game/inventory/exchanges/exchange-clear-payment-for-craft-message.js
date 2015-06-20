var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeClearPaymentForCraftMessage = function() {
  this.paymentType = 0;
};

util.inherits(ExchangeClearPaymentForCraftMessage, BaseMessage);

ExchangeClearPaymentForCraftMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeClearPaymentForCraftMessage(output);
};

ExchangeClearPaymentForCraftMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeClearPaymentForCraftMessage(input);
};

ExchangeClearPaymentForCraftMessage.prototype.serializeAs_ExchangeClearPaymentForCraftMessage = function(param1) {
  param1.writeByte(this.paymentType);
};

ExchangeClearPaymentForCraftMessage.prototype.deserializeAs_ExchangeClearPaymentForCraftMessage = function(param1) {
  this.paymentType = param1.readByte();
  if (this.paymentType < 0) {
    throw new Error("Forbidden value (" + this.paymentType + ") on element of ExchangeClearPaymentForCraftMessage.paymentType.");
  } else {
    return;
  }
};

ExchangeClearPaymentForCraftMessage.prototype.getMessageId = function() {
  return 6145;
};

ExchangeClearPaymentForCraftMessage.prototype.getClassName = function() {
  return 'ExchangeClearPaymentForCraftMessage';
};

module.exports.id = 6145;
module.exports.class = ExchangeClearPaymentForCraftMessage;