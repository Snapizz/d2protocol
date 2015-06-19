var d2com = require('d2com'),
  BaseMessage = require('./exchange-object-move-priced-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeObjectModifyPricedMessage = function() {

};

util.inherits(ExchangeObjectModifyPricedMessage, BaseMessage);

ExchangeObjectModifyPricedMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeObjectModifyPricedMessage(output);
};

ExchangeObjectModifyPricedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeObjectModifyPricedMessage(input);
};

ExchangeObjectModifyPricedMessage.prototype.serializeAs_ExchangeObjectModifyPricedMessage = function(output) {
  this.serializeAs_ExchangeObjectMovePricedMessage(output);
};

ExchangeObjectModifyPricedMessage.prototype.deserializeAs_ExchangeObjectModifyPricedMessage = function(input) {
  this.deserialize(input);
};

ExchangeObjectModifyPricedMessage.prototype.getMessageId = function() {
  return 6238;
};

ExchangeObjectModifyPricedMessage.prototype.getClassName = function() {
  return 'ExchangeObjectModifyPricedMessage';
};

module.exports.id = 6238;
module.exports.class = ExchangeObjectModifyPricedMessage;