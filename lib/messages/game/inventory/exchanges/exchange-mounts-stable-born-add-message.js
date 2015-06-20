var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeMountsStableBornAddMessage = function() {

};

util.inherits(ExchangeMountsStableBornAddMessage, BaseMessage);

ExchangeMountsStableBornAddMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeMountsStableBornAddMessage(output);
};

ExchangeMountsStableBornAddMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeMountsStableBornAddMessage(input);
};

ExchangeMountsStableBornAddMessage.prototype.serializeAs_ExchangeMountsStableBornAddMessage = function(output) {
  super.serializeAs_ExchangeMountsStableAddMessage(param1);
};

ExchangeMountsStableBornAddMessage.prototype.deserializeAs_ExchangeMountsStableBornAddMessage = function(input) {
  super.deserialize(param1);
};

ExchangeMountsStableBornAddMessage.prototype.getMessageId = function() {
  return 6557;
};

ExchangeMountsStableBornAddMessage.prototype.getClassName = function() {
  return 'ExchangeMountsStableBornAddMessage';
};

module.exports.id = 6557;
module.exports.class = ExchangeMountsStableBornAddMessage;