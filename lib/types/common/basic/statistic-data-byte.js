var BaseMessage = require('./statistic-data-byte.js').class,
  util = require('util');

var StatisticDataByte = function() {
  this.value = 0;
};

util.inherits(StatisticDataByte, BaseMessage);

StatisticDataByte.prototype.serialize = function(output) {
  this.serializeAs_StatisticDataByte(output);
};

StatisticDataByte.prototype.deserialize = function(input) {
  this.deserializeAs_StatisticDataByte(input);
};

StatisticDataByte.prototype.serializeAs_StatisticDataByte = function(param1) {
  this.serializeAs_StatisticData(param1);
  param1.writeByte(this.value);
};

StatisticDataByte.prototype.deserializeAs_StatisticDataByte = function(param1) {
  this.deserialize(param1);
  this.value = param1.readByte();
};

StatisticDataByte.prototype.getTypeId = function() {
  return 486;
};

StatisticDataByte.prototype.getClassName = function() {
  return 'StatisticDataByte';
};

module.exports.id = 486;
module.exports.class = StatisticDataByte;
module.exports.getInstance = function() {
  return new StatisticDataByte();
};