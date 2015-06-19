var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var NotificationResetMessage = function() {

};

util.inherits(NotificationResetMessage, BaseMessage);

NotificationResetMessage.prototype.serialize = function(output) {
  this.serializeAs_NotificationResetMessage(output);
};

NotificationResetMessage.prototype.deserialize = function(input) {
  this.deserializeAs_NotificationResetMessage(input);
};

NotificationResetMessage.prototype.serializeAs_NotificationResetMessage = function(output) {

};

NotificationResetMessage.prototype.deserializeAs_NotificationResetMessage = function(input) {

};

NotificationResetMessage.prototype.getMessageId = function() {
  return 6089;
};

NotificationResetMessage.prototype.getClassName = function() {
  return 'NotificationResetMessage';
};

module.exports.id = 6089;
module.exports.class = NotificationResetMessage;