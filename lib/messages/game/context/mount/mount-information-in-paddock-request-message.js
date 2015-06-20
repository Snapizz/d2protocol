var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
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

MountInformationInPaddockRequestMessage.prototype.serializeAs_MountInformationInPaddockRequestMessage = function(param1) {
  param1.writeVarInt(this.mapRideId);
};

MountInformationInPaddockRequestMessage.prototype.deserializeAs_MountInformationInPaddockRequestMessage = function(param1) {
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
module.exports.getInstance = function() {
  return new MountInformationInPaddockRequestMessage();
};