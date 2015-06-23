var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var JobBookSubscriptionMessage = function() {
    this.addedOrDeleted = false;
    this.jobId = 0;
};

require('util').inherits(JobBookSubscriptionMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new JobBookSubscriptionMessage();
};

JobBookSubscriptionMessage.prototype.serialize = function(output) {
    this.serializeAs_JobBookSubscriptionMessage(output);
};

JobBookSubscriptionMessage.prototype.deserialize = function(input) {
    this.deserializeAs_JobBookSubscriptionMessage(input);
};

JobBookSubscriptionMessage.prototype.serializeAs_JobBookSubscriptionMessage = function(param1) {
    param1.writeBoolean(this.addedOrDeleted);
    if (this.jobId < 0) {
        throw new Error("Forbidden value (" + this.jobId + ") on element jobId.");
    } else {
        param1.writeByte(this.jobId);
        return;
    }
};

JobBookSubscriptionMessage.prototype.deserializeAs_JobBookSubscriptionMessage = function(param1) {
    this.addedOrDeleted = param1.readBoolean();
    this.jobId = param1.readByte();
    if (this.jobId < 0) {
        throw new Error("Forbidden value (" + this.jobId + ") on element of JobBookSubscriptionMessage.jobId.");
    } else {
        return;
    }
};

JobBookSubscriptionMessage.prototype.getMessageId = function() {
    return 6593;
};

JobBookSubscriptionMessage.prototype.getClassName = function() {
    return 'JobBookSubscriptionMessage';
};

module.exports.id = 6593;
module.exports.JobBookSubscriptionMessage = JobBookSubscriptionMessage;