var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
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