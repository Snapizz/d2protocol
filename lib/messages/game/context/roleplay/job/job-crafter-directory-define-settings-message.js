var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');

var JobCrafterDirectorySettings = require('../../../../../types/game/context/roleplay/job/job-crafter-directory-settings.js').class;

var JobCrafterDirectoryDefineSettingsMessage = function() {
  this.settings = new JobCrafterDirectorySettings();
};

util.inherits(JobCrafterDirectoryDefineSettingsMessage, BaseMessage);

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
module.exports.class = JobCrafterDirectoryDefineSettingsMessage;
module.exports.getInstance = function() {
  return new JobCrafterDirectoryDefineSettingsMessage();
};