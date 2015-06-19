var d2com = require('d2com'),
  BaseMessage = require('./exchange-craft-result-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeCraftResultWithObjectDescMessage = function() {
  this.objectInfo;
};

util.inherits(ExchangeCraftResultWithObjectDescMessage, BaseMessage);

ExchangeCraftResultWithObjectDescMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeCraftResultWithObjectDescMessage(output);
};

ExchangeCraftResultWithObjectDescMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeCraftResultWithObjectDescMessage(input);
};

ExchangeCraftResultWithObjectDescMessage.prototype.serializeAs_ExchangeCraftResultWithObjectDescMessage = function(output) {
  this.serializeAs_ExchangeCraftResultMessage(output);
  this.objectInfo.serializeAs_ObjectItemNotInContainer(output);
};

ExchangeCraftResultWithObjectDescMessage.prototype.deserializeAs_ExchangeCraftResultWithObjectDescMessage = function(input) {
  this.deserialize(input);
  this.objectInfo = new ObjectItemNotInContainer();
  this.objectInfo.deserialize(input);
};

ExchangeCraftResultWithObjectDescMessage.prototype.getMessageId = function() {
  return 5999;
};

ExchangeCraftResultWithObjectDescMessage.prototype.getClassName = function() {
  return 'ExchangeCraftResultWithObjectDescMessage';
};

module.exports.id = 5999;
module.exports.class = ExchangeCraftResultWithObjectDescMessage;