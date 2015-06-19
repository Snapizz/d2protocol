var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeMountStableAddMessage = function() {
  this.mountDescription;
};

util.inherits(ExchangeMountStableAddMessage, BaseMessage);

ExchangeMountStableAddMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeMountStableAddMessage(output);
};

ExchangeMountStableAddMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeMountStableAddMessage(input);
};

ExchangeMountStableAddMessage.prototype.serializeAs_ExchangeMountStableAddMessage = function(output) {
  this.mountDescription.serializeAs_MountClientData(output);
};

ExchangeMountStableAddMessage.prototype.deserializeAs_ExchangeMountStableAddMessage = function(input) {
  this.mountDescription = new MountClientData();
  this.mountDescription.deserialize(input);
};

ExchangeMountStableAddMessage.prototype.getMessageId = function() {
  return 5971;
};

ExchangeMountStableAddMessage.prototype.getClassName = function() {
  return 'ExchangeMountStableAddMessage';
};

module.exports.id = 5971;
module.exports.class = ExchangeMountStableAddMessage;