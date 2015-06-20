var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var MimicryObjectErrorMessage = function() {
  this.preview = false;
};

util.inherits(MimicryObjectErrorMessage, BaseMessage);

MimicryObjectErrorMessage.prototype.serialize = function(output) {
  this.serializeAs_MimicryObjectErrorMessage(output);
};

MimicryObjectErrorMessage.prototype.deserialize = function(input) {
  this.deserializeAs_MimicryObjectErrorMessage(input);
};

MimicryObjectErrorMessage.prototype.serializeAs_MimicryObjectErrorMessage = function(output) {
  super.serializeAs_SymbioticObjectErrorMessage(param1);
  param1.writeBoolean(this.preview);
};

MimicryObjectErrorMessage.prototype.deserializeAs_MimicryObjectErrorMessage = function(input) {
  super.deserialize(param1);
  this.preview = param1.readBoolean();
};

MimicryObjectErrorMessage.prototype.getMessageId = function() {
  return 6461;
};

MimicryObjectErrorMessage.prototype.getClassName = function() {
  return 'MimicryObjectErrorMessage';
};

module.exports.id = 6461;
module.exports.class = MimicryObjectErrorMessage;