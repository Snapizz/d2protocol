var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeMountPaddockAddMessage = function() {
  this.mountDescription;
};

util.inherits(ExchangeMountPaddockAddMessage, BaseMessage);

ExchangeMountPaddockAddMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeMountPaddockAddMessage(output);
};

ExchangeMountPaddockAddMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeMountPaddockAddMessage(input);
};

ExchangeMountPaddockAddMessage.prototype.serializeAs_ExchangeMountPaddockAddMessage = function(output) {
  this.mountDescription.serializeAs_MountClientData(output);
};

ExchangeMountPaddockAddMessage.prototype.deserializeAs_ExchangeMountPaddockAddMessage = function(input) {
  this.mountDescription = new MountClientData();
  this.mountDescription.deserialize(input);
};

ExchangeMountPaddockAddMessage.prototype.getMessageId = function() {
  return 6049;
};

ExchangeMountPaddockAddMessage.prototype.getClassName = function() {
  return 'ExchangeMountPaddockAddMessage';
};

module.exports.id = 6049;
module.exports.class = ExchangeMountPaddockAddMessage;