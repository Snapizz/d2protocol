var d2com = require('d2com'),
  BaseMessage = require('./exchange-craft-result-magic-with-object-desc-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var ExchangeCraftResultMagicWithObjectDescMessage = function() {
  this.magicPoolStatus = 0;
};

util.inherits(ExchangeCraftResultMagicWithObjectDescMessage, BaseMessage);

ExchangeCraftResultMagicWithObjectDescMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeCraftResultMagicWithObjectDescMessage(output);
};

ExchangeCraftResultMagicWithObjectDescMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeCraftResultMagicWithObjectDescMessage(input);
};

ExchangeCraftResultMagicWithObjectDescMessage.prototype.serializeAs_ExchangeCraftResultMagicWithObjectDescMessage = function(param1) {
  this.serializeAs_ExchangeCraftResultWithObjectDescMessage(param1);
  param1.writeByte(this.magicPoolStatus);
};

ExchangeCraftResultMagicWithObjectDescMessage.prototype.deserializeAs_ExchangeCraftResultMagicWithObjectDescMessage = function(param1) {
  this.deserialize(param1);
  this.magicPoolStatus = param1.readByte();
};

ExchangeCraftResultMagicWithObjectDescMessage.prototype.getMessageId = function() {
  return 6188;
};

ExchangeCraftResultMagicWithObjectDescMessage.prototype.getClassName = function() {
  return 'ExchangeCraftResultMagicWithObjectDescMessage';
};

module.exports.id = 6188;
module.exports.class = ExchangeCraftResultMagicWithObjectDescMessage;
module.exports.getInstance = function() {
  return new ExchangeCraftResultMagicWithObjectDescMessage();
};