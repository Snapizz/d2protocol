var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GuildInvitationStateRecruterMessage = function() {
  this.recrutedName = "";
  this.invitationState = 0;
};

util.inherits(GuildInvitationStateRecruterMessage, BaseMessage);

GuildInvitationStateRecruterMessage.prototype.serialize = function(output) {
  this.serializeAs_GuildInvitationStateRecruterMessage(output);
};

GuildInvitationStateRecruterMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuildInvitationStateRecruterMessage(input);
};

GuildInvitationStateRecruterMessage.prototype.serializeAs_GuildInvitationStateRecruterMessage = function(output) {
  output.writeUTF(this.recrutedName);
  output.writeByte(this.invitationState);
};

GuildInvitationStateRecruterMessage.prototype.deserializeAs_GuildInvitationStateRecruterMessage = function(input) {
  this.recrutedName = input.readUTF();
  this.invitationState = input.readByte();
  if (this.invitationState < 0) {
    throw (new Error((("Forbidden value (" + this.invitationState) + ") on element of GuildInvitationStateRecruterMessage.invitationState.")));
  };
};

GuildInvitationStateRecruterMessage.prototype.getMessageId = function() {
  return 5563;
};

GuildInvitationStateRecruterMessage.prototype.getClassName = function() {
  return 'GuildInvitationStateRecruterMessage';
};

module.exports.id = 5563;
module.exports.class = GuildInvitationStateRecruterMessage;