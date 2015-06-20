var d2com = require('d2com'),
  BaseMessage = require('./prism-attack-request-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var PrismAttackRequestMessage = function() {

};

util.inherits(PrismAttackRequestMessage, BaseMessage);

PrismAttackRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_PrismAttackRequestMessage(output);
};

PrismAttackRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PrismAttackRequestMessage(input);
};

PrismAttackRequestMessage.prototype.serializeAs_PrismAttackRequestMessage = function(param1) {

};

PrismAttackRequestMessage.prototype.deserializeAs_PrismAttackRequestMessage = function(param1) {

};

PrismAttackRequestMessage.prototype.getMessageId = function() {
  return 6042;
};

PrismAttackRequestMessage.prototype.getClassName = function() {
  return 'PrismAttackRequestMessage';
};

module.exports.id = 6042;
module.exports.class = PrismAttackRequestMessage;
module.exports.getInstance = function() {
  return new PrismAttackRequestMessage();
};