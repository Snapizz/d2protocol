var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeItemPaymentForCraftMessage = function() {
  this.onlySuccess = false;
  this.object;
};

util.inherits(ExchangeItemPaymentForCraftMessage, BaseMessage);

ExchangeItemPaymentForCraftMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeItemPaymentForCraftMessage(output);
};

ExchangeItemPaymentForCraftMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeItemPaymentForCraftMessage(input);
};

ExchangeItemPaymentForCraftMessage.prototype.serializeAs_ExchangeItemPaymentForCraftMessage = function(output) {
  output.writeBoolean(this.onlySuccess);
  this.object.serializeAs_ObjectItemNotInContainer(output);
};

ExchangeItemPaymentForCraftMessage.prototype.deserializeAs_ExchangeItemPaymentForCraftMessage = function(input) {
  this.onlySuccess = input.readBoolean();
  this.object = new ObjectItemNotInContainer();
  this.object.deserialize(input);
};

ExchangeItemPaymentForCraftMessage.prototype.getMessageId = function() {
  return 5831;
};

ExchangeItemPaymentForCraftMessage.prototype.getClassName = function() {
  return 'ExchangeItemPaymentForCraftMessage';
};

module.exports.id = 5831;
module.exports.class = ExchangeItemPaymentForCraftMessage;