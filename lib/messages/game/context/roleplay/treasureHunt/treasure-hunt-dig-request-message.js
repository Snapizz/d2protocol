var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var TreasureHuntDigRequestMessage = function() {
  this.questType = 0;
};

util.inherits(TreasureHuntDigRequestMessage, BaseMessage);

TreasureHuntDigRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_TreasureHuntDigRequestMessage(output);
};

TreasureHuntDigRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_TreasureHuntDigRequestMessage(input);
};

TreasureHuntDigRequestMessage.prototype.serializeAs_TreasureHuntDigRequestMessage = function(param1) {
  param1.writeByte(this.questType);
};

TreasureHuntDigRequestMessage.prototype.deserializeAs_TreasureHuntDigRequestMessage = function(param1) {
  this.questType = param1.readByte();
  if (this.questType < 0) {
    throw new Error("Forbidden value (" + this.questType + ") on element of TreasureHuntDigRequestMessage.questType.");
  } else {
    return;
  }
};

TreasureHuntDigRequestMessage.prototype.getMessageId = function() {
  return 6485;
};

TreasureHuntDigRequestMessage.prototype.getClassName = function() {
  return 'TreasureHuntDigRequestMessage';
};

module.exports.id = 6485;
module.exports.class = TreasureHuntDigRequestMessage;