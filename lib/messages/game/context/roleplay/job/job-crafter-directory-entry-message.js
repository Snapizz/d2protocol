var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var JobCrafterDirectoryEntryPlayerInfo = require('../../../../../types/game/context/roleplay/job/job-crafter-directory-entry-player-info.js').class;
var JobCrafterDirectoryEntryJobInfo = require('../../../../../types/game/context/roleplay/job/job-crafter-directory-entry-job-info.js').class;
var EntityLook = require('../../../../../types/game/look/entity-look.js').class;

var JobCrafterDirectoryEntryMessage = function() {
    this.playerInfo = new JobCrafterDirectoryEntryPlayerInfo();
    this.jobInfoList = [];
    this.playerLook = new EntityLook();
};

require('util').inherits(JobCrafterDirectoryEntryMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new JobCrafterDirectoryEntryMessage();
};

JobCrafterDirectoryEntryMessage.prototype.serialize = function(output) {
    this.serializeAs_JobCrafterDirectoryEntryMessage(output);
};

JobCrafterDirectoryEntryMessage.prototype.deserialize = function(input) {
    this.deserializeAs_JobCrafterDirectoryEntryMessage(input);
};

JobCrafterDirectoryEntryMessage.prototype.serializeAs_JobCrafterDirectoryEntryMessage = function(param1) {
    this.playerInfo.serializeAs_JobCrafterDirectoryEntryPlayerInfo(param1);
    param1.writeShort(this.jobInfoList.length);
    var _loc2_ = 0;
    while (_loc2_ < this.jobInfoList.length) {
        (this.jobInfoList[_loc2_]).serializeAs_JobCrafterDirectoryEntryJobInfo(param1);
        _loc2_++;
    }
    this.playerLook.serializeAs_EntityLook(param1);
};

JobCrafterDirectoryEntryMessage.prototype.deserializeAs_JobCrafterDirectoryEntryMessage = function(param1) {
    var _loc4_ = null;
    this.playerInfo = new JobCrafterDirectoryEntryPlayerInfo();
    this.playerInfo.deserialize(param1);
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = new JobCrafterDirectoryEntryJobInfo();
        _loc4_.deserialize(param1);
        this.jobInfoList.push(_loc4_);
        _loc3_++;
    }
    this.playerLook = new EntityLook();
    this.playerLook.deserialize(param1);
};

JobCrafterDirectoryEntryMessage.prototype.getMessageId = function() {
    return 6044;
};

JobCrafterDirectoryEntryMessage.prototype.getClassName = function() {
    return 'JobCrafterDirectoryEntryMessage';
};

module.exports.id = 6044;
module.exports.JobCrafterDirectoryEntryMessage = JobCrafterDirectoryEntryMessage;