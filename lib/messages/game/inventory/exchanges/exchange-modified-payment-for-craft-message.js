var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeModifiedPaymentForCraftMessage = function() {
  this.onlySuccess = false;
  this.object;
};

util.inherits(ExchangeModifiedPaymentForCraftMessage, BaseMessage);

ExchangeModifiedPaymentForCraftMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeModifiedPaymentForCraftMessage(output);
};

ExchangeModifiedPaymentForCraftMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeModifiedPaymentForCraftMessage(input);
};

ExchangeModifiedPaymentForCraftMessage.prototype.serializeAs_ExchangeModifiedPaymentForCraftMessage = function(output) {
  param1.writeBoolean(this.onlySuccess);
  this.object.serializeAs_ObjectItemNotInContainer(param1);
};

ExchangeModifiedPaymentForCraftMessage.prototype.deserializeAs_ExchangeModifiedPaymentForCraftMessage = function(input) {
  this.onlySuccess = param1.readBoolean();
  this.object = new ObjectItemNotInContainer();
  this.object.deserialize(param1);
};

ExchangeModifiedPaymentForCraftMessage.prototype.getMessageId = function() {
  return 5832;
};

ExchangeModifiedPaymentForCraftMessage.prototype.getClassName = function() {
  return 'ExchangeModifiedPaymentForCraftMessage';
};

module.exports.id = 5832;
module.exports.class = ExchangeModifiedPaymentForCraftMessage;