var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var ExchangeReplayMessage = function() {
  this.count = 0;
};

util.inherits(ExchangeReplayMessage, BaseMessage);

ExchangeReplayMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeReplayMessage(output);
};

ExchangeReplayMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeReplayMessage(input);
};

ExchangeReplayMessage.prototype.serializeAs_ExchangeReplayMessage = function(param1) {
  param1.writeVarInt(this.count);
};

ExchangeReplayMessage.prototype.deserializeAs_ExchangeReplayMessage = function(param1) {
  this.count = param1.readVarInt();
};

ExchangeReplayMessage.prototype.getMessageId = function() {
  return 6002;
};

ExchangeReplayMessage.prototype.getClassName = function() {
  return 'ExchangeReplayMessage';
};

module.exports.id = 6002;
module.exports.class = ExchangeReplayMessage;
module.exports.getInstance = function() {
  return new ExchangeReplayMessage();
};