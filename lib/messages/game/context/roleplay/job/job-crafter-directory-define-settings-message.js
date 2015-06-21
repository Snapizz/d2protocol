var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var JobCrafterDirectorySettings = require('../../../../../types/game/context/roleplay/job/job-crafter-directory-settings.js').JobCrafterDirectorySettings;

var JobCrafterDirectoryDefineSettingsMessage = function() {
    this.settings = new JobCrafterDirectorySettings();
};

require('util').inherits(JobCrafterDirectoryDefineSettingsMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new JobCrafterDirectoryDefineSettingsMessage();
};

JobCrafterDirectoryDefineSettingsMessage.prototype.serialize = function(output) {
    this.serializeAs_JobCrafterDirectoryDefineSettingsMessage(output);
};

JobCrafterDirectoryDefineSettingsMessage.prototype.deserialize = function(input) {
    this.deserializeAs_JobCrafterDirectoryDefineSettingsMessage(input);
};

JobCrafterDirectoryDefineSettingsMessage.prototype.serializeAs_JobCrafterDirectoryDefineSettingsMessage = function(param1) {
    this.settings.serializeAs_JobCrafterDirectorySettings(param1);
};

JobCrafterDirectoryDefineSettingsMessage.prototype.deserializeAs_JobCrafterDirectoryDefineSettingsMessage = function(param1) {
    this.settings = new JobCrafterDirectorySettings();
    this.settings.deserialize(param1);
};

JobCrafterDirectoryDefineSettingsMessage.prototype.getMessageId = function() {
    return 5649;
};

JobCrafterDirectoryDefineSettingsMessage.prototype.getClassName = function() {
    return 'JobCrafterDirectoryDefineSettingsMessage';
};

module.exports.id = 5649;
module.exports.JobCrafterDirectoryDefineSettingsMessage = JobCrafterDirectoryDefineSettingsMessage;