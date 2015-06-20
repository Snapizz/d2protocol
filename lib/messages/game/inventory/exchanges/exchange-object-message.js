var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeObjectMessage = function() {
  this.remote = false;
};

util.inherits(ExchangeObjectMessage, BaseMessage);

ExchangeObjectMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeObjectMessage(output);
};

ExchangeObjectMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeObjectMessage(input);
};

ExchangeObjectMessage.prototype.serializeAs_ExchangeObjectMessage = function(param1) {
  param1.writeBoolean(this.remote);
};

ExchangeObjectMessage.prototype.deserializeAs_ExchangeObjectMessage = function(param1) {
  this.remote = param1.readBoolean();
};

ExchangeObjectMessage.prototype.getMessageId = function() {
  return 5515;
};

ExchangeObjectMessage.prototype.getClassName = function() {
  return 'ExchangeObjectMessage';
};

module.exports.id = 5515;
module.exports.class = ExchangeObjectMessage;