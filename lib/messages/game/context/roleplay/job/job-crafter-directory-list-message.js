var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var JobCrafterDirectoryListMessage = function() {
  this.listEntries = [];
};

util.inherits(JobCrafterDirectoryListMessage, BaseMessage);

JobCrafterDirectoryListMessage.prototype.serialize = function(output) {
  this.serializeAs_JobCrafterDirectoryListMessage(output);
};

JobCrafterDirectoryListMessage.prototype.deserialize = function(input) {
  this.deserializeAs_JobCrafterDirectoryListMessage(input);
};

JobCrafterDirectoryListMessage.prototype.serializeAs_JobCrafterDirectoryListMessage = function(output) {
  param1.writeShort(this.listEntries.length);
  var _loc2_ = 0;
  while (_loc2_ < this.listEntries.length) {
    (this.listEntries[_loc2_]).serializeAs_JobCrafterDirectoryListEntry(param1);
    _loc2_++;
  }
};

JobCrafterDirectoryListMessage.prototype.deserializeAs_JobCrafterDirectoryListMessage = function(input) {
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
module.exports.class = JobCrafterDirectoryListMessage;