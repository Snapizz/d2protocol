var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var ExchangeReplayCountModifiedMessage = function() {
  this.count = 0;
};

util.inherits(ExchangeReplayCountModifiedMessage, BaseMessage);

ExchangeReplayCountModifiedMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeReplayCountModifiedMessage(output);
};

ExchangeReplayCountModifiedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeReplayCountModifiedMessage(input);
};

ExchangeReplayCountModifiedMessage.prototype.serializeAs_ExchangeReplayCountModifiedMessage = function(param1) {
  param1.writeVarInt(this.count);
};

ExchangeReplayCountModifiedMessage.prototype.deserializeAs_ExchangeReplayCountModifiedMessage = function(param1) {
  this.count = param1.readVarInt();
};

ExchangeReplayCountModifiedMessage.prototype.getMessageId = function() {
  return 6023;
};

ExchangeReplayCountModifiedMessage.prototype.getClassName = function() {
  return 'ExchangeReplayCountModifiedMessage';
};

module.exports.id = 6023;
module.exports.class = ExchangeReplayCountModifiedMessage;
module.exports.getInstance = function() {
  return new ExchangeReplayCountModifiedMessage();
};