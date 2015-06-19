var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeObjectTransfertExistingToInvMessage = function() {

};

util.inherits(ExchangeObjectTransfertExistingToInvMessage, BaseMessage);

ExchangeObjectTransfertExistingToInvMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeObjectTransfertExistingToInvMessage(output);
};

ExchangeObjectTransfertExistingToInvMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeObjectTransfertExistingToInvMessage(input);
};

ExchangeObjectTransfertExistingToInvMessage.prototype.serializeAs_ExchangeObjectTransfertExistingToInvMessage = function(output) {

};

ExchangeObjectTransfertExistingToInvMessage.prototype.deserializeAs_ExchangeObjectTransfertExistingToInvMessage = function(input) {

};

ExchangeObjectTransfertExistingToInvMessage.prototype.getMessageId = function() {
  return 6326;
};

ExchangeObjectTransfertExistingToInvMessage.prototype.getClassName = function() {
  return 'ExchangeObjectTransfertExistingToInvMessage';
};

module.exports.id = 6326;
module.exports.class = ExchangeObjectTransfertExistingToInvMessage;