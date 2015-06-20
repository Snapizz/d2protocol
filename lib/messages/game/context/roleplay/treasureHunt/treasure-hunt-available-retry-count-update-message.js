var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var TreasureHuntAvailableRetryCountUpdateMessage = function() {
  this.questType = 0;
  this.availableRetryCount = 0;
};

util.inherits(TreasureHuntAvailableRetryCountUpdateMessage, BaseMessage);

TreasureHuntAvailableRetryCountUpdateMessage.prototype.serialize = function(output) {
  this.serializeAs_TreasureHuntAvailableRetryCountUpdateMessage(output);
};

TreasureHuntAvailableRetryCountUpdateMessage.prototype.deserialize = function(input) {
  this.deserializeAs_TreasureHuntAvailableRetryCountUpdateMessage(input);
};

TreasureHuntAvailableRetryCountUpdateMessage.prototype.serializeAs_TreasureHuntAvailableRetryCountUpdateMessage = function(output) {
  param1.writeByte(this.questType);
  param1.writeInt(this.availableRetryCount);
};

TreasureHuntAvailableRetryCountUpdateMessage.prototype.deserializeAs_TreasureHuntAvailableRetryCountUpdateMessage = function(input) {
  this.questType = param1.readByte();
  if (this.questType < 0) {
    throw new Error("Forbidden value (" + this.questType + ") on element of TreasureHuntAvailableRetryCountUpdateMessage.questType.");
  } else {
    this.availableRetryCount = param1.readInt();
    return;
  }
};

TreasureHuntAvailableRetryCountUpdateMessage.prototype.getMessageId = function() {
  return 6491;
};

TreasureHuntAvailableRetryCountUpdateMessage.prototype.getClassName = function() {
  return 'TreasureHuntAvailableRetryCountUpdateMessage';
};

module.exports.id = 6491;
module.exports.class = TreasureHuntAvailableRetryCountUpdateMessage;