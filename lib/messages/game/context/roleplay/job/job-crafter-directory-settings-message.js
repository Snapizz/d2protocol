var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var JobCrafterDirectorySettingsMessage = function() {
  this.craftersSettings = [];
};

util.inherits(JobCrafterDirectorySettingsMessage, BaseMessage);

JobCrafterDirectorySettingsMessage.prototype.serialize = function(output) {
  this.serializeAs_JobCrafterDirectorySettingsMessage(output);
};

JobCrafterDirectorySettingsMessage.prototype.deserialize = function(input) {
  this.deserializeAs_JobCrafterDirectorySettingsMessage(input);
};

JobCrafterDirectorySettingsMessage.prototype.serializeAs_JobCrafterDirectorySettingsMessage = function(param1) {
  param1.writeShort(this.craftersSettings.length);
  var _loc2_ = 0;
  while (_loc2_ < this.craftersSettings.length) {
    (this.craftersSettings[_loc2_]).serializeAs_JobCrafterDirectorySettings(param1);
    _loc2_++;
  }
};

JobCrafterDirectorySettingsMessage.prototype.deserializeAs_JobCrafterDirectorySettingsMessage = function(param1) {
  var _loc4_ = null;
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = new JobCrafterDirectorySettings();
    _loc4_.deserialize(param1);
    this.craftersSettings.push(_loc4_);
    _loc3_++;
  }
};

JobCrafterDirectorySettingsMessage.prototype.getMessageId = function() {
  return 5652;
};

JobCrafterDirectorySettingsMessage.prototype.getClassName = function() {
  return 'JobCrafterDirectorySettingsMessage';
};

module.exports.id = 5652;
module.exports.class = JobCrafterDirectorySettingsMessage;
module.exports.getInstance = function() {
  return new JobCrafterDirectorySettingsMessage();
};