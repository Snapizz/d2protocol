var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var JobCrafterDirectoryEntryMessage = function() {
  this.playerInfo;
  this.jobInfoList = [];
  this.playerLook;
};

util.inherits(JobCrafterDirectoryEntryMessage, BaseMessage);

JobCrafterDirectoryEntryMessage.prototype.serialize = function(output) {
  this.serializeAs_JobCrafterDirectoryEntryMessage(output);
};

JobCrafterDirectoryEntryMessage.prototype.deserialize = function(input) {
  this.deserializeAs_JobCrafterDirectoryEntryMessage(input);
};

JobCrafterDirectoryEntryMessage.prototype.serializeAs_JobCrafterDirectoryEntryMessage = function(output) {
  this.playerInfo.serializeAs_JobCrafterDirectoryEntryPlayerInfo(output);
  output.writeShort(this.jobInfoList.length);
  var _i2;
  while (_i2 < this.jobInfoList.length) {
    (this.jobInfoList[_i2]).serializeAs_JobCrafterDirectoryEntryJobInfo(output);
    _i2++;
  };
  this.playerLook.serializeAs_EntityLook(output);
};

JobCrafterDirectoryEntryMessage.prototype.deserializeAs_JobCrafterDirectoryEntryMessage = function(input) {
  var _item2;
  this.playerInfo = new JobCrafterDirectoryEntryPlayerInfo();
  this.playerInfo.deserialize(input);
  var _jobInfoListLen = input.readUnsignedShort();
  var _i2;
  while (_i2 < _jobInfoListLen) {
    _item2 = new JobCrafterDirectoryEntryJobInfo();
    _item2.deserialize(input);
    this.jobInfoList.push(_item2);
    _i2++;
  };
  this.playerLook = new EntityLook();
  this.playerLook.deserialize(input);
};

JobCrafterDirectoryEntryMessage.prototype.getMessageId = function() {
  return 6044;
};

JobCrafterDirectoryEntryMessage.prototype.getClassName = function() {
  return 'JobCrafterDirectoryEntryMessage';
};

module.exports.id = 6044;
module.exports.class = JobCrafterDirectoryEntryMessage;