var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeCraftSlotCountIncreasedMessage = function() {
  this.newMaxSlot = 0;
};

util.inherits(ExchangeCraftSlotCountIncreasedMessage, BaseMessage);

ExchangeCraftSlotCountIncreasedMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeCraftSlotCountIncreasedMessage(output);
};

ExchangeCraftSlotCountIncreasedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeCraftSlotCountIncreasedMessage(input);
};

ExchangeCraftSlotCountIncreasedMessage.prototype.serializeAs_ExchangeCraftSlotCountIncreasedMessage = function(output) {
  if (this.newMaxSlot < 0) {
    throw (new Error((("Forbidden value (" + this.newMaxSlot) + ") on element newMaxSlot.")));
  };
  output.writeByte(this.newMaxSlot);
};

ExchangeCraftSlotCountIncreasedMessage.prototype.deserializeAs_ExchangeCraftSlotCountIncreasedMessage = function(input) {
  this.newMaxSlot = input.readByte();
  if (this.newMaxSlot < 0) {
    throw (new Error((("Forbidden value (" + this.newMaxSlot) + ") on element of ExchangeCraftSlotCountIncreasedMessage.newMaxSlot.")));
  };
};

ExchangeCraftSlotCountIncreasedMessage.prototype.getMessageId = function() {
  return 6125;
};

ExchangeCraftSlotCountIncreasedMessage.prototype.getClassName = function() {
  return 'ExchangeCraftSlotCountIncreasedMessage';
};

module.exports.id = 6125;
module.exports.class = ExchangeCraftSlotCountIncreasedMessage;