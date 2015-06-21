var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var JobAllowMultiCraftRequestMessage = function() {
    this.enabled = false;
};

require('util').inherits(JobAllowMultiCraftRequestMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new JobAllowMultiCraftRequestMessage();
};

JobAllowMultiCraftRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_JobAllowMultiCraftRequestMessage(output);
};

JobAllowMultiCraftRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_JobAllowMultiCraftRequestMessage(input);
};

JobAllowMultiCraftRequestMessage.prototype.serializeAs_JobAllowMultiCraftRequestMessage = function(param1) {
    param1.writeBoolean(this.enabled);
};

JobAllowMultiCraftRequestMessage.prototype.deserializeAs_JobAllowMultiCraftRequestMessage = function(param1) {
    this.enabled = param1.readBoolean();
};

JobAllowMultiCraftRequestMessage.prototype.getMessageId = function() {
    return 5748;
};

JobAllowMultiCraftRequestMessage.prototype.getClassName = function() {
    return 'JobAllowMultiCraftRequestMessage';
};

module.exports.id = 5748;
module.exports.JobAllowMultiCraftRequestMessage = JobAllowMultiCraftRequestMessage;