var StatisticDataString = function() {
  this.value = "";
};



StatisticDataString.prototype.serialize = function(output) {
  this.serializeAs_StatisticDataString(output);
};

StatisticDataString.prototype.deserialize = function(input) {
  this.deserializeAs_StatisticDataString(input);
};

StatisticDataString.prototype.serializeAs_StatisticDataString = function(output) {
  this.serializeAs_StatisticData(param1);
  param1.writeUTF(this.value);
};

StatisticDataString.prototype.deserializeAs_StatisticDataString = function(input) {
  this.deserialize(param1);
  this.value = param1.readUTF();
};

StatisticDataString.prototype.getTypeId = function() {
  return 487;
};

StatisticDataString.prototype.getClassName = function() {
  return 'StatisticDataString';
};

module.exports.id = 487;
module.exports.class = StatisticDataString;