var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var MountSterilizedMessage = function() {
  this.mountId = 0;
};

util.inherits(MountSterilizedMessage, BaseMessage);

MountSterilizedMessage.prototype.serialize = function(output) {
  this.serializeAs_MountSterilizedMessage(output);
};

MountSterilizedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_MountSterilizedMessage(input);
};

MountSterilizedMessage.prototype.serializeAs_MountSterilizedMessage = function(param1) {
  param1.writeVarInt(this.mountId);
};

MountSterilizedMessage.prototype.deserializeAs_MountSterilizedMessage = function(param1) {
  this.mountId = param1.readVarInt();
};

MountSterilizedMessage.prototype.getMessageId = function() {
  return 5977;
};

MountSterilizedMessage.prototype.getClassName = function() {
  return 'MountSterilizedMessage';
};

module.exports.id = 5977;
module.exports.class = MountSterilizedMessage;
module.exports.getInstance = function() {
  return new MountSterilizedMessage();
};