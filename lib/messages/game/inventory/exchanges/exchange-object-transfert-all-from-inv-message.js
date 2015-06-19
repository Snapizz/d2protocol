var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeObjectTransfertAllFromInvMessage = function() {

};

util.inherits(ExchangeObjectTransfertAllFromInvMessage, BaseMessage);

ExchangeObjectTransfertAllFromInvMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeObjectTransfertAllFromInvMessage(output);
};

ExchangeObjectTransfertAllFromInvMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeObjectTransfertAllFromInvMessage(input);
};

ExchangeObjectTransfertAllFromInvMessage.prototype.serializeAs_ExchangeObjectTransfertAllFromInvMessage = function(output) {

};

ExchangeObjectTransfertAllFromInvMessage.prototype.deserializeAs_ExchangeObjectTransfertAllFromInvMessage = function(input) {

};

ExchangeObjectTransfertAllFromInvMessage.prototype.getMessageId = function() {
  return 6184;
};

ExchangeObjectTransfertAllFromInvMessage.prototype.getClassName = function() {
  return 'ExchangeObjectTransfertAllFromInvMessage';
};

module.exports.id = 6184;
module.exports.class = ExchangeObjectTransfertAllFromInvMessage;