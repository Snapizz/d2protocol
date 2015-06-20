var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var TreasureHuntRequestMessage = function() {
  this.questLevel = 0;
  this.questType = 0;
};

util.inherits(TreasureHuntRequestMessage, BaseMessage);

TreasureHuntRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_TreasureHuntRequestMessage(output);
};

TreasureHuntRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_TreasureHuntRequestMessage(input);
};

TreasureHuntRequestMessage.prototype.serializeAs_TreasureHuntRequestMessage = function(param1) {
  if (this.questLevel < 1 || this.questLevel > 200) {
    throw new Error("Forbidden value (" + this.questLevel + ") on element questLevel.");
  } else {
    param1.writeByte(this.questLevel);
    param1.writeByte(this.questType);
    return;
  }
};

TreasureHuntRequestMessage.prototype.deserializeAs_TreasureHuntRequestMessage = function(param1) {
  this.questLevel = param1.readUnsignedByte();
  if (this.questLevel < 1 || this.questLevel > 200) {
    throw new Error("Forbidden value (" + this.questLevel + ") on element of TreasureHuntRequestMessage.questLevel.");
  } else {
    this.questType = param1.readByte();
    if (this.questType < 0) {
      throw new Error("Forbidden value (" + this.questType + ") on element of TreasureHuntRequestMessage.questType.");
    } else {
      return;
    }
  }
};

TreasureHuntRequestMessage.prototype.getMessageId = function() {
  return 6488;
};

TreasureHuntRequestMessage.prototype.getClassName = function() {
  return 'TreasureHuntRequestMessage';
};

module.exports.id = 6488;
module.exports.class = TreasureHuntRequestMessage;
module.exports.getInstance = function() {
  return new TreasureHuntRequestMessage();
};