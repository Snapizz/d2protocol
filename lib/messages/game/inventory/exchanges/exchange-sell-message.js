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

ExchangeSellMessage.prototype.serializeAs_ExchangeSellMessage = function(output) {
  if (this.objectToSellId < 0) {
    throw (new Error((("Forbidden value (" + this.objectToSellId) + ") on element objectToSellId.")));
  };
  output.writeVarInt(this.objectToSellId);
  if (this.quantity < 0) {
    throw (new Error((("Forbidden value (" + this.quantity) + ") on element quantity.")));
  };
  output.writeVarInt(this.quantity);
};

ExchangeSellMessage.prototype.deserializeAs_ExchangeSellMessage = function(input) {
  this.objectToSellId = input.readVarUhInt();
  if (this.objectToSellId < 0) {
    throw (new Error((("Forbidden value (" + this.objectToSellId) + ") on element of ExchangeSellMessage.objectToSellId.")));
  };
  this.quantity = input.readVarUhInt();
  if (this.quantity < 0) {
    throw (new Error((("Forbidden value (" + this.quantity) + ") on element of ExchangeSellMessage.quantity.")));
  };
};

ExchangeSellMessage.prototype.getMessageId = function() {
  return 5778;
};

ExchangeSellMessage.prototype.getClassName = function() {
  return 'ExchangeSellMessage';
};

module.exports.id = 5778;
module.exports.class = ExchangeSellMessage;