var d2com = require('d2com'),
  BaseMessage = require('./mount-toggle-riding-request-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var MountToggleRidingRequestMessage = function() {

};

util.inherits(MountToggleRidingRequestMessage, BaseMessage);

MountToggleRidingRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_MountToggleRidingRequestMessage(output);
};

MountToggleRidingRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_MountToggleRidingRequestMessage(input);
};

MountToggleRidingRequestMessage.prototype.serializeAs_MountToggleRidingRequestMessage = function(param1) {

};

MountToggleRidingRequestMessage.prototype.deserializeAs_MountToggleRidingRequestMessage = function(param1) {

};

MountToggleRidingRequestMessage.prototype.getMessageId = function() {
  return 5976;
};

MountToggleRidingRequestMessage.prototype.getClassName = function() {
  return 'MountToggleRidingRequestMessage';
};

module.exports.id = 5976;
module.exports.class = MountToggleRidingRequestMessage;
module.exports.getInstance = function() {
  return new MountToggleRidingRequestMessage();
};