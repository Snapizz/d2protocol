var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

ExchangeItemAutoCraftRemainingMessage.prototype.serializeAs_ExchangeItemAutoCraftRemainingMessage = function(output) {
  if (this.count < 0) {
    throw (new Error((("Forbidden value (" + this.count) + ") on element count.")));
  };
  output.writeVarInt(this.count);
};

ExchangeItemAutoCraftRemainingMessage.prototype.deserializeAs_ExchangeItemAutoCraftRemainingMessage = function(input) {
  this.count = input.readVarUhInt();
  if (this.count < 0) {
    throw (new Error((("Forbidden value (" + this.count) + ") on element of ExchangeItemAutoCraftRemainingMessage.count.")));
  };
};

ExchangeItemAutoCraftRemainingMessage.prototype.getMessageId = function() {
  return 6015;
};

ExchangeItemAutoCraftRemainingMessage.prototype.getClassName = function() {
  return 'ExchangeItemAutoCraftRemainingMessage';
};

module.exports.id = 6015;
module.exports.class = ExchangeItemAutoCraftRemainingMessage;