var BaseMessage = require('./statistic-data-string.js').class,
  util = require('util');

var StatisticDataString = function() {
  this.value = "";
};

util.inherits(StatisticDataString, BaseMessage);

StatisticDataString.prototype.serialize = function(output) {
  this.serializeAs_StatisticDataString(output);
};

StatisticDataString.prototype.deserialize = function(input) {
  this.deserializeAs_StatisticDataString(input);
};

StatisticDataString.prototype.serializeAs_StatisticDataString = function(param1) {
  this.serializeAs_StatisticData(param1);
  param1.writeUTF(this.value);
};

StatisticDataString.prototype.deserializeAs_StatisticDataString = function(param1) {
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
module.exports.getInstance = function() {
  return new StatisticDataString();
};