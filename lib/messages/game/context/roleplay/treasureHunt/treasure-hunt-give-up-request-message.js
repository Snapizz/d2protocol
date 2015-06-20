var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var TreasureHuntGiveUpRequestMessage = function() {
  this.questType = 0;
};

util.inherits(TreasureHuntGiveUpRequestMessage, BaseMessage);

TreasureHuntGiveUpRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_TreasureHuntGiveUpRequestMessage(output);
};

TreasureHuntGiveUpRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_TreasureHuntGiveUpRequestMessage(input);
};

TreasureHuntGiveUpRequestMessage.prototype.serializeAs_TreasureHuntGiveUpRequestMessage = function(param1) {
  param1.writeByte(this.questType);
};

TreasureHuntGiveUpRequestMessage.prototype.deserializeAs_TreasureHuntGiveUpRequestMessage = function(param1) {
  this.questType = param1.readByte();
  if (this.questType < 0) {
    throw new Error("Forbidden value (" + this.questType + ") on element of TreasureHuntGiveUpRequestMessage.questType.");
  } else {
    return;
  }
};

TreasureHuntGiveUpRequestMessage.prototype.getMessageId = function() {
  return 6487;
};

TreasureHuntGiveUpRequestMessage.prototype.getClassName = function() {
  return 'TreasureHuntGiveUpRequestMessage';
};

module.exports.id = 6487;
module.exports.class = TreasureHuntGiveUpRequestMessage;