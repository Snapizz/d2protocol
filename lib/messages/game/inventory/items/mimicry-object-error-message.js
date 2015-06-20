var d2com = require('d2com'),
  BaseMessage = require('./mimicry-object-error-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
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

MimicryObjectErrorMessage.prototype.serializeAs_MimicryObjectErrorMessage = function(param1) {
  this.serializeAs_SymbioticObjectErrorMessage(param1);
  param1.writeBoolean(this.preview);
};

MimicryObjectErrorMessage.prototype.deserializeAs_MimicryObjectErrorMessage = function(param1) {
  this.deserialize(param1);
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
module.exports.getInstance = function() {
  return new MimicryObjectErrorMessage();
};