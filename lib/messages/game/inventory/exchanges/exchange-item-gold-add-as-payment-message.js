var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeItemGoldAddAsPaymentMessage = function() {
  this.paymentType = 0;
  this.quantity = 0;
};

util.inherits(ExchangeItemGoldAddAsPaymentMessage, BaseMessage);

ExchangeItemGoldAddAsPaymentMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeItemGoldAddAsPaymentMessage(output);
};

ExchangeItemGoldAddAsPaymentMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeItemGoldAddAsPaymentMessage(input);
};

ExchangeItemGoldAddAsPaymentMessage.prototype.serializeAs_ExchangeItemGoldAddAsPaymentMessage = function(output) {
  output.writeByte(this.paymentType);
  if (this.quantity < 0) {
    throw (new Error((("Forbidden value (" + this.quantity) + ") on element quantity.")));
  };
  output.writeVarInt(this.quantity);
};

ExchangeItemGoldAddAsPaymentMessage.prototype.deserializeAs_ExchangeItemGoldAddAsPaymentMessage = function(input) {
  this.paymentType = input.readByte();
  if (this.paymentType < 0) {
    throw (new Error((("Forbidden value (" + this.paymentType) + ") on element of ExchangeItemGoldAddAsPaymentMessage.paymentType.")));
  };
  this.quantity = input.readVarUhInt();
  if (this.quantity < 0) {
    throw (new Error((("Forbidden value (" + this.quantity) + ") on element of ExchangeItemGoldAddAsPaymentMessage.quantity.")));
  };
};

ExchangeItemGoldAddAsPaymentMessage.prototype.getMessageId = function() {
  return 5770;
};

ExchangeItemGoldAddAsPaymentMessage.prototype.getClassName = function() {
  return 'ExchangeItemGoldAddAsPaymentMessage';
};

module.exports.id = 5770;
module.exports.class = ExchangeItemGoldAddAsPaymentMessage;