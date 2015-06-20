var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var SubscriptionZoneMessage = function() {
  this.active = false;
};

util.inherits(SubscriptionZoneMessage, BaseMessage);

SubscriptionZoneMessage.prototype.serialize = function(output) {
  this.serializeAs_SubscriptionZoneMessage(output);
};

SubscriptionZoneMessage.prototype.deserialize = function(input) {
  this.deserializeAs_SubscriptionZoneMessage(input);
};

SubscriptionZoneMessage.prototype.serializeAs_SubscriptionZoneMessage = function(param1) {
  param1.writeBoolean(this.active);
};

SubscriptionZoneMessage.prototype.deserializeAs_SubscriptionZoneMessage = function(param1) {
  this.active = param1.readBoolean();
};

SubscriptionZoneMessage.prototype.getMessageId = function() {
  return 5573;
};

SubscriptionZoneMessage.prototype.getClassName = function() {
  return 'SubscriptionZoneMessage';
};

module.exports.id = 5573;
module.exports.class = SubscriptionZoneMessage;