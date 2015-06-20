var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');

var ObjectItem = require('../../../../types/game/data/items/object-item.js').class;

var ExchangeObjectAddedMessage = function() {
  this.object = new ObjectItem();
};

util.inherits(ExchangeObjectAddedMessage, BaseMessage);

ExchangeObjectAddedMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeObjectAddedMessage(output);
};

ExchangeObjectAddedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeObjectAddedMessage(input);
};

ExchangeObjectAddedMessage.prototype.serializeAs_ExchangeObjectAddedMessage = function(param1) {
  this.serializeAs_ExchangeObjectMessage(param1);
  this.object.serializeAs_ObjectItem(param1);
};

ExchangeObjectAddedMessage.prototype.deserializeAs_ExchangeObjectAddedMessage = function(param1) {
  this.deserialize(param1);
  this.object = new ObjectItem();
  this.object.deserialize(param1);
};

ExchangeObjectAddedMessage.prototype.getMessageId = function() {
  return 5516;
};

ExchangeObjectAddedMessage.prototype.getClassName = function() {
  return 'ExchangeObjectAddedMessage';
};

module.exports.id = 5516;
module.exports.class = ExchangeObjectAddedMessage;
module.exports.getInstance = function() {
  return new ExchangeObjectAddedMessage();
};