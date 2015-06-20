var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');

var ObjectItemNotInContainer = require('../../../../types/game/data/items/object-item-not-in-container.js').class;

var ExchangeModifiedPaymentForCraftMessage = function() {
  this.onlySuccess = false;
  this.object = new ObjectItemNotInContainer();
};

util.inherits(ExchangeModifiedPaymentForCraftMessage, BaseMessage);

ExchangeModifiedPaymentForCraftMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeModifiedPaymentForCraftMessage(output);
};

ExchangeModifiedPaymentForCraftMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeModifiedPaymentForCraftMessage(input);
};

ExchangeModifiedPaymentForCraftMessage.prototype.serializeAs_ExchangeModifiedPaymentForCraftMessage = function(param1) {
  param1.writeBoolean(this.onlySuccess);
  this.object.serializeAs_ObjectItemNotInContainer(param1);
};

ExchangeModifiedPaymentForCraftMessage.prototype.deserializeAs_ExchangeModifiedPaymentForCraftMessage = function(param1) {
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
module.exports.getInstance = function() {
  return new ExchangeModifiedPaymentForCraftMessage();
};