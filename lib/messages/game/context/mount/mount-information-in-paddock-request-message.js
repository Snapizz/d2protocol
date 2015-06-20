var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var MountInformationInPaddockRequestMessage = function() {
  this.mapRideId = 0;
};

util.inherits(MountInformationInPaddockRequestMessage, BaseMessage);

MountInformationInPaddockRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_MountInformationInPaddockRequestMessage(output);
};

MountInformationInPaddockRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_MountInformationInPaddockRequestMessage(input);
};

MountInformationInPaddockRequestMessage.prototype.serializeAs_MountInformationInPaddockRequestMessage = function(output) {
  param1.writeVarInt(this.mapRideId);
};

MountInformationInPaddockRequestMessage.prototype.deserializeAs_MountInformationInPaddockRequestMessage = function(input) {
  this.mapRideId = param1.readVarInt();
};

MountInformationInPaddockRequestMessage.prototype.getMessageId = function() {
  return 5975;
};

MountInformationInPaddockRequestMessage.prototype.getClassName = function() {
  return 'MountInformationInPaddockRequestMessage';
};

module.exports.id = 5975;
module.exports.class = MountInformationInPaddockRequestMessage;