var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
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