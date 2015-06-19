var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

PrismFightSwapRequestMessage.prototype.serializeAs_PrismFightSwapRequestMessage = function(output) {
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element subAreaId.")));
  };
  output.writeVarShort(this.subAreaId);
  if (this.targetId < 0) {
    throw (new Error((("Forbidden value (" + this.targetId) + ") on element targetId.")));
  };
  output.writeVarInt(this.targetId);
};

PrismFightSwapRequestMessage.prototype.deserializeAs_PrismFightSwapRequestMessage = function(input) {
  this.subAreaId = input.readVarUhShort();
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element of PrismFightSwapRequestMessage.subAreaId.")));
  };
  this.targetId = input.readVarUhInt();
  if (this.targetId < 0) {
    throw (new Error((("Forbidden value (" + this.targetId) + ") on element of PrismFightSwapRequestMessage.targetId.")));
  };
};

PrismFightSwapRequestMessage.prototype.getMessageId = function() {
  return 5901;
};

PrismFightSwapRequestMessage.prototype.getClassName = function() {
  return 'PrismFightSwapRequestMessage';
};

module.exports.id = 5901;
module.exports.class = PrismFightSwapRequestMessage;