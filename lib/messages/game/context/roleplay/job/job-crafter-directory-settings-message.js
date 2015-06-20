var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

JobCrafterDirectorySettingsMessage.prototype.serializeAs_JobCrafterDirectorySettingsMessage = function(output) {
  output.writeShort(this.craftersSettings.length);
  var _i1 = 0;
  while (_i1 < this.craftersSettings.length) {
    (this.craftersSettings[_i1]).serializeAs_JobCrafterDirectorySettings(output);
    _i1++;
  };
};

JobCrafterDirectorySettingsMessage.prototype.deserializeAs_JobCrafterDirectorySettingsMessage = function(input) {
  var _item1;
  var _craftersSettingsLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _craftersSettingsLen) {
    _item1 = new JobCrafterDirectorySettings();
    _item1.deserialize(input);
    this.craftersSettings.push(_item1);
    _i1++;
  };
};

JobCrafterDirectorySettingsMessage.prototype.getMessageId = function() {
  return 5652;
};

JobCrafterDirectorySettingsMessage.prototype.getClassName = function() {
  return 'JobCrafterDirectorySettingsMessage';
};

module.exports.id = 5652;
module.exports.class = JobCrafterDirectorySettingsMessage;