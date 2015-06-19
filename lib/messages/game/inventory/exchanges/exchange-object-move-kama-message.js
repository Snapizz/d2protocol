var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeObjectMoveKamaMessage = function() {
  this.quantity = 0;
};

util.inherits(ExchangeObjectMoveKamaMessage, BaseMessage);

ExchangeObjectMoveKamaMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeObjectMoveKamaMessage(output);
};

ExchangeObjectMoveKamaMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeObjectMoveKamaMessage(input);
};

ExchangeObjectMoveKamaMessage.prototype.serializeAs_ExchangeObjectMoveKamaMessage = function(output) {
  output.writeVarInt(this.quantity);
};

ExchangeObjectMoveKamaMessage.prototype.deserializeAs_ExchangeObjectMoveKamaMessage = function(input) {
  this.quantity = input.readVarInt();
};

ExchangeObjectMoveKamaMessage.prototype.getMessageId = function() {
  return 5520;
};

ExchangeObjectMoveKamaMessage.prototype.getClassName = function() {
  return 'ExchangeObjectMoveKamaMessage';
};

module.exports.id = 5520;
module.exports.class = ExchangeObjectMoveKamaMessage;