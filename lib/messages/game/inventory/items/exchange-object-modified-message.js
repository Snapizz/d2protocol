var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ObjectItem = require('../../../../types/game/data/items/object-item.js');

var ExchangeObjectModifiedMessage = function() {
  this.object = new ObjectItem();
};

util.inherits(ExchangeObjectModifiedMessage, BaseMessage);

ExchangeObjectModifiedMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeObjectModifiedMessage(output);
};

ExchangeObjectModifiedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeObjectModifiedMessage(input);
};

ExchangeObjectModifiedMessage.prototype.serializeAs_ExchangeObjectModifiedMessage = function(param1) {
  this.serializeAs_ExchangeObjectMessage(param1);
  this.object.serializeAs_ObjectItem(param1);
};

ExchangeObjectModifiedMessage.prototype.deserializeAs_ExchangeObjectModifiedMessage = function(param1) {
  this.deserialize(param1);
  this.object = new ObjectItem();
  this.object.deserialize(param1);
};

ExchangeObjectModifiedMessage.prototype.getMessageId = function() {
  return 5519;
};

ExchangeObjectModifiedMessage.prototype.getClassName = function() {
  return 'ExchangeObjectModifiedMessage';
};

module.exports.id = 5519;
module.exports.class = ExchangeObjectModifiedMessage;
module.exports.getInstance = function() {
  return new ExchangeObjectModifiedMessage();
};