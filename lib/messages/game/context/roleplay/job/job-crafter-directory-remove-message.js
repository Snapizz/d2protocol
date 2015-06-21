var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var JobCrafterDirectoryRemoveMessage = function() {
    this.jobId = 0;
    this.playerId = 0;
};

require('util').inherits(JobCrafterDirectoryRemoveMessage, d2com.NetworkMessage.class);

JobCrafterDirectoryRemoveMessage.prototype.serialize = function(output) {
    this.serializeAs_JobCrafterDirectoryRemoveMessage(output);
};

JobCrafterDirectoryRemoveMessage.prototype.deserialize = function(input) {
    this.deserializeAs_JobCrafterDirectoryRemoveMessage(input);
};

JobCrafterDirectoryRemoveMessage.prototype.serializeAs_JobCrafterDirectoryRemoveMessage = function(param1) {
    if (this.jobId < 0) {
        throw new Error("Forbidden value (" + this.jobId + ") on element jobId.");
    } else {
        param1.writeByte(this.jobId);
        if (this.playerId < 0) {
            throw new Error("Forbidden value (" + this.playerId + ") on element playerId.");
        } else {
            param1.writeVarInt(this.playerId);
            return;
        }
    }
};

JobCrafterDirectoryRemoveMessage.prototype.deserializeAs_JobCrafterDirectoryRemoveMessage = function(param1) {
    this.jobId = param1.readByte();
    if (this.jobId < 0) {
        throw new Error("Forbidden value (" + this.jobId + ") on element of JobCrafterDirectoryRemoveMessage.jobId.");
    } else {
        this.playerId = param1.readVarUhInt();
        if (this.playerId < 0) {
            throw new Error("Forbidden value (" + this.playerId + ") on element of JobCrafterDirectoryRemoveMessage.playerId.");
        } else {
            return;
        }
    }
};

JobCrafterDirectoryRemoveMessage.prototype.getMessageId = function() {
    return 5653;
};

JobCrafterDirectoryRemoveMessage.prototype.getClassName = function() {
    return 'JobCrafterDirectoryRemoveMessage';
};

module.exports.id = 5653;
module.exports.class = JobCrafterDirectoryRemoveMessage;
module.exports.getInstance = function() {
    return new JobCrafterDirectoryRemoveMessage;
};