var d2com = require('d2com'),
  BaseMessage = require('./symbiotic-object-error-message.js').class,
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
  this.serializeAs_SymbioticObjectErrorMessage(output);
  output.writeBoolean(this.preview);
};

MimicryObjectErrorMessage.prototype.deserializeAs_MimicryObjectErrorMessage = function(input) {
  this.deserialize(input);
  this.preview = input.readBoolean();
};

MimicryObjectErrorMessage.prototype.getMessageId = function() {
  return 6461;
};

MimicryObjectErrorMessage.prototype.getClassName = function() {
  return 'MimicryObjectErrorMessage';
};

module.exports.id = 6461;
module.exports.class = MimicryObjectErrorMessage;