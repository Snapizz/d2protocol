var d2com = require('d2com'),
  BaseMessage = require('../exchanges/exchange-object-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeObjectModifiedMessage = function() {
  this.object;
};

util.inherits(ExchangeObjectModifiedMessage, BaseMessage);

ExchangeObjectModifiedMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeObjectModifiedMessage(output);
};

ExchangeObjectModifiedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeObjectModifiedMessage(input);
};

ExchangeObjectModifiedMessage.prototype.serializeAs_ExchangeObjectModifiedMessage = function(output) {
  this.serializeAs_ExchangeObjectMessage(output);
  this.object.serializeAs_ObjectItem(output);
};

ExchangeObjectModifiedMessage.prototype.deserializeAs_ExchangeObjectModifiedMessage = function(input) {
  this.deserialize(input);
  this.object = new ObjectItem();
  this.object.deserialize(input);
};

ExchangeObjectModifiedMessage.prototype.getMessageId = function() {
  return 5519;
};

ExchangeObjectModifiedMessage.prototype.getClassName = function() {
  return 'ExchangeObjectModifiedMessage';
};

module.exports.id = 5519;
module.exports.class = ExchangeObjectModifiedMessage;