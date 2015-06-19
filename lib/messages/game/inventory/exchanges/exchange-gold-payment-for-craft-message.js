var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeGoldPaymentForCraftMessage = function() {
  this.onlySuccess = false;
  this.goldSum = 0;
};

util.inherits(ExchangeGoldPaymentForCraftMessage, BaseMessage);

ExchangeGoldPaymentForCraftMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeGoldPaymentForCraftMessage(output);
};

ExchangeGoldPaymentForCraftMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeGoldPaymentForCraftMessage(input);
};

ExchangeGoldPaymentForCraftMessage.prototype.serializeAs_ExchangeGoldPaymentForCraftMessage = function(output) {
  output.writeBoolean(this.onlySuccess);
  if (this.goldSum < 0) {
    throw (new Error((("Forbidden value (" + this.goldSum) + ") on element goldSum.")));
  };
  output.writeVarInt(this.goldSum);
};

ExchangeGoldPaymentForCraftMessage.prototype.deserializeAs_ExchangeGoldPaymentForCraftMessage = function(input) {
  this.onlySuccess = input.readBoolean();
  this.goldSum = input.readVarUhInt();
  if (this.goldSum < 0) {
    throw (new Error((("Forbidden value (" + this.goldSum) + ") on element of ExchangeGoldPaymentForCraftMessage.goldSum.")));
  };
};

ExchangeGoldPaymentForCraftMessage.prototype.getMessageId = function() {
  return 5833;
};

ExchangeGoldPaymentForCraftMessage.prototype.getClassName = function() {
  return 'ExchangeGoldPaymentForCraftMessage';
};

module.exports.id = 5833;
module.exports.class = ExchangeGoldPaymentForCraftMessage;