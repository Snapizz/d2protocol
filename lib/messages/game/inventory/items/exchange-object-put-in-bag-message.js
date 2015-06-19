var d2com = require('d2com'),
  BaseMessage = require('../exchanges/exchange-object-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeObjectPutInBagMessage = function() {
  this.object;
};

util.inherits(ExchangeObjectPutInBagMessage, BaseMessage);

ExchangeObjectPutInBagMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeObjectPutInBagMessage(output);
};

ExchangeObjectPutInBagMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeObjectPutInBagMessage(input);
};

ExchangeObjectPutInBagMessage.prototype.serializeAs_ExchangeObjectPutInBagMessage = function(output) {
  this.serializeAs_ExchangeObjectMessage(output);
  this.object.serializeAs_ObjectItem(output);
};

ExchangeObjectPutInBagMessage.prototype.deserializeAs_ExchangeObjectPutInBagMessage = function(input) {
  this.deserialize(input);
  this.object = new ObjectItem();
  this.object.deserialize(input);
};

ExchangeObjectPutInBagMessage.prototype.getMessageId = function() {
  return 6009;
};

ExchangeObjectPutInBagMessage.prototype.getClassName = function() {
  return 'ExchangeObjectPutInBagMessage';
};

module.exports.id = 6009;
module.exports.class = ExchangeObjectPutInBagMessage;