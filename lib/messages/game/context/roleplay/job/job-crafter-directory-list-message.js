var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var JobCrafterDirectoryListEntry = require('../../../../../types/game/context/roleplay/job/job-crafter-directory-list-entry.js').class;

var JobCrafterDirectoryListMessage = function() {
    this.listEntries = [];
};

require('util').inherits(JobCrafterDirectoryListMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new JobCrafterDirectoryListMessage();
};

JobCrafterDirectoryListMessage.prototype.serialize = function(output) {
    this.serializeAs_JobCrafterDirectoryListMessage(output);
};

JobCrafterDirectoryListMessage.prototype.deserialize = function(input) {
    this.deserializeAs_JobCrafterDirectoryListMessage(input);
};

JobCrafterDirectoryListMessage.prototype.serializeAs_JobCrafterDirectoryListMessage = function(param1) {
    param1.writeShort(this.listEntries.length);
    var _loc2_ = 0;
    while (_loc2_ < this.listEntries.length) {
        (this.listEntries[_loc2_]).serializeAs_JobCrafterDirectoryListEntry(param1);
        _loc2_++;
    }
};

JobCrafterDirectoryListMessage.prototype.deserializeAs_JobCrafterDirectoryListMessage = function(param1) {
    var _loc4_ = null;
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = new JobCrafterDirectoryListEntry();
        _loc4_.deserialize(param1);
        this.listEntries.push(_loc4_);
        _loc3_++;
    }
};

JobCrafterDirectoryListMessage.prototype.getMessageId = function() {
    return 6046;
};

JobCrafterDirectoryListMessage.prototype.getClassName = function() {
    return 'JobCrafterDirectoryListMessage';
};

module.exports.id = 6046;
module.exports.JobCrafterDirectoryListMessage = JobCrafterDirectoryListMessage;