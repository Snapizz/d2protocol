var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

ExchangeCraftResultMagicWithObjectDescMessage.prototype.serializeAs_ExchangeCraftResultMagicWithObjectDescMessage = function(output) {
  super.serializeAs_ExchangeCraftResultWithObjectDescMessage(param1);
  param1.writeByte(this.magicPoolStatus);
};

ExchangeCraftResultMagicWithObjectDescMessage.prototype.deserializeAs_ExchangeCraftResultMagicWithObjectDescMessage = function(input) {
  super.deserialize(param1);
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