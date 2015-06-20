var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var HouseLockFromInsideRequestMessage = function() {

};

util.inherits(HouseLockFromInsideRequestMessage, BaseMessage);

HouseLockFromInsideRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_HouseLockFromInsideRequestMessage(output);
};

HouseLockFromInsideRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_HouseLockFromInsideRequestMessage(input);
};

HouseLockFromInsideRequestMessage.prototype.serializeAs_HouseLockFromInsideRequestMessage = function(output) {
  this.serializeAs_LockableChangeCodeMessage(param1);
};

HouseLockFromInsideRequestMessage.prototype.deserializeAs_HouseLockFromInsideRequestMessage = function(input) {
  this.deserialize(param1);
};

HouseLockFromInsideRequestMessage.prototype.getMessageId = function() {
  return 5885;
};

HouseLockFromInsideRequestMessage.prototype.getClassName = function() {
  return 'HouseLockFromInsideRequestMessage';
};

module.exports.id = 5885;
module.exports.class = HouseLockFromInsideRequestMessage;