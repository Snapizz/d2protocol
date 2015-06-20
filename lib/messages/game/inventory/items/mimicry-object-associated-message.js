var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var MimicryObjectAssociatedMessage = function() {

};

util.inherits(MimicryObjectAssociatedMessage, BaseMessage);

MimicryObjectAssociatedMessage.prototype.serialize = function(output) {
  this.serializeAs_MimicryObjectAssociatedMessage(output);
};

MimicryObjectAssociatedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_MimicryObjectAssociatedMessage(input);
};

MimicryObjectAssociatedMessage.prototype.serializeAs_MimicryObjectAssociatedMessage = function(output) {
  this.serializeAs_SymbioticObjectAssociatedMessage(param1);
};

MimicryObjectAssociatedMessage.prototype.deserializeAs_MimicryObjectAssociatedMessage = function(input) {
  this.deserialize(param1);
};

MimicryObjectAssociatedMessage.prototype.getMessageId = function() {
  return 6462;
};

MimicryObjectAssociatedMessage.prototype.getClassName = function() {
  return 'MimicryObjectAssociatedMessage';
};

module.exports.id = 6462;
module.exports.class = MimicryObjectAssociatedMessage;