var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var JobAllowMultiCraftRequestSetMessage = module.exports = function() {
    this.enabled = false;

    return this;
};

require('util').inherits(JobAllowMultiCraftRequestSetMessage, d2com.NetworkMessage.class);

JobAllowMultiCraftRequestSetMessage.prototype.serialize = function(output) {
    this.serializeAs_JobAllowMultiCraftRequestSetMessage(output);
};

JobAllowMultiCraftRequestSetMessage.prototype.deserialize = function(input) {
    this.deserializeAs_JobAllowMultiCraftRequestSetMessage(input);
};

JobAllowMultiCraftRequestSetMessage.prototype.serializeAs_JobAllowMultiCraftRequestSetMessage = function(param1) {
    param1.writeBoolean(this.enabled);
};

JobAllowMultiCraftRequestSetMessage.prototype.deserializeAs_JobAllowMultiCraftRequestSetMessage = function(param1) {
    this.enabled = param1.readBoolean();
};

JobAllowMultiCraftRequestSetMessage.prototype.getMessageId = function() {
    return 5749;
};

JobAllowMultiCraftRequestSetMessage.prototype.getClassName = function() {
    return 'JobAllowMultiCraftRequestSetMessage';
};

module.exports.id = 5749;