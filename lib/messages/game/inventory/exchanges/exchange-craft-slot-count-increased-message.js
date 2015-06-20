var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
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

ExchangeCraftSlotCountIncreasedMessage.prototype.serializeAs_ExchangeCraftSlotCountIncreasedMessage = function(param1) {
  if (this.newMaxSlot < 0) {
    throw new Error("Forbidden value (" + this.newMaxSlot + ") on element newMaxSlot.");
  } else {
    param1.writeByte(this.newMaxSlot);
    return;
  }
};

ExchangeCraftSlotCountIncreasedMessage.prototype.deserializeAs_ExchangeCraftSlotCountIncreasedMessage = function(param1) {
  this.newMaxSlot = param1.readByte();
  if (this.newMaxSlot < 0) {
    throw new Error("Forbidden value (" + this.newMaxSlot + ") on element of ExchangeCraftSlotCountIncreasedMessage.newMaxSlot.");
  } else {
    return;
  }
};

ExchangeCraftSlotCountIncreasedMessage.prototype.getMessageId = function() {
  return 6125;
};

ExchangeCraftSlotCountIncreasedMessage.prototype.getClassName = function() {
  return 'ExchangeCraftSlotCountIncreasedMessage';
};

module.exports.id = 6125;
module.exports.class = ExchangeCraftSlotCountIncreasedMessage;
module.exports.getInstance = function() {
  return new ExchangeCraftSlotCountIncreasedMessage();
};