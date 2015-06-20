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

ExchangeBidPriceMessage.prototype.serializeAs_ExchangeBidPriceMessage = function(param1) {
  if (this.genericId < 0) {
    throw new Error("Forbidden value (" + this.genericId + ") on element genericId.");
  } else {
    param1.writeVarShort(this.genericId);
    param1.writeVarInt(this.averagePrice);
    return;
  }
};

ExchangeBidPriceMessage.prototype.deserializeAs_ExchangeBidPriceMessage = function(param1) {
  this.genericId = param1.readVarUhShort();
  if (this.genericId < 0) {
    throw new Error("Forbidden value (" + this.genericId + ") on element of ExchangeBidPriceMessage.genericId.");
  } else {
    this.averagePrice = param1.readVarInt();
    return;
  }
};

ExchangeBidPriceMessage.prototype.getMessageId = function() {
  return 5755;
};

ExchangeBidPriceMessage.prototype.getClassName = function() {
  return 'ExchangeBidPriceMessage';
};

module.exports.id = 5755;
module.exports.class = ExchangeBidPriceMessage;
module.exports.getInstance = function() {
  return new ExchangeBidPriceMessage();
};