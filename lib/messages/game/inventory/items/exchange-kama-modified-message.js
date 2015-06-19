var d2com = require('d2com'),
  BaseMessage = require('../exchanges/exchange-object-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeKamaModifiedMessage = function() {
  this.quantity = 0;
};

util.inherits(ExchangeKamaModifiedMessage, BaseMessage);

ExchangeKamaModifiedMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeKamaModifiedMessage(output);
};

ExchangeKamaModifiedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeKamaModifiedMessage(input);
};

ExchangeKamaModifiedMessage.prototype.serializeAs_ExchangeKamaModifiedMessage = function(output) {
  this.serializeAs_ExchangeObjectMessage(output);
  if (this.quantity < 0) {
    throw (new Error((("Forbidden value (" + this.quantity) + ") on element quantity.")));
  };
  output.writeVarInt(this.quantity);
};

ExchangeKamaModifiedMessage.prototype.deserializeAs_ExchangeKamaModifiedMessage = function(input) {
  this.deserialize(input);
  this.quantity = input.readVarUhInt();
  if (this.quantity < 0) {
    throw (new Error((("Forbidden value (" + this.quantity) + ") on element of ExchangeKamaModifiedMessage.quantity.")));
  };
};

ExchangeKamaModifiedMessage.prototype.getMessageId = function() {
  return 5521;
};

ExchangeKamaModifiedMessage.prototype.getClassName = function() {
  return 'ExchangeKamaModifiedMessage';
};

module.exports.id = 5521;
module.exports.class = ExchangeKamaModifiedMessage;