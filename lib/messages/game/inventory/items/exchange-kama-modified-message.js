var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
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

ExchangeKamaModifiedMessage.prototype.serializeAs_ExchangeKamaModifiedMessage = function(param1) {
  this.serializeAs_ExchangeObjectMessage(param1);
  if (this.quantity < 0) {
    throw new Error("Forbidden value (" + this.quantity + ") on element quantity.");
  } else {
    param1.writeVarInt(this.quantity);
    return;
  }
};

ExchangeKamaModifiedMessage.prototype.deserializeAs_ExchangeKamaModifiedMessage = function(param1) {
  this.deserialize(param1);
  this.quantity = param1.readVarUhInt();
  if (this.quantity < 0) {
    throw new Error("Forbidden value (" + this.quantity + ") on element of ExchangeKamaModifiedMessage.quantity.");
  } else {
    return;
  }
};

ExchangeKamaModifiedMessage.prototype.getMessageId = function() {
  return 5521;
};

ExchangeKamaModifiedMessage.prototype.getClassName = function() {
  return 'ExchangeKamaModifiedMessage';
};

module.exports.id = 5521;
module.exports.class = ExchangeKamaModifiedMessage;