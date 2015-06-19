var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GuildInvitedMessage = function() {
  this.recruterId = 0;
  this.recruterName = "";
  this.guildInfo;
};

util.inherits(GuildInvitedMessage, BaseMessage);

GuildInvitedMessage.prototype.serialize = function(output) {
  this.serializeAs_GuildInvitedMessage(output);
};

GuildInvitedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuildInvitedMessage(input);
};

GuildInvitedMessage.prototype.serializeAs_GuildInvitedMessage = function(output) {
  if (this.recruterId < 0) {
    throw (new Error((("Forbidden value (" + this.recruterId) + ") on element recruterId.")));
  };
  output.writeVarInt(this.recruterId);
  output.writeUTF(this.recruterName);
  this.guildInfo.serializeAs_BasicGuildInformations(output);
};

GuildInvitedMessage.prototype.deserializeAs_GuildInvitedMessage = function(input) {
  this.recruterId = input.readVarUhInt();
  if (this.recruterId < 0) {
    throw (new Error((("Forbidden value (" + this.recruterId) + ") on element of GuildInvitedMessage.recruterId.")));
  };
  this.recruterName = input.readUTF();
  this.guildInfo = new BasicGuildInformations();
  this.guildInfo.deserialize(input);
};

GuildInvitedMessage.prototype.getMessageId = function() {
  return 5552;
};

GuildInvitedMessage.prototype.getClassName = function() {
  return 'GuildInvitedMessage';
};

module.exports.id = 5552;
module.exports.class = GuildInvitedMessage;