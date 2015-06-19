var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var JobCrafterDirectoryRemoveMessage = function() {
  this.jobId = 0;
  this.playerId = 0;
};

util.inherits(JobCrafterDirectoryRemoveMessage, BaseMessage);

JobCrafterDirectoryRemoveMessage.prototype.serialize = function(output) {
  this.serializeAs_JobCrafterDirectoryRemoveMessage(output);
};

JobCrafterDirectoryRemoveMessage.prototype.deserialize = function(input) {
  this.deserializeAs_JobCrafterDirectoryRemoveMessage(input);
};

JobCrafterDirectoryRemoveMessage.prototype.serializeAs_JobCrafterDirectoryRemoveMessage = function(output) {
  if (this.jobId < 0) {
    throw (new Error((("Forbidden value (" + this.jobId) + ") on element jobId.")));
  };
  output.writeByte(this.jobId);
  if (this.playerId < 0) {
    throw (new Error((("Forbidden value (" + this.playerId) + ") on element playerId.")));
  };
  output.writeVarInt(this.playerId);
};

JobCrafterDirectoryRemoveMessage.prototype.deserializeAs_JobCrafterDirectoryRemoveMessage = function(input) {
  this.jobId = input.readByte();
  if (this.jobId < 0) {
    throw (new Error((("Forbidden value (" + this.jobId) + ") on element of JobCrafterDirectoryRemoveMessage.jobId.")));
  };
  this.playerId = input.readVarUhInt();
  if (this.playerId < 0) {
    throw (new Error((("Forbidden value (" + this.playerId) + ") on element of JobCrafterDirectoryRemoveMessage.playerId.")));
  };
};

JobCrafterDirectoryRemoveMessage.prototype.getMessageId = function() {
  return 5653;
};

JobCrafterDirectoryRemoveMessage.prototype.getClassName = function() {
  return 'JobCrafterDirectoryRemoveMessage';
};

module.exports.id = 5653;
module.exports.class = JobCrafterDirectoryRemoveMessage;