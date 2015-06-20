var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var ExchangeItemAutoCraftRemainingMessage = function() {
  this.count = 0;
};

util.inherits(ExchangeItemAutoCraftRemainingMessage, BaseMessage);

ExchangeItemAutoCraftRemainingMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeItemAutoCraftRemainingMessage(output);
};

ExchangeItemAutoCraftRemainingMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeItemAutoCraftRemainingMessage(input);
};

ExchangeItemAutoCraftRemainingMessage.prototype.serializeAs_ExchangeItemAutoCraftRemainingMessage = function(param1) {
  if (this.count < 0) {
    throw new Error("Forbidden value (" + this.count + ") on element count.");
  } else {
    param1.writeVarInt(this.count);
    return;
  }
};

ExchangeItemAutoCraftRemainingMessage.prototype.deserializeAs_ExchangeItemAutoCraftRemainingMessage = function(param1) {
  this.count = param1.readVarUhInt();
  if (this.count < 0) {
    throw new Error("Forbidden value (" + this.count + ") on element of ExchangeItemAutoCraftRemainingMessage.count.");
  } else {
    return;
  }
};

ExchangeItemAutoCraftRemainingMessage.prototype.getMessageId = function() {
  return 6015;
};

ExchangeItemAutoCraftRemainingMessage.prototype.getClassName = function() {
  return 'ExchangeItemAutoCraftRemainingMessage';
};

module.exports.id = 6015;
module.exports.class = ExchangeItemAutoCraftRemainingMessage;
module.exports.getInstance = function() {
  return new ExchangeItemAutoCraftRemainingMessage();
};