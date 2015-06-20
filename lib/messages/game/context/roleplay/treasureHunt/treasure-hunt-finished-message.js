var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var TreasureHuntFinishedMessage = function() {
  this.questType = 0;
};

util.inherits(TreasureHuntFinishedMessage, BaseMessage);

TreasureHuntFinishedMessage.prototype.serialize = function(output) {
  this.serializeAs_TreasureHuntFinishedMessage(output);
};

TreasureHuntFinishedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_TreasureHuntFinishedMessage(input);
};

TreasureHuntFinishedMessage.prototype.serializeAs_TreasureHuntFinishedMessage = function(param1) {
  param1.writeByte(this.questType);
};

TreasureHuntFinishedMessage.prototype.deserializeAs_TreasureHuntFinishedMessage = function(param1) {
  this.questType = param1.readByte();
  if (this.questType < 0) {
    throw new Error("Forbidden value (" + this.questType + ") on element of TreasureHuntFinishedMessage.questType.");
  } else {
    return;
  }
};

TreasureHuntFinishedMessage.prototype.getMessageId = function() {
  return 6483;
};

TreasureHuntFinishedMessage.prototype.getClassName = function() {
  return 'TreasureHuntFinishedMessage';
};

module.exports.id = 6483;
module.exports.class = TreasureHuntFinishedMessage;
module.exports.getInstance = function() {
  return new TreasureHuntFinishedMessage();
};