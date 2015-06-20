var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var JobCrafterDirectoryEntryRequestMessage = function() {
  this.playerId = 0;
};

util.inherits(JobCrafterDirectoryEntryRequestMessage, BaseMessage);

JobCrafterDirectoryEntryRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_JobCrafterDirectoryEntryRequestMessage(output);
};

JobCrafterDirectoryEntryRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_JobCrafterDirectoryEntryRequestMessage(input);
};

JobCrafterDirectoryEntryRequestMessage.prototype.serializeAs_JobCrafterDirectoryEntryRequestMessage = function(param1) {
  if (this.playerId < 0) {
    throw new Error("Forbidden value (" + this.playerId + ") on element playerId.");
  } else {
    param1.writeVarInt(this.playerId);
    return;
  }
};

JobCrafterDirectoryEntryRequestMessage.prototype.deserializeAs_JobCrafterDirectoryEntryRequestMessage = function(param1) {
  this.playerId = param1.readVarUhInt();
  if (this.playerId < 0) {
    throw new Error("Forbidden value (" + this.playerId + ") on element of JobCrafterDirectoryEntryRequestMessage.playerId.");
  } else {
    return;
  }
};

JobCrafterDirectoryEntryRequestMessage.prototype.getMessageId = function() {
  return 6043;
};

JobCrafterDirectoryEntryRequestMessage.prototype.getClassName = function() {
  return 'JobCrafterDirectoryEntryRequestMessage';
};

module.exports.id = 6043;
module.exports.class = JobCrafterDirectoryEntryRequestMessage;