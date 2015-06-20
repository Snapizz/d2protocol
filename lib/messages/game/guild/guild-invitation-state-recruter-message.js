var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
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

GuildInvitationStateRecruterMessage.prototype.serializeAs_GuildInvitationStateRecruterMessage = function(param1) {
  param1.writeUTF(this.recrutedName);
  param1.writeByte(this.invitationState);
};

GuildInvitationStateRecruterMessage.prototype.deserializeAs_GuildInvitationStateRecruterMessage = function(param1) {
  this.recrutedName = param1.readUTF();
  this.invitationState = param1.readByte();
  if (this.invitationState < 0) {
    throw new Error("Forbidden value (" + this.invitationState + ") on element of GuildInvitationStateRecruterMessage.invitationState.");
  } else {
    return;
  }
};

GuildInvitationStateRecruterMessage.prototype.getMessageId = function() {
  return 5563;
};

GuildInvitationStateRecruterMessage.prototype.getClassName = function() {
  return 'GuildInvitationStateRecruterMessage';
};

module.exports.id = 5563;
module.exports.class = GuildInvitationStateRecruterMessage;
module.exports.getInstance = function() {
  return new GuildInvitationStateRecruterMessage();
};