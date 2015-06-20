var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ObjectItemNotInContainer = require('../../../../types/game/data/items/object-item-not-in-container.js');

var ExchangeItemPaymentForCraftMessage = function() {
  this.onlySuccess = false;
  this.object = new ObjectItemNotInContainer();
};

util.inherits(ExchangeItemPaymentForCraftMessage, BaseMessage);

ExchangeItemPaymentForCraftMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeItemPaymentForCraftMessage(output);
};

ExchangeItemPaymentForCraftMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeItemPaymentForCraftMessage(input);
};

ExchangeItemPaymentForCraftMessage.prototype.serializeAs_ExchangeItemPaymentForCraftMessage = function(param1) {
  param1.writeBoolean(this.onlySuccess);
  this.object.serializeAs_ObjectItemNotInContainer(param1);
};

ExchangeItemPaymentForCraftMessage.prototype.deserializeAs_ExchangeItemPaymentForCraftMessage = function(param1) {
  this.onlySuccess = param1.readBoolean();
  this.object = new ObjectItemNotInContainer();
  this.object.deserialize(param1);
};

ExchangeItemPaymentForCraftMessage.prototype.getMessageId = function() {
  return 5831;
};

ExchangeItemPaymentForCraftMessage.prototype.getClassName = function() {
  return 'ExchangeItemPaymentForCraftMessage';
};

module.exports.id = 5831;
module.exports.class = ExchangeItemPaymentForCraftMessage;
module.exports.getInstance = function() {
  return new ExchangeItemPaymentForCraftMessage();
};