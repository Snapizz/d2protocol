var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var TreasureHuntLegendaryRequestMessage = function() {
  this.legendaryId = 0;
};

util.inherits(TreasureHuntLegendaryRequestMessage, BaseMessage);

TreasureHuntLegendaryRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_TreasureHuntLegendaryRequestMessage(output);
};

TreasureHuntLegendaryRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_TreasureHuntLegendaryRequestMessage(input);
};

TreasureHuntLegendaryRequestMessage.prototype.serializeAs_TreasureHuntLegendaryRequestMessage = function(param1) {
  if (this.legendaryId < 0) {
    throw new Error("Forbidden value (" + this.legendaryId + ") on element legendaryId.");
  } else {
    param1.writeVarShort(this.legendaryId);
    return;
  }
};

TreasureHuntLegendaryRequestMessage.prototype.deserializeAs_TreasureHuntLegendaryRequestMessage = function(param1) {
  this.legendaryId = param1.readVarUhShort();
  if (this.legendaryId < 0) {
    throw new Error("Forbidden value (" + this.legendaryId + ") on element of TreasureHuntLegendaryRequestMessage.legendaryId.");
  } else {
    return;
  }
};

TreasureHuntLegendaryRequestMessage.prototype.getMessageId = function() {
  return 6499;
};

TreasureHuntLegendaryRequestMessage.prototype.getClassName = function() {
  return 'TreasureHuntLegendaryRequestMessage';
};

module.exports.id = 6499;
module.exports.class = TreasureHuntLegendaryRequestMessage;