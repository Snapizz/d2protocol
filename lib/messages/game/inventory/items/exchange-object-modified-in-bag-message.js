var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
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
  super.serializeAs_ExchangeObjectMessage(param1);
  this.object.serializeAs_ObjectItem(param1);
};

ExchangeObjectModifiedInBagMessage.prototype.deserializeAs_ExchangeObjectModifiedInBagMessage = function(input) {
  super.deserialize(param1);
  this.object = new ObjectItem();
  this.object.deserialize(param1);
};

ExchangeObjectModifiedInBagMessage.prototype.getMessageId = function() {
  return 6008;
};

ExchangeObjectModifiedInBagMessage.prototype.getClassName = function() {
  return 'ExchangeObjectModifiedInBagMessage';
};

module.exports.id = 6008;
module.exports.class = ExchangeObjectModifiedInBagMessage;