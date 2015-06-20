var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var PrismUseRequestMessage = function() {

};

util.inherits(PrismUseRequestMessage, BaseMessage);

PrismUseRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_PrismUseRequestMessage(output);
};

PrismUseRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PrismUseRequestMessage(input);
};

PrismUseRequestMessage.prototype.serializeAs_PrismUseRequestMessage = function(param1) {

};

PrismUseRequestMessage.prototype.deserializeAs_PrismUseRequestMessage = function(param1) {

};

PrismUseRequestMessage.prototype.getMessageId = function() {
  return 6041;
};

PrismUseRequestMessage.prototype.getClassName = function() {
  return 'PrismUseRequestMessage';
};

module.exports.id = 6041;
module.exports.class = PrismUseRequestMessage;
module.exports.getInstance = function() {
  return new PrismUseRequestMessage();
};