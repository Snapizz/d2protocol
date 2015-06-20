var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');

var ObjectItemNotInContainer = require('../../../../types/game/data/items/object-item-not-in-container.js').class;

var ExchangeCraftResultWithObjectDescMessage = function() {
  this.objectInfo = new ObjectItemNotInContainer();
};

util.inherits(ExchangeCraftResultWithObjectDescMessage, BaseMessage);

ExchangeCraftResultWithObjectDescMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeCraftResultWithObjectDescMessage(output);
};

ExchangeCraftResultWithObjectDescMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeCraftResultWithObjectDescMessage(input);
};

ExchangeCraftResultWithObjectDescMessage.prototype.serializeAs_ExchangeCraftResultWithObjectDescMessage = function(param1) {
  this.serializeAs_ExchangeCraftResultMessage(param1);
  this.objectInfo.serializeAs_ObjectItemNotInContainer(param1);
};

ExchangeCraftResultWithObjectDescMessage.prototype.deserializeAs_ExchangeCraftResultWithObjectDescMessage = function(param1) {
  this.deserialize(param1);
  this.objectInfo = new ObjectItemNotInContainer();
  this.objectInfo.deserialize(param1);
};

ExchangeCraftResultWithObjectDescMessage.prototype.getMessageId = function() {
  return 5999;
};

ExchangeCraftResultWithObjectDescMessage.prototype.getClassName = function() {
  return 'ExchangeCraftResultWithObjectDescMessage';
};

module.exports.id = 5999;
module.exports.class = ExchangeCraftResultWithObjectDescMessage;
module.exports.getInstance = function() {
  return new ExchangeCraftResultWithObjectDescMessage();
};