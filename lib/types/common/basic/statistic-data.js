var StatisticData = function() {
  this.actionId = 0;
};



StatisticData.prototype.serialize = function(output) {
  this.serializeAs_StatisticData(output);
};

StatisticData.prototype.deserialize = function(input) {
  this.deserializeAs_StatisticData(input);
};

StatisticData.prototype.serializeAs_StatisticData = function(param1) {
  if (this.actionId < 0) {
    throw new Error("Forbidden value (" + this.actionId + ") on element actionId.");
  } else {
    param1.writeVarShort(this.actionId);
    return;
  }
};

StatisticData.prototype.deserializeAs_StatisticData = function(param1) {
  this.actionId = param1.readVarUhShort();
  if (this.actionId < 0) {
    throw new Error("Forbidden value (" + this.actionId + ") on element of StatisticData.actionId.");
  } else {
    return;
  }
};

StatisticData.prototype.getTypeId = function() {
  return 484;
};

StatisticData.prototype.getClassName = function() {
  return 'StatisticData';
};

module.exports.id = 484;
module.exports.class = StatisticData;
module.exports.getInstance = function() {
  return new StatisticData();
};