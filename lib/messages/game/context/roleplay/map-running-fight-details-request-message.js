var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var MapRunningFightDetailsRequestMessage = function() {
  this.fightId = 0;
};

util.inherits(MapRunningFightDetailsRequestMessage, BaseMessage);

MapRunningFightDetailsRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_MapRunningFightDetailsRequestMessage(output);
};

MapRunningFightDetailsRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_MapRunningFightDetailsRequestMessage(input);
};

MapRunningFightDetailsRequestMessage.prototype.serializeAs_MapRunningFightDetailsRequestMessage = function(param1) {
  if (this.fightId < 0) {
    throw new Error("Forbidden value (" + this.fightId + ") on element fightId.");
  } else {
    param1.writeInt(this.fightId);
    return;
  }
};

MapRunningFightDetailsRequestMessage.prototype.deserializeAs_MapRunningFightDetailsRequestMessage = function(param1) {
  this.fightId = param1.readInt();
  if (this.fightId < 0) {
    throw new Error("Forbidden value (" + this.fightId + ") on element of MapRunningFightDetailsRequestMessage.fightId.");
  } else {
    return;
  }
};

MapRunningFightDetailsRequestMessage.prototype.getMessageId = function() {
  return 5750;
};

MapRunningFightDetailsRequestMessage.prototype.getClassName = function() {
  return 'MapRunningFightDetailsRequestMessage';
};

module.exports.id = 5750;
module.exports.class = MapRunningFightDetailsRequestMessage;