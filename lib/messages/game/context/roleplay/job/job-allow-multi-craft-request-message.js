var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var JobAllowMultiCraftRequestMessage = function() {
    this.enabled = false;
};

require('util').inherits(JobAllowMultiCraftRequestMessage, d2com.NetworkMessage.class);

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
module.exports.class = JobAllowMultiCraftRequestMessage;
module.exports.getInstance = function() {
    return new JobAllowMultiCraftRequestMessage;
};