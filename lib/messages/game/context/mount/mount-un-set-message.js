var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var MountUnSetMessage = function() {

};

util.inherits(MountUnSetMessage, BaseMessage);

MountUnSetMessage.prototype.serialize = function(output) {
  this.serializeAs_MountUnSetMessage(output);
};

MountUnSetMessage.prototype.deserialize = function(input) {
  this.deserializeAs_MountUnSetMessage(input);
};

MountUnSetMessage.prototype.serializeAs_MountUnSetMessage = function(output) {

};

MountUnSetMessage.prototype.deserializeAs_MountUnSetMessage = function(input) {

};

MountUnSetMessage.prototype.getMessageId = function() {
  return 5982;
};

MountUnSetMessage.prototype.getClassName = function() {
  return 'MountUnSetMessage';
};

module.exports.id = 5982;
module.exports.class = MountUnSetMessage;