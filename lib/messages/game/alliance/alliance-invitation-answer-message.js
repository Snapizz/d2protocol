var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var AllianceInvitationAnswerMessage = function() {
  this.accept = false;
};

util.inherits(AllianceInvitationAnswerMessage, BaseMessage);

AllianceInvitationAnswerMessage.prototype.serialize = function(output) {
  this.serializeAs_AllianceInvitationAnswerMessage(output);
};

AllianceInvitationAnswerMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AllianceInvitationAnswerMessage(input);
};

AllianceInvitationAnswerMessage.prototype.serializeAs_AllianceInvitationAnswerMessage = function(output) {
  param1.writeBoolean(this.accept);
};

AllianceInvitationAnswerMessage.prototype.deserializeAs_AllianceInvitationAnswerMessage = function(input) {
  this.accept = param1.readBoolean();
};

AllianceInvitationAnswerMessage.prototype.getMessageId = function() {
  return 6401;
};

AllianceInvitationAnswerMessage.prototype.getClassName = function() {
  return 'AllianceInvitationAnswerMessage';
};

module.exports.id = 6401;
module.exports.class = AllianceInvitationAnswerMessage;