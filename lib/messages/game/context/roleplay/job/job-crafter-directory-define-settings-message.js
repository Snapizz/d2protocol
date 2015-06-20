var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var JobCrafterDirectoryDefineSettingsMessage = function() {
  this.settings;
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