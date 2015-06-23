var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var JobBookSubscribeRequestMessage = function() {
    this.jobId = 0;
};

require('util').inherits(JobBookSubscribeRequestMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new JobBookSubscribeRequestMessage();
};

JobBookSubscribeRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_JobBookSubscribeRequestMessage(output);
};

JobBookSubscribeRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_JobBookSubscribeRequestMessage(input);
};

JobBookSubscribeRequestMessage.prototype.serializeAs_JobBookSubscribeRequestMessage = function(param1) {
    if (this.jobId < 0) {
        throw new Error("Forbidden value (" + this.jobId + ") on element jobId.");
    } else {
        param1.writeByte(this.jobId);
        return;
    }
};

JobBookSubscribeRequestMessage.prototype.deserializeAs_JobBookSubscribeRequestMessage = function(param1) {
    this.jobId = param1.readByte();
    if (this.jobId < 0) {
        throw new Error("Forbidden value (" + this.jobId + ") on element of JobBookSubscribeRequestMessage.jobId.");
    } else {
        return;
    }
};

JobBookSubscribeRequestMessage.prototype.getMessageId = function() {
    return 6592;
};

JobBookSubscribeRequestMessage.prototype.getClassName = function() {
    return 'JobBookSubscribeRequestMessage';
};

module.exports.id = 6592;
module.exports.JobBookSubscribeRequestMessage = JobBookSubscribeRequestMessage;