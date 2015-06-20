var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeStartOkNpcTradeMessage = function() {
  this.npcId = 0;
};

util.inherits(ExchangeStartOkNpcTradeMessage, BaseMessage);

ExchangeStartOkNpcTradeMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeStartOkNpcTradeMessage(output);
};

ExchangeStartOkNpcTradeMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeStartOkNpcTradeMessage(input);
};

ExchangeStartOkNpcTradeMessage.prototype.serializeAs_ExchangeStartOkNpcTradeMessage = function(param1) {
  param1.writeInt(this.npcId);
};

ExchangeStartOkNpcTradeMessage.prototype.deserializeAs_ExchangeStartOkNpcTradeMessage = function(param1) {
  this.npcId = param1.readInt();
};

ExchangeStartOkNpcTradeMessage.prototype.getMessageId = function() {
  return 5785;
};

ExchangeStartOkNpcTradeMessage.prototype.getClassName = function() {
  return 'ExchangeStartOkNpcTradeMessage';
};

module.exports.id = 5785;
module.exports.class = ExchangeStartOkNpcTradeMessage;