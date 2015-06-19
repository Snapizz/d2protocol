var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeBidHousePriceMessage = function() {
  this.genId = 0;
};

util.inherits(ExchangeBidHousePriceMessage, BaseMessage);

ExchangeBidHousePriceMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeBidHousePriceMessage(output);
};

ExchangeBidHousePriceMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeBidHousePriceMessage(input);
};

ExchangeBidHousePriceMessage.prototype.serializeAs_ExchangeBidHousePriceMessage = function(output) {
  if (this.genId < 0) {
    throw (new Error((("Forbidden value (" + this.genId) + ") on element genId.")));
  };
  output.writeVarShort(this.genId);
};

ExchangeBidHousePriceMessage.prototype.deserializeAs_ExchangeBidHousePriceMessage = function(input) {
  this.genId = input.readVarUhShort();
  if (this.genId < 0) {
    throw (new Error((("Forbidden value (" + this.genId) + ") on element of ExchangeBidHousePriceMessage.genId.")));
  };
};

ExchangeBidHousePriceMessage.prototype.getMessageId = function() {
  return 5805;
};

ExchangeBidHousePriceMessage.prototype.getClassName = function() {
  return 'ExchangeBidHousePriceMessage';
};

module.exports.id = 5805;
module.exports.class = ExchangeBidHousePriceMessage;