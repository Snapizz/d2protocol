var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var ExchangeSellMessage = function() {
  this.objectToSellId = 0;
  this.quantity = 0;
};

util.inherits(ExchangeSellMessage, BaseMessage);

ExchangeSellMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeSellMessage(output);
};

ExchangeSellMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeSellMessage(input);
};

ExchangeSellMessage.prototype.serializeAs_ExchangeSellMessage = function(param1) {
  if (this.objectToSellId < 0) {
    throw new Error("Forbidden value (" + this.objectToSellId + ") on element objectToSellId.");
  } else {
    param1.writeVarInt(this.objectToSellId);
    if (this.quantity < 0) {
      throw new Error("Forbidden value (" + this.quantity + ") on element quantity.");
    } else {
      param1.writeVarInt(this.quantity);
      return;
    }
  }
};

ExchangeSellMessage.prototype.deserializeAs_ExchangeSellMessage = function(param1) {
  this.objectToSellId = param1.readVarUhInt();
  if (this.objectToSellId < 0) {
    throw new Error("Forbidden value (" + this.objectToSellId + ") on element of ExchangeSellMessage.objectToSellId.");
  } else {
    this.quantity = param1.readVarUhInt();
    if (this.quantity < 0) {
      throw new Error("Forbidden value (" + this.quantity + ") on element of ExchangeSellMessage.quantity.");
    } else {
      return;
    }
  }
};

ExchangeSellMessage.prototype.getMessageId = function() {
  return 5778;
};

ExchangeSellMessage.prototype.getClassName = function() {
  return 'ExchangeSellMessage';
};

module.exports.id = 5778;
module.exports.class = ExchangeSellMessage;