var d2com = require('d2com'),
  BaseMessage = require('./exchange-object-move-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeObjectMovePricedMessage = function() {
  this.price = 0;
};

util.inherits(ExchangeObjectMovePricedMessage, BaseMessage);

ExchangeObjectMovePricedMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeObjectMovePricedMessage(output);
};

ExchangeObjectMovePricedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeObjectMovePricedMessage(input);
};

ExchangeObjectMovePricedMessage.prototype.serializeAs_ExchangeObjectMovePricedMessage = function(output) {
  this.serializeAs_ExchangeObjectMoveMessage(output);
  if (this.price < 0) {
    throw (new Error((("Forbidden value (" + this.price) + ") on element price.")));
  };
  output.writeVarInt(this.price);
};

ExchangeObjectMovePricedMessage.prototype.deserializeAs_ExchangeObjectMovePricedMessage = function(input) {
  this.deserialize(input);
  this.price = input.readVarUhInt();
  if (this.price < 0) {
    throw (new Error((("Forbidden value (" + this.price) + ") on element of ExchangeObjectMovePricedMessage.price.")));
  };
};

ExchangeObjectMovePricedMessage.prototype.getMessageId = function() {
  return 5514;
};

ExchangeObjectMovePricedMessage.prototype.getClassName = function() {
  return 'ExchangeObjectMovePricedMessage';
};

module.exports.id = 5514;
module.exports.class = ExchangeObjectMovePricedMessage;