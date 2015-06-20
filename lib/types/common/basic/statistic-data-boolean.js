var StatisticDataBoolean = function() {
  this.value = false;
};



StatisticDataBoolean.prototype.serialize = function(output) {
  this.serializeAs_StatisticDataBoolean(output);
};

StatisticDataBoolean.prototype.deserialize = function(input) {
  this.deserializeAs_StatisticDataBoolean(input);
};

StatisticDataBoolean.prototype.serializeAs_StatisticDataBoolean = function(output) {
  super.serializeAs_StatisticData(param1);
  param1.writeBoolean(this.value);
};

StatisticDataBoolean.prototype.deserializeAs_StatisticDataBoolean = function(input) {
  super.deserialize(param1);
  this.value = param1.readBoolean();
};

StatisticDataBoolean.prototype.getTypeId = function() {
  return 482;
};

StatisticDataBoolean.prototype.getClassName = function() {
  return 'StatisticDataBoolean';
};

module.exports.id = 482;
module.exports.class = StatisticDataBoolean;