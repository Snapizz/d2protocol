var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var StatsUpgradeResultMessage = function() {
  this.result = 0;
  this.nbCharacBoost = 0;
};

util.inherits(StatsUpgradeResultMessage, BaseMessage);

StatsUpgradeResultMessage.prototype.serialize = function(output) {
  this.serializeAs_StatsUpgradeResultMessage(output);
};

StatsUpgradeResultMessage.prototype.deserialize = function(input) {
  this.deserializeAs_StatsUpgradeResultMessage(input);
};

StatsUpgradeResultMessage.prototype.serializeAs_StatsUpgradeResultMessage = function(output) {
  output.writeByte(this.result);
  if (this.nbCharacBoost < 0) {
    throw (new Error((("Forbidden value (" + this.nbCharacBoost) + ") on element nbCharacBoost.")));
  };
  output.writeVarShort(this.nbCharacBoost);
};

StatsUpgradeResultMessage.prototype.deserializeAs_StatsUpgradeResultMessage = function(input) {
  this.result = input.readByte();
  this.nbCharacBoost = input.readVarUhShort();
  if (this.nbCharacBoost < 0) {
    throw (new Error((("Forbidden value (" + this.nbCharacBoost) + ") on element of StatsUpgradeResultMessage.nbCharacBoost.")));
  };
};

StatsUpgradeResultMessage.prototype.getMessageId = function() {
  return 5609;
};

StatsUpgradeResultMessage.prototype.getClassName = function() {
  return 'StatsUpgradeResultMessage';
};

module.exports.id = 5609;
module.exports.class = StatsUpgradeResultMessage;