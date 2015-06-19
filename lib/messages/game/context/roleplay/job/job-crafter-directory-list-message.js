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
  output.writeShort(this.listEntries.length);
  var _i1;
  while (_i1 < this.listEntries.length) {
    (this.listEntries[_i1]).serializeAs_JobCrafterDirectoryListEntry(output);
    _i1++;
  };
};

JobCrafterDirectoryListMessage.prototype.deserializeAs_JobCrafterDirectoryListMessage = function(input) {
  var _item1;
  var _listEntriesLen = input.readUnsignedShort();
  var _i1;
  while (_i1 < _listEntriesLen) {
    _item1 = new JobCrafterDirectoryListEntry();
    _item1.deserialize(input);
    this.listEntries.push(_item1);
    _i1++;
  };
};

JobCrafterDirectoryListMessage.prototype.getMessageId = function() {
  return 6046;
};

JobCrafterDirectoryListMessage.prototype.getClassName = function() {
  return 'JobCrafterDirectoryListMessage';
};

module.exports.id = 6046;
module.exports.class = JobCrafterDirectoryListMessage;