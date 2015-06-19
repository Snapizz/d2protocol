var d2com = require('d2com'),
  BaseMessage = require('../exchanges/exchange-object-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeObjectModifiedInBagMessage = function() {
  this.object;
};

util.inherits(ExchangeObjectModifiedInBagMessage, BaseMessage);

ExchangeObjectModifiedInBagMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeObjectModifiedInBagMessage(output);
};

ExchangeObjectModifiedInBagMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeObjectModifiedInBagMessage(input);
};

ExchangeObjectModifiedInBagMessage.prototype.serializeAs_ExchangeObjectModifiedInBagMessage = function(output) {
  this.serializeAs_ExchangeObjectMessage(output);
  this.object.serializeAs_ObjectItem(output);
};

ExchangeObjectModifiedInBagMessage.prototype.deserializeAs_ExchangeObjectModifiedInBagMessage = function(input) {
  this.deserialize(input);
  this.object = new ObjectItem();
  this.object.deserialize(input);
};

ExchangeObjectModifiedInBagMessage.prototype.getMessageId = function() {
  return 6008;
};

ExchangeObjectModifiedInBagMessage.prototype.getClassName = function() {
  return 'ExchangeObjectModifiedInBagMessage';
};

module.exports.id = 6008;
module.exports.class = ExchangeObjectModifiedInBagMessage;