var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var BasicLatencyStatsRequestMessage = function() {

};

util.inherits(BasicLatencyStatsRequestMessage, BaseMessage);

BasicLatencyStatsRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_BasicLatencyStatsRequestMessage(output);
};

BasicLatencyStatsRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_BasicLatencyStatsRequestMessage(input);
};

BasicLatencyStatsRequestMessage.prototype.serializeAs_BasicLatencyStatsRequestMessage = function(param1) {

};

BasicLatencyStatsRequestMessage.prototype.deserializeAs_BasicLatencyStatsRequestMessage = function(param1) {

};

BasicLatencyStatsRequestMessage.prototype.getMessageId = function() {
  return 5816;
};

BasicLatencyStatsRequestMessage.prototype.getClassName = function() {
  return 'BasicLatencyStatsRequestMessage';
};

module.exports.id = 5816;
module.exports.class = BasicLatencyStatsRequestMessage;
module.exports.getInstance = function() {
  return new BasicLatencyStatsRequestMessage();
};