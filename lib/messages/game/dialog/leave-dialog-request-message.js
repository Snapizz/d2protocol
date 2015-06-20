var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var LeaveDialogRequestMessage = function() {

};

util.inherits(LeaveDialogRequestMessage, BaseMessage);

LeaveDialogRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_LeaveDialogRequestMessage(output);
};

LeaveDialogRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_LeaveDialogRequestMessage(input);
};

LeaveDialogRequestMessage.prototype.serializeAs_LeaveDialogRequestMessage = function(param1) {

};

LeaveDialogRequestMessage.prototype.deserializeAs_LeaveDialogRequestMessage = function(param1) {

};

LeaveDialogRequestMessage.prototype.getMessageId = function() {
  return 5501;
};

LeaveDialogRequestMessage.prototype.getClassName = function() {
  return 'LeaveDialogRequestMessage';
};

module.exports.id = 5501;
module.exports.class = LeaveDialogRequestMessage;
module.exports.getInstance = function() {
  return new LeaveDialogRequestMessage();
};