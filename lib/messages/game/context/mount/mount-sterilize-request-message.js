var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var MountSterilizeRequestMessage = function() {

};

util.inherits(MountSterilizeRequestMessage, BaseMessage);

MountSterilizeRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_MountSterilizeRequestMessage(output);
};

MountSterilizeRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_MountSterilizeRequestMessage(input);
};

MountSterilizeRequestMessage.prototype.serializeAs_MountSterilizeRequestMessage = function(param1) {

};

MountSterilizeRequestMessage.prototype.deserializeAs_MountSterilizeRequestMessage = function(param1) {

};

MountSterilizeRequestMessage.prototype.getMessageId = function() {
  return 5962;
};

MountSterilizeRequestMessage.prototype.getClassName = function() {
  return 'MountSterilizeRequestMessage';
};

module.exports.id = 5962;
module.exports.class = MountSterilizeRequestMessage;
module.exports.getInstance = function() {
  return new MountSterilizeRequestMessage();
};