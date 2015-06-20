var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var TreasureHuntFlagRemoveRequestMessage = function() {
  this.questType = 0;
  this.index = 0;
};

util.inherits(TreasureHuntFlagRemoveRequestMessage, BaseMessage);

TreasureHuntFlagRemoveRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_TreasureHuntFlagRemoveRequestMessage(output);
};

TreasureHuntFlagRemoveRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_TreasureHuntFlagRemoveRequestMessage(input);
};

TreasureHuntFlagRemoveRequestMessage.prototype.serializeAs_TreasureHuntFlagRemoveRequestMessage = function(param1) {
  param1.writeByte(this.questType);
  if (this.index < 0) {
    throw new Error("Forbidden value (" + this.index + ") on element index.");
  } else {
    param1.writeByte(this.index);
    return;
  }
};

TreasureHuntFlagRemoveRequestMessage.prototype.deserializeAs_TreasureHuntFlagRemoveRequestMessage = function(param1) {
  this.questType = param1.readByte();
  if (this.questType < 0) {
    throw new Error("Forbidden value (" + this.questType + ") on element of TreasureHuntFlagRemoveRequestMessage.questType.");
  } else {
    this.index = param1.readByte();
    if (this.index < 0) {
      throw new Error("Forbidden value (" + this.index + ") on element of TreasureHuntFlagRemoveRequestMessage.index.");
    } else {
      return;
    }
  }
};

TreasureHuntFlagRemoveRequestMessage.prototype.getMessageId = function() {
  return 6510;
};

TreasureHuntFlagRemoveRequestMessage.prototype.getClassName = function() {
  return 'TreasureHuntFlagRemoveRequestMessage';
};

module.exports.id = 6510;
module.exports.class = TreasureHuntFlagRemoveRequestMessage;
module.exports.getInstance = function() {
  return new TreasureHuntFlagRemoveRequestMessage();
};