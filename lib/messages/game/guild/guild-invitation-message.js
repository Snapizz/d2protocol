var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GuildInvitationMessage = function() {
  this.targetId = 0;
};

util.inherits(GuildInvitationMessage, BaseMessage);

GuildInvitationMessage.prototype.serialize = function(output) {
  this.serializeAs_GuildInvitationMessage(output);
};

GuildInvitationMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuildInvitationMessage(input);
};

GuildInvitationMessage.prototype.serializeAs_GuildInvitationMessage = function(output) {
  if (this.targetId < 0) {
    throw (new Error((("Forbidden value (" + this.targetId) + ") on element targetId.")));
  };
  output.writeVarInt(this.targetId);
};

GuildInvitationMessage.prototype.deserializeAs_GuildInvitationMessage = function(input) {
  this.targetId = input.readVarUhInt();
  if (this.targetId < 0) {
    throw (new Error((("Forbidden value (" + this.targetId) + ") on element of GuildInvitationMessage.targetId.")));
  };
};

GuildInvitationMessage.prototype.getMessageId = function() {
  return 5551;
};

GuildInvitationMessage.prototype.getClassName = function() {
  return 'GuildInvitationMessage';
};

module.exports.id = 5551;
module.exports.class = GuildInvitationMessage;