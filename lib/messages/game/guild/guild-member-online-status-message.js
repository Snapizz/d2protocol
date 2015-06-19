var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GuildMemberOnlineStatusMessage = function() {
  this.memberId = 0;
  this.online = false;
};

util.inherits(GuildMemberOnlineStatusMessage, BaseMessage);

GuildMemberOnlineStatusMessage.prototype.serialize = function(output) {
  this.serializeAs_GuildMemberOnlineStatusMessage(output);
};

GuildMemberOnlineStatusMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuildMemberOnlineStatusMessage(input);
};

GuildMemberOnlineStatusMessage.prototype.serializeAs_GuildMemberOnlineStatusMessage = function(output) {
  if (this.memberId < 0) {
    throw (new Error((("Forbidden value (" + this.memberId) + ") on element memberId.")));
  };
  output.writeVarInt(this.memberId);
  output.writeBoolean(this.online);
};

GuildMemberOnlineStatusMessage.prototype.deserializeAs_GuildMemberOnlineStatusMessage = function(input) {
  this.memberId = input.readVarUhInt();
  if (this.memberId < 0) {
    throw (new Error((("Forbidden value (" + this.memberId) + ") on element of GuildMemberOnlineStatusMessage.memberId.")));
  };
  this.online = input.readBoolean();
};

GuildMemberOnlineStatusMessage.prototype.getMessageId = function() {
  return 6061;
};

GuildMemberOnlineStatusMessage.prototype.getClassName = function() {
  return 'GuildMemberOnlineStatusMessage';
};

module.exports.id = 6061;
module.exports.class = GuildMemberOnlineStatusMessage;