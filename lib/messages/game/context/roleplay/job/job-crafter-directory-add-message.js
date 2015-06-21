var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var JobCrafterDirectoryListEntry = require('../../../../../types/game/context/roleplay/job/job-crafter-directory-list-entry.js').class;

var JobCrafterDirectoryAddMessage = function() {
    this.listEntry = new JobCrafterDirectoryListEntry();
};

require('util').inherits(JobCrafterDirectoryAddMessage, d2com.NetworkMessage.class);

JobCrafterDirectoryAddMessage.prototype.serialize = function(output) {
    this.serializeAs_JobCrafterDirectoryAddMessage(output);
};

JobCrafterDirectoryAddMessage.prototype.deserialize = function(input) {
    this.deserializeAs_JobCrafterDirectoryAddMessage(input);
};

JobCrafterDirectoryAddMessage.prototype.serializeAs_JobCrafterDirectoryAddMessage = function(param1) {
    this.listEntry.serializeAs_JobCrafterDirectoryListEntry(param1);
};

JobCrafterDirectoryAddMessage.prototype.deserializeAs_JobCrafterDirectoryAddMessage = function(param1) {
    this.listEntry = new JobCrafterDirectoryListEntry();
    this.listEntry.deserialize(param1);
};

JobCrafterDirectoryAddMessage.prototype.getMessageId = function() {
    return 5651;
};

JobCrafterDirectoryAddMessage.prototype.getClassName = function() {
    return 'JobCrafterDirectoryAddMessage';
};

module.exports.id = 5651;
module.exports.class = JobCrafterDirectoryAddMessage;
module.exports.getInstance = function() {
    return new JobCrafterDirectoryAddMessage;
};