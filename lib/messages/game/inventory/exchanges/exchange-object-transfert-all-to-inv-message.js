var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var ExchangeObjectTransfertAllToInvMessage = function() {

};

util.inherits(ExchangeObjectTransfertAllToInvMessage, BaseMessage);

ExchangeObjectTransfertAllToInvMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeObjectTransfertAllToInvMessage(output);
};

ExchangeObjectTransfertAllToInvMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeObjectTransfertAllToInvMessage(input);
};

ExchangeObjectTransfertAllToInvMessage.prototype.serializeAs_ExchangeObjectTransfertAllToInvMessage = function(param1) {

};

ExchangeObjectTransfertAllToInvMessage.prototype.deserializeAs_ExchangeObjectTransfertAllToInvMessage = function(param1) {

};

ExchangeObjectTransfertAllToInvMessage.prototype.getMessageId = function() {
  return 6032;
};

ExchangeObjectTransfertAllToInvMessage.prototype.getClassName = function() {
  return 'ExchangeObjectTransfertAllToInvMessage';
};

module.exports.id = 6032;
module.exports.class = ExchangeObjectTransfertAllToInvMessage;
module.exports.getInstance = function() {
  return new ExchangeObjectTransfertAllToInvMessage();
};