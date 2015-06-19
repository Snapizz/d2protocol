var d2com = require('d2com'),
  BaseMessage = require('./exchange-mount-stable-add-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeMountStableBornAddMessage = function() {

};

util.inherits(ExchangeMountStableBornAddMessage, BaseMessage);

ExchangeMountStableBornAddMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeMountStableBornAddMessage(output);
};

ExchangeMountStableBornAddMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeMountStableBornAddMessage(input);
};

ExchangeMountStableBornAddMessage.prototype.serializeAs_ExchangeMountStableBornAddMessage = function(output) {
  this.serializeAs_ExchangeMountStableAddMessage(output);
};

ExchangeMountStableBornAddMessage.prototype.deserializeAs_ExchangeMountStableBornAddMessage = function(input) {
  this.deserialize(input);
};

ExchangeMountStableBornAddMessage.prototype.getMessageId = function() {
  return 5966;
};

ExchangeMountStableBornAddMessage.prototype.getClassName = function() {
  return 'ExchangeMountStableBornAddMessage';
};

module.exports.id = 5966;
module.exports.class = ExchangeMountStableBornAddMessage;