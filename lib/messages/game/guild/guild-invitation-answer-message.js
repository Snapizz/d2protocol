var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GuildInvitationAnswerMessage = function() {
  this.accept = false;
};

util.inherits(GuildInvitationAnswerMessage, BaseMessage);

GuildInvitationAnswerMessage.prototype.serialize = function(output) {
  this.serializeAs_GuildInvitationAnswerMessage(output);
};

GuildInvitationAnswerMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuildInvitationAnswerMessage(input);
};

GuildInvitationAnswerMessage.prototype.serializeAs_GuildInvitationAnswerMessage = function(param1) {
  param1.writeBoolean(this.accept);
};

GuildInvitationAnswerMessage.prototype.deserializeAs_GuildInvitationAnswerMessage = function(param1) {
  this.accept = param1.readBoolean();
};

GuildInvitationAnswerMessage.prototype.getMessageId = function() {
  return 5556;
};

GuildInvitationAnswerMessage.prototype.getClassName = function() {
  return 'GuildInvitationAnswerMessage';
};

module.exports.id = 5556;
module.exports.class = GuildInvitationAnswerMessage;