var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var StatsUpgradeRequestMessage = function() {
  this.useAdditionnal = false;
  this.statId = 11;
  this.boostPoint = 0;
};

util.inherits(StatsUpgradeRequestMessage, BaseMessage);

StatsUpgradeRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_StatsUpgradeRequestMessage(output);
};

StatsUpgradeRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_StatsUpgradeRequestMessage(input);
};

StatsUpgradeRequestMessage.prototype.serializeAs_StatsUpgradeRequestMessage = function(param1) {
  param1.writeBoolean(this.useAdditionnal);
  param1.writeByte(this.statId);
  if (this.boostPoint < 0) {
    throw new Error("Forbidden value (" + this.boostPoint + ") on element boostPoint.");
  } else {
    param1.writeVarShort(this.boostPoint);
    return;
  }
};

StatsUpgradeRequestMessage.prototype.deserializeAs_StatsUpgradeRequestMessage = function(param1) {
  this.useAdditionnal = param1.readBoolean();
  this.statId = param1.readByte();
  if (this.statId < 0) {
    throw new Error("Forbidden value (" + this.statId + ") on element of StatsUpgradeRequestMessage.statId.");
  } else {
    this.boostPoint = param1.readVarUhShort();
    if (this.boostPoint < 0) {
      throw new Error("Forbidden value (" + this.boostPoint + ") on element of StatsUpgradeRequestMessage.boostPoint.");
    } else {
      return;
    }
  }
};

StatsUpgradeRequestMessage.prototype.getMessageId = function() {
  return 5610;
};

StatsUpgradeRequestMessage.prototype.getClassName = function() {
  return 'StatsUpgradeRequestMessage';
};

module.exports.id = 5610;
module.exports.class = StatsUpgradeRequestMessage;
module.exports.getInstance = function() {
  return new StatsUpgradeRequestMessage();
};