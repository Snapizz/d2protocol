var d2com = require('d2com'),
  BaseMessage = require('./exchange-object-put-in-bag-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');

var ObjectItem = require('../../../../types/game/data/items/object-item.js').class;

var ExchangeObjectPutInBagMessage = function() {
  this.object = new ObjectItem();
};

util.inherits(ExchangeObjectPutInBagMessage, BaseMessage);

ExchangeObjectPutInBagMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeObjectPutInBagMessage(output);
};

ExchangeObjectPutInBagMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeObjectPutInBagMessage(input);
};

ExchangeObjectPutInBagMessage.prototype.serializeAs_ExchangeObjectPutInBagMessage = function(param1) {
  this.serializeAs_ExchangeObjectMessage(param1);
  this.object.serializeAs_ObjectItem(param1);
};

ExchangeObjectPutInBagMessage.prototype.deserializeAs_ExchangeObjectPutInBagMessage = function(param1) {
  this.deserialize(param1);
  this.object = new ObjectItem();
  this.object.deserialize(param1);
};

ExchangeObjectPutInBagMessage.prototype.getMessageId = function() {
  return 6009;
};

ExchangeObjectPutInBagMessage.prototype.getClassName = function() {
  return 'ExchangeObjectPutInBagMessage';
};

module.exports.id = 6009;
module.exports.class = ExchangeObjectPutInBagMessage;
module.exports.getInstance = function() {
  return new ExchangeObjectPutInBagMessage();
};