var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var JobCrafterDirectoryAddMessage = function() {
  this.listEntry;
};

util.inherits(JobCrafterDirectoryAddMessage, BaseMessage);

JobCrafterDirectoryAddMessage.prototype.serialize = function(output) {
  this.serializeAs_JobCrafterDirectoryAddMessage(output);
};

JobCrafterDirectoryAddMessage.prototype.deserialize = function(input) {
  this.deserializeAs_JobCrafterDirectoryAddMessage(input);
};

JobCrafterDirectoryAddMessage.prototype.serializeAs_JobCrafterDirectoryAddMessage = function(output) {
  this.listEntry.serializeAs_JobCrafterDirectoryListEntry(output);
};

JobCrafterDirectoryAddMessage.prototype.deserializeAs_JobCrafterDirectoryAddMessage = function(input) {
  this.listEntry = new JobCrafterDirectoryListEntry();
  this.listEntry.deserialize(input);
};

JobCrafterDirectoryAddMessage.prototype.getMessageId = function() {
  return 5651;
};

JobCrafterDirectoryAddMessage.prototype.getClassName = function() {
  return 'JobCrafterDirectoryAddMessage';
};

module.exports.id = 5651;
module.exports.class = JobCrafterDirectoryAddMessage;