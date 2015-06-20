var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var MountReleaseRequestMessage = function() {

};

util.inherits(MountReleaseRequestMessage, BaseMessage);

MountReleaseRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_MountReleaseRequestMessage(output);
};

MountReleaseRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_MountReleaseRequestMessage(input);
};

MountReleaseRequestMessage.prototype.serializeAs_MountReleaseRequestMessage = function(param1) {

};

MountReleaseRequestMessage.prototype.deserializeAs_MountReleaseRequestMessage = function(param1) {

};

MountReleaseRequestMessage.prototype.getMessageId = function() {
  return 5980;
};

MountReleaseRequestMessage.prototype.getClassName = function() {
  return 'MountReleaseRequestMessage';
};

module.exports.id = 5980;
module.exports.class = MountReleaseRequestMessage;