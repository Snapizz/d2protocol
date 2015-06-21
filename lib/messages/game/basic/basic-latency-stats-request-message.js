var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var BasicLatencyStatsRequestMessage = function() {

};

require('util').inherits(BasicLatencyStatsRequestMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new BasicLatencyStatsRequestMessage();
};

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
module.exports.BasicLatencyStatsRequestMessage = BasicLatencyStatsRequestMessage;