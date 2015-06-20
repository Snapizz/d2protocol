var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var KrosmasterInventoryRequestMessage = function() {

};

util.inherits(KrosmasterInventoryRequestMessage, BaseMessage);

KrosmasterInventoryRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_KrosmasterInventoryRequestMessage(output);
};

KrosmasterInventoryRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_KrosmasterInventoryRequestMessage(input);
};

KrosmasterInventoryRequestMessage.prototype.serializeAs_KrosmasterInventoryRequestMessage = function(param1) {

};

KrosmasterInventoryRequestMessage.prototype.deserializeAs_KrosmasterInventoryRequestMessage = function(param1) {

};

KrosmasterInventoryRequestMessage.prototype.getMessageId = function() {
  return 6344;
};

KrosmasterInventoryRequestMessage.prototype.getClassName = function() {
  return 'KrosmasterInventoryRequestMessage';
};

module.exports.id = 6344;
module.exports.class = KrosmasterInventoryRequestMessage;