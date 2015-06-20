var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var PrismFightSwapRequestMessage = function() {
  this.subAreaId = 0;
  this.targetId = 0;
};

util.inherits(PrismFightSwapRequestMessage, BaseMessage);

PrismFightSwapRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_PrismFightSwapRequestMessage(output);
};

PrismFightSwapRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PrismFightSwapRequestMessage(input);
};

PrismFightSwapRequestMessage.prototype.serializeAs_PrismFightSwapRequestMessage = function(param1) {
  if (this.subAreaId < 0) {
    throw new Error("Forbidden value (" + this.subAreaId + ") on element subAreaId.");
  } else {
    param1.writeVarShort(this.subAreaId);
    if (this.targetId < 0) {
      throw new Error("Forbidden value (" + this.targetId + ") on element targetId.");
    } else {
      param1.writeVarInt(this.targetId);
      return;
    }
  }
};

PrismFightSwapRequestMessage.prototype.deserializeAs_PrismFightSwapRequestMessage = function(param1) {
  this.subAreaId = param1.readVarUhShort();
  if (this.subAreaId < 0) {
    throw new Error("Forbidden value (" + this.subAreaId + ") on element of PrismFightSwapRequestMessage.subAreaId.");
  } else {
    this.targetId = param1.readVarUhInt();
    if (this.targetId < 0) {
      throw new Error("Forbidden value (" + this.targetId + ") on element of PrismFightSwapRequestMessage.targetId.");
    } else {
      return;
    }
  }
};

PrismFightSwapRequestMessage.prototype.getMessageId = function() {
  return 5901;
};

PrismFightSwapRequestMessage.prototype.getClassName = function() {
  return 'PrismFightSwapRequestMessage';
};

module.exports.id = 5901;
module.exports.class = PrismFightSwapRequestMessage;
module.exports.getInstance = function() {
  return new PrismFightSwapRequestMessage();
};