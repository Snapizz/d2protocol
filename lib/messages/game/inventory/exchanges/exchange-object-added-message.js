var d2com = require('d2com'),
  BaseMessage = require('./exchange-object-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeObjectAddedMessage = function() {
  this.object;
};

util.inherits(ExchangeObjectAddedMessage, BaseMessage);

ExchangeObjectAddedMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeObjectAddedMessage(output);
};

ExchangeObjectAddedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeObjectAddedMessage(input);
};

ExchangeObjectAddedMessage.prototype.serializeAs_ExchangeObjectAddedMessage = function(output) {
  this.serializeAs_ExchangeObjectMessage(output);
  this.object.serializeAs_ObjectItem(output);
};

ExchangeObjectAddedMessage.prototype.deserializeAs_ExchangeObjectAddedMessage = function(input) {
  this.deserialize(input);
  this.object = new ObjectItem();
  this.object.deserialize(input);
};

ExchangeObjectAddedMessage.prototype.getMessageId = function() {
  return 5516;
};

ExchangeObjectAddedMessage.prototype.getClassName = function() {
  return 'ExchangeObjectAddedMessage';
};

module.exports.id = 5516;
module.exports.class = ExchangeObjectAddedMessage;