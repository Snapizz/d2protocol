var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var JobExperience = require('../../../../../types/game/context/roleplay/job/job-experience.js').JobExperience;

var JobExperienceMultiUpdateMessage = function() {
    this.experiencesUpdate = [];
};

require('util').inherits(JobExperienceMultiUpdateMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new JobExperienceMultiUpdateMessage();
};

JobExperienceMultiUpdateMessage.prototype.serialize = function(output) {
    this.serializeAs_JobExperienceMultiUpdateMessage(output);
};

JobExperienceMultiUpdateMessage.prototype.deserialize = function(input) {
    this.deserializeAs_JobExperienceMultiUpdateMessage(input);
};

JobExperienceMultiUpdateMessage.prototype.serializeAs_JobExperienceMultiUpdateMessage = function(param1) {
    param1.writeShort(this.experiencesUpdate.length);
    var _loc2_ = 0;
    while (_loc2_ < this.experiencesUpdate.length) {
        (this.experiencesUpdate[_loc2_]).serializeAs_JobExperience(param1);
        _loc2_++;
    }
};

JobExperienceMultiUpdateMessage.prototype.deserializeAs_JobExperienceMultiUpdateMessage = function(param1) {
    var _loc4_ = null;
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = new JobExperience();
        _loc4_.deserialize(param1);
        this.experiencesUpdate.push(_loc4_);
        _loc3_++;
    }
};

JobExperienceMultiUpdateMessage.prototype.getMessageId = function() {
    return 5809;
};

JobExperienceMultiUpdateMessage.prototype.getClassName = function() {
    return 'JobExperienceMultiUpdateMessage';
};

module.exports.id = 5809;
module.exports.JobExperienceMultiUpdateMessage = JobExperienceMultiUpdateMessage;