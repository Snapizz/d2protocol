var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeBidPriceMessage = function() {
  this.genericId = 0;
  this.averagePrice = 0;
};

util.inherits(ExchangeBidPriceMessage, BaseMessage);

ExchangeBidPriceMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeBidPriceMessage(output);
};

ExchangeBidPriceMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeBidPriceMessage(input);
};

ExchangeBidPriceMessage.prototype.serializeAs_ExchangeBidPriceMessage = function(output) {
  if (this.genericId < 0) {
    throw (new Error((("Forbidden value (" + this.genericId) + ") on element genericId.")));
  };
  output.writeVarShort(this.genericId);
  output.writeVarInt(this.averagePrice);
};

ExchangeBidPriceMessage.prototype.deserializeAs_ExchangeBidPriceMessage = function(input) {
  this.genericId = input.readVarUhShort();
  if (this.genericId < 0) {
    throw (new Error((("Forbidden value (" + this.genericId) + ") on element of ExchangeBidPriceMessage.genericId.")));
  };
  this.averagePrice = input.readVarInt();
};

ExchangeBidPriceMessage.prototype.getMessageId = function() {
  return 5755;
};

ExchangeBidPriceMessage.prototype.getClassName = function() {
  return 'ExchangeBidPriceMessage';
};

module.exports.id = 5755;
module.exports.class = ExchangeBidPriceMessage;